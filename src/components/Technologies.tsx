"use client";

import { Code, Database, Terminal, Wrench, Layers, Sparkles } from "lucide-react";

export default function Technologies() {
  const categories = [
    {
      id: "languages",
      title: "LANGUAGES",
      bgColor: "bg-[#FFE767]",
      accentTag: "bg-[#FF6B4A] text-white",
      rotation: "-rotate-2",
      icon: Code,
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      id: "web",
      title: "WEB DEVELOPMENT",
      bgColor: "bg-[#8ECAE6]",
      accentTag: "bg-[#121212] text-white",
      rotation: "rotate-2",
      icon: Layers,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS"],
    },
    {
      id: "database",
      title: "DATABASE & STORAGE",
      bgColor: "bg-[#FF99C8]",
      accentTag: "bg-[#FF6B4A] text-white",
      rotation: "-rotate-1",
      icon: Database,
      skills: ["MongoDB", "SQL (MySQL)", "Relational Schemas", "Mongoose ORM"],
    },
    {
      id: "core-cs",
      title: "CORE COMPUTER SCIENCE",
      bgColor: "bg-[#A8E6CF]",
      accentTag: "bg-[#121212] text-white",
      rotation: "rotate-2",
      icon: Terminal,
      skills: [
        "Data Structures & Algorithms (DSA)",
        "Database Management (DBMS)",
        "Computer Networks",
        "Object Oriented Programming (OOP)",
        "Operating Systems",
      ],
    },
    {
      id: "tools",
      title: "TOOLS & DEV ENVIRONMENT",
      bgColor: "bg-[#FFFDF6]",
      accentTag: "bg-[#FF6B4A] text-white",
      rotation: "-rotate-2",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "npm / package managers"],
    },
  ];

  return (
    <section id="technologies" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FF6B4A] text-white neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FFE767]" />
            <span>MY TOOLKIT</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212]">
            TECHNOLOGIES
          </h2>

          <p className="text-base sm:text-lg text-[#333] font-medium max-w-2xl">
            A comprehensive overview of languages, web stacks, database engines, and core CS fundamentals I work with daily.
          </p>
        </div>

        {/* Categories Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`${cat.bgColor} neo-border neo-shadow-lg p-6 rounded-2xl ${cat.rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 bg-white neo-border rounded-xl">
                      <Icon className="w-5 h-5 text-black" />
                    </span>
                    <span className={`px-3 py-1 text-xs font-black rounded-md neo-border ${cat.accentTag}`}>
                      ✦ VERIFIED
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-black text-black">
                    {cat.title}
                  </h3>

                  {/* Technology Skill Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#FFFDF6] text-black px-3 py-1.5 neo-border text-xs font-extrabold rounded-lg hover:bg-[#FFE767] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 text-right">
                  <span className="font-handwriting text-lg font-bold text-black/60">
                    Ankit's Stack ✦
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
