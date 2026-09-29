"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, FileText, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result || result.error) {
        throw new Error(result?.error || "Something went wrong. Please try again or contact me directly.");
      }

      // Trigger festive confetti celebration on successful delivery
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF6B4A", "#FFE767", "#8ECAE6", "#FF99C8"],
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FF6B4A] text-white neo-border px-4 py-1.5 rounded-full neo-shadow-sm text-xs font-black uppercase tracking-wider -rotate-1">
            <Sparkles className="w-4 h-4 text-[#FFE767]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#121212]">
            LET'S TALK
          </h2>

          <p className="text-base sm:text-lg text-[#333] font-medium max-w-2xl">
            I'm currently seeking internship opportunities, technical collaborations, and full-stack development challenges. Drop me a line below!
          </p>
        </div>

        {/* Contact Scrapbook Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Working Form */}
          <div className="lg:col-span-7 bg-[#FFFDF6] neo-border neo-shadow-xl p-6 sm:p-8 rounded-3xl -rotate-1 hover:rotate-0 transition-transform duration-300">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#A8E6CF] neo-border rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-heading text-2xl font-black text-black">
                  Message sent! I'll get back to you soon.
                </h3>
                <p className="font-handwriting text-2xl text-[#FF6B4A] font-bold">
                  Thanks for stopping by, I appreciate your time!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#FFE767] neo-border neo-shadow-sm rounded-xl font-black text-xs uppercase text-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 bg-[#FF99C8] neo-border text-xs font-bold text-black rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mark Frenc"
                    className="w-full px-4 py-3 bg-[#FFF6EC] neo-border rounded-xl text-sm font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. frencmark@gmail.com"
                    className="w-full px-4 py-3 bg-[#FFF6EC] neo-border rounded-xl text-sm font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 bg-[#FFF6EC] neo-border rounded-xl text-sm font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#FF6B4A] hover:bg-[#ff5530] neo-border neo-shadow-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-xl font-black text-sm text-black flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Social & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Connect Card */}
            <div className="bg-[#FFE767] neo-border neo-shadow-xl p-6 sm:p-8 rounded-3xl rotate-1 hover:rotate-0 transition-transform duration-300 space-y-4">
              <h3 className="font-heading text-xl font-black text-black">
                CONNECT DIRECTLY
              </h3>

              <p className="text-sm font-medium text-black/80">
                I am active across these platforms. Feel free to send a connection request or message!
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href="mailto:ankittiwary968@gmail.com"
                  className="flex items-center gap-3 p-3 bg-[#FFFDF6] neo-border rounded-xl text-xs font-black text-black hover:bg-[#FFE767] transition-colors"
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>Email: ankittiwary968@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Ankit-Tiwary45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFDF6] neo-border rounded-xl text-xs font-black text-black hover:bg-[#A8E6CF] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-black" />
                  <span>GitHub: @Ankit-Tiwary45</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ankit-tiwary-99880a321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFDF6] neo-border rounded-xl text-xs font-black text-black hover:bg-[#8ECAE6] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-black" />
                  <span>LinkedIn: in/ankit-tiwary-99880a321</span>
                </a>

                <a
                  href="https://www.facebook.com/sardaar.gabbarsingh.73700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFDF6] neo-border rounded-xl text-xs font-black text-black hover:bg-[#FF99C8] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-black" />
                  <span>Facebook Profile</span>
                </a>

                <a
                  href="https://www.instagram.com/__an_kit_45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFDF6] neo-border rounded-xl text-xs font-black text-black hover:bg-[#FFE767] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-black" />
                  <span>Instagram: @__an_kit_45</span>
                </a>
              </div>
            </div>

            {/* Download Resume Card */}
            <div className="bg-[#A8E6CF] neo-border neo-shadow-xl p-6 rounded-3xl -rotate-1 hover:rotate-0 transition-transform duration-300 flex items-center justify-between">
              <div>
                <h4 className="font-heading text-lg font-black text-black">
                  ANKIT'S RESUMÉ
                </h4>
                <p className="text-xs font-bold text-black/70">
                  Download Spider_CV.pdf
                </p>
              </div>

              <a
                href="/Spider_CV.pdf"
                download
                className="px-4 py-2.5 bg-[#FFFDF6] neo-border neo-shadow-sm rounded-xl font-black text-xs text-black flex items-center gap-1.5 hover:bg-[#FF6B4A] hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Get PDF</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
