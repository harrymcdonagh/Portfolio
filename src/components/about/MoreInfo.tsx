import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode } from "react-icons/ai";
import HeadshotImage from "./HeadshotImage";
import React from "react";

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
              <Chip>Python</Chip>
              <Chip>Java</Chip>
              <Chip>JavaScript</Chip>
              <Chip>TypeScript</Chip>
              <Chip>HTML</Chip>
              <Chip>CSS</Chip>
              <Chip>SQL</Chip>
              <Chip>Git</Chip>
            </div>
          </div>
        </>
      </Reveal>
    </div>
  );
};
