"use client";

import { useState } from "react";
import { TrendingUp, BarChart, Coins, Zap } from "lucide-react";
import TabContent from "../_components/TabContent";

export default function RetargetingAds() {
  const [subTab, setSubTab] = useState("web");

  const subTabs = [
    { id: "web", label: "Website Retargeting" },
    { id: "app", label: "App Retargeting" },
  ];

  const getContent = () => {
    switch (subTab) {
      case "web":
        return {
          title: "Website Retargeting",
          desc: "Re-engage visitors who left your website without converting.",
          items: [
            { icon: TrendingUp, text: "Display personalized ads to previous visitors." },
            { icon: BarChart, text: "Track performance and optimize campaigns." },
          ],
          price: "Starting ₹8,500/month + Ad Spend",
        };
      case "app":
        return {
          title: "App Retargeting",
          desc: "Target users who have interacted with your mobile app.",
          items: [
            { icon: Zap, text: "Show personalized in-app or cross-platform ads." },
            { icon: Coins, text: "Increase engagement and retention rates." },
          ],
          price: "Starting ₹9,500/month + Ad Spend",
        };
      default:
        return {};
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
              subTab === tab.id
                ? "bg-cyan-600 text-white shadow-sm"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-cyan-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <TabContent {...getContent()} color="cyan" />
    </div>
  );
}
