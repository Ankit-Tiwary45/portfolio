"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#121212] text-[#FDECDC] pt-16 pb-12 px-4 md:px-8 border-t-4 border-black mt-20">
      
      {/* Decorative Torn Paper Border Top */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-[#FDECDC] clip-torn-paper pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-white/15">
          
          {/* Large Handwritten Thank You & Identity */}
          <div className="space-y-2">
            <p className="font-handwriting text-5xl sm:text-7xl font-bold text-[#FFE767]">
              Thank You
            </p>
            <p className="text-sm font-bold text-white/70">
              Thank you for your time and attention. I look forward to connecting.
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight pt-2">
              ANKIT TIWARY
            </h2>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 bg-[#FF6B4A] text-black font-black text-xs uppercase neo-border rounded-xl hover:bg-[#FFE767] active:bg-[#FFE767] transition-all cursor-pointer touch-manipulation select-none active:translate-y-0.5 z-10"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-bold text-white/80">
          
          <p className="flex items-center gap-1.5 font-medium text-center sm:text-left">
            <span>Built with cream, orange and a lot of curiosity.</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ankit-Tiwary45"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 hover:bg-[#FF6B4A] hover:text-black rounded-lg transition-colors border border-white/20 cursor-pointer touch-manipulation"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-tiwary-99880a321"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 hover:bg-[#8ECAE6] hover:text-black rounded-lg transition-colors border border-white/20 cursor-pointer touch-manipulation"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:ankittiwary968@gmail.com"
              className="p-2.5 bg-white/10 hover:bg-[#FFE767] hover:text-black rounded-lg transition-colors border border-white/20 cursor-pointer touch-manipulation"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-white/60">
            © {currentYear} ANKIT TIWARY. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
