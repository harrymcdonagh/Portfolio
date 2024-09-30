import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Horizone Ltd",
    position: "IT Technician",
    time: "February 2022 - September 2022",
    location: "Maldon",
    description: [
      "Improved efficiency and customer experiences by developing a VBA-driven system to automate invoice processes.",
      "Identified and implemented improvements to internal efficiency and the customer experience",
      "Managed Microsoft accounts, ensuring policy compliance while maximising user access.",
      "Enhanced office connectivity and system performance by building and troubleshooting network infrastructures",
    ],
    tech: ["VBA", "Office 365", "SQL"],
  },
  {
    title: "JP Morgan",
    position: "Software Engineering Virtual Experience on Forage",
    time: "February 2024",
    location: "Online ",
    description:
      "Established and maintained a local development environment, rectified broken files to optimise web application performance, and used JPMorgan Chase's Perspective library to create real-time, visually appealing data visualisations for trader monitoring.",
    tech: ["Git", "Python", "Perspective"],
  },
];
