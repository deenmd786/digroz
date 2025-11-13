"use client";

import { useState } from "react";
import { Palette, Cpu, Database, CheckCircle, Cloud } from "lucide-react";
import TabContent from "../services/TabContent";

export default function CustomSolutions() {
  const [activeSubTab, setActiveSubTab] = useState("healthcare");

  const subTabs = [
    { id: "healthcare", label: "Healthcare Apps" },
    { id: "finance", label: "Finance / Banking Apps" },
    { id: "education", label: "Education Apps" },
    { id: "enterprise", label: "Enterprise Solutions" },
  ];

  const content = {
    healthcare: {
      title: "Healthcare Apps",
      desc: "Build secure and user-friendly telemedicine, patient management, and appointment booking apps tailored for clinics and hospitals.",
      items: [
        { icon: Palette, text: "Custom UI for healthcare workflows" },
        { icon: Cpu, text: "HIPAA compliant backend" },
        { icon: Database, text: "Patient & doctor dashboards" },
        { icon: CheckCircle, text: "Secure appointment booking" },
        { icon: Cloud, text: "Cloud sync for medical records" },
      ],
      price: "Starting from ₹1,59,999",
    },
    finance: {
      title: "Finance / Banking Apps",
      desc: "Design reliable and scalable apps for banking, payments, wallets, or investment management with complete security.",
      items: [
        { icon: Palette, text: "Custom UI/UX dashboards" },
        { icon: Cpu, text: "Secure banking integrations" },
        { icon: Database, text: "Transaction & reporting systems" },
        { icon: CheckCircle, text: "Two-factor authentication" },
        { icon: Cloud, text: "Cloud-based transaction sync" },
      ],
      price: "Starting from ₹1,79,999",
    },
    education: {
      title: "Education Apps",
      desc: "Create interactive platforms for learning management, online classes, and digital content sharing with real-time engagement.",
      items: [
        { icon: Palette, text: "Custom learning dashboards" },
        { icon: Cpu, text: "Live classes & chat integration" },
        { icon: Database, text: "Student & teacher management" },
        { icon: CheckCircle, text: "Assignments & notifications" },
        { icon: Cloud, text: "Cloud content delivery" },
      ],
      price: "Starting from ₹1,39,999",
    },
    enterprise: {
      title: "Enterprise Solutions",
      desc: "Develop robust enterprise-grade solutions for internal workflows, analytics, and large-scale business management.",
      items: [
        { icon: Palette, text: "Custom UI/UX for enterprise needs" },
        { icon: Cpu, text: "Complex backend & API integrations" },
        { icon: Database, text: "Employee & resource management" },
        { icon: CheckCircle, text: "Performance analytics & reporting" },
        { icon: Cloud, text: "Scalable cloud deployment" },
      ],
      price: "Custom Quote",
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

      {/* --- Content with glow effect --- */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl opacity-40" />
        <div className="relative z-10">
          <TabContent {...content[activeSubTab]} color="cyan" />
        </div>
      </div>
    </section>
  );
}
