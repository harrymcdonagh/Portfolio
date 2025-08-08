import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="min-w-0 text-center lg:text-left">
            <Reveal>
              <h1
                className="text-balance font-black tracking-tight text-slate-100
                             text-4xl sm:text-5xl lg:text-6xl"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  Harry
                </span>
                <span className="text-sky-500">.</span>
              </h1>
            </Reveal>

            <Reveal>
              <h2
                className="mt-3 text-pretty text-slate-300
                             text-xl sm:text-2xl lg:text-3xl"
              >
                An{" "}
                <span className="font-semibold text-sky-400">
                  Aspiring Software Engineer
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-slate-300 text-left">
                I&apos;m a recent Computer Science graduate with a growing passion for
                software development ✨
              </p>
            </Reveal>

            <Reveal>
              <OutlineButton
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 w-full sm:w-auto justify-center before:bg-sky-700
                           hover:text-white hover:border-sky-700
                           bg-sky-500 text-slate-100 border-sky-500
                           shadow-sm shadow-sky-500/20"
              >
                Contact Me
              </OutlineButton>
            </Reveal>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* subtle ambient glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-sky-500/10 blur-3xl" />
            <img
              src="project-imgs/Graduate.jpg"
              alt="Harry's Headshot"
              className="mx-auto lg:mx-0 w-full
                         max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg
                         rounded-2xl ring-1 ring-white/10 shadow-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
