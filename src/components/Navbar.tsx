"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Socials from "./Socials";
import useMixpanel from "@/mixpanel";

export default function Navbar() {
  const { track } = useMixpanel();
  const [currentSection, setCurrentSection] = useState("");

  // watch section to highlight current
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          track("view_section", { section: entry.target.id || "no id" });
          setCurrentSection(entry.target.id);
        }
      }
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: "-110%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: "-110%" }}
        transition={{
          ease: "linear",
        }}
        className="w-full py-6 sticky top-0 bg-neutral-950 z-10"
      >
        <div className="container mx-auto xl:px-32 lg:px-8 px-4 items-center flex justify-between  ">
          <Link href={"/"} className="opacity-50">
            Denis Ekert
          </Link>
          <div className="hidden md:block">
            <div className="flex gap-8 ">
              <Link
                href={"/"}
                className={
                  currentSection === "" ? "text-blue-400" : "opacity-75"
                }
              >
                Home
              </Link>
              <Link
                href={"/#about"}
                className={
                  currentSection === "about" ? "text-blue-400" : "opacity-75"
                }
              >
                About
              </Link>
              <Link
                href={"/#projects"}
                className={
                  currentSection === "projects" ? "text-blue-400" : "opacity-75"
                }
              >
                Projects
              </Link>
              <Link
                href={"/#contact"}
                className={
                  currentSection === "contact" ? "text-blue-400" : "opacity-75"
                }
              >
                Contact
              </Link>
            </div>
          </div>
          <Socials />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
