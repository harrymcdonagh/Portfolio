import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { DProject } from "./DProject";

export const Developing = () => {
  return (
    <section className="section-wrapper" id="developing">
      <SectionHeader title="Developing" dir="l" />

      <div className="grid gap-6 grid-cols-2 ">
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
    tech: ["React", "Next.js", "Typescript", "Tailwind", "Chart.js", "APIs"],
    description:
      "A web-based React application designed to help users navigate and analyze the top cryptocurrencies.",
    modalContent: (
      <>
        <p>
          Voyage will be an upgrade of my CryptoVoyage project, and will build on
          CryptoVoyage's features, like tracking coin prices and using APIs like
          CoinMarketCapAPI and CoinAPI for real-time and historical data.
        </p>
        <p>
          With Next.js, Voyage will let users track their investments through a portfolio
          page. It will include a login and registration system using MySQL, giving users
          personalized accounts to manage their watchlists and portfolios.
        </p>
        <p>
          The app will use Tailwind CSS and Shadcn/ui for a clean and responsive design
          that works well on any device.
        </p>
      </>
    ),
  },
];
