import { api } from "./client";
import type { Namespace } from "../types/namespace";

const namespaceNames = [
  "frontend",
  "backend",
  "payments",
  "analytics",
  "monitoring",
  "database",
  "auth",
  "gateway",
  "search",
  "notifications",
];

export const fetchNamespaces = async (
  clusterId: number
): Promise<Namespace[]> => {
  const { data } = await api.get(`/posts?userId=${clusterId}`);

const posts = data.posts.slice(0, 8);

  return posts.map((post: { id: number }, index: number) => ({
    id: post.id,

    // Realistic namespace name
    name: `${namespaceNames[index % namespaceNames.length]}-${clusterId}`,

    cpu: 20 + ((clusterId * 13 + post.id * 7) % 80),

    ram: 15 + ((clusterId * 19 + post.id * 11) % 75),
  }));
};