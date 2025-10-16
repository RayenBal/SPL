import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "À propos | Société Le Poids Lourd",
  description: "Notre mission, valeurs et historique depuis 1995.",
};

export default function AProposPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle title="À propos" subtitle="Société Le Poids Lourd, fondée en 1995" />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Mission & valeurs</h3>
          <p className="mt-3 text-foreground/80">
            Nous accompagnons les professionnels du transport avec un savoir-faire reconnu
            dans le diagnostic électronique, la réparation et la maintenance préventive.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-foreground/80">
            <li>Techniciens certifiés et formés</li>
            <li>Équipements de diagnostic de dernière génération</li>
            <li>Service rapide et fiable</li>
            <li>Intervention multi-marques</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Historique</h3>
          <div className="mt-3 space-y-3">
            <div className="p-4 rounded-lg bg-white border border-black/5">
              <div className="font-medium">1995</div>
              <div className="text-sm text-foreground/80">Création de la société</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-black/5">
              <div className="font-medium">2005</div>
              <div className="text-sm text-foreground/80">Extension de l’atelier et nouveaux équipements</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-black/5">
              <div className="font-medium">2020</div>
              <div className="text-sm text-foreground/80">Assistance routière 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


