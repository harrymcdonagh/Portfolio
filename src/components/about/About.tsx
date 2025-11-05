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
              Hi! I&apos;m Harry, a Computer Science graduate from Brentwood, Essex. I
              recently completed my degree (2:1) at the University of East Anglia.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Throughout my degree, I developed a strong foundation in programming,
              problem-solving and modern software tools. I worked on a range of academic
              and independent projects, gaining experience with technologies such as
              Python, Java, TypeScript, and React.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m now looking to take the next step in my career, where I can apply
              my technical skills and continue developing as a professional in a
              collaborative, real-world environment.
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
