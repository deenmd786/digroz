import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata = {
  title: "Digroz – Unlock Digital Boundries",
  description:
    "Digroz provides professional web development, app development, and digital marketing solutions to help your business grow online effectively.",
  keywords:
    "Digroz, web development, app development, digital marketing, SEO, PPC, branding, website design, business growth solutions",
  authors: [{ name: "Digroz", url: "https://www.digroz.com" }],
  robots: "index, follow",
  alternates: { canonical: "https://www.digroz.com/" },

  // ✅ Favicon setup
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ✅ Twitter meta
  twitter: {
    site: "@digroz",
    creator: "@digroz",
    card: "summary_large_image",
    title: "Digroz – Unlock Digital Boundries",
    description:
      "Digroz provides web, app, and digital marketing solutions to elevate your business online.",
    images: ["/digroz-banner.png"], // relative path works fine in Next.js
  },

  // ✅ OpenGraph meta
  openGraph: {
    siteName: "Digroz",
    title: "Digroz – Web, App & Marketing Solutions for Digital Growth",
    description:
      "Empowering businesses with innovative web design, app development, and performance marketing solutions.",
    images: [
      {
        url: "/digroz-banner.png", // relative path auto-resolves to full domain
        width: 1200,
        height: 630,
        alt: "Digroz – Unlock Digital Boundries",
      },
    ],
    type: "website",
    locale: "en_IN",
    url: "https://www.digroz.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Optional Google AdSense */}
        {/* <meta name="google-adsense-account" content="ca-pub-xxxxxxx" /> */}

        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digroz",
              url: "https://www.digroz.com/",
              logo: "https://www.digroz.com/digroz-banner.png",
              sameAs: [
                "https://www.facebook.com/digroz",
                "https://www.instagram.com/digroz",
                "https://www.linkedin.com/company/digroz",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8851253661",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "West Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* ✅ Sitelinks Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: [
                "Home",
                "Services",
                "Portfolio",
                "Contact",
                "Blog",
                "Case Studies",
              ],
              url: [
                "https://www.digroz.com/",
                "https://www.digroz.com#services",
                "https://www.digroz.com#portfolio",
                "https://www.digroz.com#contact",
                "https://www.digroz.com#blog",
                "https://www.digroz.com#case-studies",
              ],
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
