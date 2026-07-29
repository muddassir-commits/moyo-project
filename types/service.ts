export interface Service {
  id: number;
  name: string;
  category: string;
  pillar: number;
  keyword: string;
  intent: "HIGH" | "MED" | "LOW";
}
