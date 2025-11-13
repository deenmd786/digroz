import React from "react";
import HeroSection from "./components/HeroSection";
import BackgroundGlows from "./components/BackgroundGlows";
import ServicesSection from "./components/ServicesSection";
import OurStory from "./components/OurStory";
import TeamSection from "./components/OurTeam";
import SuccessStories from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import KnowledgeHub from "./components/KnowledgeHub";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="font-['Inter',sans-serif] min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <BackgroundGlows />
      
      <HeroSection />
      <ServicesSection />
      <OurStory />
      <TeamSection />
      <SuccessStories />
      <Testimonials />
      <ContactSection />
      <KnowledgeHub />
      <FaqSection />
    </div>
  );
}
