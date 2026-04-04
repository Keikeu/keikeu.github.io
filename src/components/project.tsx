import { Badge } from "@/components/badge";
import Image from "next/image";
import LinkIcon from "./link-icon";

export const Project = ({
  index,
  title,
  blurb,
  description,
  skills,
  imageSrc,
  link,
}: {
  index: string;
  title: string;
  blurb: string;
  description?: string;
  skills: string[];
  imageSrc: string;
  link: string;
}) => {
  return (
    <li className="flex flex-col gap-3">
      <span className="text-foreground-muted font-mono">{index}</span>
      <a
        href={link}
        target="_blank"
        className="flex group w-fit inline-block relative"
      >
        <h4 className="text-accent-foreground font-bold text-xl tracking-tight inline">
          {title}
        </h4>
        <span className="absolute ml-0.5">
          <LinkIcon size={24} />
        </span>
      </a>
      <p className="">{blurb}</p>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
      <Image
        src={imageSrc}
        alt={title + " screenshot"}
        width={1116}
        height={710}
        className="w-full rounded-sm dark:brightness-80"
      />
    </li>
  );
};
