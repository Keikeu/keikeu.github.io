import Image from "next/image";
import LinkIcon from "./link-icon";

export const Recommendation = ({
  title,
  year,
  creator,
  cover,
  link,
}: {
  title: string;
  year: string;
  creator: string;
  cover: string;
  link: string;
}) => {
  return (
    <li className="flex items-center bg-accent-background p-2 pr-4 gap-4 rounded-sm">
      <Image
        src={cover}
        alt={"Cover of " + title}
        width={64}
        height={96}
        className="rounded-sm"
      />

      <div className="flex flex-col gap-1 w-full">
        <a
          href={link}
          target="_blank"
          className="group w-fit inline-block relative"
        >
          <strong className="text-accent-foreground">{title}</strong>
          <span className="absolute ml-0.5">
            <LinkIcon size={18} />
          </span>
        </a>

        <p className="text-foreground-muted text-sm">{year}</p>
        <p className="text-foreground-muted text-sm">{creator}</p>
      </div>
    </li>
  );
};
