import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
              Hi, I'm Harry<span className="text-sky-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              An{" "}
              <span className="font-semibold text-sky-400">
                Aspiring Software Engineer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
              I&apos;m a third year Computer Science student, with a growing passion for
              software development ✨
            </p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-sky-700 hover:text-white hover:border-sky-700 mt-4 bg-sky-500 text-zinc-100 border-sky-500 md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
