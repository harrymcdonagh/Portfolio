import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-sky-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Send me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/harry-mcdonagh/"
              target="_blank"
              className="text-sky-300 hover:underline"
            >
              Linkedin
            </Link>{" "}
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:bob.ross@notreal.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-sky-300 transition-colors">
              <AiFillMail />
              <span>harrymcdonagh82@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
