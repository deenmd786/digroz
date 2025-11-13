import {
  CheckCircle,
  Smartphone,
  Zap,
  Shield,
  Globe,
  Sparkles,
  Code,
  Rocket,
  Server,
  Database,
  Layers,
  Settings,
  ShoppingBag,
  Users,
  CreditCard,
  FileBox,
} from "lucide-react";

/* -----------------------------------
   🟦 STATIC WEBSITE CONTENT
----------------------------------- */
export function getStaticWebContent(subTab) {
  switch (subTab) {
    case "basic":
      return {
        title: "Basic One-Page Website",
        desc: "Perfect for individuals or startups looking for a quick, beautiful online presence.",
        items: [
          { icon: CheckCircle, text: "1 responsive landing page" },
          { icon: Smartphone, text: "Fully mobile optimized" },
          { icon: Zap, text: "Fast loading & SEO ready" },
          { icon: Shield, text: "SSL-secured hosting setup" },
          { icon: Globe, text: "Contact form & Google Map" },
        ],
        price: "Starting from ₹4,999",
      };

    case "animated":
      return {
        title: "Animated / Interactive Website",
        desc: "Engage visitors with scroll animations and motion effects built with GSAP or Framer Motion.",
        items: [
          { icon: Sparkles, text: "Scroll & reveal animations" },
          { icon: Zap, text: "Smooth motion performance" },
          { icon: Code, text: "Developed with React / Next.js" },
          { icon: Shield, text: "SEO-friendly transitions" },
          { icon: Smartphone, text: "Responsive on all devices" },
        ],
        price: "Starting from ₹9,999",
      };

    case "portfolio":
      return {
        title: "Portfolio / Creative Website",
        desc: "Showcase your personal brand or creative work beautifully.",
        items: [
          { icon: Rocket, text: "Creative, custom layouts" },
          { icon: Sparkles, text: "Subtle animations" },
          { icon: Globe, text: "SEO optimized" },
          { icon: Server, text: "Gallery & case study sections" },
          { icon: Shield, text: "Hosting & backups included" },
        ],
        price: "Starting from ₹7,499",
      };

    case "corporate":
      return {
        title: "Corporate / Professional Website",
        desc: "For companies that need a trust-building and elegant online presence.",
        items: [
          { icon: Server, text: "5–10 professional pages" },
          { icon: Database, text: "Custom forms & analytics" },
          { icon: CheckCircle, text: "Tailored UI/UX design" },
          { icon: Zap, text: "Optimized for SEO" },
          { icon: Shield, text: "Advanced protection & speed" },
        ],
        price: "Starting from ₹12,999",
      };

    default:
      return {};
  }
}

/* -----------------------------------
   🟨 DYNAMIC WEBSITE CONTENT (CMS)
----------------------------------- */
export function getDynamicWebContent(subTab) {
  switch (subTab) {
    case "wordpress":
      return {
        title: "WordPress CMS Website",
        desc: "Perfect for blogs, business sites, and small e-commerce stores with easy admin control.",
        items: [
          { icon: Layers, text: "Custom WordPress setup" },
          { icon: CheckCircle, text: "SEO & plugin optimization" },
          { icon: Globe, text: "Theme customization" },
          { icon: Zap, text: "Fast, scalable performance" },
          { icon: Shield, text: "Security & backups included" },
        ],
        price: "Starting from ₹15,999",
      };

    case "headless":
      return {
        title: "Headless CMS Website",
        desc: "Modern architecture using Contentful, Sanity, or Strapi as backend with Next.js frontend.",
        items: [
          { icon: Database, text: "Decoupled backend" },
          { icon: Code, text: "Next.js frontend integration" },
          { icon: Zap, text: "Superfast loading speed" },
          { icon: Shield, text: "High security structure" },
          { icon: Smartphone, text: "API-driven content delivery" },
        ],
        price: "Starting from ₹24,999",
      };

    case "strapi":
      return {
        title: "Strapi / Node CMS Website",
        desc: "Custom CMS with Node.js backend for more flexibility and control.",
        items: [
          { icon: Database, text: "Strapi / Node.js backend" },
          { icon: Layers, text: "Admin dashboard customization" },
          { icon: Zap, text: "Efficient & fast APIs" },
          { icon: Shield, text: "JWT-based authentication" },
          { icon: Code, text: "React frontend integration" },
        ],
        price: "Starting from ₹29,999",
      };

    case "custom":
      return {
        title: "Custom Admin Panel Website",
        desc: "A complete admin system built from scratch to meet specific business requirements.",
        items: [
          { icon: Settings, text: "Role-based admin access" },
          { icon: Database, text: "Custom database models" },
          { icon: Zap, text: "Optimized data performance" },
          { icon: Shield, text: "Top-tier backend security" },
          { icon: Smartphone, text: "Mobile-ready dashboard" },
        ],
        price: "Starting from ₹39,999",
      };

    default:
      return {};
  }
}

/* -----------------------------------
   🟩 E-COMMERCE WEBSITE CONTENT
----------------------------------- */
export function getEcommerceContent(subTab) {
  switch (subTab) {
    case "single":
      return {
        title: "Single Vendor Store",
        desc: "Ideal for small to medium-sized businesses managing their own products.",
        items: [
          { icon: ShoppingBag, text: "Complete store setup" },
          { icon: Shield, text: "Secure payment integration" },
          { icon: Database, text: "Product & inventory control" },
          { icon: Zap, text: "Optimized for conversion" },
          { icon: Smartphone, text: "Mobile-first design" },
        ],
        price: "Starting from ₹29,999",
      };

    case "multi":
      return {
        title: "Multi Vendor Marketplace",
        desc: "Launch your own Amazon-like platform where multiple sellers can list and sell.",
        items: [
          { icon: Users, text: "Vendor registration & dashboards" },
          { icon: Database, text: "Commission & order tracking" },
          { icon: Zap, text: "Secure multi-user system" },
          { icon: Shield, text: "Admin moderation panel" },
          { icon: Globe, text: "SEO-optimized for scaling" },
        ],
        price: "Starting from ₹49,999",
      };

    case "subscription":
      return {
        title: "Subscription Store",
        desc: "Sell memberships, courses, or recurring product plans with integrated billing.",
        items: [
          { icon: CreditCard, text: "Recurring payment setup" },
          { icon: Zap, text: "Automated billing system" },
          { icon: Database, text: "User membership management" },
          { icon: Shield, text: "Secure transactions" },
          { icon: Smartphone, text: "Responsive subscription pages" },
        ],
        price: "Starting from ₹34,999",
      };

    case "digital":
      return {
        title: "Digital Product Store",
        desc: "Sell digital downloads like eBooks, courses, templates, or media files securely.",
        items: [
          { icon: FileBox, text: "Instant download system" },
          { icon: Shield, text: "License & file protection" },
          { icon: Zap, text: "Auto email delivery" },
          { icon: Database, text: "Digital inventory dashboard" },
          { icon: Smartphone, text: "Optimized for digital UX" },
        ],
        price: "Starting from ₹24,999",
      };

    default:
      return {};
  }
}
