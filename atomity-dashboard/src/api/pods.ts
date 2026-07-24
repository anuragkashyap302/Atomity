import { api } from "./client";
import type { Pod } from "../types/pod";

const podNames = [
  "api",
  "worker",
  "scheduler",
  "redis",
  "nginx",
  "postgres",
  "queue",
  "cache",
  "metrics",
  "proxy",
];

export const fetchPods = async (
  namespaceId: number
): Promise<Pod[]> => {
  const { data } = await api.get(`/comments?postId=${namespaceId}`);

  return data.comments.map((comment: { id: number }, index: number) => ({
    id: comment.id,

    name: `${podNames[index % podNames.length]}-${comment.id}`,

    cpu: 15 + ((namespaceId * 11 + comment.id * 5) % 80),

    ram: 20 + ((namespaceId * 17 + comment.id * 9) % 70),

    status:
      (namespaceId + comment.id) % 5 === 0
        ? "Warning"
        : "Running",
  }));
};