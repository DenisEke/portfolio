"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" className="bg-neutral-900  w-full py-32">
      <div className="container mx-auto xl:px-32 lg:px-8 px-4 w-full grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-32">
        <div className="w-full flex flex-col gap-4 px-4 ">
          <h3 className="text-xl font-bold opacity-75 pb-8">ABOUT ME</h3>
          <motion.p
            initial={{
              opacity: 0,
              translateX: -100,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
          >
            <span className="font-bold pr-1">🌱 Roots & Growth:</span> Coding
            since I was 12, my software development journey has always been
            hands-on. One of my proudest milestones was creating a{" "}
            <Link
              href="https://truthful-hisser-35a.notion.site/Technical-Blog-511440ae04164867b71032cc6eb418f7"
              className="text-blue-400 underline underline-offset-2"
              target="_blank"
            >
              SaaS
            </Link>
            , reaching 1,000 users and gaining a following of 5,000 on{" "}
            <Link
              href="https://twitter.com/lupusscripts"
              className="text-blue-400 underline underline-offset-2"
              target="_blank"
            >
              Twitter
            </Link>{" "}
            — a challenging venture that offered invaluable lessons.
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              translateX: -100,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
          >
            <span className="font-bold pr-1">🤖 Adventures with GPT:</span>{" "}
            Since December '22, GPT has changed how I work and code. This
            enticed me to dive into{" "}
            <Link
              href="https://www.youtube.com/channel/UC4VKP8d1tKTXl5Nf4BGpK5A"
              className="text-blue-400 underline underline-offset-2"
              target="_blank"
            >
              AI video generation
            </Link>{" "}
            and experiment with sentiment-based trading. Finally, I developed a{" "}
            <Link
              href="https://ai-scraping-ffc57.web.app/"
              className="text-blue-400 underline underline-offset-2"
              target="_blank"
            >
              GPT-powered chat-app
            </Link>{" "}
            that generates code for data extraction tasks.
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              translateX: -100,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
          >
            <span className="font-bold pr-1">🚀 Future Aspirations:</span> I'm
            eager to join a seasoned team where I can hone my skills through
            expert feedback and gain insights into project management. I look
            forward to collaborating and building grander projects in a team
            environment, while keeping up with the latest AI trends.
          </motion.p>
        </div>
        <Skills />
      </div>
    </section>
  );
}
