"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const EXPERIENCE = [
  {
    title: "Software Development Intern at ITSO",
    description: (
      <div className="flex flex-col">
        <p>
          At ITSO, I developed a dashboard to display the number of employees in
          the building, aiding in alarm activation decisions. I acquired
          knowledge in Arduino and web tech (Servers, HTML, CSS, JS) with the
          guidance of an expert team.
        </p>
        <Link
          href="/projects/itso/Praktikum-Denis-Ekert.pdf"
          target="_blank"
          className="text-blue-400 underline underline-offset-2 font-semibold pt-1"
        >
          Testimonial
        </Link>
      </div>
    ),

    employer: "IT Service Omicron GmbH, Berlin",
    year: "2018",
  },
  {
    title: "Teaching Assistant in 'Computational Thinking'",
    description: (
      <div>
        <p>
          I conducted QnA sessions post-lectures, deepening my understanding by
          teaching. Additionally, I designed a
        </p>
        <Link
          href="https://deniseke.github.io/"
          target="_blank"
          className="text-blue-400 underline underline-offset-2 font-semibold"
        >
          web-based learning application.
        </Link>
      </div>
    ),
    employer: "Vrije Universiteit, Amsterdam",
    year: "2021",
  },
];

export default function Experience() {
  return (
    <section className="flex flex-col gap-8 overflow-x-hidden" id="experience">
      <h3 className="text-xl font-bold opacity-75 pb-8">EXPERIENCE</h3>
      {EXPERIENCE.map((item, index) => {
        return (
          <motion.div
            key={"experience_" + index}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
          >
            <div className="flex justify-between">
              <p className="font-bold  text-lg">{item.title}</p>
            </div>

            {item.description}
            <div className="flex justify-between opacity-75 ">
              <p className="">{item.employer}</p>
              <p>{item.year}</p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
