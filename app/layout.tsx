import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Société Le Poids Lourd | Diagnostic et Maintenance de Poids Lourds en Tunisie",
  description: "Experts en diagnostic électronique, entretien et réparation de poids lourds depuis 1995.",
  keywords: [
    "poids lourds",
    "diagnostic camion",
    "Tunisie",
    "entretien",
    "atelier",
    "Société Le Poids Lourd",
  ],
  openGraph: {
    title: "Société Le Poids Lourd | Diagnostic et Maintenance de Poids Lourds en Tunisie",
    description: "Experts en diagnostic électronique, entretien et réparation de poids lourds depuis 1995.",
    url: "https://www.lepoidslourd.tn",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}> 
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
