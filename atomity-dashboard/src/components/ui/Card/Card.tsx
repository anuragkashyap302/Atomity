import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}