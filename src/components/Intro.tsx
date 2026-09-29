"use client";

import { Quote, Sparkles, GraduationCap, Award } from "lucide-react";

export default function Intro() {
  return (
    <section id="intro" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Top Cards: 10th & 12th Academic Performance from Resume */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* 10th Performance Card */}
          <div className="bg-[#A8E6CF] neo-border neo-shadow-lg p-6 rounded-2xl relative -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group">
            <div className="absolute -top-3 left-6 w-20 h-6 washi-tape rotate-[-3deg]" />
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 bg-white neo-border px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#FF6B4A]" />
                10th Performance
              </span>
              <span className="font-handwriting text-base font-bold text-black/70">
                CBSE 2020
              </span>
            </div>
            
            <div className="my-2">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight group-hover:scale-105 transition-transform origin-left">
                  93.6%
                </span>
                <span className="text-xs font-extrabold bg-[#FFE767] neo-border px-2 py-0.5 rounded text-black">
                  Secondary
                </span>
              </div>
              <p className="font-heading font-extrabold text-base text-[#121212] mt-2">
                B.D. Public School, Patna
              </p>
              <p className="text-xs font-bold text-black/70 mt-0.5">
                Central Board of Secondary Education (2019 – 2020)
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-dashed border-black/20 flex items-center justify-between text-xs font-extrabold text-black/80">
              <span>✦ High Distinction</span>
              <span className="font-handwriting text-sm text-[#FF6B4A] font-bold">Top Score</span>
            </div>
          </div>

          {/* 12th Performance Card */}
          <div className="bg-[#FFE767] neo-border neo-shadow-lg p-6 rounded-2xl relative rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group">
            <div className="absolute -top-3 right-6 w-20 h-6 washi-tape-yellow rotate-[3deg]" />
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 bg-white neo-border px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#FF6B4A]" />
                12th Performance
              </span>
              <span className="font-handwriting text-base font-bold text-black/70">
                CBSE 2022
              </span>
            </div>

            <div className="my-2">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight group-hover:scale-105 transition-transform origin-left">
                  82.8%
                </span>
                <span className="text-xs font-extrabold bg-[#8ECAE6] neo-border px-2 py-0.5 rounded text-black">
                  Sr. Secondary
                </span>
              </div>
              <p className="font-heading font-extrabold text-base text-[#121212] mt-2">
                B.D. Public School, Patna
              </p>
              <p className="text-xs font-bold text-black/70 mt-0.5">
                Central Board of Secondary Education (2020 – 2022)
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-dashed border-black/20 flex items-center justify-between text-xs font-extrabold text-black/80">
              <span>✦ Senior Secondary</span>
              <span className="font-handwriting text-sm text-[#FF6B4A] font-bold">First Division</span>
            </div>
          </div>

        </div>

        {/* Intro Scrapbook Container */}
        <div className="bg-[#FFFDF6] neo-border neo-shadow-xl p-6 sm:p-10 rounded-2xl relative -rotate-1 hover:rotate-0 transition-transform duration-300">
          
          {/* Top tape */}
          <div className="absolute -top-4 right-12 w-28 h-8 washi-tape rotate-[4deg]" />
          
          {/* Title Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFE767] neo-border px-4 py-1.5 rounded-full neo-shadow-sm font-heading font-black text-sm uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>HELLO, I'M ANKIT</span>
          </div>

          {/* Large Quote block */}
          <div className="relative pl-6 sm:pl-10 border-l-4 border-[#FF6B4A] space-y-4">
            <Quote className="absolute -top-3 -left-5 w-8 h-8 text-[#FF6B4A] bg-[#FFFDF6] p-1 rounded-full border border-black" />
            
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#121212] leading-tight">
              "I don't claim to know everything. What I can promise is that I learn fast, adapt quickly, and don't give up when a problem gets difficult."
            </h2>

            <p className="text-base sm:text-lg text-[#333] font-medium leading-relaxed">
              Developer blending Web Development with strong problem-solving. Whether it's crafting responsive full-stack applications or breaking down complex data structure algorithms, I aim for solutions that are structured, clean, and reliable.
            </p>
          </div>

          {/* Handwritten Annotation footer */}
          <div className="mt-8 pt-6 border-t border-dashed border-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-handwriting text-2xl font-bold text-[#FF6B4A]">
              And here are the stories behind the projects — the messy, real version, not the LinkedIn version.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8ECAE6] hover:bg-[#70D6FF] neo-border neo-shadow-sm rounded-lg text-xs font-black text-black whitespace-nowrap"
            >
              EXPLORE PROJECTS →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

