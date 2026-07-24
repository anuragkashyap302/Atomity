import { useState } from "react";
import { motion } from "framer-motion";
import ClusterGrid from "../ClusterGrid/ClusterGrid";
import NamespaceList from "../NamespaceList/NamespaceList";
export default function FeatureSection() {

    const [selectedCluster, setSelectedCluster] = useState<number | null>(null);
  return (
    <section className="relative overflow-hidden py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Hero */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      <span>Cloud Cost Explorer</span>

      <h1>Understand your infrastructure...</h1>

      <p>Drill down...</p>
    </motion.div>

    {/* Dashboard */}
    <ClusterGrid
      selectedCluster={selectedCluster}
      onSelectCluster={setSelectedCluster}
    />

    <p className="mt-6 text-red-500">
      Selected Cluster = {String(selectedCluster)}
    </p>

    {selectedCluster !== null && (
      <NamespaceList clusterId={selectedCluster} />
    )}

  </div>
</section>
  );
}