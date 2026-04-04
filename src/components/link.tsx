import LinkIcon from "@/components/link-icon";

export const Link = ({
  username,
  label,
  href,
}: {
  username: string;
  label: string;
  href: string;
}) => {
  return (
    <div className="mb-6">
      <p className="text-foreground-muted text-sm">{label}</p>
      <a
        href={href}
        target="_blank"
        className="group flex gap-1 group w-fit text-accent-foreground"
      >
        {username}
        <LinkIcon size={20} />
      </a>
    </div>
  );
};
