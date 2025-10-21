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
    title: "Puritan AI",
    position: "AI Associate Intern",
    time: "June 2024 - September 2024",
    location: "London",
    description: [
      "Contributed to applied research on AI-driven automation, analysing data workflows and identifying opportunities to improve operational efficiency",
      "Assisted in prompt engineering and model evaluation, tuning responses for accuracy, relevance and reduced hallucinations.",
      "Supported the prototyping of automated client-support systems, improving response times and documentation processes across multiple business use cases",
    ],
    tech: [],
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
];
