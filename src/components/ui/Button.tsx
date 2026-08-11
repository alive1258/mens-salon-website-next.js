import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-dark shadow-[0_0_0_1px_rgba(215,251,63,0.3)]",
  outline:
    "bg-transparent text-foreground border border-border-strong hover:border-accent hover:text-accent",
  ghost: "bg-white/5 text-foreground hover:bg-white/10",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  icon = true,
}: ButtonProps) {
  const classes = `group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out active:scale-[0.97] ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

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
