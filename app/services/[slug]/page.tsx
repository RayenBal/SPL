import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/data/servicesData";
import Button from "@/components/Button";

// use inferred props to avoid Next PageProps constraint issues

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateMetadata({ params }: any): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  const siteUrl = "https://www.lepoidslourd.tn";
  const ogImagePath = service.image || "/og-default.jpg";
  return {
    title: `${service.title} | Société Le Poids Lourd`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Société Le Poids Lourd`,
      description: service.description,
      url: `${siteUrl}/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: ogImagePath.startsWith("http") ? ogImagePath : `${siteUrl}${ogImagePath}`,
        },
      ],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServiceDetail({ params }: any) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();
  return (
    <main>
      <section className="relative h-[40vh]">
        <Image src={service.image} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-8 text-white">
          <h1 className="text-4xl font-semibold">{service.title}</h1>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg text-foreground/90">{service.description}</p>
          <h2 className="mt-8 text-xl font-semibold">Opérations possibles</h2>
          <ul className="mt-3 grid gap-2 list-disc pl-5">
            {service.operations.map((op) => (
              <li key={op}>{op}</li>
            ))}
          </ul>
        </div>
        <aside className="bg-white border border-black/5 rounded-xl p-6 h-fit">
          <h3 className="font-semibold">Marques prises en charge</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.brands.map((b) => (
              <span key={b} className="text-sm px-2 py-1 rounded bg-secondary/40">{b}</span>
            ))}
          </div>
          <Button href="/contact" className="mt-6 w-full">Demander un devis</Button>
        </aside>
      </section>
    </main>
  );
}


