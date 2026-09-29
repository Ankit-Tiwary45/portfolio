"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function WhyMe() {
  return (
    <section id="whyme" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FF6B4A] text-white neo-border px-5 py-2 rounded-full neo-shadow-sm text-sm font-black uppercase tracking-wider -rotate-1">
          <Sparkles className="w-4 h-4 text-[#FFE767]" />
          <span>THE HONEST PITCH</span>
        </div>

        {/* Title */}
        <h2 className="font-heading text-4xl sm:text-6xl font-black text-[#121212] tracking-tight">
          WHY ANKIT?
        </h2>

        {/* Main Pitch Scrapbook Card */}
        <div className="bg-[#FFFDF6] neo-border neo-shadow-xl p-8 sm:p-12 rounded-3xl -rotate-1 hover:rotate-0 transition-transform duration-300 relative space-y-6 text-left sm:text-center">
          
          {/* Top Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-8 washi-tape-yellow rotate-[-2deg]" />

          <p className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121212] leading-snug">
            "Honestly — I know I still have a lot to learn. What I bring is curiosity, consistency, and the determination to figure things out."
          </p>

          <p className="font-handwriting text-3xl sm:text-4xl font-bold text-[#FF6B4A] leading-relaxed">
            Give me the real problem and a bit of trust, and I will figure out the rest.
          </p>

          {/* Key attributes checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t-2 border-dashed border-black/20 text-center">
            <div className="p-3 bg-[#FFE767] neo-border rounded-xl font-black text-xs uppercase tracking-wider">
              ✦ Structured DSA Thinking
            </div>
            <div className="p-3 bg-[#8ECAE6] neo-border rounded-xl font-black text-xs uppercase tracking-wider">
              ✦ Fast Documentation Learner
            </div>
            <div className="p-3 bg-[#A8E6CF] neo-border rounded-xl font-black text-xs uppercase tracking-wider">
              ✦ Full-Stack Project Execution
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-black text-black bg-[#FF6B4A] hover:bg-[#ff5530] neo-border neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-2xl uppercase tracking-wider"
            >
              <span>BUILD SOMETHING WITH ME</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
