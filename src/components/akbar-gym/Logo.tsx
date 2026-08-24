import Image from "next/image";
import { SITE } from "@/lib/site";

type LogoProps = {
  href?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
};

export function Logo({ href = "#top", onClick, variant = "light" }: LogoProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`brand-logo ${variant === "dark" ? "is-footer" : ""}`}
      aria-label={SITE.name}
    >
      <Image
        src="/images/akbar-gym/branding/akbar-gym-wordmark.png"
        alt={SITE.name}
        width={220}
        height={119}
        unoptimized
        priority={variant === "light"}
        className="brand-logo-img"
      />
    </a>
  );
}
