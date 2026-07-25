import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNamespaces } from "../../../hooks/useNamespaces";
import NamespaceCard from "../NamespaceCard/NamespaceCard";
import PodList from "../PodList/PodList";
import { NamespaceCardSkeleton } from "../../ui";

type Props = {
  clusterId: number;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function NamespaceList({ clusterId }: Props) {
  const [prevClusterId, setPrevClusterId] = useState(clusterId);
  const [selectedNamespace, setSelectedNamespace] = useState<number | null>(null);

  // Sync state if cluster changes (inline update avoids cascading effects)
  if (clusterId !== prevClusterId) {
    setPrevClusterId(clusterId);
    setSelectedNamespace(null);
  }

  const {
    data: namespaces,
    isLoading,
    error,
  } = useNamespaces(clusterId);

  if (isLoading) {
    return (
      <div className="mt-12">
        <div className="h-7 w-48 rounded bg-white/5 mb-6 animate-pulse" />
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <NamespaceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 rounded-xl border border-danger/25 bg-danger-bg p-6 text-center">
        <h3 className="font-semibold text-lg text-danger">Failed to Load Namespaces</h3>
        <p className="text-sm mt-1 text-text-secondary">
          An error occurred while fetching namespaces. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-text-primary select-none">
        Namespaces
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2"
      >
        {namespaces?.map((namespace) => (
          <motion.div key={namespace.id} variants={itemVariants} layout>
            <NamespaceCard
              namespace={namespace}
              selected={selectedNamespace === namespace.id}
              onClick={() => setSelectedNamespace(namespace.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedNamespace && (
          <motion.div
            key={selectedNamespace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PodList namespaceId={selectedNamespace} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
