"use client";

// @ts-nocheck
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { useLanguage } from "../../../context/language-context";

const sectionCopy = {
  es: {
    badge: "Proyectos",
    title: "Proyectos destacados",
    subtitle:
      "Una selección ordenada de proyectos alineados con mi trayectoria en frontend, producto digital, performance, CMS, analítica e integración de experiencias con IA.",
  },
  en: {
    badge: "Projects",
    title: "Featured projects",
    subtitle:
      "A curated selection of projects aligned with my background in frontend, digital product, performance, CMS, analytics, and AI-powered experiences.",
  },
};

const Projects = () => {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";
  const t = sectionCopy[lang];

  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .slice(0, 5);

  const stickyTopValues = [
    "top-[110px]",
    "top-[140px]",
    "top-[170px]",
    "top-[200px]",
    "top-[230px]",
  ];

  return (
    <section
      id="projects"
      className="relative z-40 my-16 overflow-hidden px-4 md:my-24 md:px-8 xl:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-24 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-10 top-1/3 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="sticky top-6 z-30 mb-12 md:top-10">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.88),rgba(5,11,29,0.94))] px-5 py-5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.22)] md:px-8 md:py-6">
            <div className="mb-4 flex items-center gap-4">
              <span className="inline-flex rounded-2xl border border-fuchsia-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(123,44,255,0.10)]">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.badge}
                </span>
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/20 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-[1.2fr_.8fr] md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.title}
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-white/65 md:ml-auto md:text-base">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="flex flex-col gap-16 md:gap-24">
            {featuredProjects.map((project, index) => (
              <div
                id={`sticky-card-${index + 1}`}
                key={project.id || index}
                className={`relative sticky ${stickyTopValues[index] || "top-[120px]"}`}
              >
                <div className="group relative mx-auto max-w-6xl">
                  <div className="pointer-events-none absolute -inset-2 rounded-[32px] bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-violet-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute -top-5 left-5 z-20 rounded-2xl border border-white/10 bg-[#081133]/90 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 backdrop-blur-xl md:left-8">
                    {String(index + 1).padStart(2, "0")} / 05
                  </div>

                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.86),rgba(5,11,29,0.96))] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-400/20">
                    <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70" />
                    <div className="rounded-[28px] bg-[#071128]/70 p-2 md:p-3">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;