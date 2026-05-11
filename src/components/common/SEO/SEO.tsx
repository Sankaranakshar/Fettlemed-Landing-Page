import { Helmet } from 'react-helmet-async';

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
  image = "/og-image.png" 
}: SEOProps) {
  const isHome = title === 'Home' || title === 'FettleMed';
  const fullTitle = isHome 
    ? `${name} — Your Complete Health Record`
    : `${title} | ${name}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": isHome ? "Organization" : "MedicalWebPage",
    "name": name,
    "url": "https://fettlemed.com",
    "logo": "https://fettlemed.com/logo.png",
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
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@fettlemed" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
