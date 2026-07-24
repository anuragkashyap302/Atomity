export interface Pod {
  id: number;
  name: string;
  cpu: number;
  ram: number;
  status: "Running" | "Warning";
}