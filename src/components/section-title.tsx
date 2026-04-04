export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <div className="mb-6 lg:mb-0 lg:absolute lg:-left-[172px] lg:w-[100px] lg:flex lg:justify-end">
      <div className="relative w-fit">
        <div className="bg-accent w-full h-1 absolute bottom-[5px] -z-1"></div>
        <h3 className="text-xl lg:text-lg text-accent-foreground font-bold">
          {children}
        </h3>
      </div>
    </div>
  );
};
