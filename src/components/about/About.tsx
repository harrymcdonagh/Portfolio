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
              Hi! I&apos;m Harry, an aspiring software engineer from Brentwood, Essex. I
              am currently in my third year studying Computer Science at the University of
              East Anglia.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              During my time at University I have developed a passion for software
              development, and have been working on a variety of projects to improve my
              skills and knowledge. I have experience with a range of technologies and
              languages, including Java, Python, Typescript and React.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I am actively pursuing graduate positions and internships where I can
              utilise my university education and project experience to apply my skills in
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
