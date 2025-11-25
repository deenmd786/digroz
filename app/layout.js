import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// -------------------------------
// ✅ Mobile Viewport
// -------------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// -------------------------------
// ✅ GLOBAL METADATA (ADVANCED SEO + PWA READY)
// -------------------------------
export const metadata = {
  metadataBase: new URL("https://www.digroz.com"),

  // ----------------------------------------------------
  // 🎯 HIGH-INTENT TITLE WITH BETTER CLICK-THROUGH
  // ----------------------------------------------------
  title: {
    default:
      "Best Digital Marketing Agency, Web Development & SEO Company | Digroz",
    template: "%s | Digroz",
  },

  // ----------------------------------------------------
  // 🎯 BETTER DESCRIPTION (Google NLP Optimized)
  // ----------------------------------------------------
  description:
    "Digroz is a leading digital marketing agency and website development company offering SEO, performance marketing, mobile app development, business automation and complete branding solutions for startups and enterprises.",

  // ----------------------------------------------------
  // 🎯 Expanded High-Intent Keywords
  // ----------------------------------------------------
  keywords: [
    "best digital marketing agency",
    "website design company India",
    "SEO services India",
    "performance marketing agency Delhi",
    "custom web development",
    "Next.js developer",
    "React development agency",
    "mobile app development company",
    "business automation services",
    "ecommerce website development",
    "branding agency Delhi",
    "Google Ads management",
    "social media marketing company",
    "Digroz"
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.digroz.com/",
  },

  // ----------------------------------------------------
  // 🔥 UPDATED FAVICON + ANDROID + IOS COMPATIBILITY
  // ----------------------------------------------------
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },

  manifest: "/site.webmanifest", // <---- IMPORTANT FOR ANDROID CHROME

  // -------------------------------
  // 🔥 Open Graph
  // -------------------------------
  openGraph: {
    title:
      "Best Digital Marketing Agency & Website Development Company | Digroz",
    description:
      "Grow your business with Digroz — websites, apps, automation, SEO, Google ads, social media marketing and complete branding.",
    url: "https://www.digroz.com",
    siteName: "Digroz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/digroz-banner.png",
        width: 1200,
        height: 630,
        alt: "Digroz – Digital Agency for Web, App, Automation & Marketing",
      },
    ],
  },

  // -------------------------------
  // 🔥 Twitter Card
  // -------------------------------
  twitter: {
    card: "summary_large_image",
    title:
      "Best Digital Marketing Agency & Web Development Company | Digroz",
    description:
      "Digroz helps businesses grow with websites, apps, automation, SEO, paid ads & branding.",
    images: ["/digroz-banner.png"],
    site: "@digroz",
    creator: "@digroz",
  },
};

// -------------------------------
// ✅ LAYOUT
// -------------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* -------------------------------
        // 🔥 IMPORTANT FOR PWA + ANDROID
        // ------------------------------- */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />

        {/* -------------------------------
        // 🔥 ORGANIZATION SCHEMA
        // ------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digroz",
              legalName: "Digroz Technologies",
              url: "https://www.digroz.com",
              logo: "https://www.digroz.com/digroz-banner.png",
              description:
                "Digroz builds high-quality websites, mobile apps, automation systems and digital marketing campaigns.",
              sameAs: [
                "https://www.facebook.com/people/Digroz/61583593868779/",
                "https://www.instagram.com/digrozagency",
                "https://www.linkedin.com/company/digroz"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8851253661",
                contactType: "customer support",
                availableLanguage: ["English", "Hindi"],
                areaServed: "IN",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "West Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              }
            }),
          }}
        />
      </head>

      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
