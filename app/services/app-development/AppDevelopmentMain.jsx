"use client";
import { useState } from "react";
import BusinessApps from "./BusinessApps";
import EcommerceApps from "./EcommerceApps";
import OnDemandApps from "./OnDemandApps";
import CustomSolutions from "./CustomSolutions";
import {
  Briefcase,
  ShoppingBag,
  Rocket,
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  Zap,
  BarChart3,
} from "lucide-react";

export default function AppDevelopmentMain() {
  const [activeTab, setActiveTab] = useState("business");

  const tabs = [
    { id: "business", label: "Business Apps", icon: Briefcase },
    { id: "ecommerce", label: "E-Commerce Apps", icon: ShoppingBag },
    { id: "onDemand", label: "On-Demand Apps", icon: Rocket },
    { id: "custom", label: "Custom Solutions", icon: Cpu },
  ];

  return (
    <section className="bg-gray-950 text-gray-300 border border-cyan-600/20 rounded-2xl p-10 mt-20 shadow-lg shadow-cyan-500/10 space-y-10">
      {/* --- Header --- */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-3">
          App Development Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We craft <span className="text-white font-semibold">powerful</span> and{" "}
          <span className="text-white font-semibold">scalable</span> mobile and web apps
          using <strong>React Native</strong>, <strong>Flutter</strong>, and{" "}
          <strong>Next.js</strong>. Explore solutions that best match your business goals.
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
        {activeTab === "business" && <BusinessApps />}
        {activeTab === "ecommerce" && <EcommerceApps />}
        {activeTab === "onDemand" && <OnDemandApps />}
        {activeTab === "custom" && <CustomSolutions />}
      </div>

      {/* --- Optional Add-ons --- */}
      <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20 shadow-md hover:shadow-cyan-500/10 transition-all duration-300">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
          <Cloud size={18} /> Optional Add-ons
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <AddOn
            icon={Shield}
            title="App Store & Play Store Setup"
            desc="We handle publishing & compliance for smooth launches — ₹2,499"
          />
          <AddOn
            icon={BarChart3}
            title="App Analytics Integration"
            desc="Real-time performance tracking & insights — ₹1,999"
          />
          <AddOn
            icon={Smartphone}
            title="Maintenance Plan"
            desc="Monthly updates, monitoring & version upgrades — ₹1,299/month"
          />
          <AddOn
            icon={Zap}
            title="Performance Optimization"
            desc="Speed tuning & crash monitoring — ₹1,499"
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

// function AddOn({ icon: Icon, title, desc }) {
//   return (
//     <div className="flex items-start gap-3 bg-gray-900 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-cyan-500/10">
//       <Icon size={18} className="text-cyan-500 mt-1" />
//       <div>
//         <h4 className="font-semibold text-cyan-400">{title}</h4>
//         <p className="text-gray-300 text-sm mt-1">{desc}</p>
//       </div>
//     </div>
//   );
// }
