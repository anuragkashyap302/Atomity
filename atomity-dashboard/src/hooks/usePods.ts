import { useQuery } from "@tanstack/react-query";
import { fetchPods } from "../api/pods";
import type { Pod } from "../types/pod";

export function usePods(namespaceId: number) {
  return useQuery<Pod[]>({
    queryKey: ["pods", namespaceId],
    queryFn: () => fetchPods(namespaceId),
    enabled: namespaceId > 0,
  });
}