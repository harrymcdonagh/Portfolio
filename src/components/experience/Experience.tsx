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
    description: [
      "Resolved IT and telecommunications-related service tickets for customers, operating both individually and collaboratively within a team environment.",
      "Successfully automated the invoice mailing process, significantly increasing efficiency and reducing the time spent on this task.",
      "Administered Microsoft accounts for customers' employees",
      "Acquired hands-on experience in implementing and troubleshooting network infrastructures within office environments",
    ],
    tech: ["VBA", "Office 365", "SQL"],
  },
  {
    title: "JP Morgan",
    position: "Software Engineering Virtual Experience on Forage",
    time: "02/2024",
    location: "Online ",
    description:
      "Used JPMorgan Chase's open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor",
    tech: ["Git", "Python", "Perspective"],
  },
];
