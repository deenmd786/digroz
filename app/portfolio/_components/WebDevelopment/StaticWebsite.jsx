"use client";
import { useState } from "react";
import { Code, Sparkles, Rocket, Server } from "lucide-react";
import { getStaticWebContent } from "./getWebTabContent";
import TabContent from "../services/TabContent";

export default function StaticWebsite() {
  const [activeSub, setActiveSub] = useState("basic");

  const staticSubTabs = [
    {
      id: "basic",
      label: "Basic One-Page",
      icon: Code,
      images: [
        "https://drive.google.com/uc?export=view&id=1zD7fxTVjKbSpxA6T9bY4xQtTCBrElRue",
        "https://drive.google.com/uc?id=1w_Tw2zKKcrRb8ZHE299xPGOF1sYqp_32",
        "https://drive.google.com/uc?id=1XxeYHmxuKYALjIvrKP9oyDO2YiTM4MuX",
        "https://drive.google.com/uc?id=1NhRuYDLuKVWdBrkWAvOeeFjDOmPzjXNT",
      ],
    },
    {
      id: "animated",
      label: "Animated / Interactive",
      icon: Sparkles,
      images: [
        "https://drive.google.com/uc?id=YOUR_ANIMATED_1",
        "https://drive.google.com/uc?id=YOUR_ANIMATED_2",
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio / Creative",
      icon: Rocket,
      images: [
        "https://drive.google.com/uc?id=YOUR_PORTFOLIO_1",
        "https://drive.google.com/uc?id=YOUR_PORTFOLIO_2",
      ],
    },
    {
      id: "corporate",
      label: "Corporate / Professional",
      icon: Server,
      images: [
        "https://drive.google.com/uc?id=YOUR_CORPORATE_1",
        "https://drive.google.com/uc?id=YOUR_CORPORATE_2",
      ],
    },
  ];

  return (
    <section className="relative z-10 py-10">
      {/* --- Sub Tabs --- */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {staticSubTabs.map((sub) => {
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
              <span className="hidden max-sm:text-xs sm:flex">
                <Icon size={18} />
                </span>
              
              {sub.label}
            </button>
          );
        })}
      </div>

      {/* --- Tab Content --- */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-2xl opacity-40" />
        <div className="relative z-10">
          <TabContent
            {...getStaticWebContent(activeSub)}
            images={staticSubTabs.find((t) => t.id === activeSub)?.images}
            color="cyan"
          />
        </div>
      </div>
    </section>
  );
}
