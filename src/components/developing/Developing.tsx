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
];
