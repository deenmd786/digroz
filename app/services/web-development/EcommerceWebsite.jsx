"use client";
import { useState } from "react";
import { ShoppingBag, Users, CreditCard, FileBox } from "lucide-react";
import TabContent from "../_components/TabContent";
import { getEcommerceContent } from "./getWebTabContent";

export default function EcommerceWebsite() {
  const [activeSub, setActiveSub] = useState("single");

  const ecomSubTabs = [
    {
      id: "single",
      label: "Single Vendor Store",
      icon: ShoppingBag,
      images: [
        "/assets/images/webdev/ecommerce/single-1.png",
        "/assets/images/webdev/ecommerce/single-2.png",
        "/assets/images/webdev/ecommerce/single-3.png",
        "/assets/images/webdev/ecommerce/single-4.png",
      ],
    },
    {
      id: "multi",
      label: "Multi Vendor Marketplace",
      icon: Users,
      images: [
        "/assets/images/webdev/ecommerce/multi-1.png",
        "/assets/images/webdev/ecommerce/multi-2.png",
        "/assets/images/webdev/ecommerce/multi-3.png",
        "/assets/images/webdev/ecommerce/multi-4.png",
      ],
    },
    {
      id: "subscription",
      label: "Subscription Store",
      icon: CreditCard,
      images: [
        "/assets/images/webdev/ecommerce/subscription-1.png",
        "/assets/images/webdev/ecommerce/subscription-2.png",
        "/assets/images/webdev/ecommerce/subscription-3.png",
        "/assets/images/webdev/ecommerce/subscription-4.png",
      ],
    },
    {
      id: "digital",
      label: "Digital Products Store",
      icon: FileBox,
      images: [
        "/assets/images/webdev/ecommerce/digital-1.png",
        "/assets/images/webdev/ecommerce/digital-2.png",
        "/assets/images/webdev/ecommerce/digital-3.png",
        "/assets/images/webdev/ecommerce/digital-4.png",
      ],
    },
  ];

  return (
    <section className="relative z-10 py-10">
      {/* --- Sub Tabs --- */}
      <div className="flex flex-wrap gap-3 justify-start sm:justify-center mb-10">
        {ecomSubTabs.map((sub) => {
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
        {/* Same glow background as DynamicWebsite */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-blue-500/5 blur-2xl opacity-40" />

        <div className="relative z-10">
          <TabContent
            {...getEcommerceContent(activeSub)}
            images={ecomSubTabs.find((t) => t.id === activeSub)?.images}
            color="cyan"
          />
        </div>
      </div>
    </section>
  );
}
