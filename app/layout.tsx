import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingShapes from "@/components/FloatingShapes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Igugu — Senior Fullstack Engineer | Next.js, React, Node.js",
  description: "Senior Fullstack Engineer based in Lagos, Nigeria. I build fast, scalable products with Next.js, React, and Node.js. Projects include Quik Huddle, FMO Fine Grooming, Quick Carry, and Properties Home.",
  keywords: ["Fullstack Engineer", "Next.js", "React", "Node.js", "Lagos", "Portfolio", "Frontend", "Backend", "Nigeria"],
  openGraph: {
    title: "Justin Igugu — Fullstack Engineer",
    description: "Building fast, scalable products with measurable impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <FloatingShapes />
        {children}
      </body>
    </html>
  );
}