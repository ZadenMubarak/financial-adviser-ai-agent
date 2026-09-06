export type KPI = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  detail: string;
};

export const kpis: KPI[] = [
  { label: "Revenue", value: "$2.84M", change: "+12.8%", positive: true, detail: "vs. previous period" },
  { label: "Cash position", value: "$684.2K", change: "+8.4%", positive: true, detail: "liquid assets" },
  { label: "Runway", value: "14.6 mo", change: "+2.1 mo", positive: true, detail: "at current burn" },
  { label: "Risk exposure", value: "$126.8K", change: "-18.2%", positive: true, detail: "identified exposure" },
];

export const cashFlow = [
  { month: "Jan", inflow: 180, outflow: 122 },
  { month: "Feb", inflow: 205, outflow: 138 },
  { month: "Mar", inflow: 222, outflow: 149 },
  { month: "Apr", inflow: 248, outflow: 155 },
  { month: "May", inflow: 266, outflow: 171 },
  { month: "Jun", inflow: 292, outflow: 178 },
];

export const insights = [
  { title: "Accounts receivable is trending 9 days slower", category: "Cash flow", time: "2h ago", tone: "amber" },
  { title: "Gross margin improved across Enterprise segment", category: "Performance", time: "5h ago", tone: "green" },
  { title: "Vendor concentration risk detected in logistics", category: "Risk monitor", time: "Yesterday", tone: "blue" },
];
