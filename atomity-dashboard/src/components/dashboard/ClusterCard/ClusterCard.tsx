import Card from "../../ui/Card/Card";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import type { Cluster } from "../../../types/cluster";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { Server } from "lucide-react";

type Props = {
  cluster: Cluster;
  selected: boolean;
  onClick: () => void;
};

export default function ClusterCard({
  cluster,
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
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.98 }}
      className="outline-none focus-ring rounded-xl"
    >
      <Card
        variant="interactive"
        className={cn(
          "flex flex-col gap-5 h-full",
          selected
            ? "border-brand bg-brand/5 shadow-[0_0_15px_rgba(59,130,246,0.08)]"
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
              <Server className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary text-base select-none">
                {cluster.name}
              </h3>
              <p className="text-xs text-text-muted">Owner: {cluster.owner}</p>
            </div>
          </div>
          <span
            className={cn(
              "text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-md border",
              selected
                ? "bg-brand/10 border-brand/20 text-brand"
                : "bg-white/5 border-white/5 text-text-secondary"
            )}
          >
            {selected ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="space-y-3.5 flex-grow pt-2">
          <ProgressBar
            value={cluster.cpu}
            label="CPU Allocation"
            showValueText
          />
          <ProgressBar
            value={cluster.ram}
            label="Memory Allocation"
            showValueText
          />
          <ProgressBar
            value={cluster.storage}
            label="Disk Storage"
            showValueText
          />
        </div>

        <div className="flex justify-between items-baseline border-t border-border-primary pt-4 mt-auto">
          <span className="text-xs text-text-secondary font-medium select-none">
            Estimated Spend
          </span>
          <span className="text-2xl font-bold font-mono text-text-primary">
            ${cluster.cost.toLocaleString()}
            <span className="text-xs text-text-muted font-normal font-sans ml-1">
              / mo
            </span>
          </span>
        </div>
      </Card>
    </motion.div>
  );
}