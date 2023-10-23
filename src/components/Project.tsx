"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { IProject } from "./sections/Projects";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/20/solid";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FullscreenContext } from "@/contexts/Fullscreen";
import useMixpanel from "@/mixpanel";

export default function ProjectCard({
  project,
  id,
}: {
  project: IProject;
  id: string;
}) {
  const [image, setImage] = useState(0);
  const [hover, setHover] = useState(false);
  const [direction, setDirection] = useState("");
  const [offsetX, setOffsetX] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const context = useContext(FullscreenContext);
  const { track } = useMixpanel();

  useEffect(() => {
    if (image !== 0) {
      track("swipe_project_image", {
        projectId: id,
        project: project.title,
        imageUrl: project.images[image],
      });
    }
  }, [image]);

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
    touchStart && setOffsetX(e.targetTouches[0].clientX - touchStart);
  };

  const onTouchEnd = () => {
    setOffsetX(0);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50 && image < project.images.length - 1) {
      setDirection("right");
      setImage((prevIndex) => (prevIndex + 1) % project.images.length);
    }
    if (distance < -50 && image >= 1) {
      setDirection("left");
      setImage(
        (prevIndex) =>
          (prevIndex - 1 + project.images.length) % project.images.length
      );
    }
  };

  return (
    <div className="flex flex-col  relative" id={project.images[image]}>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 100,
        }}
        whileInView={{
          opacity: 1,
          translateY: 0,
        }}
        className="p-2 aspect-video bg-neutral-100 rounded relative shadow"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {hover && image >= 1 && (
          <div className="absolute left-0 top-0 h-full flex flex-col justify-center pl-2 z-10">
            <button
              onClick={() => {
                setDirection("left");
                setImage(
                  (prevIndex) =>
                    (prevIndex - 1 + project.images.length) %
                    project.images.length
                );
              }}
            >
              <ChevronLeftIcon className="h-5 w-5 text-neutral-950 bg-neutral-300 rounded-xl hover:bg-neutral-400" />
            </button>
          </div>
        )}
        <div className="flex relative h-full w-full " onTouchMove={(e) => {}}>
          <AnimatePresence custom={direction}>
            <motion.div
              layoutId={id + "_" + image + "_thumbnail"}
              className="w-full h-full  flex justify-center absolute "
              key={id + "_" + image + "_thumbnail"}
              custom={direction}
              variants={{
                enter: (direction) => {
                  return {
                    x:
                      direction === "right"
                        ? 500
                        : direction === "left"
                        ? -500
                        : 0,
                    opacity: 0,
                  };
                },
                center: {
                  x: offsetX,
                  opacity: 1,
                },
                exit: (direction) => {
                  return {
                    x:
                      direction === "right"
                        ? -500
                        : direction === "left"
                        ? 500
                        : 0,
                    opacity: 0,
                  };
                },
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              onClick={() => {
                context?.updateMedia(
                  project.images[image],
                  id + "_" + image + "_thumbnail"
                );
              }}
            >
              {project.images[image].endsWith(".mp4") ||
              project.images[image].endsWith(".mkv") ? (
                <video
                  src={project.images[image]}
                  autoPlay
                  loop
                  muted
                  className="h-full"
                ></video>
              ) : (
                <Image
                  src={project.images[image]}
                  alt={"Thumbnail for " + project.title}
                  className="object-contain"
                  fill
                  priority
                ></Image>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {hover && image < project.images.length - 1 && (
          <div className="absolute right-0 top-0 h-full flex flex-col justify-center pr-2 z-10">
            <button
              onClick={() => {
                setDirection("right");
                setImage(
                  (prevIndex) => (prevIndex + 1) % project.images.length
                );
              }}
            >
              <ChevronRightIcon className="h-5 w-5 text-neutral-950 bg-neutral-300 rounded-xl hover:bg-neutral-400" />
            </button>
          </div>
        )}
      </motion.div>
      <div className="w-full text-neutral-900  flex justify-center mt-2 mb-4 h-2">
        {project.images.length > 1 &&
          project.images.map((_image, imageIndex) => {
            return (
              <button
                key={"project_" + id + "_thumbnail_" + imageIndex}
                className={`w-4 h-2 rounded-full  mx-1 hover:bg-neutral-400 ${
                  imageIndex === image ? "bg-neutral-400" : "bg-neutral-200"
                }`}
                onClick={() => {
                  setDirection(imageIndex > image ? "right" : "left");
                  setImage(imageIndex);
                }}
              ></button>
            );
          })}
      </div>
      <div className="flex flex-col gap-2 px-4 pb-4">
        <h5 className="text-xl font-bold ">{project.title}</h5>

        <div className="flex flex-wrap gap-1">
          {project.tech?.map((link) => {
            return (
              <div
                key={"project_" + id + "_link_" + link.toLowerCase()}
                className="font-semibold border-blue-400 border rounded px-2 bg-blue-400 text-white"
              >
                {link}
              </div>
            );
          })}
        </div>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.links.map((link, index) => {
            return (
              <Link
                key={"project_" + index + "_link_" + link.name.toLowerCase()}
                href={link.url}
                className="text-blue-400 underline underline-offset-2 font-semibold"
                target="_blank"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
