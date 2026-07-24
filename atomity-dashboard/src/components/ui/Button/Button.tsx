import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

type Props = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  variant = "primary",
  ...props
}: Props) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-hover shadow-sm shadow-brand/10 hover:shadow-brand/20 active:scale-[0.98]",
    secondary:
      "bg-surface text-text-primary border border-border-primary hover:bg-surface-hover hover:border-border-hover active:scale-[0.98]",
    outline:
      "bg-transparent text-text-primary border border-border-primary hover:bg-surface/30 hover:border-border-hover active:scale-[0.98]",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface/30 active:scale-[0.98]",
  };

  return (
    <button
      {...props}
      className={cn(baseStyles, variants[variant], className)}
    />
  );
}