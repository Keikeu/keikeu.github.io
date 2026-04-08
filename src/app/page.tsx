import { ExperienceCard } from "@/components/experience-card";
import { Link } from "@/components/link";
import { Project } from "@/components/project";
import { NameWithPronunciation } from "@/components/name-with-pronunciation";
import { SectionTitle } from "@/components/section-title";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Divider } from "@/components/divider";
import { projects } from "@/data/projects";

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
              {projects.map((project, i) => (
                <Project key={project.title} index={i} {...project} />
              ))}
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
