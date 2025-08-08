import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h1 className="text-balance font-black tracking-tight text-slate-100 text-4xl sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  Harry
                </span>
                <span className="text-sky-500">.</span>
              </h1>
            </Reveal>

            <Reveal>
              <h2 className="mt-3 text-pretty text-slate-300 text-xl sm:text-2xl lg:text-3xl">
                An{" "}
                <span className="font-semibold text-sky-400">
                  Aspiring Software Engineer
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-slate-300">
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
                className="mt-6 inline-flex before:bg-sky-700 hover:text-white hover:border-sky-700 bg-sky-500 text-slate-100 border-sky-500 shadow-sm shadow-sky-500/20"
              >
                Contact Me
              </OutlineButton>
            </Reveal>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-sky-500/10 blur-3xl" />
            <img
              src="project-imgs/Graduate.jpg"
              alt="Harry McDonagh graduation portrait"
              className="mx-auto w-full max-w-md rounded-2xl ring-1 ring-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
