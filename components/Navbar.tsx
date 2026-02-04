"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-md border-b border-cyan-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white hover:text-cyan-100 transition-colors">
          Splash Tours
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#tours" className="text-white hover:text-cyan-100 transition-colors duration-200">Tours</a>
          <a href="#pricing" className="text-white hover:text-cyan-100 transition-colors duration-200">Pricing</a>
          <a href="#gallery" className="text-white hover:text-cyan-100 transition-colors duration-200">Gallery</a>
          <a href="#contact" className="text-white hover:text-cyan-100 transition-colors duration-200">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-cyan-700 rounded-lg transition-colors"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cyan-700 bg-gradient-to-r from-cyan-600 to-blue-600">
          <nav className="flex flex-col gap-0">
            <a
              href="#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:bg-cyan-700 hover:text-cyan-100 transition-colors border-b border-cyan-700"
            >
              Tours
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:bg-cyan-700 hover:text-cyan-100 transition-colors border-b border-cyan-700"
            >
              Pricing
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:bg-cyan-700 hover:text-cyan-100 transition-colors border-b border-cyan-700"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:bg-cyan-700 hover:text-cyan-100 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
