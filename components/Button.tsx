import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const base = clsx(
    "inline-flex items-center justify-center h-11 px-5 rounded-lg font-medium transition-all",
    variant === "primary" && "bg-primary text-white shadow-sm hover:shadow translate-y-0 hover:-translate-y-0.5",
    variant === "secondary" && "border border-foreground/30 text-foreground hover:bg-foreground/5",
    className
  );
  if (href) return <Link href={href} className={base}>{children}</Link>;
  return <button className={base}>{children}</button>;
}


