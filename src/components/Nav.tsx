"use client";

import React, { useState, useEffect } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 lg:px-32 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md py-2 md:py-3"
          : "bg-white/90 backdrop-blur-md py-4 md:py-5"
          }`}
      >
        <a
          href="/"
          className="font-serif text-lg font-normal tracking-[0.12em] uppercase text-text decoration-none flex items-center"
        >
          <img
            src="/logo-CS.png"
            alt="CS Logo"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-5 md:h-6" : "h-6 md:h-8"
              }`}
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {/* Home */}
          <li>
            <a
              href="/"
              className="text-[11px] font-light tracking-[0.12em] uppercase text-dark-muted hover:text-text transition-colors duration-200"
            >
              Home
            </a>
          </li>

          {/* Architecture Dropdown */}
          <li className="relative group py-2">
            <a
              href="/architecture"
              className="flex items-center gap-1 text-[11px] font-light tracking-[0.12em] uppercase text-dark-muted hover:text-text transition-colors duration-200"
            >
              Architecture
              <svg
                className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180 opacity-60"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white border border-light-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50 list-none m-0">
              <li>
                <a
                  href="/architecture/commercial"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="/architecture/residential"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Residential
                </a>
              </li>
              <li>
                <a
                  href="/architecture/hospitality"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Hospitality
                </a>
              </li>
              <li>
                <a
                  href="/architecture/3dproject"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  3D Project
                </a>
              </li>
            </ul>
          </li>

          {/* Design Dropdown */}
          <li className="relative group py-2">
            <button className="flex items-center gap-1 text-[11px] font-light tracking-[0.12em] uppercase text-dark-muted hover:text-text transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 outline-none">
              Design
              <svg
                className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180 opacity-60"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-44 bg-white border border-light-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50 list-none m-0">
              <li>
                <a
                  href="/design/interior"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Interior
                </a>
              </li>
              <li>
                <a
                  href="/design/furniture"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Furniture
                </a>
              </li>
            </ul>
          </li>

          {/* Creative Dropdown */}
          <li className="relative group py-2">
            <button className="flex items-center gap-1 text-[11px] font-light tracking-[0.12em] uppercase text-dark-muted hover:text-text transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 outline-none">
              Creative
              <svg
                className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180 opacity-60"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-44 bg-white border border-light-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50 list-none m-0">
              <li>
                <a
                  href="/creative/exhibition"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Exhibition
                </a>
              </li>
              <li>
                <a
                  href="/creative/publication"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Publication
                </a>
              </li>
            </ul>
          </li>

          {/* Videos */}
          <li>
            <a
              href="/videos"
              className="text-[11px] font-light tracking-[0.12em] uppercase text-dark-muted hover:text-text transition-colors duration-200"
            >
              Videos
            </a>
          </li>

          {/* Studio Dropdown */}
          <li className="relative group py-2">
            <button className="flex items-center gap-1 text-[11px] font-light tracking-[0.12em] uppercase text-dark-muted hover:text-text transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 outline-none">
              Studio
              <svg
                className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180 opacity-60"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-44 bg-white border border-light-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50 list-none m-0">
              <li>
                <a
                  href="/studio/about-us"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/studio/services"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/studio/contact"
                  className="block px-4 py-2 text-left text-[10px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text hover:bg-warm-gray transition-colors duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="/studio/contact"
          className="hidden md:inline-block text-[11px] font-light tracking-[0.12em] uppercase text-text border border-text px-5 py-2 hover:bg-text hover:text-white transition-all duration-200"
        >
          Konsultasi
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5 focus:outline-none bg-transparent border-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-text transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-start px-8 pt-24 pb-8 overflow-y-auto transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col gap-6 list-none m-0 p-0 w-full">
          {/* Home */}
          <li>
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-light tracking-[0.15em] uppercase text-dark-muted hover:text-text py-2"
            >
              Home
            </a>
          </li>

          {/* Architecture Dropdown */}
          <li className="border-b border-light-border/40 pb-2">
            <button
              onClick={() => toggleMobileDropdown("architecture")}
              className="flex items-center justify-between w-full text-base font-light tracking-[0.15em] uppercase text-dark-muted hover:text-text py-2 bg-transparent border-none text-left cursor-pointer outline-none"
            >
              Architecture
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === "architecture" ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-350 ${openMobileDropdown === "architecture" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col gap-3 list-none pl-4 m-0 py-2">
                <li>
                  <a
                    href="/architecture/commercial"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Commercial
                  </a>
                </li>
                <li>
                  <a
                    href="/architecture/residential"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Residential
                  </a>
                </li>
                <li>
                  <a
                    href="/architecture/hospitality"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Hospitality
                  </a>
                </li>
                <li>
                  <a
                    href="/architecture/3dproject"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    3D Project
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Design Dropdown */}
          <li className="border-b border-light-border/40 pb-2">
            <button
              onClick={() => toggleMobileDropdown("design")}
              className="flex items-center justify-between w-full text-base font-light tracking-[0.15em] uppercase text-dark-muted hover:text-text py-2 bg-transparent border-none text-left cursor-pointer outline-none"
            >
              Design
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === "design" ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-350 ${openMobileDropdown === "design" ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col gap-3 list-none pl-4 m-0 py-2">
                <li>
                  <a
                    href="/design/interior"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Interior
                  </a>
                </li>
                <li>
                  <a
                    href="/design/furniture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Furniture
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Creative Dropdown */}
          <li className="border-b border-light-border/40 pb-2">
            <button
              onClick={() => toggleMobileDropdown("creative")}
              className="flex items-center justify-between w-full text-base font-light tracking-[0.15em] uppercase text-dark-muted hover:text-text py-2 bg-transparent border-none text-left cursor-pointer outline-none"
            >
              Creative
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === "creative" ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-350 ${openMobileDropdown === "creative" ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col gap-3 list-none pl-4 m-0 py-2">
                <li>
                  <a
                    href="/creative/exhibition"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Exhibition
                  </a>
                </li>
                <li>
                  <a
                    href="/creative/publication"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Publication
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Videos */}
          <li>
            <a
              href="/videos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-light tracking-[0.15em] uppercase text-dark-muted hover:text-text py-2"
            >
              Videos
            </a>
          </li>

          {/* Studio Dropdown */}
          <li className="border-b border-light-border/40 pb-2">
            <button
              onClick={() => toggleMobileDropdown("studio")}
              className="flex items-center justify-between w-full text-base font-light tracking-[0.15em] uppercase text-dark-muted hover:text-text py-2 bg-transparent border-none text-left cursor-pointer outline-none"
            >
              Studio
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === "studio" ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-350 ${openMobileDropdown === "studio" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col gap-3 list-none pl-4 m-0 py-2">
                <li>
                  <a
                    href="/studio/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/studio/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/studio/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-light tracking-[0.15em] uppercase text-muted hover:text-text"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="mt-8">
            <a
              href="/studio/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center text-xs font-light tracking-[0.15em] uppercase text-text border border-text px-6 py-3.5 hover:bg-text hover:text-white transition-all duration-200"
            >
              Konsultasi
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
