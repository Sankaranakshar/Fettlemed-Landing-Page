import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/config/constants';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  /** Describe the page as a software product (product pages only). */
  software?: { name: string; category: "HealthApplication" | "BusinessApplication" };
}

export function SEO({
  title,
  description,
  name = "FettleMed",
  type = "website",
  image = "/og.png",
  noindex = false,
  software
}: SEOProps) {
  const { pathname } = useLocation();
  // Amplify serves each page at /<route>/ and fettlemed.com redirects to www,
  // so the canonical form is www + trailing slash (the URL that returns 200).
  const canonicalUrl = `${SITE_URL}${pathname.endsWith("/") ? pathname : `${pathname}/`}`;
  // Social scrapers need an absolute URL and a raster format
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const isHome = title === 'Home';
  const fullTitle = isHome
    ? `${name}: Your Complete Health Record`
    : `${title} | ${name}`;

  const organization = {
    "@type": "Organization",
    "name": name,
    "url": `${SITE_URL}/`,
    "logo": `${SITE_URL}/brand/lockup.svg`,
  };

  // Home describes the company; product pages describe the software;
  // everything else is a plain WebPage (these pages are not medical content).
  const structuredData = isHome ? {
    "@context": "https://schema.org",
    ...organization,
    "description": description,
    "email": "hello@fettlemed.com",
    "legalName": "NamNalam Health Tech Private Limited",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "INNOV8, SKCL Tech Square, 2nd Floor, No 14 SP, SIDCO T.V.K Industrial Estate, Guindy",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600032",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@fettlemed.com",
      "contactType": "customer service"
    }
  } : software ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "applicationCategory": software.category,
    "operatingSystem": "Web",
    "url": canonicalUrl,
    "description": description,
    "publisher": organization,
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "url": canonicalUrl,
    "description": description,
    "publisher": organization,
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@FETTLEMEDHEALTH" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
