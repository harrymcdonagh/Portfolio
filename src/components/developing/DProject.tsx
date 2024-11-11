import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { DProjectModal } from "./DProjectModal";
import Reveal from "../util/Reveal";
import React from "react";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink?: string;
  imgSrc: string;
  imgGif: string;
  tech: string[];
  title: string;
  code: string;
  devStage: string;
}

export const DProject = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  imgGif,
  title,
  code,
  tech,
  devStage,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
                {title}
              </h4>
              <div className="w-full h-[1px] bg-zinc-600" />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub className="text-xl text-zinc-300 hover:text-sky-300 transition-colors" />
              </Link>

              {projectLink && (
                <Link href={projectLink} target="_blank" rel="nofollow">
                  <AiOutlineExport className="text-xl text-zinc-300 hover:text-sky-300 transition-colors" />
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 text-sm mt-2">
              Stage:{" "}
              {devStage === "Early-Stage Development" ? (
                <span className="text-red-400">{devStage}</span>
              ) : devStage === "Mid-Stage Development" ? (
                <span className="text-yellow-400">{devStage}</span>
              ) : devStage === "Late-Stage Development" ? (
                <span className="text-green-500">{devStage}</span>
              ) : (
                <span className="text-cyan-400">{devStage}</span>
              )}
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 text-sm text-sky-300 my-2">
              {tech.join(" - ")}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-sky-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <DProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgGif={imgGif}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
