"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "../Project";

import { FullscreenProvider } from "@/contexts/Fullscreen";
import useMixpanel from "@/mixpanel";

export interface IProject {
  images: string[];
  tags: string[];
  title: string;
  description: string;
  links: { name: string; url: string }[];
  tech?: string[];
}

const FEATURED_PROJECTS: IProject[] = [
  {
    tags: ["fav"],
    images: ["/projects/scraper/thumb.png", "/projects/scraper/demo.mp4"],
    title: "Venture #3 - Scrape Anything",
    description:
      "Webbased Chat App that generates code to complete any data extraction task using AI. Learned how to most effectively use LLM. ",
    links: [
      { name: "Try it out", url: "https://ai-scraping-ffc57.web.app/" },
      {
        name: "Technical Blog",
        url: "https://truthful-hisser-35a.notion.site/Technical-Blog-8e95106c0ffb40fe8e3a32bd4c1bc00c",
      },
    ],
    tech: [
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "Firebase",
      "GPT-3",
      "Google Cloud Run",
      "Docker",
    ],
  },
  {
    tags: ["fav"],
    images: [
      "/projects/lupus/1.png",
      "/projects/lupus/2.webp",
      "/projects/lupus/3.png",
      "/projects/lupus/4.webp",
      "/projects/lupus/5.png",
      "/projects/lupus/6.png",
      "/projects/lupus/7.png",
      "/projects/lupus/8.png",
    ],
    title: "Venture #2 - LupusScripts",
    description: `Chrome extension to quickly and automatically checkout limited sneakers and collectibles. Peaked at 1000 users. Learned how to build a product based on user feedback.`,
    links: [
      {
        name: "Technical Blog",
        url: "https://truthful-hisser-35a.notion.site/Technical-Blog-511440ae04164867b71032cc6eb418f7",
      },
      { name: "Twitter", url: "https://twitter.com/lupusscripts" },
      { name: "Landing Page (unfinished)", url: "https://lupusscripts.com/" },
    ],
    tech: [
      "React",
      "NestJS",
      "Typescript",
      "Firebase",
      "Parcel",
      "Web Extension",
      "Framer Motion",
      "Mixpanel",
    ],
  },
  {
    tags: ["fav"],
    images: [
      "/projects/wordcloud/1.png",
      "/projects/wordcloud/2.png",
      "/projects/wordcloud/3.png",
      "/projects/wordcloud/4.png",
      "/projects/wordcloud/5.png",
      "/projects/wordcloud/6.png",
      "/projects/wordcloud/7.png",
    ],
    title: "Venture #1 - Wordcloud Generator",
    description:
      "Webapp that generates wordclouds. Built fully featured Saas infrastructure around existing python library. Learned to never build a product without validation.",
    links: [
      { name: "Try it out", url: "https://wordcloud-gen.web.app/" },
      {
        name: "GitHub",
        url: "https://github.com/DenisEke/Wordcloud-Generator",
      },
    ],
    tech: [
      "React",
      "NestJS",
      "Typescript",
      "Firebase",
      "Python",
      "Google App Engine",
      "Stripe",
      "Material UI",
    ],
  },

  {
    tags: ["fav"],
    images: ["/projects/habity/thumb.png"],
    title: "Venture #0 - Habity: Habit Tracking App",
    description:
      "Habit tracking app with a focus on simplicity. My first bigger project. Learned how to build a product from scratch and ship it to the app store.",
    links: [
      {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=de.ekertdenis.habitapp",
      },
    ],
    tech: ["Flutter", "Figma", "Firebase Auth", "Firebase Firestore"],
  },
  {
    tags: ["other"],
    images: ["/projects/worms-2/0.png", "/projects/worms-2/vid.mkv"],
    title: "Destructible Terrain Unity",
    description:
      "Recreated the desctructible terrain from the game Worms, a friend and I player. Quit once I realized the ice berg of work which is networking in unity.",
    links: [
      {
        name: "Try it",
        url: "/destructible_terrain_demo",
      },
    ],
    tech: ["React", "Typescript", "Firebase"],
  },

  {
    tags: ["other"],
    images: ["/projects/mjzoom/thumb.mp4"],
    title: "Midjourney Zoom Video",
    description:
      "Discord bot to join multiple generated midjourney images into a zoom video. Learned how to use Remotion.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DenisEke/midjourney-zoomout-discord-bot",
      },
    ],
    tech: ["Typescript", "NodeJS", "DiscordJS", "Remotion"],
  },
  {
    tags: ["other"],
    images: ["/projects/stripe-invoice-downloader/0.png"],
    title: "Stripe Invoice Downloader",
    description:
      "I was tired of manually downloading my invoices from Stripe. So I created a script that downloads all invoices and saves them in a folder. ",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DenisEke/stripe-invoice-downloader",
      },
    ],
    tech: ["Typescript", "NodeJS", "Stripe"],
  },
  {
    tags: ["other"],
    images: ["/projects/vertretungsplan/thumb.png"],
    title: "Vertretungsplan Notifications",
    description:
      "Setup a system that notifies the right students about the replacements they have. I was very proud to see adoption among my peers. ",
    links: [
      {
        name: "Dashboard Link",
        url: "https://substitutions-ksl.appspot.com/",
      },
      {
        name: "Github",
        url: "https://github.com/DenisEke/Vertretungsplan-KSL",
      },
    ],
    tech: ["React", "NodeJS", "Google App Engine", "Firebase"],
  },

  {
    tags: ["other"],
    images: [
      "/projects/itso/0.jpeg",
      "/projects/itso/vid.mp4",
      "/projects/itso/1.png",
    ],
    title: "ITSO Internship",
    description:
      "Developed a IoT System to log employees presence in a public dashboard, so the last person leaving the building knows to turn on the alarm. It was great to learn the basics of web development from an experienced team.",
    links: [
      {
        name: "Testimonial",
        url: "/projects/itso/Praktikum-Denis-Ekert.pdf",
      },
    ],
    tech: ["IoT", "HTML", "CSS", "JS", "Arduino"],
  },
  {
    tags: ["other"],
    images: ["/projects/invoice-gen/0.png"],
    title: "Invoice Generator",
    description:
      "Created a invoice generator for the company of my parents. Analyzed their invoicing process and automated large parts of it. They enter the Data in a JavaFX app and it automatically calculates and generates the invoices.",
    links: [],
    tech: ["JavaFX", "Spring Boot", "SQL"],
  },
  {
    tags: ["other"],
    images: ["/projects/pozyczki24/thumb.png"],
    title: "Pozyczki24",
    description:
      "For a friend of mine I made this little prototype for what he could get done as his website. While its far from finished I like how it turned out.",
    links: [
      {
        name: "Website",
        url: "https://pozyczki24.firebaseapp.com/",
      },
    ],
    tech: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    tags: ["uni"],
    images: ["/projects/algos/0.png", "/projects/algos/1.png"],
    title: "Teaching Assistant at VU",
    description:
      "Developed a webapp to learn graph-based-algorithms. It provides feedback when students fail to apply the algorithm.",
    links: [
      {
        name: "Try it out",
        url: "https://deniseke.github.io/",
      },
    ],
    tech: ["React", "Typescript", "Github Pages"],
  },

  {
    tags: ["uni"],
    images: ["/projects/nutri-tracker/0.png"],
    title: "Uni: Nutritional Tracker",
    description:
      "For the 'Human-Computer Interaction' university course, I developed a nutritional tracker app. It allows users to track their daily food intake and monitor their nutritional goals.",
    links: [],
    tech: ["Flutter", "Figma"],
  },
  {
    tags: ["uni"],
    images: ["/projects/dps/thumb.png"],
    title: "Uni: Digitale Patienten Simulation",
    description:
      "For the 'Software Technik' course at HPI, I contributed and expanded in a team of 5 upon a legacy codebase. We added an evaluation dashboard and rejoin functionality to the trainer app.",
    links: [],
    tech: ["Flutter", "Git", "Python", "Django", "Docker"],
  },
  {
    tags: ["uni"],
    images: [
      "/projects/heatmap/0.png",
      "/projects/heatmap/1.png",
      "/projects/heatmap/2.png",
    ],
    title: "Uni: Where to open your restuarant?",
    description:
      "For the 'Knowledge and Data' course where we worked with knowledge graphs and graph databases me and my team created this app to find the optimal location for your restaurant. ",
    links: [
      {
        name: "Notebook",
        url: "/projects/heatmap/application.ipynb",
      },
    ],
    tech: ["Python", "GraphDB"],
  },
];

export default function Projects() {
  const { track } = useMixpanel();
  const [activeFilter, setActiveFilter] = useState("fav");

  return (
    <section
      id="projects"
      className="bg-neutral-50  w-full py-32 text-neutral-950 overflow-x-hidden"
    >
      <div className="container mx-auto xl:px-32 lg:px-8 px-4 w-full flex flex-col items-center">
        <h3 className="text-2xl font-bold opacity-75 text-center">
          My projects
        </h3>
        <div className="flex flex-wrap gap-2 py-4 ">
          {[
            ["All", "all"],
            ["Favourites", "fav"],
            ["Other", "other"],
            ["University", "uni"],
          ].map((item) => {
            return (
              <div
                key={"filter_" + item[1]}
                onClick={() => {
                  track("filter_projects", { filter: item[1], name: item[0] });
                  setActiveFilter(item[1]);
                }}
                className={`border rounded-2xl p-3 ${
                  activeFilter === item[1]
                    ? "border-blue-400 border-2 text-blue-400 font-bold"
                    : ""
                }`}
              >
                {item[0] +
                  `(${
                    FEATURED_PROJECTS.filter((project) => {
                      if (item[1] === "all") return true;

                      for (const tag of project.tags) {
                        if (tag === item[1]) return true;
                      }
                    }).length
                  })`}
              </div>
            );
          })}
        </div>
        <p className="opacity-75">Click the images to expand them</p>
        <FullscreenProvider>
          <div className="grid grid-cols-1 md:grid-flow-row gap-16 py-16 md:grid-cols-2">
            {FEATURED_PROJECTS.filter((project) => {
              if (activeFilter === "all") return true;

              for (const tag of project.tags) {
                if (activeFilter === tag) return true;
              }
            }).map((project, index) => {
              return (
                <ProjectCard
                  project={project}
                  key={
                    "project_" +
                    project.title
                      .split(" ")
                      .map((word) => word.toLowerCase())
                      .join("_")
                  }
                  id={
                    "project_" +
                    project.title
                      .split(" ")
                      .map((word) => word.toLowerCase())
                      .join("_")
                  }
                />
              );
            })}
          </div>
        </FullscreenProvider>
      </div>
    </section>
  );
}
