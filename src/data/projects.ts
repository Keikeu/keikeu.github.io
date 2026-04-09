export type Project = {
  title: string;
  blurb: string;
  skills: string[];
  link: string;
  slides: string[];
};

export const projects: Project[] = [
  {
    title: "Cook Your Goose",
    blurb:
      "Recipe manager with web scraping, meal planning and grocery list generation. My biggest project yet. I use it daily.",
    skills: [
      "React",
      "Styled Components",
      "Framer Motion",
      "custom design system",
      "React Context",
    ],
    link: "https://cookyourgoose.eu",
    slides: [
      "/cook-your-goose/cook-your-goose-1.webp",
      "/cook-your-goose/cook-your-goose-2.webp",
      "/cook-your-goose/cook-your-goose-3.webp",
      "/cook-your-goose/cook-your-goose-4.webp",
      "/cook-your-goose/cook-your-goose-5.webp",
    ],
  },
  {
    title: "Thermostat Democracy",
    blurb:
      "Office temperature voting system. Allows for creating surveys, voting and advanced analytics.",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn",
      "Vercel",
      "Supabase",
    ],
    link: "https://thermostat-democracy.vercel.app",
    slides: [
      "/thermostat-democracy/thermostat-democracy-1.webp",
      "/thermostat-democracy/thermostat-democracy-2.webp",
      "/thermostat-democracy/thermostat-democracy-3.webp",
      "/thermostat-democracy/thermostat-democracy-4.webp",
      "/thermostat-democracy/thermostat-democracy-5.webp",
      "/thermostat-democracy/thermostat-democracy-6.webp",
      "/thermostat-democracy/thermostat-democracy-7.webp",
      "/thermostat-democracy/thermostat-democracy-8.webp",
    ],
  },
  {
    title: "Recitle",
    blurb:
      "Weekend hackathon project - daily game where you guess the song based on its paraphrased lyrics.",
    skills: ["React", "Styled Components", "LLM"],
    link: "https://keikeu.github.io/Recitle",
    slides: [
      "/recitle/recitle-1.webp",
      "/recitle/recitle-2.webp",
      "/recitle/recitle-3.webp",
      "/recitle/recitle-4.webp",
      "/recitle/recitle-5.webp",
    ],
  },
  {
    title: "Hoporo",
    blurb: "3D platformer game inspired by 2004's Hopmon.",
    skills: ["JavaScript", "Three.js"],
    link: "https://keikeu.github.io/Hoporo",
    slides: [
      "/hoporo/hoporo-1.webp",
      "/hoporo/hoporo-2.webp",
      "/hoporo/hoporo-3.webp",
      "/hoporo/hoporo-4.webp",
      "/hoporo/hoporo-5.webp",
    ],
  },
];
