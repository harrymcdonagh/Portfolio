import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string | string[];
  tech: string[];
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <div className="mb-6 border-b pb-6 border-zinc-700">
      <div className="flex items-center justify-between mb-2">
        <Reveal>
          <span className="font-bold text-xl">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Reveal>
          <span className="text-sky-300 font-bold">{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        {Array.isArray(description) ? (
          <ul className="list-disc pl-5 mb-6 text-zinc-300 leading-relaxed">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="mb-6 text-zinc-300 leading-relaxed">{description}</p>
        )}
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
