"use client";

import { AnimatePresence, motion } from "framer-motion";

const EDUCATION = [
  {
    university: "Vrije Universiteit, Amsterdam",

    degree: "BSC in Artificial Intelligence",
    year: "2020 - 2022",
    description: (
      <div className="flex flex-col gap-2">
        <div>
          Learned core computer science concepts: algorithms, data structures,
          and time-space complexity.
        </div>
        <div>
          Studied and applied search-, logic- and learning-based AI algorithms
          from Min-Max to Neural Nets.
        </div>
        <div>
          Learned a wide range of softskills from psychology, writing and story
          telling.
        </div>
      </div>
    ),
  },
  {
    university: "Hasso Plattner Institute, Potsdam",
    degree: "BSC in IT Systems Engineering",
    year: "2022 - 2023",
    description: (
      <div className="flex flex-col gap-2">
        <div>
          Dove into the workings of CPU, RAM, and memory. Caching became my
          first thought when optimizing. Giving up space for time.
        </div>
        <div>
          Equipped myself with software development methodologies like Scrum,
          version control, and agile practices to streamline project workflows.
        </div>
      </div>
    ),
  },
];

export default function Education() {
  return (
    <section className="flex flex-col gap-8" id="education">
      <h3 className="text-xl font-bold opacity-75 pb-8">EDUCATION</h3>
      {EDUCATION.map((item, index) => {
        return (
          <motion.div
            key={"education_" + index}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
          >
            <div className="flex justify-between">
              <p className="font-bold  text-lg">{item.degree}</p>
            </div>

            {item.description}
            <div className="flex justify-between opacity-75 ">
              <p className="">{item.university}</p>
              <p>{item.year}</p>
            </div>
          </motion.div>
        );
      })}
      <motion.p
        className="opacity-75"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
      >
        Left both programs after exhausting courses of interest to exclusively
        focus on hands-on projects.
      </motion.p>
    </section>
  );
}
