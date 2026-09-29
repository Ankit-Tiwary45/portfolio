"use client";

import { Award, Code2, GraduationCap, Medal, Trophy } from "lucide-react";

interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  bgColor: string;
  shadowColor: string;
  rotation: string;
  icon: any;
}

export default function Stats() {
  const statsData: StatItem[] = [
    {
      id: "cgpa",
      value: "8.52",
      label: "B.Tech CGPA",
      sublabel: "LNCT, Bhopal (CSE 2023-2027)",
      bgColor: "bg-[#FFE767]",
      shadowColor: "neo-shadow-orange",
      rotation: "-rotate-2",
      icon: GraduationCap,
    },
    {
      id: "imo",
      value: "Bronze",
      label: "IMO Olympiad",
      sublabel: "State Bronze Medallist",
      bgColor: "bg-[#8ECAE6]",
      shadowColor: "neo-shadow",
      rotation: "rotate-2",
      icon: Medal,
    },
    {
      id: "writing",
      value: "Gold",
      label: "Writing Contest",
      sublabel: "Rajendra Prasad Memorial, Patna",
      bgColor: "bg-[#FF99C8]",
      shadowColor: "neo-shadow-yellow",
      rotation: "-rotate-1",
      icon: Trophy,
    },
    {
      id: "dsa",
      value: "500+",
      label: "DSA Solved",
      sublabel: "LC 1800+ • CF 1000+ • GFG",
      bgColor: "bg-[#A8E6CF]",
      shadowColor: "neo-shadow-blue",
      rotation: "rotate-3",
      icon: Code2,
    },
  ];

  return (
    <section id="stats" className="py-16 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className={`${stat.bgColor} neo-border ${stat.shadowColor} ${stat.rotation} hover:rotate-0 transition-transform duration-300 p-6 rounded-2xl flex flex-col justify-between group cursor-default`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-white neo-border rounded-lg">
                    <IconComponent className="w-5 h-5 text-black" />
                  </span>
                  <span className="font-handwriting text-lg font-bold text-black/60">
                    ✦ verified
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="font-heading text-lg font-extrabold text-black">
                    {stat.label}
                  </div>
                  <p className="text-xs font-bold text-black/70">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
