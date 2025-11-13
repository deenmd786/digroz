"use client";

import { useState } from "react";
import TabContent from "../services/TabContent";
import { ShoppingBag, Shield, Database, Zap, Smartphone } from "lucide-react";

export default function EcommerceApps() {
  const [activeSubTab, setActiveSubTab] = useState("single");

  const subTabs = [
    { id: "single", label: "Single Vendor" },
    { id: "multi", label: "Multi Vendor" },
    { id: "subscription", label: "Subscription Store" },
    { id: "digital", label: "Digital Products" },
  ];

  const content = {
    single: {
      title: "Single Vendor Store",
      desc: "Ideal for businesses managing their own products with a streamlined store setup.",
      items: [
        { icon: ShoppingBag, text: "Complete store setup" },
        { icon: Shield, text: "Secure payment integration" },
        { icon: Database, text: "Product & inventory control" },
        { icon: Zap, text: "Optimized for conversions" },
        { icon: Smartphone, text: "Mobile-first design" },
      ],
      price: "Starting from ₹99,999",
    },
    multi: {
      title: "Multi Vendor Marketplace",
      desc: "Launch your own Amazon-like platform for multiple sellers with full admin control.",
      items: [
        { icon: Database, text: "Vendor registration & dashboards" },
        { icon: Shield, text: "Admin moderation panel" },
        { icon: Zap, text: "Secure multi-user system" },
        { icon: ShoppingBag, text: "Product & order management" },
        { icon: Smartphone, text: "Mobile optimized" },
      ],
      price: "Starting from ₹1,49,999",
    },
    subscription: {
      title: "Subscription Store",
      desc: "Sell memberships, courses, or recurring plans with automated billing and responsive UI.",
      items: [
        { icon: ShoppingBag, text: "Recurring payment setup" },
        { icon: Zap, text: "Automated billing" },
        { icon: Database, text: "User membership management" },
        { icon: Shield, text: "Secure transactions" },
        { icon: Smartphone, text: "Responsive subscription pages" },
      ],
      price: "Starting from ₹1,19,999",
    },
    digital: {
      title: "Digital Product Store",
      desc: "Sell digital downloads like eBooks, templates, or courses securely and efficiently.",
      items: [
        { icon: ShoppingBag, text: "Instant download system" },
        { icon: Shield, text: "License & file protection" },
        { icon: Zap, text: "Auto email delivery" },
        { icon: Database, text: "Digital inventory dashboard" },
        { icon: Smartphone, text: "Optimized for digital UX" },
      ],
      price: "Starting from ₹99,999",
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
