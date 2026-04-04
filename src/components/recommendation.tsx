export const Recommendation = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="block w-fit text-foreground-muted hover:text-foreground font-medium transition-colors"
    >
      {children}
    </a>
  );
};
