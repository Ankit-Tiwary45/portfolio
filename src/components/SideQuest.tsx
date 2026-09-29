"use client";

import { Coffee, Search, Copy, Lightbulb, Sparkles } from "lucide-react";

export default function SideQuest() {
  const quests = [
    {
      id: "quest-1",
      title: "Powered by Bugs & Chai",
      subtitle: "Debug Mode & Problem Solving",
      description:
        "Some of my best learning happens somewhere between a stubborn bug, a cup of chai, and one more attempt to figure out why the code broke.",
      tag: "Debug Mode",
      bgColor: "bg-[#FFE767]",
      rotation: "-rotate-2",
      icon: Coffee,
    },
    {
      id: "quest-2",
      title: "Rabbit Hole Specialist",
      subtitle: "Deep Dives & Curiosity",
      description:
        "One question usually leads to another. I like going deeper into how things actually work, exploring unfamiliar technologies, and coming back with something new to understand or build.",
      tag: "Curiosity Mode",
      bgColor: "bg-[#8ECAE6]",
      rotation: "rotate-2",
      icon: Search,
    },
    {
      id: "quest-3",
      title: "Ctrl + C, Ctrl + V, Ctrl + Understand",
      subtitle: "Code Comprehension",
      description:
        "I don't mind looking at existing solutions. But before I keep the code, I want to know why it works — because copied code is useful, understood code is powerful.",
      tag: "Copy → Understand",
      bgColor: "bg-[#FF99C8]",
      rotation: "-rotate-1",
      icon: Copy,
    },
    {
      id: "quest-4",
      title: "Curiosity > Comfort",
      subtitle: "Continuous Exploration",
      description:
        "I'd rather be a beginner at something new than stay comfortable with what I already know. New tools, new ideas, new problems — that's where I usually learn the most.",
      tag: "Always Exploring",
      bgColor: "bg-[#A8E6CF]",
      rotation: "rotate-3",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="sidequest" className="py-16 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#A8E6CF] text-black neo-border px-4 py-1 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>BEYOND THE RESUMÉ</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#121212]">
            SIDE QUEST
          </h2>

          <p className="font-handwriting text-2xl text-[#FF6B4A] font-bold">
            These are the little things that describe how I think and work as a developer, beyond what my resume says.
          </p>
        </div>

        {/* Side Quest Scrapbook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quests.map((q) => {
            const Icon = q.icon;
            return (
              <div
                key={q.id}
                className={`${q.bgColor} neo-border neo-shadow-lg p-6 rounded-2xl ${q.rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 bg-[#FFFDF6] neo-border rounded-xl">
                      <Icon className="w-5 h-5 text-black" />
                    </span>

                    <span className="bg-[#FFFDF6] text-black neo-border px-3 py-1 text-xs font-black rounded-md">
                      {q.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-black text-black pt-1">
                    {q.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-black/70">
                    {q.subtitle}
                  </p>

                  <p className="text-sm text-black/80 font-medium leading-relaxed">
                    {q.description}
                  </p>
                </div>

                <div className="pt-4 text-right">
                  <span className="font-handwriting text-lg font-bold text-black/60">
                    Ankit's Pursuit ✦
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
