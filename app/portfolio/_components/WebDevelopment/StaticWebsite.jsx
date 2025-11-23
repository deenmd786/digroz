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
        "/assets/images/webdev/static/basic-1.png",
        "/assets/images/webdev/static/basic-2.png",
        "/assets/images/webdev/static/basic-3.png",
        "/assets/images/webdev/static/basic-4.png",
      ],
    },
    {
      id: "animated",
      label: "Animated / Interactive",
      icon: Sparkles,
      images: [
        "/assets/images/webdev/static/animated-1.png",
        "/assets/images/webdev/static/animated-2.png",
        "/assets/images/webdev/static/animated-3.png",
        "/assets/images/webdev/static/animated-4.png",
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio / Creative",
      icon: Rocket,
      images: [
        "/assets/images/webdev/static/portfolio-1.png",
        "/assets/images/webdev/static/portfolio-2.png",
        "/assets/images/webdev/static/portfolio-3.png",
        "/assets/images/webdev/static/portfolio-4.png",
      ]
    },
    {
      id: "corporate",
      label: "Corporate / Professional",
      icon: Server,
      images: [
        "/assets/images/webdev/static/corporate-1.png",
        "/assets/images/webdev/static/corporate-2.png",
        "/assets/images/webdev/static/corporate-3.png",
        "/assets/images/webdev/static/corporate-4.png",
      ],
    },
  ];

  return (
    <section className="relative z-10 py-10">
      {/* --- Sub Tabs --- */}
      <div className="flex flex-wrap gap-3 justify-start sm:justify-center mb-10">
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
              <Icon size={18} />
              {sub.label}
            </button>
          );
        })}
      </div>

      {/* --- Tab Content --- */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-blue-500/5 blur-2xl opacity-40" />

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
