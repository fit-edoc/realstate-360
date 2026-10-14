import { DashboardCardConfig, ReminderItem, ScheduleItem } from "@/types/dashboard";

/**
 * Left Main Section Configuration - JSON data with component identifier & colSpan
 * Ready to be replaced by dynamic API responses.
 */
export const LEFT_DASHBOARD_CARDS: DashboardCardConfig[] = [
  // Row 1: 4 KPI Cards (colSpan: 1 each)
  {
    id: "active-listing-kpi",
    component: "StatCard",
    colSpan: 1,
    data: {
      title: "Active Listing",
      value: "23",
      change: "-12%",
      isPositive: false,
      iconType: "listing",
    },
  },
  {
    id: "active-leads-kpi",
    component: "StatCard",
    colSpan: 1,
    data: {
      title: "Active Leads",
      value: "120",
      change: "+12%",
      isPositive: true,
      iconType: "leads",
    },
  },
  {
    id: "total-closed-kpi",
    component: "StatCard",
    colSpan: 1,
    data: {
      title: "Total Closed",
      value: "42",
      change: "+12%",
      isPositive: true,
      iconType: "closed",
    },
  },
  {
    id: "total-revenue-kpi",
    component: "StatCard",
    colSpan: 1,
    data: {
      title: "Total Revenue",
      value: "Rs.22Cr.",
      change: "+12%",
      isPositive: true,
      iconType: "revenue",
    },
  },

  // Row 2: 2 Medium Cards (colSpan: 2 each)
  {
    id: "deals-by-lead-source",
    component: "LeadSourceDonut",
    title: "Deals by Lead Source",
    colSpan: 2,
    data: {
      sources: [
        { name: "Website", count: 10, percentage: "24.83%", color: "#ebd287" },
        { name: "Inbound Call", count: 9, percentage: "37.87%", color: "#f7eed4" },
        { name: "Reference", count: 1, percentage: "30.6%", color: "#be9927" },
        { name: "Facebook", count: 1, percentage: "6.78%", color: "#dfc674" },
      ],
    },
  },
  {
    id: "deals-by-stages",
    component: "StagesBarChart",
    title: "Deals by Stages by Development",
    colSpan: 2,
    data: {
      stages: [
        { stage: "Interested", angelPlaza: 3, angelGarden: 2, none: 3 },
        { stage: "Site Visit Done", angelPlaza: 3.5, angelGarden: 2.5, none: 2 },
        { stage: "Unit Shortlisted", angelPlaza: 3.2, angelGarden: 2.8, none: 3 },
        { stage: "Contracts Signed", angelPlaza: 2.5, angelGarden: 3.5, none: 3.2 },
        { stage: "Offer Initiated", angelPlaza: 3.5, angelGarden: 2.5, none: 2.8 },
        { stage: "Offer Accepted", angelPlaza: 3.8, angelGarden: 2.7, none: 2.2 },
      ],
      legends: [
        { label: "Angel Plaza", color: "#be9927" },
        { label: "Angel Garden", color: "#ecdda9" },
        { label: "None", color: "#f6eed3" },
      ],
    },
  },

  // Row 3: Left (Horizontal Bar + Deals Closed) & Right (Pipeline table)
  {
    id: "deals-sales-people-group",
    component: "SalesAndDealsGroup",
    colSpan: 2,
    data: {
      salesPeople: {
        title: "Deals by Sales People by Development",
        records: [
          { owner: "Owner 1", angelPlaza: 4.5, angelGarden: 5, none: 8 },
          { owner: "Owner 2", angelPlaza: 3, angelGarden: 4.5, none: 6 },
        ],
        legends: [
          { label: "Angel Plaza", color: "#be9927" },
          { label: "Angel Garden", color: "#ecdda9" },
          { label: "None", color: "#f6eed3" },
        ],
      },
      dealsClosed: {
        title: "Total Deals Closed",
        closedCount: 42,
        progressCount: 132,
      },
    },
  },
  {
    id: "deals-pipeline",
    component: "PipelineTable",
    title: "Deals in Pipeline by Development",
    colSpan: 2,
    data: {
      rows: [
        { name: "None", count: 14 },
        { name: "Angel Plaza", count: 3 },
        { name: "Angel Garden", count: 1 },
        { name: "Skyline Edge", count: 8 },
        { name: "Maplewood House", count: 5 },
        { name: "Serenity Villa", count: 2 },
      ],
    },
  },

  // Row 4: Active Listing (colSpan: 3 or 2.7) & Leads Contacts (colSpan: 1)
  {
    id: "active-listing-table",
    component: "ActiveListingTable",
    title: "Active Listing",
    colSpan: 3,
    data: {
      properties: [
        {
          id: "p1",
          name: "Maplewood House",
          type: "House",
          units: 12,
          price: "Rs.85L",
          activeLeadsCount: 35,
          leadAvatars: ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg"],
          views: 125,
          status: "Occupied",
          statusText: "8/12 Occupied",
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&q=80&auto=format&fit=crop",
        },
        {
          id: "p2",
          name: "Serenity Villa",
          type: "Villa",
          units: 9300,
          price: "Rs.2.8Cr",
          activeLeadsCount: 40,
          leadAvatars: ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg"],
          views: 930,
          status: "Available",
          statusText: "Available",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&q=80&auto=format&fit=crop",
        },
        {
          id: "p3",
          name: "Rosehill Cottage",
          type: "House",
          units: 25,
          price: "Rs.1.1Cr",
          activeLeadsCount: 15,
          leadAvatars: ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg"],
          views: 355,
          status: "Available",
          statusText: "Available",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=80&auto=format&fit=crop",
        },
        {
          id: "p4",
          name: "Skyline Edge",
          type: "Apartment",
          units: 17,
          price: "Rs.75L",
          activeLeadsCount: 11,
          leadAvatars: ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg"],
          views: 425,
          status: "Sold Out",
          statusText: "Sold Out",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&q=80&auto=format&fit=crop",
        },
      ],
    },
  },
  {
    id: "leads-contacts",
    component: "LeadsContactsList",
    title: "Leads Contacts",
    colSpan: 1,
    data: {
      contacts: [
        { id: "c1", name: "John Doe", location: "New York", avatar: "/avatars/john-doe.jpg", phone: "+1 234 567 890" },
        { id: "c2", name: "Jessica Chen", location: "California, LA", avatar: "/avatars/jessica-chen.jpg", phone: "+1 345 678 901" },
        { id: "c3", name: "Evan Chris", location: "New York", avatar: "/avatars/evan-chris.jpg", phone: "+1 456 789 012" },
        { id: "c4", name: "Jack B.", location: "Ohio, Columbus", avatar: "/avatars/jack-b.jpg", phone: "+1 567 890 123" },
        { id: "c5", name: "Emily Paris", location: "California, LA", avatar: "/avatars/emily-paris.jpg", phone: "+1 678 901 234" },
      ],
    },
  },
];

/**
 * Right Main Section Data
 */
export const RIGHT_DASHBOARD_DATA = {
  reminders: [
    {
      id: "rem-1",
      title: "Follow-Ups",
      description: "15 leads need to be followed up.",
      hasAvatars: true,
      avatars: ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg", "/avatars/lead-3.jpg"],
      highlight: true,
    },
    {
      id: "rem-2",
      title: "Submit Final Offer- Villa Deal",
      description: "Finalize and send offer documents.",
    },
    {
      id: "rem-3",
      title: "Review Contract with Legal",
      description: "Ensure attorney reviews apartment deal contract today.",
    },
    {
      id: "rem-4",
      title: "Call Jessica Chen - Follow-up",
      description: "Discuss her feedback after site visit to Angel Plaza.",
    },
  ] as ReminderItem[],

  calendar: {
    month: "July",
    year: "2025",
    activeDay: 8,
    highlightedDays: [10, 11, 14],
  },

  schedule: [
    {
      id: "sch-1",
      title: "Visit Client- Angel Plaza",
      subtitle: "Sector 45, Gurugram, Haryana",
      colorVariant: "green",
    },
    {
      id: "sch-2",
      title: "Visit Client – Site Walkthrough",
      subtitle: "Whitefield Road, Bengaluru, Karnataka",
      colorVariant: "green",
    },
    {
      id: "sch-3",
      title: "Follow Up - Jessica Chen",
      subtitle: "jessica.chen@email.com",
      colorVariant: "purple",
    },
    {
      id: "sch-4",
      title: "Follow Up – Roger Bouchard",
      subtitle: "roger.bouchard@clientmail.com",
      colorVariant: "purple",
    },
    {
      id: "sch-5",
      title: "Submit Final Offer – Villa Deal",
      subtitle: "Finalize and send offer documents.",
      colorVariant: "gold",
    },
    {
      id: "sch-6",
      title: "Submit Internal Review – Apartment Pricing",
      subtitle: "Update CRM with latest market rates.",
      colorVariant: "gold",
    },
    {
      id: "sch-7",
      title: "Contract Signing – Skyline Edge",
      subtitle: "Meeting with attorney and buyer at 4:00 PM",
      colorVariant: "green",
    },
    {
      id: "sch-8",
      title: "Site Inspection – Rosehill Cottage",
      subtitle: "Physical verification of construction status",
      colorVariant: "purple",
    },
  ] as ScheduleItem[],
};
