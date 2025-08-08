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
    title: "Sylvie",
    imgSrc: "project-imgs/sylvie.jpg",
    imgGif: "project-imgs/sylvie-preview.jpg",
    code: "https://github.com/harrymcdonagh/Sylvie",
    tech: ["Python", "React", "Next.js", "MongoDB"],
    description:
      "An intelligent chatbot designed to support UEA students by answering queries about well-being and university life",
    modalContent: (
      <>
        <p>
          Sylvie is an intelligent chatbot created to support university students by
          answering queries related to well-being, campus life, and services in the
          Norwich area.
        </p>
        <p>
          Built as my final year project at UEA, this system demonstrates the culmination
          of my degree knowledge, combining a React-based frontend with a Python FastAPI
          backend and a retrieval-augmented generation (RAG) pipeline.
        </p>
        <p>
          The project includes a semantic search over a curated knowledge base of student
          services, persistent chat history via MongoDB, and custom prompt engineering to
          ensure helpful and safe responses. A detailed technical report was produced
          alongside the system.
        </p>
      </>
    ),
  },
  {
    title: "CryptoVoyage",
    imgSrc: "project-imgs/cryptovoyage.jpg",
    imgGif: "project-imgs/cryptovoyage-preview.gif",
    code: "https://github.com/harrymcdonagh/crypto-voyage",
    projectLink: "https://crypto-voyage.vercel.app/",
    tech: ["Typescript", "React", "Chart.js", "APIs"],
    description:
      "A web-based React application designed to help users navigate and analyse the top cryptocurrencies.",
    modalContent: (
      <>
        <p>
          CryptoVoyage is a web-based React application designed to help users navigate
          and analyse the top cryptocurrencies.
        </p>
        <p>
          It allows users to track historical coin prices, view top gainers and losers,
          add to their own watchlist, and find important information about specific coins;
          including using Chart.js to display the historical prices.
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
    tech: ["HTML", "JavaScript", "CSS", "SQL", "Node.js", "Express"],
    description:
      "An eco-tourism website with the goal of assisting people in Cambodia, based on the Engineers Without Borders 2024 challenge brief.",
    modalContent: (
      <>
        <p>
          Cambodia Care, is an eco-tourism website with the goal of assisting people in
          Cambodia. This project is based on the Engineers Without Borders 2024 challenge
          brief.
        </p>
        <p>
          Built the backend using Node.js and Express, implementing an MVC architecture,
          integrating a database with SQL, and using JavaScript to create login, register,
          and trip booking functionalities
        </p>
        <p>
          Developed the front end with CSS, Express Layouts, and JavaScript, utilising
          Express-Session for secure session management and dynamic page rendering.
        </p>
      </>
    ),
  },
  {
    title: "SolveIt",
    imgSrc: "project-imgs/solveit.jpg",
    imgGif: "project-imgs/solveit-preview.jpg",
    code: "https://github.com/harrymcdonagh/SolveIt",
    tech: ["WPF", "C#", "F#"],
    description:
      "A desktop math app with a custom F# interpreter and C# WPF GUI, that evaluates and plots expressions",
    modalContent: (
      <>
        <p>
          SolveIt combines a custom F# interpreter with a C# WPF frontend to evaluate
          mathematical expressions and covers basic arithmetic, unary minus, powers,
          modulo, and trigonometric functions (sin, cos). It supports variable assignment,
          enforces BODMAS, and surfaces syntax/runtime errors directly in the UI.
        </p>
        <p>
          Using OxyPlot for rich interactivity, SolveIt plots linear, polynomial,
          exponential, and trigonometric functions with zooming, panning, and axis
          controls, all within an intuitive, responsive interface.
        </p>
      </>
    ),
  },
];
