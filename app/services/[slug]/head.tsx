import { services } from "@/data/servicesData";

export default function Head({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Société Le Poids Lourd",
      url: "https://www.lepoidslourd.tn",
      logo: "/favicon.ico",
    },
    areaServed: "Tunisie",
    serviceType: service.title,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Services",
        item: "https://www.lepoidslourd.tn/services",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: `https://www.lepoidslourd.tn/services/${service.slug}`,
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}


