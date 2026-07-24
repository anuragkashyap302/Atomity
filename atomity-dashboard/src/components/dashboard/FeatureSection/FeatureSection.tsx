import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClusterGrid from "../ClusterGrid/ClusterGrid";
import NamespaceList from "../NamespaceList/NamespaceList";
import { useClusters } from "../../../hooks/useClusters";
import { Server, Activity, DollarSign, Cpu, ArrowLeft } from "lucide-react";
import Badge from "../../ui/Badge/Badge";
import type { Cluster } from "../../../types/cluster";

export default function FeatureSection() {
  const [selectedCluster, setSelectedCluster] = useState<number | null>(null);
  const { data: clusters } = useClusters();

  // Compute live aggregates from cached react-query data
  const totalCost = clusters?.reduce((acc: number, c: Cluster) => acc + c.cost, 0) || 0;
  const avgCpu = clusters?.length
    ? Math.round(clusters.reduce((acc: number, c: Cluster) => acc + c.cpu, 0) / clusters.length)
    : 0;
  const avgRam = clusters?.length
    ? Math.round(clusters.reduce((acc: number, c: Cluster) => acc + c.ram, 0) / clusters.length)
    : 0;
  const activeClusters = clusters?.length || 0;

  const selectedClusterObj = clusters?.find((c: Cluster) => c.id === selectedCluster);

  return (
    <section className="relative overflow-hidden min-h-screen pb-24 bg-bg-secondary select-none">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-glow blur-[120px] pointer-events-none opacity-40" />

      {/* Main SaaS Global Header */}
      <header className="border-b border-border-primary bg-bg-primary/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center font-bold text-white shadow-md shadow-brand/20 select-none">
              A
            </div>
            <div>
              <span className="font-semibold text-text-primary text-sm tracking-tight">Atomity</span>
              <span className="text-text-muted text-xs block -mt-1 font-mono">v1.2.0</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="success">All Systems Operational</Badge>
            <div className="h-4 w-[1px] bg-border-primary" />
            <span className="text-xs text-text-muted select-none font-mono">Workspace: Main-Prod</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-10">
        {/* Hero Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Cost Management</span>
            <span className="text-text-muted">•</span>
            <span className="text-xs text-text-muted font-mono">Updated real-time</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Cloud Cost Explorer
          </h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-text-secondary leading-relaxed">
            Understand your cloud spending patterns. Select a cluster below to drill down into 
            individual namespaces, isolate resource allocations, and view pod details.
          </p>
        </motion.div>

        {/* Global Performance & Spend Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10"
        >
          <div className="rounded-xl border border-border-primary bg-surface/30 p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase select-none">Projected Cost</p>
              <h3 className="text-2xl font-bold font-mono mt-0.5 text-text-primary">${totalCost.toLocaleString()}</h3>
            </div>
          </div>

          <div className="rounded-xl border border-border-primary bg-surface/30 p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-brand/10 text-brand border border-brand/20">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase select-none">Active Clusters</p>
              <h3 className="text-2xl font-bold font-mono mt-0.5 text-text-primary">{activeClusters}</h3>
            </div>
          </div>

          <div className="rounded-xl border border-border-primary bg-surface/30 p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase select-none">CPU Average</p>
              <h3 className="text-2xl font-bold font-mono mt-0.5 text-text-primary">{avgCpu}%</h3>
            </div>
          </div>

          <div className="rounded-xl border border-border-primary bg-surface/30 p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase select-none">RAM Average</p>
              <h3 className="text-2xl font-bold font-mono mt-0.5 text-text-primary">{avgRam}%</h3>
            </div>
          </div>
        </motion.div>

        {/* Drill-down Breadcrumb & Back Action */}
        <div className="flex items-center justify-between border-b border-border-primary pb-4 mb-6">
          <div className="flex items-center gap-2 text-sm select-none">
            <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer" onClick={() => setSelectedCluster(null)}>
              Clusters
            </span>
            {selectedCluster !== null && (
              <>
                <span className="text-text-muted">/</span>
                <span className="text-brand font-medium">
                  {selectedClusterObj?.name || `Cluster ${selectedCluster}`}
                </span>
              </>
            )}
          </div>

          {selectedCluster !== null && (
            <button
              onClick={() => setSelectedCluster(null)}
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary bg-surface/40 hover:bg-surface-hover border border-border-primary hover:border-border-hover px-3 py-1.5 rounded-lg transition-all active:scale-95 focus-ring"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Reset Selection
            </button>
          )}
        </div>

        {/* Cluster Selection & Navigation */}
        <div className="space-y-6">
          <ClusterGrid
            selectedCluster={selectedCluster}
            onSelectCluster={setSelectedCluster}
          />

          <AnimatePresence mode="wait">
            {selectedCluster !== null && (
              <motion.div
                key={selectedCluster}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
              >
                <NamespaceList clusterId={selectedCluster} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}