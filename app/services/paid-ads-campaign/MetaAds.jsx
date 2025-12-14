"use client";

import { useState } from "react";
import { Users, TrendingUp, BarChart, Megaphone, Coins } from "lucide-react";
import TabContent from "../_components/TabContent";

export default function MetaAds() {
  const [subTab, setSubTab] = useState("feed");

  const subTabs = [
    { id: "feed", label: "Feed Ads" },
    { id: "story", label: "Story Ads" },
    { id: "reel", label: "Reel Ads" },
    { id: "lead", label: "Lead Form Ads" },
  ];

  const getContent = () => {
    switch (subTab) {
      case "feed":
        return {
          title: "Feed Ads",
          desc: "Ideal for brand visibility and engagement across Facebook and Instagram feeds.",
          items: [
            { icon: Users, text: "Visually engaging ad creatives with CTA." },
            { icon: BarChart, text: "Boost engagement, likes, and shares." },
          ],
          price: "Starting ₹8,000/month + Ad Spend",
        };
      case "story":
        return {
          title: "Story Ads",
          desc: "Full-screen immersive ads perfect for storytelling and quick impact.",
          items: [
            { icon: TrendingUp, text: "Engage users with swipe-up CTAs." },
            { icon: Megaphone, text: "Great for flash sales and events." },
          ],
          price: "Starting ₹9,000/month + Ad Spend",
        };
      case "reel":
        return {
          title: "Reel Ads",
          desc: "Tap into trending short-form video culture to connect with Gen Z & Millennials.",
          items: [
            { icon: Users, text: "Dynamic video ads within reels." },
            { icon: TrendingUp, text: "Boost discovery and follower growth." },
          ],
          price: "Starting ₹12,000/month + Ad Spend",
        };
      case "lead":
        return {
          title: "Lead Form Ads",
          desc: "Collect direct leads through Facebook & Instagram without users leaving the app.",
          items: [
            { icon: Coins, text: "Form integrated directly within the ad." },
            { icon: BarChart, text: "Track performance with conversion insights." },
          ],
          price: "Starting ₹11,000/month + Ad Spend",
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
