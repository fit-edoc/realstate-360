import * as React from "react";
import Navbar from "@/components/common/Navbar";
import DashboardCardRenderer from "@/components/reusable/DashboardCardRenderer";
import RemindersWidget from "@/components/reusable/RemindersWidget";
import CalendarWidget from "@/components/reusable/CalendarWidget";
import ScheduleWidget from "@/components/reusable/ScheduleWidget";
import { LEFT_DASHBOARD_CARDS, RIGHT_DASHBOARD_DATA } from "@/data/dashboardData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans font-medium flex flex-col antialiased">
      {/* Top Realtor360 Responsive Navigation Bar */}
      <Navbar initialActiveId="home" />

      {/* Main Two-Section Flex Dashboard Container */}
      <main className="flex-1 w-full max-w-[1720px] mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="flex flex-col xl:flex-row items-stretch gap-5 w-full">
          {/* ========================================================= */}
          {/* LEFT MAIN SECTION: Data-Driven JSON Grid with colSpan     */}
          {/* ========================================================= */}
          <section
            aria-label="Dashboard Metrics and Analytics"
            className="flex-1 w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-max"
          >
            {LEFT_DASHBOARD_CARDS.map((card) => (
              <DashboardCardRenderer key={card.id} card={card} />
            ))}
          </section>

          {/* ========================================================= */}
          {/* RIGHT MAIN SECTION: Flex Column with Reminders & Calendar */}
          {/* ========================================================= */}
          <aside
            aria-label="Schedule and Reminders"
            className="w-full xl:w-[320px] 2xl:w-[350px] shrink-0 flex flex-col gap-5 justify-between"
          >
            {/* 1. Reminders Card */}
            <RemindersWidget reminders={RIGHT_DASHBOARD_DATA.reminders} />

            {/* 2. Interactive Calendar Widget */}
            <CalendarWidget
              month={RIGHT_DASHBOARD_DATA.calendar.month}
              year={RIGHT_DASHBOARD_DATA.calendar.year}
              activeDay={RIGHT_DASHBOARD_DATA.calendar.activeDay}
              highlightedDays={RIGHT_DASHBOARD_DATA.calendar.highlightedDays}
            />

            {/* 3. Schedule List Card (stretches to match left main end point) */}
            <ScheduleWidget
              schedule={RIGHT_DASHBOARD_DATA.schedule}
              className="flex-1"
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
