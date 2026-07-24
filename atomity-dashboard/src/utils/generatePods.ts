export function generatePods(namespaceId: string) {
  return [
    {
      id: `${namespaceId}-1`,
      name: "frontend-api",
      cpu: 35,
      ram: 52,
      status: "Running",
    },
    {
      id: `${namespaceId}-2`,
      name: "auth-service",
      cpu: 64,
      ram: 70,
      status: "Running",
    },
    {
      id: `${namespaceId}-3`,
      name: "redis-cache",
      cpu: 22,
      ram: 38,
      status: "Running",
    },
    {
      id: `${namespaceId}-4`,
      name: "worker",
      cpu: 80,
      ram: 90,
      status: "Warning",
    },
  ];
}