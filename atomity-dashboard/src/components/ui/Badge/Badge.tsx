import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";

type Props = {
  children: ReactNode;
  variant?: "success" | "warning" | "danger" | "info";
  className?: string;
  showDot?: boolean;
};

export default function Badge({
  children,
  variant = "success",
  className,
  showDot = true,
}: Props) {
  const styles = {
    success: "border-success/20 bg-success-bg text-success",
    warning: "border-warning/20 bg-warning-bg text-warning",
    danger: "border-danger/20 bg-danger-bg text-danger",
    info: "border-info/20 bg-info-bg text-info",
  };

  const dotColors = {
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-info",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium select-none tracking-wide",
        styles[variant],
        className
      )}
    >
      {showDot && (
        <span className="relative flex h-1.5 w-1.5">
          {variant === "warning" || variant === "danger" ? (
            <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", dotColors[variant])} />
          ) : null}
          <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotColors[variant])} />
        </span>
      )}
      {children}
    </span>
  );
}