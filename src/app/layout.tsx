import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denis Ekert",
  description:
    "With over 8 years of hands-on experience building software, I'm a full-stack developer proficient in React, Node, Typescript and Firebase. Now, I'm seeking my first formal full-time role.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-950 text-white w-full">
      <body className={inter.className + " min-h-screen"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
