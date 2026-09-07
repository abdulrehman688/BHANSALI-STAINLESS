"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Grades", href: "#grades" },
    { label: "Specifications", href: "#specifications" },
    { label: "Certifications", href: "#certifications" },
    { label: "Export", href: "#export" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white py-5 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label="Bhansali Stainless home">
          <div className="w-10 h-10 bg-[#1565C0] rounded flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden="true">
              <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="2.5"/>
              <circle cx="20" cy="20" r="7" stroke="white" strokeWidth="2"/>
              <circle cx="20" cy="6.5" r="2" fill="white"/>
              <circle cx="33.5" cy="20" r="2" fill="white"/>
              <circle cx="20" cy="33.5" r="2" fill="white"/>
              <circle cx="6.5" cy="20" r="2" fill="white"/>
            </svg>
          </div>
          <div>
            <div className="text-[#0D2353] font-bold text-base leading-tight">BHANSALI</div>
            <div className="text-[#1565C0] text-xs font-semibold tracking-widest">STAINLESS</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-[#1565C0] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#enquiry"
          className="hidden lg:flex items-center gap-2 bg-[#1565C0] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#0D47A1] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4">
          <nav className="container-custom flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-[#1565C0] font-medium py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquiry"
              className="mt-2 bg-[#1565C0] text-white px-4 py-2.5 rounded text-sm font-semibold text-center hover:bg-[#0D47A1] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
