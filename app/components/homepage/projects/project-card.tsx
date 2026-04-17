"use client";

// @ts-nocheck
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useLanguage } from "../../../context/language-context";

const labels = {
  es: {
    tools: "tools",
    role: "miRol",
    description: "descripcion",
    live: "Ver proyecto",
    code: "Código",
  },
  en: {
    tools: "tools",
    role: "myRole",
    description: "description",
    live: "View project",
    code: "Code",
  },
};

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";
  const t = labels[lang];

  const projectName =
    typeof project.name === "string" ? project.name : project.name?.[lang] || "";

  const projectDescription =
    typeof project.description === "string"
      ? project.description
      : project.description?.[lang] || "";

  const projectRole =
    typeof project.role === "string" ? project.role : project.role?.[lang] || "";

  const projectCategory =
    typeof project.category === "string"
      ? project.category
      : project.category?.[lang] || "";

  const projectHighlights = Array.isArray(project.highlights)
    ? project.highlights
    : project.highlights?.[lang] || [];

  const windowDots = ["bg-[#ff5f56]", "bg-[#ffbd2e]", "bg-[#27c93f]"];

  return (
    <article className="overflow-hidden rounded-[24px] border border-[#2b2f77] bg-[linear-gradient(180deg,#07103a_0%,#050b2d_100%)] shadow-[0_0_30px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between border-b border-[#2b2f77] px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          {windowDots.map((dot, dotIndex) => (
            <span
              key={dotIndex}
              className={`h-3.5 w-3.5 rounded-full ${dot}`}
            />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-[#20F0C7] md:text-2xl">
            {projectName}
          </h3>
        </div>

        <div className="hidden md:block text-xs font-medium text-white/40">
          {projectCategory}
        </div>
      </div>

      <div className="px-4 py-5 md:px-8 md:py-8">
        <div className="overflow-x-auto font-mono text-sm leading-8 md:text-[1.05rem]">
          <div className="mb-2 whitespace-pre-wrap text-white/85">
            <span className="text-[#b388ff]">const</span>{" "}
            <span className="font-semibold text-white">project</span>{" "}
            <span className="text-white/60">=</span>{" "}
            <span className="text-white/60">{"{"}</span>
          </div>

          <div className="pl-4 md:pl-10">
            <p className="whitespace-pre-wrap break-words text-white/85">
              <span className="text-white">name:</span>{" "}
              <span className="text-[#ffd84d]">'{projectName}'</span>
              <span className="text-white/60">,</span>
            </p>

            <p className="whitespace-pre-wrap break-words text-white/85">
              <span className="text-white">{t.tools}:</span>{" "}
              <span className="text-white/60">[</span>
              {project.tools?.map((tool, toolIndex) => (
                <span key={toolIndex}>
                  <span className="text-[#ffd84d]">'{tool}'</span>
                  {toolIndex < project.tools.length - 1 && (
                    <span className="text-white/60">, </span>
                  )}
                </span>
              ))}
              <span className="text-white/60">],</span>
            </p>

            <p className="whitespace-pre-wrap break-words text-white/85">
              <span className="text-white">{t.role}:</span>{" "}
              <span className="text-[#ff9f1c]">{projectRole}</span>
              <span className="text-white/60">,</span>
            </p>

            <p className="whitespace-pre-wrap break-words text-white/85">
              <span className="text-white">{t.description}:</span>{" "}
              <span className="text-[#14d8ff]">{projectDescription}</span>
            </p>
          </div>

          <div className="mt-2 text-white/60">{"};"}</div>
        </div>

        {projectHighlights.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {projectHighlights.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              {t.live}
              <FiArrowUpRight />
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition-colors duration-300 hover:border-cyan-400/30 hover:text-white"
            >
              {t.code}
              <FiGithub />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;