import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        className,
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all duration-300"
      )}
    >
      {children}
    </div>
  );
}