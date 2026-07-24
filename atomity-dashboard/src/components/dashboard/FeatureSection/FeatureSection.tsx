import { useState } from "react";
import { motion } from "framer-motion";
import ClusterGrid from "../ClusterGrid/ClusterGrid";
export default function FeatureSection() {

    const [selectedCluster, setSelectedCluster] = useState<number | null>(null);
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Cloud Cost Explorer
          </span>

          <h1 className="text-5xl font-bold tracking-tight">
            Understand your infrastructure
            <br />
            one layer at a time.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Drill down from clusters to namespaces and pods with smooth,
            interactive transitions inspired by modern cloud platforms.
          </p>
          <ClusterGrid selectedCluster={selectedCluster} onSelectCluster={setSelectedCluster} />
        </motion.div>

      </div>
    </section>
  );
}