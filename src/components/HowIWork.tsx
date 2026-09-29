"use client";

import { Sparkles } from "lucide-react";

export default function HowIWork() {
  const steps = [
    {
      num: "01",
      title: "ASK WHY",
      description:
        "Before writing a single line of code, I want to know what problem this is actually solving and for whom. That's how my Smart Slip healthcare project stopped being guesswork — I took time to understand how doctors and patients manage prescriptions in real life.",
      bgColor: "bg-[#FFE767]",
      rotation: "-rotate-2",
      tag: "Problem First",
    },
    {
      num: "02",
      title: "ACTUALLY READS THE DOCS",
      description:
        "Not a fan of blind guessing or relying on random quick fixes. I'd rather spend twenty minutes in official documentation than two days debugging something the library already explained clearly.",
      bgColor: "bg-[#8ECAE6]",
      rotation: "rotate-2",
      tag: "Doc Reader",
    },
    {
      num: "03",
      title: "CHAOS → ORDER CODER",
      description:
        "Messy, fast exploration first to test hypotheses — then I go back and make it structured, readable, and reliable. Both halves matter: speed in discovery, rigor in production code.",
      bgColor: "bg-[#FF99C8]",
      rotation: "-rotate-1",
      tag: "Structured Craft",
    },
  ];

  return (
    <section id="howiwork" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FF99C8] text-black neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>MY METHODOLOGY</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212]">
            HOW I WORK
          </h2>

          <p className="text-base sm:text-lg text-[#333] font-medium max-w-2xl">
            Principles that guide my approach from initial problem discovery to shipping production-ready code.
          </p>
        </div>

        {/* Numbered Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`${step.bgColor} neo-border neo-shadow-xl p-6 sm:p-8 rounded-3xl ${step.rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group relative`}
            >
              <div className="space-y-4">
                {/* Large Number Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-5xl font-black text-black group-hover:scale-110 transition-transform origin-left">
                    {step.num}
                  </span>
                  <span className="bg-black text-white px-3 py-1 text-xs font-black rounded-md neo-border">
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black text-black pt-2">
                  {step.title}
                </h3>

                <p className="text-sm text-black/85 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-black/15 text-right">
                <span className="font-handwriting text-xl font-bold text-black/70">
                  Step {step.num} ✦
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
