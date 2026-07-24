import Card from "../../ui/Card/Card";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import type { Namespace } from "../../../types/namespace";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { Folder } from "lucide-react";

type Props = {
  namespace: Namespace;
  selected: boolean;
  onClick: () => void;
};

export default function NamespaceCard({
  namespace,
  selected,
  onClick,
}: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.98 }}
      className="outline-none focus-ring rounded-xl"
    >
      <Card
        variant="interactive"
        className={cn(
          "flex flex-col gap-5",
          selected
            ? "border-brand/60 bg-brand/5 shadow-[0_0_15px_rgba(59,130,246,0.08)]"
            : "hover:border-border-hover"
        )}
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-selected={selected}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className={cn(
                "p-2 rounded-lg border transition-colors",
                selected
                  ? "bg-brand/10 border-brand/20 text-brand"
                  : "bg-white/5 border-white/5 text-text-secondary"
              )}
            >
              <Folder className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary text-base select-none">
                {namespace.name}
              </h3>
              <p className="text-xs text-text-muted font-mono">
                ID: ns-{namespace.id}
              </p>
            </div>
          </div>
          <span
            className={cn(
              "text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md border",
              selected
                ? "bg-brand/10 border-brand/20 text-brand"
                : "bg-white/5 border-white/5 text-text-secondary"
            )}
          >
            Active
          </span>
        </div>

        <div className="grid gap-5 pt-3">
          <ProgressBar
            value={namespace.cpu}
            label="CPU Allocation"
            showValueText
          />
          <ProgressBar
            value={namespace.ram}
            label="Memory Allocation"
            showValueText
          />
        </div>
      </Card>
    </motion.div>
  );
}
