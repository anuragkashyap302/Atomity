import { useClusters } from "../../../hooks/useClusters";
import ClusterCard from "../ClusterCard/ClusterCard";

type Props = {
  selectedCluster: number | null;
  onSelectCluster: (id: number) => void;
};

export default function ClusterGrid({
  selectedCluster,
  onSelectCluster,
}: Props) {
  const { data, isLoading, error } = useClusters();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((cluster) => (
        <ClusterCard
          key={cluster.id}
          cluster={cluster}
          selected={selectedCluster === cluster.id}
          onClick={() => onSelectCluster(cluster.id)}
        />
      ))}
    </div>
  );
}