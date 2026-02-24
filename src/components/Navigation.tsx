"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#maze", label: "Problems" },
  { href: "#thread", label: "Solution" },
  { href: "#lab", label: "Approach" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = ["maze", "thread", "lab", "entry"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8">
      <div
        className={`
          max-w-6xl mx-auto mt-4 flex items-center justify-between
          transition-all duration-500 ease-out
          ${scrolled ? "mt-3" : "mt-5"}
        `}
      >
        {/* Brand Chip — left */}
        <a
          href="/"
          className="
            relative group flex items-center gap-2.5 px-5 py-2.5
            rounded-xl
            bg-white/[0.04] border border-white/[0.08]
            backdrop-blur-xl
            transition-all duration-300
            hover:bg-white/[0.07] hover:border-white/[0.14]
            hover:shadow-[0_0_20px_-4px_rgba(124,58,237,0.2)]
          "
        >
          {/* Decorative accent dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 gradient-accent" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-brand-white/90 group-hover:text-brand-white transition-colors">
            Labrynth
          </span>
        </a>

        {/* Center Capsule — navigation links */}
        <div
          className="
            hidden md:flex items-center gap-1
            px-1.5 py-1.5
            rounded-xl
            bg-white/[0.04] border border-white/[0.08]
            backdrop-blur-xl
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative px-5 py-2 rounded-lg
                text-[13px] font-medium tracking-wide
                transition-all duration-300
                ${
                  activeSection === link.href
                    ? "text-brand-white bg-white/[0.08]"
                    : "text-brand-muted/80 hover:text-brand-white hover:bg-white/[0.06]"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Pill — right */}
        <div className="flex items-center gap-3">
          <a
            href="#entry"
            className={`
              hidden md:inline-flex items-center
              px-5 py-2.5 rounded-xl
              text-[13px] font-medium tracking-wide
              transition-all duration-300
              ${
                activeSection === "#entry"
                  ? "gradient-accent text-brand-white shadow-[0_0_20px_-4px_rgba(124,58,237,0.35)]"
                  : "text-brand-white/90 bg-brand-purple/20 border border-brand-purple/30 hover:bg-brand-purple/30 hover:border-brand-purple/50 hover:shadow-[0_0_20px_-4px_rgba(124,58,237,0.25)]"
              }
            `}
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden flex items-center justify-center
              w-10 h-10 rounded-xl
              bg-white/[0.04] border border-white/[0.08]
              backdrop-blur-xl text-brand-white/80
              transition-all duration-300
              hover:bg-white/[0.07]
            "
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown — anchored to the right under the hamburger */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-[400ms] ease-out
          flex justify-end
          ${isOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div
          className="
            w-48
            rounded-2xl
            bg-brand-obsidian/90 border border-white/[0.08]
            backdrop-blur-2xl
            p-2
          "
        >
          {[...navLinks, { href: "#entry", label: "Contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                block px-5 py-3 rounded-xl
                text-sm font-medium
                transition-all duration-200
                ${
                  activeSection === link.href
                    ? "text-brand-white bg-white/[0.06]"
                    : "text-brand-muted/80 hover:text-brand-white hover:bg-white/[0.05]"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
