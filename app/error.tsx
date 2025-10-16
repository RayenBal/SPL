"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    // Optionally log to monitoring service
    // console.error(error);
  }, [error]);
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold">Une erreur est survenue</h1>
      <p className="mt-2 text-foreground/80">Veuillez réessayer ou revenir à l’accueil.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={reset} className="h-11 px-5 rounded-md bg-primary text-white font-medium">Réessayer</button>
        <Link href="/" className="h-11 px-5 rounded-md border border-black/10">Accueil</Link>
      </div>
    </main>
  );
}


