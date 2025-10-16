import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold">Société Le Poids Lourd</h3>
          <p className="mt-2 text-sm text-foreground/80">
            La référence en diagnostic et maintenance des poids lourds en Tunisie.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Coordonnées</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Q7WG+MXW, Radès, Tunisie</li>
            <li>+216 71 123 456</li>
            <li>contact@lepoidslourd.tn</li>
            <li>Lun-Ven 8h → 18h</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Liens</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/realisations">Réalisations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="mt-3 flex gap-3">
            <a href="#" className="text-foreground/70 hover:text-primary">Facebook</a>
            <a href="#" className="text-foreground/70 hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-sm">
        © {year} Société Le Poids Lourd. Tous droits réservés.
      </div>
    </footer>
  );
}


