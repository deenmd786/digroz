"use client";

import { useState } from "react";
import {
  Globe,
  Layers,
  ShoppingBag,
  Cloud,
  Shield,
  Smartphone,
  Zap,
  BarChart3,
} from "lucide-react";

import StaticWebsite from "./StaticWebsite";
import DynamicWebsite from "./DynamicWebsite";
import EcommerceWebsite from "./EcommerceWebsite";

export default function WebDevelopment() {
  const [activeTab, setActiveTab] = useState("static");

  const tabs = [
    { id: "static", label: "Static Website", icon: <Globe size={16} /> },
    { id: "dynamic", label: "Dynamic (CMS)", icon: <Layers size={16} /> },
    { id: "ecommerce", label: "E-Commerce", icon: <ShoppingBag size={16} /> },
  ];

  return (
    <section className="bg-gray-950 text-gray-300 border border-cyan-600/20 rounded-2xl p-10 shadow-lg shadow-cyan-500/10">
      {/* --- Header --- */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">
          Web Development Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We build <span className="text-white font-semibold">fast</span>,{" "}
          <span className="text-white font-semibold">responsive</span>, and{" "}
          <span className="text-white font-semibold">scalable</span> websites
          using <strong>React.js</strong> and <strong>Next.js</strong>. <br />
          Choose the perfect plan tailored to your business goals.
        </p>
      </div>

      {/* --- Main Tabs --- */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-200
              ${
                activeTab === tab.id
                  ? "bg-cyan-600 text-white border-cyan-500"
                  : "bg-gray-900 border-gray-700 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Tab Content --- */}
      <div className="mt-4">
        {activeTab === "static" && <StaticWebsite />}
        {activeTab === "dynamic" && <DynamicWebsite />}
        {activeTab === "ecommerce" && <EcommerceWebsite />}
      </div>

      {/* --- Add-ons --- */}
      <div className="mt-12 bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
          <Cloud size={18} /> Optional Add-ons
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <AddOn
            icon={<Shield size={18} className="text-cyan-400 mt-1" />}
            title="Domain & Hosting Setup"
            desc="Professional hosting with SSL — ₹1,999"
          />
          <AddOn
            icon={<BarChart3 size={18} className="text-cyan-400 mt-1" />}
            title="SEO & Google Ranking"
            desc="Keyword optimization & analytics — ₹2,499"
          />
          <AddOn
            icon={<Smartphone size={18} className="text-cyan-400 mt-1" />}
            title="Maintenance Plan"
            desc="Updates, backups & monitoring — ₹999/month"
          />
          <AddOn
            icon={<Zap size={18} className="text-cyan-400 mt-1" />}
            title="Performance Optimization"
            desc="Speed tuning & image compression — ₹1,499"
          />
        </div>
      </div>
    </section>
  );
}

function AddOn({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 bg-gray-900 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-cyan-500/10">
      {icon}
      <div>
        <p className="font-semibold text-cyan-400">{title}</p>
        <p className="text-gray-300 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}


