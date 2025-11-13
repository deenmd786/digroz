"use client";

import { useState } from "react";
import { ShoppingBag, BarChart, Coins, Zap, Globe } from "lucide-react";
import TabContent from "../services/TabContent";

export default function ShoppingAds() {
  const [subTab, setSubTab] = useState("product");

  const subTabs = [
    { id: "product", label: "Product Listing Ads" },
    { id: "dynamic", label: "Dynamic Retargeting Ads" },
  ];

  const getContent = () => {
    switch (subTab) {
      case "product":
        return {
          title: "Product Listing Ads",
          desc: "Showcase your products directly in Google Shopping.",
          items: [
            { icon: ShoppingBag, text: "Highlight product images & prices." },
            { icon: Coins, text: "Pay per click model for cost-efficiency." },
            { icon: BarChart, text: "Track performance with detailed analytics." },
          ],
          price: "Starting ₹9,000/month + Ad Spend",
        };
      case "dynamic":
        return {
          title: "Dynamic Retargeting Ads",
          desc: "Re-engage users who have previously interacted with your store.",
          items: [
            { icon: Zap, text: "Automatically show products users viewed." },
            { icon: Globe, text: "Increase conversions with personalized ads." },
          ],
          price: "Starting ₹11,000/month + Ad Spend",
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
