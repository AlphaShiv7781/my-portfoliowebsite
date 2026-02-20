"use client";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Smooth scroll and active link highlight
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return { href: link.href, top: 0 };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: rect.top + window.scrollY };
      });
      const scrollPos = window.scrollY + 80;
      let current = "#home";
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPos >= offsets[i].top) {
          current = offsets[i].href;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-xl font-bold neon select-none">Portfolio</span>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-2 py-1 text-gray-300 font-medium transition-all duration-300 hover:text-[var(--accent)] focus:outline-none ${active === link.href ? 'neon' : ''}`}
                style={{ background: "none", border: "none" }}
              >
                <span>{link.label}</span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 rounded neon-border transition-all duration-300 ${active === link.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                  aria-hidden="true"
                ></span>
              </button>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass shadow-lg animate-fadeInUp">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-3 py-2 text-gray-300 font-medium transition-all duration-300 hover:text-[var(--accent)] focus:outline-none ${active === link.href ? 'neon' : ''}`}
                style={{ background: "none", border: "none" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;