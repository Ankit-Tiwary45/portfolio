"use client";

import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  year: string;
  bgColor: string;
  rotation: string;
}

export default function Certifications() {
  const certs: Cert[] = [
    {
      title: "Oracle Certified GenAI Professional",
      issuer: "Oracle",
      year: "2025",
      bgColor: "bg-[#FFE767]",
      rotation: "-rotate-2",
    },
    {
      title: "OCI Foundation Associate",
      issuer: "Oracle",
      year: "2025",
      bgColor: "bg-[#8ECAE6]",
      rotation: "rotate-2",
    },
    {
      title: "Infosys – DBMS Part 1 & Part 2",
      issuer: "Infosys Springboard",
      year: "2024–2025",
      bgColor: "bg-[#FF99C8]",
      rotation: "-rotate-1",
    },
    {
      title: "Cisco – Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2024",
      bgColor: "bg-[#A8E6CF]",
      rotation: "rotate-3",
    },
    {
      title: "Cisco – Junior Cybersecurity Analyst",
      issuer: "Cisco Networking Academy",
      year: "2025",
      bgColor: "bg-[#FFE767]",
      rotation: "-rotate-1",
    },
    {
      title: "Data Structure and Backend with Java",
      issuer: "Coursera",
      year: "2025",
      bgColor: "bg-[#8ECAE6]",
      rotation: "rotate-1",
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Coursera",
      year: "2025",
      bgColor: "bg-[#FFFDF6]",
      rotation: "-rotate-2",
    },
    {
      title: "DSA in Python",
      issuer: "Udemy",
      year: "2025",
      bgColor: "bg-[#FF99C8]",
      rotation: "rotate-2",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#8ECAE6] text-black neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>VERIFIED CREDENTIALS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212]">
            CERTIFICATIONS & MILESTONES
          </h2>

          <p className="text-base sm:text-lg text-[#333] font-medium max-w-2xl">
            Continuous learning keeps my toolkit sharp and my engineering practices up-to-date.
          </p>
        </div>

        {/* Certificate Paper Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <div
              key={i}
              className={`${c.bgColor} neo-border neo-shadow-lg p-6 rounded-2xl ${c.rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Seal Badge Graphic */}
              <div className="absolute -top-3 -right-3 bg-white neo-border w-12 h-12 rounded-full flex items-center justify-center rotate-[15deg]">
                <ShieldCheck className="w-6 h-6 text-[#FF6B4A]" />
              </div>

              <div className="space-y-3 pr-4">
                <div className="inline-block bg-black text-white px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
                  {c.year}
                </div>

                <h3 className="font-heading text-lg font-black text-black leading-snug group-hover:text-[#FF6B4A] transition-colors">
                  {c.title}
                </h3>

                <p className="text-xs font-bold text-black/70 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F]" />
                  {c.issuer}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-black/10 flex items-center justify-between text-xs font-bold">
                <span className="font-handwriting text-base text-black/60">Verified Credential</span>
                <span className="text-[#FF6B4A] font-black">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
