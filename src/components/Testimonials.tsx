"use client";

import { Quote, Sparkles, UserCheck } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "t-1",
      name: "Rishabh Sahni",
      role: "DSA & Development Partner",
      content:
        "“Ankit is one of the most consistent people I’ve met. His approach to solving DSA problems is structured and clear, and he always helps others understand tough concepts.”",
      bgColor: "bg-[#FFE767]",
      rotation: "-rotate-2",
      badge: "Peer Review",
    },
    {
      id: "t-2",
      name: "Shivam Kumar",
      role: "Friend • MIT, Bengaluru",
      content:
        "“He asks the right questions and takes ownership of his work. Ankit would be an asset to any development team.”",
      bgColor: "bg-[#8ECAE6]",
      rotation: "rotate-2",
      badge: "Friend @ MIT",
    },
    {
      id: "t-3",
      name: "Prof. Ashish Dubey",
      role: "Mentor",
      content:
        "“What impresses me most about Ankit is his structured approach to problem-solving. Whether it’s DSA or real-world coding, he breaks things down clearly and solves them efficiently. A disciplined learner with great growth ahead.”",
      bgColor: "bg-[#FF99C8]",
      rotation: "-rotate-1",
      badge: "Faculty Mentor",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFE767] text-black neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>ENDORSEMENTS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212]">
            FROM MY PEERS & MENTORS
          </h2>

          <p className="font-handwriting text-2xl text-[#FF6B4A] font-bold">
            Feedback from mentors, teammates, and collaborators who have worked closely with me.
          </p>
        </div>

        {/* Testimonial Scrapbook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`${t.bgColor} neo-border neo-shadow-xl p-6 rounded-3xl ${t.rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group relative`}
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-white neo-border flex items-center justify-center font-bold text-black text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-black text-black leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-xs font-bold text-black/70">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <span className="bg-black text-white px-2.5 py-0.5 text-[10px] font-black uppercase rounded neo-border">
                    {t.badge}
                  </span>
                </div>

                {/* Quote content */}
                <div className="relative pt-2">
                  <p className="text-sm sm:text-base text-black/90 font-medium leading-relaxed italic">
                    {t.content}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-black/15 flex items-center justify-between text-xs font-bold">
                <span className="font-handwriting text-lg text-black/60">Verified Endorsement</span>
                <span className="text-[#FF6B4A] font-black text-base">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
