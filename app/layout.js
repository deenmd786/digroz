import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Script from "next/script";
import MetaPixel from "./components/MetaPixel";
import { Suspense } from "react";

// -------------------------------
// ✅ Mobile Viewport
// -------------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// -------------------------------
// ✅ GLOBAL METADATA
// -------------------------------
export const metadata = {
  metadataBase: new URL("https://www.digroz.com"),

  title: {
    default:
      "Best Digital Marketing Agency, Web Development & SEO Company | Digroz",
    template: "%s | Digroz",
  },

  description:
    "Digroz is a leading digital marketing agency and website development company offering SEO, performance marketing, mobile app development, business automation and complete branding solutions.",

  keywords: [
    "best digital marketing agency",
    "website design company India",
    "SEO services India",
    "performance marketing agency Delhi",
    "Digroz",
  ],

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Best Digital Marketing Agency & Website Development Company | Digroz",
    description:
      "Grow your business with Digroz — websites, apps, automation, SEO & ads.",
    url: "https://www.digroz.com",
    siteName: "Digroz",
    images: ["/digroz-banner.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Digital Marketing Agency & Web Development Company | Digroz",
    description:
      "Digroz helps businesses grow with websites, apps, automation, SEO & paid ads.",
    images: ["/digroz-banner.png"],
  },
};

// -------------------------------
// ✅ LAYOUT
// -------------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">

        {/* 🔥 META PIXEL (APP ROUTER SAFE) */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1340134777404430');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* 🔥 ORGANIZATION SCHEMA */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digroz",
              url: "https://www.digroz.com",
              logo: "https://www.digroz.com/digroz-banner.png",
              sameAs: [
                "https://www.instagram.com/digrozagency",
                "https://www.linkedin.com/company/digroz",
              ],
            }),
          }}
        />

        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>

        <Header />
        <main>
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
