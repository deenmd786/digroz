"use client";
import { useState } from "react";
import { ShoppingBag, Users, CreditCard, FileBox } from "lucide-react";
import TabContent from "../services/TabContent";
import { getEcommerceContent } from "./getWebTabContent";

export default function EcommerceWebsite() {
  const [activeSub, setActiveSub] = useState("single");

  const ecomSubTabs = [
    { id: "single", label: "Single Vendor Store", icon: ShoppingBag },
    { id: "multi", label: "Multi Vendor Marketplace", icon: Users },
    { id: "subscription", label: "Subscription Store", icon: CreditCard },
    { id: "digital", label: "Digital Products", icon: FileBox },
  ];

  return (
    <section className="relative z-10 py-10">
      {/* --- Sub Tabs --- */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {ecomSubTabs.map((sub) => {
          const Icon = sub.icon;
          const isActive = activeSub === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setActiveSub(sub.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-900 border border-cyan-600/30 text-cyan-300 hover:border-cyan-400 hover:text-white"
                }`}
            >
              <Icon size={16} />
              {sub.label}
            </button>
          );
        })}
      </div>

      {/* --- Tab Content --- */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-2xl opacity-40" />
        <div className="relative z-10">
          <TabContent {...getEcommerceContent(activeSub)} color="cyan" />
        </div>
      </div>
    </section>
  );
}
