"use client";

import { Award, Code2, Medal, Sparkles, Briefcase, Trophy } from "lucide-react";

export default function Achievements() {
  const items = [
    {
      year: "2026",
      title: "Working @ EPAM Systems",
      description: "Secured Junior Software Intern role at EPAM Systems, joining as an engineering intern to build scalable solutions.",
      badge: "EPAM Systems",
      bgColor: "bg-[#FF6B4A]",
      textColor: "text-white",
      rotation: "-rotate-1",
      icon: Briefcase,
    },
    {
      year: "2023–2027",
      title: "B.Tech Computer Science @ LNCT Bhopal",
      description: "Consistent academic performance maintaining an 8.52 CGPA across engineering semesters.",
      badge: "CGPA 8.52",
      bgColor: "bg-[#FFE767]",
      rotation: "-rotate-2",
      icon: Award,
    },
    {
      year: "State Level",
      title: "State Bronze Medalist – IMO",
      description: "Won the State Level Bronze Medal in the International Mathematics Olympiad (IMO), demonstrating analytical problem-solving and mathematical reasoning.",
      badge: "IMO Bronze Medal",
      bgColor: "bg-[#8ECAE6]",
      rotation: "rotate-2",
      icon: Medal,
    },
    {
      year: "State Level",
      title: "State Gold Medalist – Writing Competition",
      description: "Achieved the State Level Gold Medal in the prestigious writing competition held at Rajendra Prasad Memorial, Patna.",
      badge: "State Gold Medal",
      bgColor: "bg-[#FF99C8]",
      rotation: "-rotate-1",
      icon: Trophy,
    },
    {
      year: "2023–2026",
      title: "500+ DSA Problems & Contest Ratings",
      description: "Crossed 500+ solved algorithmic challenges across LeetCode, GeeksforGeeks, and Codeforces. Achieved 1800+ rating on LeetCode and 1000+ rating on Codeforces.",
      badge: "LeetCode 1800+ • CF 1000+",
      bgColor: "bg-[#A8E6CF]",
      rotation: "rotate-3",
      icon: Code2,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#A8E6CF] text-black neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>HONORS & MILESTONES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212]">
            ACHIEVEMENTS
          </h2>

          <p className="text-base sm:text-lg text-[#333] font-medium max-w-2xl">
            Key competition honors, academic excellence, and engineering milestones that mark my growth.
          </p>
        </div>

        {/* Timeline Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.bgColor} neo-border neo-shadow-xl p-6 rounded-3xl ${item.rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group relative`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 bg-white neo-border rounded-xl">
                      <Icon className="w-5 h-5 text-black" />
                    </span>
                    <span className="bg-black text-white px-3 py-1 text-xs font-black rounded-md neo-border">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-black uppercase tracking-widest text-black/60">
                    {item.year}
                  </div>

                  <h3 className="font-heading text-xl font-black text-black">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/80 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/15 text-right">
                  <span className="font-handwriting text-lg font-bold text-black/60">
                    Ankit's Milestone ✦
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
