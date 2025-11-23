"use client";
import React from "react";
import { Megaphone, Code, Smartphone, CheckCircle } from "lucide-react";
import SectionGlow from "./SectionGlow";
import Image from "next/image";
import Link from "next/link";

// --- Reusable Component 1: Service Pillar Card ---
const ServicePillarCard = ({ icon, title, description }) => (
  <div className="group bg-gray-900/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-500/40 transition-all duration-300 flex flex-col items-start sm:items-center text-left sm:text-center w-full sm:w-[300px]">
    <div className="flex items-center justify-center sm:justify-center space-x-3 mb-2">
      <div className="p-3 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
    </div>
    <p className="text-gray-300 mt-2 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

// --- Reusable Component 2: Service Detail Section ---
const ServiceDetailSection = ({
  title,
  subtitle,
  items,
  imageUrl,
  imageAlt,
  reverseLayout = false,
}) => {
  const layoutClasses = reverseLayout
    ? "flex-col lg:flex-row-reverse"
    : "flex-col lg:flex-row";

  return (
    <div
      className={`flex ${layoutClasses} items-center gap-10 md:py-12`}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">
          {title}
        </h2>
        <p className="text-gray-400 mt-2 text-lg font-light">{subtitle}</p>
        <ul className="mt-6 space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 text-gray-300"
            >
              <CheckCircle className="text-cyan-400 h-5 w-5 flex-shrink-0 mt-[2px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[480px]  rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full sm:h-[60vh] object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.05]"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400/0a0a0a/33ffff?text=Graphic";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
      </div>
      
    </div>
  );
};

// --- Main Component ---
export default function ServicesSection() {
  const pillars = [
    {
      icon: <Megaphone className="text-cyan-400 h-6 w-6" />,
      title: "Performance Advertising",
      description: "Mastering Google & Meta Ads for maximum ROI.",
    },
    {
      icon: <Code className="text-cyan-400 h-6 w-6" />,
      title: "Web Innovation",
      description:
        "Crafting beautiful and functional static & dynamic websites.",
    },
    {
      icon: <Smartphone className="text-cyan-400 h-6 w-6" />,
      title: "Mobile Experiences",
      description: "Developing intuitive and engaging mobile applications.",
    },
  ];

  const services = [
    {
      title: "Paid Advertising",
      subtitle: "(Google & Meta Ads)",
      items: [
        "Strategic Campaign Setup",
        "Targeted Audience Research",
        "Continuous Performance Optimization",
        "Detailed Analytics & Reporting",
      ],
      imageUrl: "/assets/service-1.png",
      imageAlt: "Paid Advertising Graphic",
    },
    {
      title: "Web Design & Development",
      subtitle: "(Static & Dynamic Website)",
      items: [
        "Responsive UI/UX Design",
        "CMS Development (WordPress, Shopify, etc.)",
        "E-commerce Solutions",
        "Ongoing Maintenance & Support",
      ],
      imageUrl: "/assets/service-2.png",
      imageAlt: "Web Design Graphic",
      reverseLayout: true,
    },
    {
      title: "Mobile App Development",
      subtitle: "Bring your ideas to life with intuitive applications.",
      items: [
        "Native (iOS, Android) Integration",
        "Cross-Platform (React Native, Flutter)",
        "API & Backend Integration",
        "App Store Optimization",
      ],
      imageUrl: "/assets/service-3.png",
      imageAlt: "Mobile App Development Graphic",
    },
  ];

  return (
    <section id="services" className="relative bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white pt-16 sm:pt-24 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Our Expertise
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            <span className="text-cyan-400">Digital Growth</span> Pillars
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            We provide complete strategies and execution across digital channels
            — ensuring measurable success for your brand.
          </p>
        </div>

        {/* Pillars */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {pillars.map((pillar) => (
            <ServicePillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link 
          className="bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-cyan-400/40 hover:bg-cyan-300 transition-all duration-300"
          href={'/portfolio'}
          >

            Explore All Services
          </Link>
        </div>

        {/* Divider */}
        <SectionGlow />

        {/* Service Details */}
        <div className="space-y-20 md:space-y-28">
          {services.map((service) => (
            <div key={service.title}>
              <ServiceDetailSection
              
              title={service.title}
              subtitle={service.subtitle}
              items={service.items}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              reverseLayout={service.reverseLayout}
            />
                    <SectionGlow />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
