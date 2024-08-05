import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode } from "react-icons/ai";
import HeadshotImage from "./HeadshotImage";

export const MoreInfo = () => {
  return (
    <div className="relative">
      <Reveal>
        <>
          <HeadshotImage />
          <div className="mt-8">
            {" "}
            <h4 className="flex items-center mb-6">
              <AiFillCode className="text-sky-500 text-2xl" />
              <span className="font-bold ml-2">Programming Languages</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-12">
              <Chip>JavaScript</Chip>
              <Chip>Java</Chip>
              <Chip>Python</Chip>
              <Chip>TypeScript</Chip>
              <Chip>HTML</Chip>
              <Chip>CSS</Chip>
              <Chip>Tailwind</Chip>
              <Chip>React</Chip>
              <Chip>Next.js</Chip>
              <Chip>NodeJS</Chip>
              <Chip>Express</Chip>
              <Chip>MySQL</Chip>
              <Chip>Git</Chip>
              <Chip>C</Chip>
              <Chip>C++</Chip>
            </div>
          </div>
        </>
      </Reveal>
    </div>
  );
};
