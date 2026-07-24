import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "default" | "interactive";
};

export default function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border-primary bg-surface/30 backdrop-blur-md p-6 shadow-sm transition-all duration-200",
        variant === "interactive" &&
          "hover:bg-surface-hover/50 hover:border-border-hover hover:shadow-md cursor-pointer active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}