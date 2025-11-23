import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

// Quick navigation
const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/digroz",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/digro_z/",
    icon: FaInstagram,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/digroz59",
    icon: FaXTwitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Digroz/61583593868779/",
    icon: FaFacebookF,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 sm:py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 border border-cyan-700/30 rounded-2xl shadow-xl backdrop-blur-sm">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Column 1 - About */}
            <div className="md:col-span-12 lg:col-span-5">
              <Logo />
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                Digroz empowers brands and businesses to grow digitally through
                cutting-edge websites, mobile apps, and marketing strategies.
                Let’s innovate, create, and elevate your digital presence.
              </p>

              <address className="mt-6 space-y-3 not-italic">
                <div className="flex items-start gap-x-3">
                  <FiMapPin
                    className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>6-B/3, Bhim Enclave, Uttam Nagar, New Delhi – 110059</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <FiMail className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  <Link
                    href="mailto:digroz59@gmail.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    digroz59@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-x-3">
                  <FiPhone className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  <Link
                    href="tel:+918851253661"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    +91 88512 53661
                  </Link>
                </div>
              </address>
            </div>

            {/* Column 2 - Explore */}
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                {exploreLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Connect */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Connect
              </h3>
              <div className="mt-4 flex gap-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-base font-semibold text-white">
                Stay Connected
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Digroz. All Rights Reserved.{" "}
              <span className="hidden sm:inline">|</span>{" "}
              <span className="text-cyan-400 font-medium">
                Innovate. Create. Elevate.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
