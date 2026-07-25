import { motion } from "framer-motion";
import Card from "../../ui/Card/Card";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import Badge from "../../ui/Badge/Badge";
import { usePods } from "../../../hooks/usePods";
import { PodCardSkeleton } from "../../ui";
import { Boxes } from "lucide-react";

type Props = {
  namespaceId: number;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 350, damping: 25 },
  },
};

export default function PodList({ namespaceId }: Props) {
  const { data: pods, isLoading, error } = usePods(namespaceId);

  if (isLoading) {
    return (
      <div className="mt-12">
        <div className="h-7 w-32 rounded bg-white/5 mb-6 animate-pulse" />
        <div className="grid gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <PodCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 rounded-xl border border-danger/25 bg-danger-bg p-6 text-center">
        <h3 className="font-semibold text-lg text-danger">Failed to Load Pods</h3>
        <p className="text-sm mt-1 text-text-secondary">
          An error occurred while loading pods for this namespace. Please reload.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-text-primary select-none">
        Pods
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4"
      >
        {pods?.map((pod) => (
          <motion.div key={pod.id} variants={itemVariants} layout>
            <Card className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border-primary hover:border-border-hover bg-surface/30 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-text-secondary">
                  <Boxes className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm sm:text-base font-mono">
                    {pod.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    ID: pod-{pod.id}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8 flex-grow max-w-md md:ml-auto">
                <ProgressBar
                  value={pod.cpu}
                  label="CPU"
                  showValueText
                  className="flex-grow md:w-36"
                />
                <ProgressBar
                  value={pod.ram}
                  label="Memory"
                  showValueText
                  className="flex-grow md:w-36"
                />
              </div>

              <div className="flex items-center justify-between sm:justify-end min-w-[100px] md:pl-4">
                <Badge
                  variant={pod.status === "Running" ? "success" : "warning"}
                >
                  {pod.status}
                </Badge>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
