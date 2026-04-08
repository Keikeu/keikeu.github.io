export function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center hover:bg-glass transition-[200] size-7 rounded-full cursor-pointer"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="stroke-foreground dark:stroke-background"
      >
        <path
          d={direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
