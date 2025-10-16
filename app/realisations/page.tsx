import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Réalisations | Société Le Poids Lourd",
  description: "Galerie de nos interventions récentes.",
};

const items = Array.from({ length: 9 }).map((_, i) => ({
  src: `/gallery/${i + 1}.jpg`,
  alt: `Réalisation ${i + 1}`,
}));

export default function RealisationsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle title="Réalisations" subtitle="Quelques interventions récentes" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.src} className="group relative overflow-hidden rounded-xl bg-white border border-black/5">
            <Image src={it.src} alt={it.alt} width={400} height={300} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform" />
          </div>
        ))}
      </div>
    </main>
  );
}


