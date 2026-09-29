"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#intro" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Certifications", href: "#certifications" },
    { name: "How I Work", href: "#howiwork" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Achievements", href: "#achievements" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header className="fixed top-3 inset-x-0 z-[100] px-3 sm:px-6 md:px-8 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-3.5 sm:px-4 py-2.5 rounded-2xl neo-border neo-shadow-sm transition-all duration-300 ${
          isScrolled
            ? "bg-[#FDECDC]/95 backdrop-blur-md border-black"
            : "bg-[#FFF6EC] border-black"
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          className="group flex items-center gap-1.5 font-heading text-xl md:text-2xl font-black tracking-tight cursor-pointer touch-manipulation border-none bg-transparent p-0 text-left"
        >
          <span className="bg-[#FF6B4A] text-white px-2 py-0.5 rounded border border-black -rotate-2 group-hover:rotate-0 transition-transform">
            ANKIT
          </span>
          <span className="text-[#121212] font-handwriting text-2xl font-bold text-[#FF6B4A]">.</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="px-2.5 py-1 text-xs xl:text-sm font-bold text-[#121212] hover:text-[#FF6B4A] hover:bg-[#FFE767]/40 rounded transition-all duration-150 relative group cursor-pointer border-none bg-transparent"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs md:text-sm font-black text-black bg-[#FF6B4A] hover:bg-[#ff5530] neo-border neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all rounded-lg cursor-pointer touch-manipulation border-none"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-black bg-[#FFE767] active:bg-[#fbdc32] neo-border rounded-lg neo-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer touch-manipulation select-none relative z-[110]"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-[#FFF6EC] neo-border neo-shadow-lg rounded-2xl p-4 sm:p-5 animate-slide-down z-[100] relative">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3.5 py-3 text-sm font-bold text-[#121212] hover:bg-[#FFE767] active:bg-[#FFE767] rounded-lg border border-transparent hover:border-black transition-all cursor-pointer touch-manipulation flex items-center justify-between border-none bg-transparent"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#FF6B4A] font-black">→</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-2 w-full text-center px-4 py-3 text-sm font-black text-black bg-[#FF6B4A] neo-border neo-shadow-sm rounded-xl cursor-pointer touch-manipulation active:translate-y-0.5 border-none"
            >
              LET'S TALK →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
