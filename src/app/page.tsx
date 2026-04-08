import { ExperienceCard } from "@/components/experience-card";
import { Link } from "@/components/link";
import { Project } from "@/components/project";
import { NameWithPronunciation } from "@/components/name-with-pronunciation";
import { SectionTitle } from "@/components/section-title";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Divider } from "@/components/divider";

export default function Home() {
  return (
    <div className="lg:pl-32 relative overflow-x-hidden">
      <ThemeSwitcher />

      <div className="max-w-[640px] mx-auto pt-10 md:pt-16 px-6 md:px-10 border-x border-accent-border">
        <header className="mb-10">
          <NameWithPronunciation />
          <h2 className="text-lg md:text-2xl">Frontend Developer</h2>
        </header>

        <Divider />

        <main>
          <section className="relative my-20">
            <SectionTitle>About</SectionTitle>
            <p className="mb-6">
              Hi, I&apos;m Karolina, a frontend developer based in The Hague.
            </p>
            <p className="mb-6">
              With over 6 years of experience, I combine strong technical skills
              with a deep sense of form and aesthetics.
            </p>
            <p className="mb-6">
              I do my best work on small, highly collaborative teams, where the
              main driver is exceptional user experience. I care about the
              details and enjoy writing code by hand. My non-coding hours go to
              climbing, sewing, and puzzles.
            </p>
            <p className="mb-6">
              Take a look at my projects, I&apos;m very proud of them.
            </p>
          </section>

          <section className="relative my-20">
            <SectionTitle>Experience</SectionTitle>
            <ol>
              <ExperienceCard
                company="Salacia Solutions"
                position="Frontend Developer"
                link="https://salaciasolutions.com/"
                logoSrc="/salacia.svg"
                period="24 ~"
              />
              <ExperienceCard
                company="Stonly"
                position="Junior → Frontend Engineer"
                link="https://stonly.com"
                logoSrc="/stonly.svg"
                period="19 - 23"
              />
              <ExperienceCard
                company="Futurum Technology"
                position="Intern → Junior Frontend Developer"
                link="https://futurum.tech"
                logoSrc="/futurum.svg"
                period="18 - 19"
              />
            </ol>
          </section>

          <section className="relative my-20">
            <SectionTitle>Education</SectionTitle>
            <ol>
              <ExperienceCard
                company="AGH University of Science and Technology"
                position="Applied Computer Science (BSc)"
                link="https://www.agh.edu.pl/en/"
                logoSrc="/agh.svg"
                period="16 - 20"
              />
            </ol>
          </section>

          <section className="relative my-20">
            <SectionTitle>Projects</SectionTitle>
            <ol className="flex flex-col gap-18">
              <Project
                index="01"
                title="Cook Your Goose"
                blurb="My biggest project yet. Recipe manager with web scraping, meal planning and grocery list generation. I use it daily."
                description="My biggest project yet, years in the making. I had such a blast designing it in Figma, creating a full custom design system in React, and finally connecting it with backend coded by my boyfriend. I use it every day and hope to expand it into a profitable app someday."
                skills={[
                  "React",
                  "Styled Components",
                  "Framer Motion",
                  "custom design system",
                  "React Context",
                ]}
                imageSrc="/cook-your-goose.webp"
                link="https://cookyourgoose.eu"
              />
              <Project
                index="02"
                title="Thermostat Democracy"
                blurb="Office temperature voting system. Allows for creating surveys, voting and advanced analytics."
                skills={[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "shadcn",
                  "Vercel",
                  "Supabase",
                ]}
                imageSrc="/thermostat-democracy.webp"
                link="https://thermostat-democracy.vercel.app"
              />
              <Project
                index="03"
                title="Recitle"
                blurb="Weekend hackathon project - daily game where you guess the song based on its paraphrased lyrics."
                skills={["React", "Styled Components", "AI"]}
                imageSrc="/recitle.webp"
                link="https://keikeu.github.io/Recitle"
              />
              <Project
                index="04"
                title="Hoporo"
                blurb="3D platformer game inspired by 2004's Hopmon."
                skills={["JavaScript", "Three.js"]}
                imageSrc="/hoporo.webp"
                link="https://keikeu.github.io/Hoporo"
              />
            </ol>
          </section>

          {/* <section className="relative my-20">
            <SectionTitle>Recommendations</SectionTitle>
            <p>
              These are the things I have consumed and loved and want to share
              with others.
            </p>
            <Recommendation href="">Nirvanna The Band The Show</Recommendation>
            <Recommendation href="">
              Être et avoir (To Be and to Have)
            </Recommendation>
            <Recommendation href="">dimensions.com</Recommendation>
            <Recommendation href="">
              The other side of the bridge(?)
            </Recommendation>
            <Recommendation href="">Fights in Tight Spaces</Recommendation>
          </section> */}

          <section className="relative my-20">
            <SectionTitle>Connect</SectionTitle>
            <Link
              href="mailto:karolina.m.placek@gmail.com"
              label="Email"
              username="karolina.m.placek&#64;gmail.com"
            />
            <Link
              href="https://www.linkedin.com/in/karolina-m-placek/"
              label="LinkedIn"
              username="@karolina-m-placek"
            />
            <Link
              href="https://github.com/keikeu"
              label="GitHub"
              username="@keikeu"
            />
            <Link
              href="https://www.dribbble.com/sebra"
              label="Dribbble"
              username="@sebra"
            />
          </section>
        </main>

        <Divider />

        <footer className="mt-18 py-10 opacity-70 text-foreground-muted text-sm">
          <p>
            <b>Last modified:</b>
            <span className="ml-2">4 Apr, 2026</span>
          </p>
          <p className="mt-4">
            Designed in <b>Figma</b>. Built with <b>Next.js</b> and{" "}
            <b>Tailwind</b>. Deployed with <b>Vercel</b>.
          </p>
          <p className="mt-4">
            All text in this portfolio was written by a human and may include
            mistakes, typos, and oxford commas.
          </p>
        </footer>
      </div>
    </div>
  );
}
