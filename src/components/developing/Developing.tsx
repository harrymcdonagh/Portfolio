import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { DProject } from "./DProject";

export const Developing = () => {
  return (
    <section className="section-wrapper" id="developing">
      <SectionHeader title="Developing" dir="l" />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
        {projects.map((project) => {
          return <DProject key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Voyage",
    imgSrc: "project-imgs/voyage.JPG",
    imgGif: "project-imgs/voyage-preview.gif",
    code: "https://github.com/harrymcdonagh/voyage",
    devStage: "Mid-Stage Development",
    tech: ["Typescript", "React", "Tailwind", "Next.js", "APIs"],
    description:
      "An upgrade of my CryptoVoyage project, Voyage has an enhanced design, and adds new features such as user accounts and a portfolio tracker",
    modalContent: (
      <>
        <p>
          Voyage will be an upgrade of my CryptoVoyage project, and will build on
          CryptoVoyage's features, like tracking coin prices and using APIs like
          CoinMarketCapAPI and CoinAPI for real-time and historical data.
        </p>
        <p>
          Voyage will let users track their investments through a portfolio page. It will
          include a login and registration system using Auth.js and a postgres database,
          giving users personalized accounts to manage their watchlists and portfolios.
        </p>
        <p>
          The app will use Tailwind CSS and Shadcn/ui for a clean and responsive design.
        </p>
      </>
    ),
  },
  {
    title: "Sylvie",
    imgSrc: "project-imgs/sylvie.jpg",
    imgGif: "project-imgs/sylvie.jpg",
    code: "https://github.com/harrymcdonagh/Sylvie",
    devStage: "Mid-Stage Development",
    tech: ["Python", "React", "Next.js", "MongoDB"],
    description:
      "An Intelligent Chatbot, aimed to support UEA students by answering their queries about well-being and general university life.",
    modalContent: (
      <>
        <p>
          Sylvie is an intelligent chatbot, aimed to support university students by being
          able to answer queries regarding well-being, university life and information
          about the Norwich surrounding area.
        </p>
        <p>
          This project is my final year project at UEA, and will combine all the knowledge
          I have gained during my degree. As part of the project, I will be producing a
          project report document using LaTeX.
        </p>
        <p>
          The chatbot will be built using Python and the React framework, and will use
          Natural Language Processing (NLP) techniques to understand and respond to user
          input.
        </p>
      </>
    ),
  },
];
