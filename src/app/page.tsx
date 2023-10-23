import CopyEmail from "@/components/CopyEmail";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white flex flex-col">
      <section className="min-h-[61.803vh] container mx-auto xl:px-32 lg:px-8 px-4 flex-1 gap-16 py-16 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-center text-4xl opacity-70  pb-4">
            Hi, I am Denis 👋
          </h1>
          <h2 className="text-center text-lg font-regular">
            With <span className="font-bold text-blue-400">over 8 years</span>{" "}
            of hands-on experience building software,
            <br className="hidden md:block" /> I'm a{" "}
            <span className="font-bold text-blue-400">
              full-stack developer
            </span>{" "}
            proficient in <span className="font-bold text-blue-400">React</span>
            , <span className="font-bold text-blue-400">Node</span>,{" "}
            <span className="font-bold text-blue-400">Typescript</span> and{" "}
            <span className="font-bold text-blue-400">Firebase</span>.
            <br className="hidden md:block" /> Now, I'm seeking my first formal
            full-time role.
          </h2>{" "}
        </div>
        <CopyEmail />
        <Link
          href="#projects"
          className="text-lg hover:underline underline-offset-2"
        >
          Explore my work ➜
        </Link>
      </section>
      <About />
      <Projects />
      <div className="bg-neutral-900  w-full">
        <div className="w-full bg-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto xl:px-32 lg:px-8 px-4 py-32 gap-32 md:gap-6">
            <Education />
            <Experience />
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
