"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";
import StatCard from "@/components/reusable/StatCard";
import LeadSourceDonut from "@/components/reusable/LeadSourceDonut";
import StagesBarChart from "@/components/reusable/StagesBarChart";
import SalesAndDealsGroup from "@/components/reusable/SalesAndDealsGroup";
import PipelineTable from "@/components/reusable/PipelineTable";
import ActiveListingTable from "@/components/reusable/ActiveListingTable";
import LeadsContactsList from "@/components/reusable/LeadsContactsList";
import RemindersWidget from "@/components/reusable/RemindersWidget";
import CalendarWidget from "@/components/reusable/CalendarWidget";
import ScheduleWidget from "@/components/reusable/ScheduleWidget";
import QuickActionsWidget from "@/components/reusable/QuickActionsWidget";
import { LEFT_DASHBOARD_CARDS, RIGHT_DASHBOARD_DATA } from "@/data/dashboardData";

export default function DashboardPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNav, setActiveNav] = React.useState<string>("home");

  // Parent variants container orchestrating cascade: Header -> Bento Cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  // Section entry animation: blur-to-sharp (respecting reduced motion)
  const itemVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Extract stat card items from LEFT_DASHBOARD_CARDS
  const statCards = LEFT_DASHBOARD_CARDS.filter((c) => c.component === "StatCard");
  const leadSourceCard = LEFT_DASHBOARD_CARDS.find((c) => c.component === "LeadSourceDonut");
  const stagesCard = LEFT_DASHBOARD_CARDS.find((c) => c.component === "StagesBarChart");
  const salesGroupCard = LEFT_DASHBOARD_CARDS.find((c) => c.component === "SalesAndDealsGroup");
  const pipelineCard = LEFT_DASHBOARD_CARDS.find((c) => c.component === "PipelineTable");
  const activeListingCard = LEFT_DASHBOARD_CARDS.find((c) => c.component === "ActiveListingTable");
  const leadsContactsCard = LEFT_DASHBOARD_CARDS.find((c) => c.component === "LeadsContactsList");

  return (
    <div className="min-h-screen bg-radial from-[#00ff26] to-[#e9e9e9d0] flex flex-col font-sans font-normal text-[#0A0A0A] antialiased relative">
      {/* ========================================================= */}
      {/* 1. SIDEBAR (Fixed Full Height at top-level z-50)          */}
      {/* ========================================================= */}
      <Sidebar activeId={activeNav} onSelect={setActiveNav} />

      {/* Main Content Area: Offset by 64px rail on desktop, 24px padding */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col md:pl-16 min-h-screen pb-16 md:pb-6 relative z-10"
      >
        <div className="w-full max-w-[1720px] mx-auto p-4 sm:p-5 lg:p-6 flex flex-col gap-4">
          {/* ======================================================= */}
          {/* 2. HEADER (Second item in entry stagger)                */}
          {/* ======================================================= */}
          <motion.div variants={itemVariants} className="relative z-30">
            <Navbar initialActiveId={activeNav} />
          </motion.div>

          {/* ======================================================= */}
          {/* 3. 12-COLUMN BENTO GRID (Cards stagger into view)       */}
          {/* ======================================================= */}
          <main className="w-full grid grid-cols-12 gap-4 items-stretch relative z-10">
            {/* ROW 1: 4 Stat KPI Cards (3 columns each = 12 cols) */}
            {statCards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className="col-span-12 sm:col-span-6 xl:col-span-3 flex flex-col"
              >
                <StatCard data={card.data} className="h-full flex-1" />
              </motion.div>
            ))}

            {/* ROW 2: Lead Sources (4 cols) + Stages Chart (5 cols) + Reminders (3 cols) = 12 cols */}
            {leadSourceCard && (
              <motion.div
                variants={itemVariants}
                className="col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col"
              >
                <LeadSourceDonut data={leadSourceCard.data} title={leadSourceCard.title} className="h-full flex-1" />
              </motion.div>
            )}

            {stagesCard && (
              <motion.div
                variants={itemVariants}
                className="col-span-12 lg:col-span-5 xl:col-span-5 flex flex-col"
              >
                <StagesBarChart data={stagesCard.data} title={stagesCard.title} className="h-full flex-1" />
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-3 xl:col-span-3 flex flex-col"
            >
              <RemindersWidget reminders={RIGHT_DASHBOARD_DATA.reminders} className="h-full flex-1" />
            </motion.div>

            {/* ROW 3: Sales Reps & Deals (4 cols) + Pipeline (4 cols) + Calendar (4 cols) = 12 cols */}
            {salesGroupCard && (
              <motion.div
                variants={itemVariants}
                className="col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col"
              >
                <SalesAndDealsGroup data={salesGroupCard.data} className="h-full flex-1" />
              </motion.div>
            )}

            {pipelineCard && (
              <motion.div
                variants={itemVariants}
                className="col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col"
              >
                <PipelineTable data={pipelineCard.data} title={pipelineCard.title} className="h-full flex-1" />
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col"
            >
              <CalendarWidget
                month={RIGHT_DASHBOARD_DATA.calendar.month}
                year={RIGHT_DASHBOARD_DATA.calendar.year}
                activeDay={RIGHT_DASHBOARD_DATA.calendar.activeDay}
                highlightedDays={RIGHT_DASHBOARD_DATA.calendar.highlightedDays}
                className="h-full flex-1"
              />
            </motion.div>

            {/* ROW 4: Active Listings (8 cols) + Quick Actions (4 cols) = 12 cols */}
            {activeListingCard && (
              <motion.div
                variants={itemVariants}
                className="col-span-12 xl:col-span-8 flex flex-col"
              >
                <ActiveListingTable
                  data={activeListingCard.data}
                  title={activeListingCard.title}
                  className="h-full flex-1"
                />
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="col-span-12 xl:col-span-4 flex flex-col"
            >
              <QuickActionsWidget className="h-full flex-1" />
            </motion.div>

            {/* ROW 5: Schedule Widget (6 cols) + Leads Contacts (6 cols) = 12 cols */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-6 flex flex-col"
            >
              <ScheduleWidget
                schedule={RIGHT_DASHBOARD_DATA.schedule}
                className="h-full flex-1"
              />
            </motion.div>

            {leadsContactsCard && (
              <motion.div
                variants={itemVariants}
                className="col-span-12 lg:col-span-6 flex flex-col"
              >
                <LeadsContactsList
                  data={leadsContactsCard.data}
                  title={leadsContactsCard.title}
                  className="h-full flex-1"
                />
              </motion.div>
            )}
          </main>
        </div>
      </motion.div>
    </div>
  );
}
