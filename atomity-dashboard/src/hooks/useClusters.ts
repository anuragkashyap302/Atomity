import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

const fetchClusters = async () => {
  const { data } = await api.get("/users");

  return data.users;
};

export function useClusters() {
  return useQuery({
    queryKey: ["clusters"],
    queryFn: fetchClusters,
  });
}