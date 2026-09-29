import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import SideQuest from "@/components/SideQuest";
import Technologies from "@/components/Technologies";
import Certifications from "@/components/Certifications";
import HowIWork from "@/components/HowIWork";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FDECDC] text-[#121212]">
      {/* 1. Scroll Progress Bar */}
      <ScrollProgress />

      {/* 2. Sticky Navbar */}
      <Navbar />

      <main>
        {/* 3. Hero Composition */}
        <Hero />

        {/* 4. Infinite Tilted Marquee */}
        <Marquee />

        {/* 5. Introduction (Hello Team) */}
        <Intro />

        {/* 6. Statistics Cards */}
        <Stats />

        {/* 7. Projects & Messy Version Drawer */}
        <Projects />

        {/* 8. Side Quest Cards */}
        <SideQuest />

        {/* 9. Technologies Grid */}
        <Technologies />

        {/* 10. Certifications & Milestones */}
        <Certifications />

        {/* 11. How I Work Principles */}
        <HowIWork />

        {/* 12. Testimonials (Peer & Mentor Endorsements) */}
        <Testimonials />

        {/* 13. Achievements Timeline */}
        <Achievements />

        {/* 14. Why Ankit Pitch */}
        <WhyMe />

        {/* 15. Contact Section */}
        <Contact />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
