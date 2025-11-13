"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About Us", href: "#our-story" },
    { name: "Contact Us", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        
        {/* Logo */}
        <Link
        href={'/'}
         className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="bg-cyan-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-cyan-400 transition-all duration-200 shadow-sm"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          
          aria-label="Toggle Menu"
          className="lg:hidden text-gray-200 hover:text-white transition-colors duration-200"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a1120]/95 backdrop-blur-xl border-t border-gray-800 shadow-lg rounded-b-2xl mx-3 sm:mx-6 mt-1 p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
