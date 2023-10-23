"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FRONTEND_SKILLS = [
  "React / NextJS",
  "Typescript",
  "TailwindCSS",
  "Flutter",
  "Framer Motion",
  "Figma",
];

const BACKEND_SKILLS = [
  "NodeJS",
  "NestJS",
  "Typescript",
  "Google Cloud Platform",
  "Firebase (db, auth, storage)",
  "Docker",
  "Stripe",
];

export default function Skills() {
  const frontendRef = useRef(null);
  const frontendInView = useInView(frontendRef, { once: true });

  const backendRef = useRef(null);
  const backendInView = useInView(backendRef, { once: true });

  return (
    <div className="w-full px-4 flex flex-col overflow-x-hidden">
      <h3 className="text-xl font-bold opacity-75 pb-8">SKILLS</h3>
      <h4 className="font-bold pt-4 pb-2">Frontend</h4>
      <div className="flex flex-wrap gap-2" ref={frontendRef}>
        {FRONTEND_SKILLS.map((item, index) => {
          return (
            <motion.div
              key={"frontend_skill_" + index}
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={
                frontendInView
                  ? {
                      opacity: 1,
                      translateY: 0,
                    }
                  : {
                      opacity: 0,
                      translateY: -100,
                    }
              }
              transition={{
                delay: 0.1 + index * 0.1,
              }}
              className="border rounded border-blue-400 px-2 py-1"
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      <h4 className="font-bold pt-6 pb-2">Backend</h4>
      <div className="flex flex-wrap gap-2" ref={backendRef}>
        {BACKEND_SKILLS.map((item, index) => {
          return (
            <motion.div
              key={"backend_skill_" + index}
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={
                backendInView
                  ? {
                      opacity: 1,
                      translateY: 0,
                    }
                  : {
                      opacity: 0,
                      translateY: -100,
                    }
              }
              transition={{
                delay: 0.1 + index * 0.1,
              }}
              className="border rounded border-blue-400 px-2 py-1"
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      <h4 className="font-bold pt-6 pb-2">Softskills</h4>
      <motion.p
        initial={{
          opacity: 0,
          translateX: 100,
        }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
      >
        I enjoy working in a team, communicating effectively, and receiving
        constructive feedback. I consider myself a fast and lifelong learner, an
        effective doer, and a fair and tolerant human being.
      </motion.p>
      <p className="text-neutral-500 pt-6 md:hidden">
        I fluently speak english, german and polish.
      </p>
    </div>
  );
}
