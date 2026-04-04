export const Badge = ({ children }: { children: string }) => {
  return (
    <div className="flex py-1 px-1.5 bg-accent-background rounded-sm whitespace-nowrap text-accent-foreground font-mono text-sm hover:opacity-90 transition-all">
      {children}
    </div>
  );
};
