import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "on-light" | "on-orange" | "secondary-dark";

type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-swipe btn-swipe-primary",
  secondary: "btn-swipe btn-swipe-secondary",
  "on-light": "btn-swipe btn-swipe-on-light",
  "on-orange": "btn-swipe btn-swipe-on-orange",
  "secondary-dark": "btn-swipe btn-swipe-secondary-dark",
};

export function Btn({
  href,
  children,
  className = "",
  variant = "primary",
  external = false,
}: BtnProps) {
  return (
    <a
      href={href}
      className={`${variantClass[variant]} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      <span className="btn-swipe-fill" aria-hidden />
      <span className="btn-swipe-label">{children}</span>
    </a>
  );
}
