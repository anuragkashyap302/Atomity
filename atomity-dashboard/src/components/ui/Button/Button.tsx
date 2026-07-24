import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        className,
        "rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600 active:scale-95"
      )}
    />
  );
}