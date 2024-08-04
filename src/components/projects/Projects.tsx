import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Crypto Voyage",
    imgSrc: "project-imgs/cryptovoyage.jpg",
    imgGif: "project-imgs/cryptovoyage-preview.gif",
    code: "https://github.com/harrymcdonagh/crypto-voyage",
    projectLink: "https://crypto-voyage.vercel.app/",
    tech: ["React", "Typescript", "Chart.js", "APIs"],
    description:
      "A web-based React application designed to help users navigate and analyze the top cryptocurrencies.",
    modalContent: (
      <>
        <p>
          Crypto Voyage is a web-based React application designed to help users navigate
          and analyze the top cryptocurrencies.
        </p>
        <p>
          It allows users to track historical coin prices, view top gainers and losers,
          add to their own watchlist, and find important information about specific coins;
          including using ChartJS to display the historical prices.
        </p>
        <p>
          API&apos;s I used to create this app were CoinMarketCapApi to fetch the current
          prices, and used CoinAPI to fetch the historical data.
        </p>
        <p>
          This project thought me a lot about React, Typescript, and how to work with
          different API&apos;s.
        </p>
      </>
    ),
  },
  {
    title: "Cambodia Care",
    imgSrc: "project-imgs/cambodiacare.JPG",
    imgGif: "project-imgs/cambodiacare-preview.gif",
    code: "https://github.com/harrymcdonagh/Cambodia-Care",
    tech: ["Node", "Express", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "An eco-tourism website with the goal of assisting people in Cambodia, based on the Engineers Without Borders 2024 challenge brief.",
    modalContent: (
      <>
        <p>
          Cambodia Care, is an eco-tourism website with the goal of assisting people in
          Cambodia, based on the Engineers Without Borders 2024 challenge brief.
        </p>
        <p>
          Built the backend using Node.js and Express, implementing an MVC architecture,
          integrating a database with SQL, and using JavaScript to create login, register,
          and trip booking functionalities
        </p>
        <p>
          Developed the front end with CSS, Express Layouts, and JavaScript, utilizing
          Express-Session for secure session management and dynamic page rendering.
        </p>
      </>
    ),
  },
  {
    title: "Gamehub",
    imgSrc: "project-imgs/gamehub.jpg",
    imgGif: "project-imgs/gamehub-preview.gif",
    code: "https://github.com/harrymcdonagh/gamehub",
    projectLink: "https://gamehub-ten-blush.vercel.app/",
    tech: ["React", "Typescript", "RAWGAPI"],
    description:
      "A Game browser application that allows users to search for games, and allows for filtering",
    modalContent: (
      <>
        <p>
          GameHub is a video game discovery web app that helps you find new and
          interesting games to play. With GameHub, you can search for games by platform,
          genre, and more.
        </p>
        <p>
          This project was my first time using React and an API, I learned a lot about the
          best practices of react and how to use the data returned by an API to create a
          searchable list of games.
        </p>
      </>
    ),
  },
];
