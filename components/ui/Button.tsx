import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-navy";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium overflow-hidden transition-colors duration-200";

  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-white before:absolute before:inset-0 before:bg-blue before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-[var(--ease-out)] hover:before:scale-x-100",
    secondary:
      "border-[1.5px] border-blue text-blue hover:bg-blue-tint",
    "ghost-navy":
      "border border-white text-white hover:bg-white hover:text-navy",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
