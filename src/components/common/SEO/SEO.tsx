import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/config/constants';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
}

export function SEO({
  title,
  description,
  name = "FettleMed",
  type = "website",
  image = "/og.png"
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": isHome ? "Organization" : "MedicalWebPage",
    "name": name,
    "url": `${SITE_URL}/`,
    "logo": `${SITE_URL}/brand/lockup.svg`,
    "description": description,
    ...(isHome ? {
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "partners@fettlemed.com",
        "contactType": "customer service"
      }
    } : {})
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
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
