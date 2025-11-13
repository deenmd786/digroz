"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "./ContactForm"; // ✅ import extracted form

// Social links data
const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-950 text-gray-300 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base uppercase mb-8 font-semibold leading-7 text-cyan-400">
            contact us
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            LET&apos;S BUILD SOMETHING GREAT TOGETHER.
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Schedule a Free Consultation or Get In Touch
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* ✅ Contact Form Component */}
          <ContactForm />

          {/* Contact Info Column */}
          <div className="p-8 bg-gray-900 border border-cyan-700/30 rounded-lg shadow-lg">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-x-4">
                <FiMail className="h-6 w-6 text-cyan-400" aria-hidden="true" />
                <span className="text-base text-gray-300">
                  info@digitalagency.com
                </span>
              </div>

              <div className="flex items-center gap-x-4">
                <FiPhone className="h-6 w-6 text-cyan-400" aria-hidden="true" />
                <span className="text-base text-gray-300">
                  +1 (555) 123-4667
                </span>
              </div>

              <div className="flex items-start gap-x-4">
                <FiMapPin
                  className="h-6 w-6 text-cyan-400 mt-1"
                  aria-hidden="true"
                />
                <span className="text-base text-gray-300">
                  123 Innovation Drive, Suite 400,
                  <br />
                  Tech City, TX 77801
                </span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 w-full bg-gray-800 rounded-lg flex flex-col items-center justify-center text-center">
              <FiMapPin className="h-10 w-10 text-gray-600 mb-2" />
              <p className="text-gray-600 text-sm">Map Placeholder</p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center gap-x-5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group p-2 rounded-full bg-gray-800 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 transition-all duration-300"
                >
                  <item.icon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <h3 className="text-base font-semibold text-white">
                OPERATING HOURS
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Mon–Fri: 9:00 AM – 6:00 PM EST
              </p>
              <p className="text-sm text-gray-400">Sat–Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
