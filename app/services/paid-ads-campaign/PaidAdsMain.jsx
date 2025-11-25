"use client";

import { useState } from "react";
import GoogleAds from "./GoogleAds";
import MetaAds from "./MetaAds";
import ShoppingAds from "./ShoppingAds";
import RetargetingAds from "./RetargetingAds";

import {
  Search,
  Users,
  ShoppingBag,
  TrendingUp,
  Zap,
  BarChart3,
  Brush,
  Globe,
  Shield,
  Megaphone,
} from "lucide-react";

export default function PaidAdsMain() {
  const [activeTab, setActiveTab] = useState("google");

  const tabs = [
    { id: "google", label: "Google Search Ads", icon: Search },
    { id: "meta", label: "Meta Ads (FB/IG)", icon: Users },
    { id: "shopping", label: "Shopping Ads", icon: ShoppingBag },
    { id: "retargeting", label: "Retargeting", icon: TrendingUp },
  ];

  return (
    <section className="bg-gray-950 text-gray-300 border border-cyan-600/20 rounded-2xl p-10 mt-20 shadow-lg shadow-cyan-500/10 space-y-10">
      {/* --- Header --- */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-3 flex items-center justify-center gap-2">
         Paid Advertising Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We design and manage <span className="text-white font-semibold">high-performing ad campaigns</span> across
          major platforms — <span className="text-white font-semibold">Google, Meta, and Shopping Networks</span>.
          <br />
          Our goal: maximize ROI, generate leads, and grow your brand visibility.
        </p>
      </div>

      {/* --- Main Tabs --- */}
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-200
              ${
                activeTab === id
                  ? "bg-cyan-600 text-white border-cyan-500"
                  : "bg-gray-900 border-gray-700 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40"
              }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* --- Tab Content --- */}
      <div>
        {activeTab === "google" && <GoogleAds />}
        {activeTab === "meta" && <MetaAds />}
        {activeTab === "shopping" && <ShoppingAds />}
        {activeTab === "retargeting" && <RetargetingAds />}
      </div>

      {/* --- Add-ons Section --- */}
      <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20 shadow-md hover:shadow-cyan-500/10 transition-all duration-300">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
          <Zap size={18} /> Ad Add-ons & Enhancements
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <AddOn
            icon={BarChart3}
            title="Conversion Tracking Setup"
            desc="Full tracking with Google Analytics & Meta Pixel — ₹1,999"
          />
          <AddOn
            icon={Brush}
            title="Ad Creative Design"
            desc="Professional ad graphics for better engagement — ₹999/ad set"
          />
          <AddOn
            icon={Globe}
            title="Landing Page Optimization"
            desc="Boost conversions with optimized user experience — ₹2,499"
          />
          <AddOn
            icon={Shield}
            title="Ad Policy & Compliance Check"
            desc="Ensure ad approval & avoid account restrictions — ₹1,499"
          />
        </div>
      </div>
    </section>
  );
}

// ✅ Reusable Add-on Component
function AddOn({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 bg-gray-900 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-cyan-500/10">
      <Icon className="text-cyan-400 mt-1" size={32} />
      <div>
        <p className="font-semibold text-cyan-400">{title}</p>
        <p className="text-gray-300 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}
