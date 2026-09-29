"use client";

export default function Marquee() {
  const marqueeItems = [
    "DSA ✦",
    "WEB DEVELOPMENT ✦",
    "PROBLEM SOLVING ✦",
    "BUILDING PROJECTS ✦",
    "LEARNING EVERY DAY ✦",
    "FULL STACK ARCHITECTURE ✦",
    "REACT & NODE.JS ✦",
    "C++ & JAVA ✦",
    "CLEAN CODE ✦",
  ];

  return (
    <section className="relative my-8 overflow-hidden z-20 py-4">
      <div className="bg-[#FF6B4A] neo-border-thick py-3.5 -rotate-1 hover:rotate-0 transition-transform duration-300 neo-shadow-lg">
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <div className="animate-marquee flex items-center gap-6 text-black font-heading font-black text-lg sm:text-xl tracking-wider">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span>{item}</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee flex items-center gap-6 text-black font-heading font-black text-lg sm:text-xl tracking-wider" aria-hidden="true">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-6">
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
