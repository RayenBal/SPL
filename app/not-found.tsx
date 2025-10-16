import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold">Page introuvable</h1>
      <p className="mt-2 text-foreground/80">La page demandée n’existe pas.</p>
      <Link href="/" className="mt-6 inline-flex h-11 px-5 rounded-md bg-primary text-white font-medium">Retour à l’accueil</Link>
    </main>
  );
}


