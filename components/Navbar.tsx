"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder logo */}
          <span className="h-8 w-8 rounded bg-primary inline-block" />
          <span className="font-semibold">Société Le Poids Lourd</span>
        </Link>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={clsx("hidden md:flex items-center gap-6", open && "absolute left-0 right-0 top-16 bg-background border-b md:static md:bg-transparent md:border-0 md:flex")}> 
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="md:py-0 py-3 px-6 md:px-0">
                <Link
                  href={href}
                  className={clsx(
                    "hover:text-primary transition-colors",
                    active && "text-primary font-medium"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="md:ml-4 md:py-0 py-3 px-6 md:px-0">
            <Link href="/contact" className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-white font-medium">
              Demander un devis
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


