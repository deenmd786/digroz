"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "./ContactForm"; 

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/company/digroz" },
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/digroz59" },
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/people/Digroz/61583593868779/" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/digrozagency/" },
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

        {/* Main Grid */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Left: Contact Form */}
          <ContactForm />

          {/* Right: Contact Info + Map */}
          <div className="p-8 bg-gray-900 border border-cyan-700/30 rounded-lg shadow-lg">

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-x-4">
                <FiMail className="h-6 w-6 text-cyan-400" />
                <span className="text-base text-gray-300">
                  digroz59@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-x-4">
                <FiPhone className="h-6 w-6 text-cyan-400" />
                <span className="text-base text-gray-300">
                  +91 8851253661
                </span>
              </div>

              <div className="flex items-start gap-x-4">
                <FiMapPin className="h-6 w-6 text-cyan-400 mt-1" />
                <span className="text-base text-gray-300">
                  6-B/3, Bhim Enclave,
                  <br />
                  West Delhi - 110059
                </span>
              </div>
            </div>

            {/* Responsive Google Map */}
            <div className="mt-8 w-full h-56 rounded-lg overflow-hidden border border-cyan-700/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.571393181241!2d77.0518764!3d28.6426052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05630f93ffbd%3A0xaede405dd32c6374!2sDigroz!5e0!3m2!1sen!2sin!4v1763113539628!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
