import Card from "../../ui/Card/Card";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import type { Cluster } from "../../../types/cluster";

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
  return (
    <Card
  className={`space-y-5 cursor-pointer transition-all duration-300 ${
    selected
      ? "ring-2 ring-blue-500 scale-[1.02]"
      : "hover:scale-[1.02]"
  }`}
  onClick={onClick}
>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{cluster.name}</h3>

        <span className="text-sm text-gray-400">{cluster.owner}</span>
      </div>

      <ProgressBar value={cluster.cpu} />

      <div className="text-3xl font-bold">
        ${cluster.cost}
      </div>
    </Card>
  );
}