// components/Footer.jsx

import Link from 'next/link';
import { HiBolt } from 'react-icons/hi2'; // Placeholder logo
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // The new X logo
import Logo from './Logo';

// Link data
const exploreLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Sitemap', href: '/sitemap' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'X', href: '#', icon: FaXTwitter },
  { name: 'Facebook', href: '#', icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="p-8 md:p-12 border border-cyan-700/30 rounded-lg shadow-lg">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: About Us */}
            <div className="md:col-span-12 lg:col-span-5">
              <Logo />
              <p className="mt-2 text-sm text-gray-500">Logline Agenc</p>
              
              <p className="mt-6 text-base leading-7">
                {/* NOTE: Text from image is garbled. Please replace. */}
                Towe yoke pillo spills serry con doio the dorectia of the younge your vour vords re butsy.
              </p>
              
              <address className="mt-6 space-y-3 not-italic">
                <div className="flex items-start gap-x-3">
                  <FiMapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>100 Addre, test 4bres 40 04 90937</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <FiMail className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  <span>email.Ginail/ocsy</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <FiPhone className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  <span>email.ronni//2999 009 9900 760</span>
                </div>
              </address>
            </div>
            
            {/* Column 2: Explore */}
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
              <ul className="mt-4 space-y-3">
                {exploreLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-cyan-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-cyan-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Connect */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
              <div className="mt-4 flex gap-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-base font-semibold text-white">Stay Connected</p>
            </div>
            
          </div>
          
          {/* Copyright Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              {/* NOTE: Text from image "All You or Reserved" is likely a typo. */}
              © 2024 Digital Agency. All You or Reserved.
              <span className="hidden sm:inline"> | </span>
              <br className="sm:hidden" />
              Innovate. Create. Elevate.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}