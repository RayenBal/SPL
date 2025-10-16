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
            Adresse : Q7WG+MXW, Radès, Tunisie
            <br />Téléphones : <a href="tel:+21627718815">+216 27 718 815</a> — <a href="tel:+21625313639">+216 25 313 639</a>
            <br />Email : <a href="mailto:contact@lepoidslourd.tn">contact@lepoidslourd.tn</a>
            <br />Horaires : Lun–Sam : 8h00–18h00
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
            src="https://www.google.com/maps?q=Q7WG%2BMXW%2C%20Rad%C3%A8s%2C%20Tunisie&output=embed"
          />
        </div>
      </div>
    </main>
  );
}


