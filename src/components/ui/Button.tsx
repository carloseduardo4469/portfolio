import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5";

  const styles =
    variant === "primary"
      ? "bg-amber text-ink hover:bg-amber/90"
      : "border border-paper/20 text-paper hover:border-paper/50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
