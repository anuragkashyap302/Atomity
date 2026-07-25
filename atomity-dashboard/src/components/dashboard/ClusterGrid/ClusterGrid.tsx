import { useClusters } from "../../../hooks/useClusters";
import ClusterCard from "../ClusterCard/ClusterCard";
import { ClusterCardSkeleton } from "../../ui";
import { motion } from "framer-motion";

type Props = {
  selectedCluster: number | null;
  onSelectCluster: (id: number) => void;
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 },
  },
};

export default function ClusterGrid({
  selectedCluster,
  onSelectCluster,
}: Props) {
  const { data, isLoading, error } = useClusters();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <ClusterCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-danger/25 bg-danger-bg p-8 text-center">
        <h3 className="font-semibold text-lg text-danger">Failed to Load Clusters</h3>
        <p className="text-sm mt-1 text-text-secondary">
          Could not retrieve infrastructure cluster lists. Please try refreshing.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
2xl:grid-cols-3
gap-8
mt-8
"
    >
      {data?.map((cluster) => (
        <motion.div key={cluster.id} variants={itemVariants} layout>
          <ClusterCard
            cluster={cluster}
            selected={selectedCluster === cluster.id}
            onClick={() => onSelectCluster(cluster.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
