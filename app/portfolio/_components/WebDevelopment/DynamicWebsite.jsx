"use client";
import { useState } from "react";
import { Database, Layers, Settings, Globe } from "lucide-react";
import TabContent from "../services/TabContent";
import { getDynamicWebContent } from "./getWebTabContent";

export default function DynamicWebsite() {
  const [activeSub, setActiveSub] = useState("wordpress");

  const dynamicSubTabs = [
    { id: "wordpress", label: "WordPress CMS", icon: Globe },
    { id: "headless", label: "Headless CMS", icon: Database },
    { id: "strapi", label: "Strapi / Node CMS", icon: Layers },
    { id: "custom", label: "Custom Admin Panel", icon: Settings },
  ];

  return (
    <section className="relative z-10 py-10">
      {/* --- Sub Tabs --- */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {dynamicSubTabs.map((sub) => {
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
          <TabContent {...getDynamicWebContent(activeSub)} color="cyan" />
        </div>
      </div>
    </section>
  );
}
