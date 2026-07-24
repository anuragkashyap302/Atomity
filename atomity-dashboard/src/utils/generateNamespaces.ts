export function generateNamespaces(clusterId: number) {
  return [
    {
      id: `${clusterId}-1`,
      name: "Frontend",
      cpu: 35,
    },
    {
      id: `${clusterId}-2`,
      name: "Backend",
      cpu: 62,
    },
    {
      id: `${clusterId}-3`,
      name: "Database",
      cpu: 80,
    },
    {
      id: `${clusterId}-4`,
      name: "Monitoring",
      cpu: 28,
    },
  ];
}