"use client";

import { useState } from "react";
import TabContent from "../services/TabContent";
import { Rocket, Cpu, Database, CheckCircle, Cloud } from "lucide-react";

export default function OnDemandApps() {
  const [activeSubTab, setActiveSubTab] = useState("delivery");

  const subTabs = [
    { id: "delivery", label: "Delivery Apps" },
    { id: "booking", label: "Booking Apps" },
    { id: "ride", label: "Ride-Hailing Apps" },
    { id: "service", label: "Service Apps" },
  ];

  const content = {
    delivery: {
      title: "Delivery Apps",
      desc: "Launch food, grocery, or courier delivery apps with real-time tracking and management features.",
      items: [
        { icon: Rocket, text: "Live location tracking" },
        { icon: Cpu, text: "Real-time notifications" },
        { icon: Database, text: "Backend & cloud handling" },
        { icon: CheckCircle, text: "Order management dashboards" },
        { icon: Cloud, text: "App store deployment" },
      ],
      price: "Starting from ₹1,49,999",
    },
    booking: {
      title: "Booking Apps",
      desc: "Create apps for hotels, salons, and services with seamless booking experiences.",
      items: [
        { icon: Rocket, text: "Real-time availability system" },
        { icon: Cpu, text: "Automated booking & reminders" },
        { icon: Database, text: "User & provider dashboards" },
        { icon: CheckCircle, text: "Secure payment integration" },
        { icon: Cloud, text: "Cross-platform deployment" },
      ],
      price: "Starting from ₹1,39,999",
    },
    ride: {
      title: "Ride-Hailing Apps",
      desc: "Develop your own Uber-like platform with driver & rider dashboards.",
      items: [
        { icon: Rocket, text: "Real-time ride tracking" },
        { icon: Cpu, text: "Instant trip notifications" },
        { icon: Database, text: "Booking & payment system" },
        { icon: CheckCircle, text: "Secure backend services" },
        { icon: Cloud, text: "Deployment & scalability" },
      ],
      price: "Starting from ₹1,59,999",
    },
    service: {
      title: "Service Apps",
      desc: "Build on-demand home, cleaning, or repair service platforms.",
      items: [
        { icon: Rocket, text: "Service provider dashboards" },
        { icon: Cpu, text: "Scheduling & booking modules" },
        { icon: Database, text: "API & secure backend" },
        { icon: CheckCircle, text: "Analytics & notifications" },
        { icon: Cloud, text: "Cloud sync & scalability" },
      ],
      price: "Starting from ₹1,49,999",
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

      {/* --- Tab Content with Glow --- */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl opacity-40" />
        <div className="relative z-10">
          <TabContent {...content[activeSubTab]} color="cyan" />
        </div>
      </div>
    </section>
  );
}
