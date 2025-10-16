"use client";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];
  return (
    <div className="relative rounded-xl bg-white shadow p-8 text-center">
      <p className="text-lg italic">“{t.quote}”</p>
      <div className="mt-4 text-sm text-foreground/80">{t.name} — {t.company}</div>
      <div className="absolute inset-x-0 -bottom-2 h-1 bg-secondary/60 rounded-b-xl" />
    </div>
  );
}


