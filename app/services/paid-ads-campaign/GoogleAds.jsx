"use client";

import { useState } from "react";
import { Target, BarChart, Coins, TrendingUp, Search } from "lucide-react";
import TabContent from "../_components/TabContent";

export default function GoogleAds() {
  const [subTab, setSubTab] = useState("search");

  const subTabs = [
    { id: "search", label: "Search Ads" },
    { id: "display", label: "Display / Banner Ads" },
    { id: "video", label: "YouTube Video Ads" },
    { id: "local", label: "Local Service Ads" },
  ];

  const getContent = () => {
    switch (subTab) {
      case "search":
        return {
          title: "Google Search Ads",
          desc: "Capture users actively searching for your services or products on Google.",
          items: [
            { icon: Target, text: "Appear at the top of Google search results." },
            { icon: Coins, text: "Pay only per click (PPC)." },
            { icon: BarChart, text: "Keyword-focused targeting with analytics." },
          ],
          price: "Starting ₹10,000/month + Ad Spend",
        };
      case "display":
        return {
          title: "Google Display / Banner Ads",
          desc: "Engage audiences visually through banners across websites and apps.",
          items: [
            { icon: TrendingUp, text: "Boost brand visibility with image-based ads." },
            { icon: BarChart, text: "Ideal for remarketing campaigns." },
          ],
          price: "Starting ₹8,000/month + Ad Spend",
        };
      case "video":
        return {
          title: "YouTube Video Ads",
          desc: "Connect with your audience using compelling video campaigns.",
          items: [
            { icon: Search, text: "Reach users on YouTube and partner networks." },
            { icon: TrendingUp, text: "Perfect for storytelling and awareness." },
          ],
          price: "Starting ₹12,000/month + Ad Spend",
        };
      case "local":
        return {
          title: "Local Service Ads",
          desc: "Ideal for local businesses aiming to reach nearby leads.",
          items: [
            { icon: Target, text: "Show up in Google’s Local Pack & Maps." },
            { icon: Coins, text: "Pay per verified lead, not just clicks." },
          ],
          price: "Starting ₹7,000/month + Ad Spend",
        };
      default:
        return {};
    }
  };

  return (
    <div className="space-y-4">
      {/* --- Sub Tabs --- */}
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

      {/* --- Tab Content --- */}
      <TabContent {...getContent()} color="cyan" />
    </div>
  );
}
