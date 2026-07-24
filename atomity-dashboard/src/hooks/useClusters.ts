import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";
import type { Cluster } from "../types/cluster";

const fetchClusters = async (): Promise<Cluster[]> => {
  const { data } = await api.get("/users");

  return data.users.map(
    (
      user: { id: number; firstName: string },
      index: number
    ): Cluster => ({
      id: user.id,

      name: `Cluster ${index + 1}`,

      owner: user.firstName,

      // Stable values (don't use Math.random)
      cpu: (user.id * 17) % 100 || 35,
      ram: (user.id * 23) % 100 || 42,
      storage: (user.id * 31) % 100 || 55,
      cost: 400 + user.id * 55,
    })
  );
};

export function useClusters() {
  return useQuery<Cluster[]>({
    queryKey: ["clusters"],
    queryFn: fetchClusters,
  });
}