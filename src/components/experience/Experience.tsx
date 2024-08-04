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
    time: "02/2022 - 09/2022",
    location: "Maldon",
    description:
      "Responsible for resolving IT and telecommunication service tickets. I successfully automated the invoice mailing process which removed the need for the company to spend a day each month managing and sending invoices manually  8hours per month",
    tech: ["VBA", "Office 365", "SQL"],
  },
  {
    title: "JP Morgan",
    position: "Software Engineering Virtual Experience on Forage",
    time: "02/2022",
    location: "Online",
    description:
      "Used JPMorgan Chase's open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor",
    tech: ["Git", "Python", "Perspective"],
  },
];
