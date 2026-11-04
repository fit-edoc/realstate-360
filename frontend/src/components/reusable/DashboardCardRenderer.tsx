"use client";

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
  className?: string;
}

export function DashboardCardRenderer({ card, className }: DashboardCardRendererProps) {
  const Component = COMPONENT_REGISTRY[card.component];

  if (!Component) {
    return (
      <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-xs font-normal text-red-600">
        Unknown component: {card.component}
      </div>
    );
  }

  // Responsive 12-column bento grid mapping based on card.colSpan:
  // - colSpan 1: 3 columns (e.g. 4 stat cards fill 12 columns)
  // - colSpan 2: 6 columns
  // - colSpan 3: 8 or 9 columns
  // - colSpan 4: full 12 columns
  const colSpanClass = {
    1: "col-span-12 sm:col-span-6 lg:col-span-3",
    2: "col-span-12 lg:col-span-6",
    3: "col-span-12 lg:col-span-8 xl:col-span-9",
    4: "col-span-12",
  }[card.colSpan] || "col-span-12";

  return (
    <div className={cn("w-full h-full flex flex-col", colSpanClass, className)}>
      <Component data={card.data} title={card.title} className="h-full flex-1" />
    </div>
  );
}

export default DashboardCardRenderer;
