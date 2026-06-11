/**
 * Prerender script — runs after `vite build` and the SSR build step.
 *
 * React 19 renders <title>, <meta>, <link> and <script type="application/ld+json">
 * tags inline as part of the component tree (rather than writing to helmetContext).
 * This script extracts those tags from the rendered HTML and moves them into <head>,
 * so Googlebot gets fully-populated <head> metadata without executing JavaScript.
 *
 * For each route:
 *   1. Calls render(url) from the SSR build
 *   2. Extracts head-appropriate tags from the rendered HTML
 *   3. Injects them at <!--app-head--> in the template <head>
 *   4. Writes dist/<route>/index.html
 *
 * Deploy: serve the `dist/` folder as a static site (Vercel / Netlify).
 * The host serves index.html for each directory automatically.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

const ROUTES = [
  '/',
  '/patient-app',
  '/doctor-portal',
  '/clinic-management',
  '/about',
  '/security',
  '/waitlist',
  '/terms-of-service',
  '/privacy-policy',
];

/**
 * Extract SEO-relevant tags from inline HTML and return them separately.
 * React 19 renders <title>, <meta>, <link rel="canonical">, and
 * <script type="application/ld+json"> into the component tree.
 * We lift them into <head> so they appear without JS execution.
 */
function extractHeadTags(html) {
  const extracted = [];

  // Match and remove: <title>...</title>
  html = html.replace(/<title(?:[^>]*)>[\s\S]*?<\/title>/gi, (m) => {
    extracted.push(m);
    return '';
  });

  // Match and remove: <meta ... /> or <meta ...>
  html = html.replace(/<meta(?:\s[^>]*)?\/?>/gi, (m) => {
    extracted.push(m);
    return '';
  });

  // Match and remove: <link rel="canonical" ...> and <link rel="alternate" ...>
  html = html.replace(/<link(?=[^>]*\brel=["'](?:canonical|alternate)["'])[^>]*\/?>/gi, (m) => {
    extracted.push(m);
    return '';
  });

  // Match and remove: <script type="application/ld+json">...</script>
  html = html.replace(/<script(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, (m) => {
    extracted.push(m);
    return '';
  });

  return { headTags: extracted.join('\n    '), cleanHtml: html };
}

async function prerender() {
  console.log('\n🔄  Prerendering routes...\n');

  const ssrEntry = resolve(rootDir, 'dist-ssr/entry-server.js');
  if (!existsSync(ssrEntry)) {
    throw new Error(`SSR build missing at ${ssrEntry} — run the SSR build step first.`);
  }

  const { render } = await import(ssrEntry);
  const template = readFileSync(resolve(rootDir, 'dist/index.html'), 'utf-8');

  for (const route of ROUTES) {
    try {
      const { html: rawHtml } = render(route);

      // Lift head tags out of the rendered body HTML
      const { headTags, cleanHtml } = extractHeadTags(rawHtml);

      let page = template;

      // Inject head tags at the placeholder
      page = page.replace('<!--app-head-->', headTags || '');

      // Inject the cleaned HTML into root div
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${cleanHtml}</div>`
      );

      // Write output
      const outDir =
        route === '/'
          ? resolve(rootDir, 'dist')
          : resolve(rootDir, `dist${route}`);

      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, 'index.html'), page);

      console.log(`  ✓  ${route}`);
    } catch (err) {
      console.error(`  ✗  ${route}: ${err.message}`);
    }
  }

  // Generate sitemap.xml from the same route list, dated to this build.
  // (Replaces the hand-maintained file that always went stale.)
  const today = new Date().toISOString().slice(0, 10);
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    ROUTES.map((route) => {
      const priority = route === '/' ? '1.0' : route.includes('terms') || route.includes('privacy') ? '0.3' : '0.8';
      return (
        `  <url>\n` +
        `    <loc>https://fettlemed.com${route === '/' ? '/' : route}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>weekly</changefreq>\n` +
        `    <priority>${priority}</priority>\n` +
        `  </url>`
      );
    }).join('\n') +
    `\n</urlset>\n`;
  writeFileSync(resolve(rootDir, 'dist/sitemap.xml'), sitemap);
  console.log('  ✓  sitemap.xml');

  console.log('\n✅  Prerender complete.\n');
}

prerender().catch((err) => {
  console.error('\n❌  Prerender failed:\n', err);
  process.exit(1);
});
