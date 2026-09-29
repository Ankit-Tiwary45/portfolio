"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Sparkles, AlertTriangle, CheckCircle2, Lightbulb, ShieldAlert } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  bgColor: string;
  accentColor: string;
  messyDetails: {
    problem: string;
    approach: string;
    challenges: string;
    learned: string;
  };
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const [openDrawerId, setOpenDrawerId] = useState<string | null>("project-1");

  const projects: Project[] = [
    {
      id: "project-1",
      num: "PROJECT 01",
      title: "Smart Slip Management System",
      description:
        "A healthcare platform designed to digitize prescriptions and patient medical history, reducing dependence on physical paper slips and helping doctors access past prescription data instantly.",
      tags: ["React.js", "Node.js", "MongoDB", "JWT", "Express"],
      image: "/smart_slip.png",
      bgColor: "bg-[#FFFDF6]",
      accentColor: "bg-[#FF6B4A]",
      messyDetails: {
        problem:
          "Patients frequently lose or misplace physical paper prescription slips. When visiting new doctors for cross-consultations, doctors have zero visibility into past diagnosis, causing repeated tests and prescription conflicts.",
        approach:
          "I designed a full-stack platform with secure JWT role-based authentication separating Doctor and Patient portals. Built a centralized MongoDB database where doctors can upload digital prescriptions and instantly pull up patient history during cross-consultations.",
        challenges:
          "Ensuring strict patient data privacy while allowing seamless cross-consultation access for secondary doctor opinions without complex friction.",
        learned:
          "Managing state across multi-role authentication workflows, JWT token security in HTTP cookies, and indexing MongoDB schemas for ultra-fast medical history retrieval.",
      },
      highlights: [
        "🏥 Digitized Medical Records",
        "🔒 Role-Based JWT Security",
        "📜 Cross-Consultation History",
        "⚡ Instant Doctor Lookup",
      ],
      githubUrl: "https://github.com/Ankit-Tiwary45",
    },
    {
      id: "project-2",
      num: "PROJECT 02",
      title: "Library Management System",
      description:
        "An automated web application for managing book inventories, member checkouts, return tracking, overdue fine calculations, and instant catalog search.",
      tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "SQL"],
      image: "/library_system.png",
      bgColor: "bg-[#FFFDF6]",
      accentColor: "bg-[#FFE767]",
      messyDetails: {
        problem:
          "Manual library ledgers led to untracked book losses, inaccurate overdue fee calculations, and tedious inventory audits.",
        approach:
          "Architected normalized relational SQL tables (Books, Members, Transactions) connected to Node.js / Express REST API endpoints. The app automatically calculates overdue fines per day and updates book availability in real-time.",
        challenges:
          "Handling edge cases in fine calculations for weekends/holidays and preventing double-checkout race conditions when single copies remain.",
        learned:
          "Relational database design, writing optimized SQL joins, handling date arithmetic accurately, and structuring modular Express route controllers.",
      },
      highlights: [
        "📚 Automated Catalog Search",
        "⚡ Real-Time Fine Calculator",
        "🗄️ Relational SQL Schema",
        "🔄 Instant Checkout Tracking",
      ],
      githubUrl: "https://github.com/Ankit-Tiwary45",
    },
    {
      id: "project-3",
      num: "PROJECT 03",
      title: "URL Shortener & Analytics Platform",
      description:
        "A fast, scalable URL shortening web service featuring custom slug creation, instant hash redirection, QR code generation, and real-time click performance analytics.",
      tags: ["Node.js", "Express.js", "MongoDB", "Redis", "React.js", "Tailwind CSS"],
      image: "/url_shortener.jpg",
      bgColor: "bg-[#FFFDF6]",
      accentColor: "bg-[#8ECAE6]",
      messyDetails: {
        problem:
          "Long URLs are cumbersome to share and offer zero click analytics for campaigns. Standard redirection must handle high traffic with sub-millisecond key-value lookup latency.",
        approach:
          "Built a RESTful API backend using Express.js and MongoDB, integrated Redis in-memory caching for ultra-fast short-code resolution, and created an interactive React dashboard with QR code export.",
        challenges:
          "Preventing hash collision edge-cases during Base62 short-code generation and configuring rate-limiting middleware to stop URL spamming.",
        learned:
          "Redis caching strategies, Base62 hash algorithms, rate-limiting middleware, and real-time analytics aggregation in MongoDB.",
      },
      highlights: [
        "🔗 Instant Hash Redirection",
        "⚡ Redis Key-Value Cache Layer",
        "📊 Real-Time Click Analytics",
        "📱 Instant QR Code Generation",
      ],
      githubUrl: "https://github.com/Ankit-Tiwary45",
    },
    {
      id: "project-4",
      num: "PROJECT 04",
      title: "Room Rental Marketplace (Airbnb Clone)",
      description:
        "A full-stack room and property rental marketplace inspired by Airbnb, featuring property listings, date-range availability search, booking management, user authentication, and interactive room showcases.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      image: "/airbnb_rental.jpg",
      bgColor: "bg-[#FFFDF6]",
      accentColor: "bg-[#FF99C8]",
      messyDetails: {
        problem:
          "Finding trusted room rentals with real-time availability, clear price breakdowns per night, and seamless host-guest communication without UI friction.",
        approach:
          "Built a full-stack room rental platform featuring date availability pickers, price range filtering, MongoDB property schema indexing, and JWT authentication for guest reservations and host listings.",
        challenges:
          "Managing complex date-range booking conflicts, dynamic price calculation across multi-day stays, and optimizing multi-image property gallery loading speeds.",
        learned:
          "MongoDB spatial queries, date-range overlap validation algorithms, JWT multi-role guest/host authorization, and building high-performance image-heavy UI layouts.",
      },
      highlights: [
        "🏡 Property Search & Filtering",
        "📅 Date Availability Reservation",
        "🔒 Host & Guest JWT Auth",
        "🖼️ Responsive Image Showcase",
      ],
      githubUrl: "https://github.com/Ankit-Tiwary45",
    },
  ];

  const toggleDrawer = (id: string) => {
    setOpenDrawerId(openDrawerId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FF6B4A] text-white neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FFE767]" />
            <span>FEATURED BUILDS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212] tracking-tight">
            THE PROJECTS
          </h2>

          <p className="text-base sm:text-lg text-[#333] font-medium max-w-2xl">
            Four builds, four walls I hit, four ways around them. Open the messy version on any card.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {projects.map((proj, idx) => {
            const isOpen = openDrawerId === proj.id;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={proj.id}
                className={`${proj.bgColor} neo-border neo-shadow-xl rounded-3xl p-5 sm:p-8 transition-transform duration-300 hover:rotate-0 ${
                  isEven ? "-rotate-1" : "rotate-1"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text Details Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Project Number & Title */}
                    <div className="space-y-2">
                      <span className={`inline-block px-3 py-1 text-xs font-black text-black border border-black neo-shadow-sm rounded-md ${proj.accentColor}`}>
                        {proj.num}
                      </span>

                      <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#121212]">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-base text-[#2B2D42] font-medium leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#FDECDC] text-[#121212] px-3 py-1 neo-border text-xs font-bold rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Drawer Toggle Button */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDrawer(proj.id);
                        }}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#FFE767] hover:bg-[#fbdc32] active:bg-[#fbdc32] neo-border neo-shadow-sm rounded-xl text-xs sm:text-sm font-black text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer touch-manipulation select-none relative z-10"
                      >
                        <span className="font-handwriting text-base sm:text-lg text-black">
                          {isOpen ? "CLOSE REAL VERSION" : "THE MESSY, REAL VERSION"}
                        </span>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFF6EC] hover:bg-[#FDECDC] neo-border neo-shadow-sm rounded-xl text-xs font-bold text-black cursor-pointer touch-manipulation"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Media Visual Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative bg-[#FFF6EC] neo-border neo-shadow-md rounded-2xl p-3 overflow-hidden group">
                      
                      {/* Polaroid Top Tape */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 washi-tape rotate-[-2deg] z-10" />

                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden neo-border">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Expandable Drawer: THE MESSY, REAL VERSION */}
                {isOpen && (
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-black/30 space-y-6 animate-in slide-in-from-top duration-300">
                    <div className="bg-[#FFF6EC] neo-border neo-shadow-sm p-4 sm:p-6 rounded-2xl space-y-4">
                      
                      <div className="inline-flex items-center gap-2 bg-[#FF6B4A] text-white px-3 py-1 rounded-md text-xs font-black neo-border">
                        <AlertTriangle className="w-4 h-4" />
                        <span>BEHIND THE SCENES</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        
                        {/* Problems Faced */}
                        <div className="space-y-2">
                          <h4 className="font-heading text-lg font-black text-[#121212] flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-[#FF6B4A]" />
                            Problems I faced
                          </h4>
                          <p className="text-sm text-[#333] font-medium leading-relaxed">
                            {proj.messyDetails.problem}
                          </p>
                        </div>

                        {/* How I Solved It */}
                        <div className="space-y-2">
                          <h4 className="font-heading text-lg font-black text-[#121212] flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                            How I solved it
                          </h4>
                          <p className="text-sm text-[#333] font-medium leading-relaxed">
                            {proj.messyDetails.approach}
                          </p>
                        </div>

                        {/* Challenges */}
                        <div className="space-y-2">
                          <h4 className="font-heading text-lg font-black text-[#121212] flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-[#E76F51]" />
                            Key Constraints & Challenges
                          </h4>
                          <p className="text-sm text-[#333] font-medium leading-relaxed">
                            {proj.messyDetails.challenges}
                          </p>
                        </div>

                        {/* What I Learned */}
                        <div className="space-y-2">
                          <h4 className="font-heading text-lg font-black text-[#121212] flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-[#E9C46A]" />
                            What I learned
                          </h4>
                          <p className="text-sm text-[#333] font-medium leading-relaxed">
                            {proj.messyDetails.learned}
                          </p>
                        </div>

                      </div>

                      {/* Result Highlight Pills */}
                      <div className="pt-4 border-t border-black/10 flex flex-wrap gap-2">
                        {proj.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="bg-[#FFE767] text-black px-3 py-1 neo-border text-xs font-black rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
