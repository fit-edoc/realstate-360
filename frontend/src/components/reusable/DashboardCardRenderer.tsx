import * as React from "react";
import { cn } from "@/lib/utils";
import { DashboardCardConfig } from "@/types/dashboard";

import StatCard from "./StatCard";
import LeadSourceDonut from "./LeadSourceDonut";
import StagesBarChart from "./StagesBarChart";
import SalesAndDealsGroup from "./SalesAndDealsGroup";
import PipelineTable from "./PipelineTable";
import ActiveListingTable from "./ActiveListingTable";
import LeadsContactsList from "./LeadsContactsList";

// Component registry mapping JSON 'component' string to actual reusable component
const COMPONENT_REGISTRY: Record<string, React.ComponentType<any>> = {
  StatCard,
  LeadSourceDonut,
  StagesBarChart,
  SalesAndDealsGroup,
  PipelineTable,
  ActiveListingTable,
  LeadsContactsList,
};

export interface DashboardCardRendererProps {
  card: DashboardCardConfig;
}

export function DashboardCardRenderer({ card }: DashboardCardRendererProps) {
  const Component = COMPONENT_REGISTRY[card.component];

  if (!Component) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-xs text-red-600">
        Unknown component: {card.component}
      </div>
    );
  }

  // Responsive column span mapping based on card.colSpan:
  // - small cards (colSpan: 1) render side-by-side (2 cols on tablet, 4 on desktop)
  // - medium cards (colSpan: 2) take 2 cols
  // - wide cards (colSpan: 3) take 3 cols
  // - full cards (colSpan: 4) span full width
  const colSpanClass = {
    1: "col-span-1",
    2: "col-span-1 sm:col-span-2 lg:col-span-2",
    3: "col-span-1 sm:col-span-2 lg:col-span-3",
    4: "col-span-1 sm:col-span-2 lg:col-span-4",
  }[card.colSpan] || "col-span-1";

  return (
    <div className={cn("w-full h-full flex flex-col transition-all duration-150", colSpanClass)}>
      <Component data={card.data} title={card.title} className="h-full flex-1" />
    </div>
  );
}

export default DashboardCardRenderer;
