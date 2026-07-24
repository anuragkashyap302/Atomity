import Card from "../../ui/Card/Card";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import { generatePods } from "../../../utils/generatePods";

type Props = {
  namespaceId: string;
};

export default function PodList({ namespaceId }: Props) {
  const pods = generatePods(namespaceId);

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-semibold">
        Pods
      </h2>

      <div className="grid gap-4">
        {pods.map((pod) => (
          <Card key={pod.id}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {pod.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {pod.status}
                </p>
              </div>

              <div className="w-48">
                <ProgressBar value={pod.cpu} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}