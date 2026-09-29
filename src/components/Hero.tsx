"use client";

import Image from "next/image";
import { ArrowRight, Download, Sparkles, Code2, Terminal, CheckCircle2, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 px-4 md:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background paper texture & decorative scrapbook doodles */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      {/* Decorative Floating Stickers */}
      <div className="hidden lg:block absolute top-28 left-8 rotate-[-12deg] bg-[#FF6B4A] text-white font-extrabold text-xs px-3 py-1.5 neo-border neo-shadow-sm rounded-md z-10 animate-bounce duration-1000">
        ✦ Software Engineer
      </div>
      <div className="hidden lg:block absolute bottom-20 left-12 rotate-[8deg] bg-[#A2D2FF] text-black font-bold text-xs px-3 py-1.5 neo-border neo-shadow-sm rounded-md z-10">
        ⚡ B.Tech CSE @ LNCT
      </div>
      <div className="hidden lg:block absolute top-36 right-10 rotate-[12deg] bg-[#FF99C8] text-black font-bold text-xs px-3 py-1.5 neo-border neo-shadow-sm rounded-md z-10">
        🏢 Working @ Epam Systems
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Huge Bold Typography & Copywriting */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Top greeting badge */}
          <div className="inline-flex items-center gap-2 self-start bg-[#FFE767] text-black px-3.5 py-1.5 rounded-full neo-border neo-shadow-sm text-xs md:text-sm font-extrabold uppercase tracking-wide -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>HI, I'M ANKIT TIWARY 👋</span>
          </div>

          {/* Main Title Heading */}
          <div className="space-y-2">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#121212] leading-[1.05]">
              ANKIT <br />
              <span className="relative inline-block text-[#FF6B4A]">
                TIWARY
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FFE767] -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            
            {/* Main positioning subheadline */}
            <p className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#121212] tracking-tight pt-1">
              FULL STACK DEVELOPER & <span className="bg-[#8ECAE6] px-2 py-0.5 rounded border border-black inline-block -rotate-1">EPAM SYSTEMS INTERN</span>
            </p>
          </div>

          {/* Introduction paragraph from Ankit's content */}
          <p className="text-base sm:text-lg text-[#2B2D42] font-medium leading-relaxed max-w-xl">
            Junior Software Intern at EPAM Systems. I build clean, responsive, and user-centered web experiences. Passionate about Data Structures and Algorithms, breaking down complex engineering problems with clarity and precision.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 bg-[#A8E6CF] neo-border neo-shadow-sm px-3 py-1 rounded-md text-xs font-bold text-black">
              <Briefcase className="w-3.5 h-3.5 text-[#121212]" /> Junior Software Intern @ EPAM Systems
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FFFDF6] neo-border neo-shadow-sm px-3 py-1 rounded-md text-xs font-bold text-black">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B4A]" /> LNCT Bhopal Undergrad
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FFFDF6] neo-border neo-shadow-sm px-3 py-1 rounded-md text-xs font-bold text-black">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B4A]" /> SIH Competitor
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-black text-black bg-[#FF6B4A] hover:bg-[#ff5432] neo-border neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-xl"
            >
              <span>LET'S GO →</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-black text-black bg-[#FFE767] hover:bg-[#fbdc32] neo-border neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-xl"
            >
              <span>Hire me</span>
            </a>

            <a
              href="/Spider_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#121212] bg-[#FFF6EC] hover:bg-[#FDECDC] neo-border neo-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all rounded-xl"
            >
              <Download className="w-4 h-4 text-[#FF6B4A]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-4 flex items-center gap-2">
            <a
              href="#intro"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-handwriting text-lg text-[#121212] hover:text-[#FF6B4A] transition-colors"
            >
              <span>scroll</span>
              <span className="animate-bounce">↓</span>
            </a>
          </div>

        </div>

        {/* Right Column: Polaroid Profile Photo & Scrapbook Composition */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Polaroid Frame */}
          <div className="relative bg-[#FFF6EC] neo-border neo-shadow-xl p-4 sm:p-5 rounded-sm max-w-sm w-full -rotate-2 hover:rotate-0 transition-transform duration-300 group">
            
            {/* Washi Tape on top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 washi-tape-yellow rotate-[-3deg] z-20 flex items-center justify-center font-handwriting font-bold text-black text-xl select-none">
              Engineer
            </div>
            
            {/* Profile Photo */}
            <div className="relative aspect-[4/5] w-full bg-[#FDECDC] neo-border overflow-hidden rounded-sm">
              <Image
                src="/ankit_profile.jpg"
                alt="Ankit Tiwary - Junior Software Intern at EPAM Systems"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              
              {/* Sticker overlay on photo bottom */}
              <div className="absolute bottom-3 left-3 bg-[#FF6B4A] text-white px-2.5 py-1 text-xs font-black neo-border rounded -rotate-2">
                EPAM Systems Intern 🚀
              </div>
            </div>

            {/* Handwritten Polaroid Caption */}
            <div className="pt-4 pb-1 text-center space-y-1">
              <p className="font-handwriting text-2xl font-bold text-[#121212]">
                Ankit Tiwary
              </p>
              <p className="text-xs font-bold text-[#555] uppercase tracking-wider">
                Junior Software Intern @ EPAM Systems
              </p>
            </div>
            
            {/* Pushpin doodle top right */}
            <div className="absolute top-2 right-2 text-xl">📌</div>
          </div>

        </div>
      </div>
    </section>
  );
}
