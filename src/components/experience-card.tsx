import Image from "next/image";
import LinkIcon from "./link-icon";

export const ExperienceCard = ({
  company,
  position,
  logoSrc,
  period,
  link,
}: {
  company: string;
  position: string;
  logoSrc: string;
  period: string;
  link: string;
}) => {
  return (
    <li className="flex bg-accent-background rounded-sm p-2 pr-4 mb-4 justify-between items-center">
      <div className="flex gap-4">
        <div className="w-[48px] h-[48px] flex-shrink-0 rounded-sm bg-background dark:bg-foreground flex items-center justify-center">
          <Image
            src={logoSrc}
            alt={`${company} logomark`}
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-col">
          <a
            className="flex group w-fit inline-block relative"
            href={link}
            target="_blank"
          >
            <strong className="text-accent-foreground">{company}</strong>
            <span className="absolute ml-0.5">
              <LinkIcon size={20} />
            </span>
          </a>
          <span className="text-foreground-muted text-sm">{position}</span>
        </div>
      </div>

      <span className="text-foreground-muted text-sm whitespace-nowrap">
        {period}
      </span>
    </li>
  );
};
