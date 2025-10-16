import type { ReactNode } from "react";

// Site layout scope; Navbar/Footer provided globally in root layout
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh bg-background text-foreground">{children}</div>;
}


