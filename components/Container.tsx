import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export default function Container({ children, className = "", ...rest }: Props) {
  return (
    <div className={`max-w-6xl mx-auto px-6 ${className}`} {...rest}>{children}</div>
  );
}


