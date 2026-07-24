import { useState } from "react";
import Card from "../../ui/Card/Card";
import { useNamespaces } from "../../../hooks/useNamespaces";
import PodList from "../PodList/PodList";

type Props = {
  clusterId: number;
};

export default function NamespaceList({ clusterId }: Props) {
   const [selectedNamespace, setSelectedNamespace] = useState<number | null>(null);
  const {
  data: namespaces,
  isLoading,
  error,
} = useNamespaces(clusterId);

if (isLoading) return <p>Loading namespaces...</p>;

if (error) return <p>Failed to load namespaces.</p>;

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-semibold">
        Namespaces
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {namespaces?.map((namespace) => (
         <Card
    key={namespace.id}
    onClick={() => setSelectedNamespace(namespace.id)}
    className="cursor-pointer hover:scale-[1.02]"
>
            <div className="flex justify-between">
              <span>{namespace.name}</span>

              <span>{namespace.cpu}% CPU</span>
            </div>
          </Card>
        ))}
      
      </div>
        {selectedNamespace && <PodList namespaceId={selectedNamespace} />}
    </div>
  );
}