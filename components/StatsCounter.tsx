"use client";
import { useEffect, useState } from "react";

type Props = { value: number; label: string };

export default function StatsCounter({ value, label }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const durationMs = 1200;
    const steps = 60;
    const increment = value / steps;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount((c) => {
        const next = Math.min(value, Math.round((c + increment)));
        return next;
      });
      if (i >= steps) clearInterval(id);
    }, durationMs / steps);
    return () => clearInterval(id);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-semibold text-primary">{count.toLocaleString("fr-FR")}</div>
      <div className="mt-1 text-sm text-foreground/80">{label}</div>
    </div>
  );
}


