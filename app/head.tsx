export default function Head() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Société Le Poids Lourd",
    url: "https://www.lepoidslourd.tn",
    logo: "/favicon.ico",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zone Industrielle Charguia II",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+216 71 123 456",
      contactType: "customer service",
      availableLanguage: ["fr"],
    },
    sameAs: [],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Société Le Poids Lourd",
    url: "https://www.lepoidslourd.tn",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.lepoidslourd.tn/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}


