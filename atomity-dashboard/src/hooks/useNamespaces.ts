import { useQuery } from "@tanstack/react-query";
import { fetchNamespaces } from "../api/namespaces";
import type { Namespace } from "../types/namespace";

export function useNamespaces(clusterId: number) {
  return useQuery<Namespace[]>({
    queryKey: ["namespaces", clusterId],
    queryFn: () => fetchNamespaces(clusterId),
    enabled: clusterId > 0,
  });
}