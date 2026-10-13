export type ColSpan = 1 | 2 | 3 | 4;

export interface DashboardCardConfig {
  id: string;
  component: string;
  title?: string;
  colSpan: ColSpan;
  data: any;
}

export interface StatCardData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  iconType: "listing" | "leads" | "closed" | "revenue";
}

export interface DonutSourceData {
  name: string;
  count: number;
  percentage: string;
  color: string;
}

export interface StageData {
  stage: string;
  angelPlaza: number;
  angelGarden: number;
  none: number;
}

export interface PipelineItem {
  name: string;
  count: number;
}

export interface ActiveListingItem {
  id: string;
  name: string;
  type: string;
  units: number | string;
  price: string;
  activeLeadsCount: number;
  leadAvatars?: string[];
  views: number;
  status: "Occupied" | "Available" | "Sold Out";
  statusText?: string;
  image?: string;
}

export interface LeadContactItem {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  phone?: string;
}

export interface ReminderItem {
  id: string;
  title: string;
  description: string;
  hasAvatars?: boolean;
  avatars?: string[];
  highlight?: boolean;
}

export interface ScheduleItem {
  id: string;
  title: string;
  subtitle: string;
  colorVariant: "green" | "teal" | "purple" | "gold";
}
