import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANKIT TIWARY | Software Developer Intern @ EPAM Systems",
  description: "Personal portfolio of Ankit Tiwary - Software DeveloperIntern at EPAM Systems, Full Stack Developer & DSA Enthusiast.",
  keywords: ["Ankit Tiwary", "EPAM Systems", "Software Developer Intern", "Full Stack Developer", "DSA", "Portfolio", "React", "Next.js", "LNCT Bhopal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${caveat.variable} ${bricolage.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#FDECDC] text-[#121212] font-sans selection:bg-[#FFE767] selection:text-black overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
