import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";
import { services } from "@/data/servicesData";
import { stats } from "@/data/statsData";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[72vh] flex items-center overflow-hidden">
        <Image src="/hero-truck.jpg" alt="Camion en atelier" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
              La référence en diagnostic et maintenance des poids lourds en Tunisie
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Depuis 1995, Société Le Poids Lourd accompagne les professionnels du transport.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex gap-4">
              <Link href="#services" className="px-5 py-3 rounded-md bg-primary text-white font-medium">Nos services</Link>
              <Link href="/contact" className="px-5 py-3 rounded-md border border-white/80 text-white font-medium">Demander un devis</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="presentation">
        <Reveal>
          <SectionTitle title="Présentation" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-foreground/80 max-w-3xl">
            Depuis 1995, Société Le Poids Lourd accompagne les professionnels du transport avec un savoir-faire reconnu
            dans le diagnostic électronique, la réparation et la maintenance préventive.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}><StatsCounter value={s.value} label={s.label} /></Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="services">
        <Reveal>
          <SectionTitle title="Nos services" subtitle="Diagnostic, entretien, maintenance, assistance, pièces" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0.05 * i}>
              <ServiceCard slug={s.slug} title={s.title} description={s.description} icon={s.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="pourquoi">
        <Reveal>
          <SectionTitle title="Pourquoi nous choisir ?" />
        </Reveal>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Techniciens certifiés et formés",
            "Équipements de diagnostic de dernière génération",
            "Service rapide et fiable",
            "Intervention sur toutes marques: Volvo, MAN, Scania, Renault Trucks...",
          ].map((v, i) => (
            <Reveal key={v} delay={0.05 * i}><li className="rounded-xl border border-black/5 bg-white p-4">{v}</li></Reveal>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12" id="temoignages">
        <Reveal>
          <SectionTitle title="Témoignages" />
        </Reveal>
        <div className="mt-8">
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <section className="relative py-16">
        <Image src="/cta.jpg" alt="Contact" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h3 className="text-2xl font-semibold">Besoin d’un diagnostic ou d’un devis ?</h3>
          <Link href="/contact" className="mt-6 inline-flex h-11 px-6 rounded-md bg-primary text-white font-medium">Contactez-nous</Link>
        </div>
      </section>
    </>
  );
}


