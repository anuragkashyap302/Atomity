import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <span className="inline-flex rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
      {children}
    </span>
  );
}