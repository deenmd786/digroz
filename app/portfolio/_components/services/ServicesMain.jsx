"use client";

import { useState } from "react";
import { FaCode, FaMobileAlt, FaBullhorn } from "react-icons/fa";
import ServiceButton from "./ServiceButton";
import BackButton from "./BackButton";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import PaidAdsMain from "../PaidAds/PaidAdsMain";
import AppDevelopmentMain from "../AppDevelopment/AppDevelopmentMain";

export default function ServicesMain() {
  const [selectedService, setSelectedService] = useState(null);
  const handleBack = () => setSelectedService(null);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-300">
      {!selectedService ? (
        <>
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Our <span className="text-cyan-400">Core Services</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base md:text-lg">
              Explore how we can grow your business digitally with our expert-led
              strategies.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceButton
              icon={FaCode}
              color="cyan"
              title="Web Development"
              onClick={() => setSelectedService("web")}
              className="hover:shadow-cyan-400/30 hover:shadow-lg transition-all duration-300"
            />
            <ServiceButton
              icon={FaMobileAlt}
              color="cyan"
              title="App Development"
              onClick={() => setSelectedService("app")}
              className="hover:shadow-cyan-400/30 hover:shadow-lg transition-all duration-300"
            />
            <ServiceButton
              icon={FaBullhorn}
              color="cyan"
              title="Paid Advertisement"
              onClick={() => setSelectedService("ads")}
              className="hover:shadow-cyan-400/30 hover:shadow-lg transition-all duration-300"
            />
          </div>
        </>
      ) : (
        <>
          <BackButton onClick={handleBack} />

          {selectedService === "web" && <WebDevelopment />}
          {selectedService === "app" && <AppDevelopmentMain />}
          {selectedService === "ads" && <PaidAdsMain />}
        </>
      )}
    </main>
  );
}
