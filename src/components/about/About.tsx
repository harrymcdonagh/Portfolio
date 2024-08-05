import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { MoreInfo } from "./MoreInfo";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="pt-0 md:pt-12 space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-sky-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Harry, I&apos;m an aspiring software engineer from Brentwood,
              Essex. I am currently in my final year at the University of East Anglia,
              pursuing a degree in Computer Science.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              During my time at University I have developed a passion for software
              development and engineering, and have been working on a variety of projects
              to improve my skills and knowledge. I have experience with a range of
              technologies and languages, including React, JavaScript, Python and Java.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I am actively pursuing graduate positions and internships where I can
              utilize my university education and project experience to apply my skills in
              a real-world context.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-sky-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <MoreInfo />
      </div>
    </section>
  );
};
