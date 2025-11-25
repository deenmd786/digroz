"use client";

import { useState } from "react";
import { Palette, Cpu, Database, CheckCircle, Cloud } from "lucide-react";
import TabContent from "../_components/TabContent";

export default function BusinessApps() {
  const [activeSubTab, setActiveSubTab] = useState("crm");

  const subTabs = [
    { id: "crm", label: "CRM / ERP Apps" },
    { id: "employee", label: "Employee Management Apps" },
    { id: "productivity", label: "Task & Productivity Apps" },
  ];

  const content = {
    crm: {
      title: "CRM / ERP Apps",
      desc: "Manage customers, sales, and operations efficiently with tailored enterprise apps that enhance productivity and streamline workflows.",
      items: [
        { icon: Palette, text: "Modern UI/UX design" },
        { icon: Cpu, text: "React Native / Flutter development" },
        { icon: Database, text: "Secure backend & API integration" },
        { icon: CheckCircle, text: "Analytics & performance tracking" },
        { icon: Cloud, text: "Cloud sync & scalability" },
      ],
      price: "Starting from ₹79,999",
    },
    employee: {
      title: "Employee Management Apps",
      desc: "Simplify HR, attendance, payroll, and internal communication with smart, easy-to-use management apps.",
      items: [
        { icon: Cpu, text: "Role-based dashboards" },
        { icon: CheckCircle, text: "Task & attendance tracking" },
        { icon: Database, text: "Secure data storage" },
        { icon: Cloud, text: "Push notifications & alerts" },
        { icon: Palette, text: "Custom UI/UX" },
      ],
      price: "Starting from ₹89,999",
    },
    productivity: {
      title: "Task & Productivity Apps",
      desc: "Boost efficiency with project management, time tracking, and workflow automation tools built for performance.",
      items: [
        { icon: Palette, text: "Custom workflows & dashboards" },
        { icon: Cpu, text: "Integrations with Slack, Jira, etc." },
        { icon: Database, text: "Real-time data sync" },
        { icon: CheckCircle, text: "Task analytics & insights" },
        { icon: Cloud, text: "Cloud-based project storage" },
      ],
      price: "Starting from ₹94,999",
    },
  };

  return (
    <section className="relative z-10 py-8">
      {/* --- Sub Tabs --- */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
        {subTabs.map((sub) => {
          const isActive = activeSubTab === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setActiveSubTab(sub.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border
                ${
                  isActive
                    ? "bg-cyan-600 text-white border-cyan-500"
                    : "bg-gray-900 text-gray-400 border-gray-700 hover:text-cyan-300 hover:border-cyan-500/40"
                }`}
            >
              {sub.label}
            </button>
          );
        })}
      </div>

      {/* --- Content --- */}
      <div className="relative">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl opacity-40" />
        <div className="relative z-10">
          <TabContent {...content[activeSubTab]} color="cyan" />
        </div>
      </div>
    </section>
  );
}
