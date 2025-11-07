import {
  Code,
  Smartphone,
  Palette,
  PenTool,
  BarChart3,
  Target,
  Brain,
} from "lucide-react";

export const teamMembers = [
  
  {
    name: "Gurpreet Kaur",
    role: "Lead Strategist",
    description:
      "Drives campaign direction, analyzes performance, and ensures seamless strategy alignment.",
    tools: "Notion, Google Analytics, HubSpot",
    icon: <Brain className="text-pink-400 w-6 h-6" />,
    imageUrl: "/assets/team/gurpreet.png",
  },
  {
    name: "Aman",
    role: "Graphic Designer",
    description:
      "Creates brand visuals and stunning creatives that define visual identity.",
    tools: "Adobe Photoshop, Illustrator, Figma",
    icon: <Palette className="text-yellow-400 w-6 h-6" />,
    imageUrl: "/assets/team/aman.png",
  },
  {
    name: "Gulshan",
    role: "UI/UX Designer",
    description:
      "Designs engaging, user-centered interfaces with seamless user experiences.",
    tools: "Figma, Adobe XD, Framer",
    icon: <PenTool className="text-cyan-400 w-6 h-6" />,
    imageUrl: "/assets/team/gulshan.png",
  },
  {
    name: "Sameem",
    role: "Web Developer",
    description:
      "Builds responsive and performant websites with modern frameworks.",
    tools: "React.js, Next.js, Tailwind CSS",
    icon: <Code className="text-green-400 w-6 h-6" />,
    imageUrl: "/assets/team/sameem.png",
  },
  
  {
    name: "Rahul Sharma",
    role: "SEO Specialist",
    description:
      "Boosts organic rankings with smart SEO tactics and analytics insights.",
    tools: "Ahrefs, SEMrush, Google Search Console",
    icon: <BarChart3 className="text-purple-400 w-6 h-6" />,
    imageUrl: "/assets/team/rahul.png",
  },
  {
    name: "Kavya Rajput",
    role: "Ads Specialist",
    description:
      "Manages paid campaigns that maximize ROI and brand visibility.",
    tools: "Google Ads, Meta Business Suite, LinkedIn Ads",
    icon: <Target className="text-red-400 w-6 h-6" />,
    imageUrl: "/assets/team/kavya.png",
  },
];
