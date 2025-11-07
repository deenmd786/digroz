// data/knowledgeData.js
import { FaRobot, FaChartLine, FaBullhorn } from "react-icons/fa";

export const categories = [
  { name: "All" },
  { name: "AI" },
  { name: "Marketing" },
  { name: "Design" },
];

export const posts = [
  {
    title: "AI Tools for Content Creation",
    category: "AI",
    description:
      "Explore cutting-edge AI tools revolutionizing how creators produce engaging content.",
    slug: "ai-tools-for-content", // ✅ Important
    headerIcon: FaRobot,
    mainIcon: FaRobot,
    content: `
      Artificial Intelligence (AI) has transformed the content industry. From writing assistants
      to image generation tools, AI helps streamline workflows, boost creativity, and improve engagement.
      Tools like ChatGPT, Jasper, and Midjourney empower marketers and creators to produce high-quality
      material efficiently. However, using AI responsibly with human creativity remains essential.
    `,
  },
  {
    title: "Data-Driven Marketing Strategies",
    category: "Marketing",
    description:
      "Harness the power of analytics to craft smarter marketing decisions and drive ROI.",
    slug: "data-driven-marketing",
    headerIcon: FaChartLine,
    mainIcon: FaChartLine,
    content: `
      In the digital era, data analytics drives marketing success. Understanding consumer behavior,
      segmenting audiences, and optimizing campaigns through insights can significantly improve
      conversion rates and brand loyalty.
    `,
  },
  {
    title: "Building a Powerful Brand Message",
    category: "Design",
    description:
      "Learn how storytelling and design combine to create impactful brand communication.",
    slug: "building-powerful-brand-message",
    headerIcon: FaBullhorn,
    mainIcon: FaBullhorn,
    content: `
      A strong brand message resonates with your audience. By aligning visuals, tone, and values,
      you can build lasting trust and recognition in your market.
    `,
  },
];
