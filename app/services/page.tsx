import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import Container from "@/components/Container";
import { services } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services | Société Le Poids Lourd",
  description: "Nos prestations en diagnostic, entretien et maintenance préventive.",
};

export default function ServicesPage() {
  return (
    <main>
      <Container className="py-12">
        <SectionTitle
          title="Nos services"
          subtitle="Des solutions complètes pour vos poids lourds"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} icon={s.icon} />
          ))}
        </div>
      </Container>
    </main>
  );
}


