import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contact | Société Le Poids Lourd",
  description: "Demandez un devis ou contactez un technicien.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle title="Contactez-nous" subtitle="Nous répondons rapidement" />
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="bg-white border border-black/5 rounded-xl p-6">
          <ContactForm />
          <div className="mt-4 text-sm text-foreground/80">
            Adresse : Zone Industrielle Charguia II, Tunis, Tunisie
            <br />Téléphone : +216 71 123 456 — Email : contact@lepoidslourd.tn
            <br />Horaires : Lun-Ven 8h → 18h
          </div>
          <a
            href="https://wa.me/21671123456"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center h-11 px-4 rounded-md bg-[#25D366] text-white font-medium"
          >
            Contacter un technicien sur WhatsApp
          </a>
        </div>
        <div className="rounded-xl overflow-hidden">
          <iframe
            title="Google Maps"
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Charguia%20II%2C%20Tunis&output=embed"
          />
        </div>
      </div>
    </main>
  );
}


