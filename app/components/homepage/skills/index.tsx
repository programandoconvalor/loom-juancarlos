"use client";

import React, { useMemo, useState } from "react";
import {
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaAngular,
  FaFigma,
  FaRobot,
  FaWordpress,
  FaCodeBranch,
  FaTools,
  FaComments,
  FaProjectDiagram,
  FaPython,
  FaJira,
  FaConfluence,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiOpenai,
  SiFirebase,
  SiGithub,
  SiVercel,
  SiJest,
  SiCypress,
  SiStorybook,
  SiRedux,
  SiJquery,
  SiWebflow,
  SiGoogleanalytics,
  SiSass,
  SiBootstrap,
  SiDotnet,
  SiAzuredevops,
  SiMicrosoftsqlserver,
  SiJira ,
  SiGraphql,
} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";
import { BsDatabaseGear, BsShieldCheck } from "react-icons/bs";
import { MdArchitecture, MdOutlineSecurity } from "react-icons/md";
import { useLanguage } from "../../../context/language-context";

type Lang = "es" | "en";

type Category =
  | "all"
  | "core"
  | "frameworks"
  | "ui"
  | "cloud"
  | "backend"
  | "ai"
  | "quality"
  | "marketingCms";

type Skill = {
  key: string;
  name: {
    es: string;
    en: string;
  };
  icon: React.ReactNode;
  level: number;
  category: Exclude<Category, "all">;
};

const content = {
  es: {
    badge: "Habilidades",
    title: "Full Stack Developer",
    subtitle:
      "Stack completo: frontend moderno, backend robusto con .NET, APIs REST/SOAP, bases de datos SQL Server, cloud Azure, DevOps, performance, testing e IA.",
    categoryLabel: "Categoría",
    proficiencyLabel: "Dominio",
    filters: {
      all: "Todos",
      core: "Core Frontend",
      frameworks: "Frameworks",
      ui: "UI / UX",
      backend: "Backend .NET",
      cloud: "Cloud / DevTools",
      marketingCms: "SEO / CMS / Analytics",
      ai: "IA / AI Tools",
      quality: "Testing / Calidad",
    },
    categoryNames: {
      core: "Core Frontend",
      frameworks: "Frameworks",
      ui: "UI / UX",
      backend: "Backend .NET",
      cloud: "Cloud / DevTools",
      marketingCms: "SEO / CMS / Analytics",
      ai: "IA / AI Tools",
      quality: "Testing / Calidad",
    },
  },
  en: {
    badge: "Skills",
    title: "Full Stack Developer",
    subtitle:
      "Complete stack: modern frontend, robust backend with .NET, REST/SOAP APIs, SQL Server databases, Azure cloud, DevOps, performance, testing, and AI integration.",
    categoryLabel: "Category",
    proficiencyLabel: "Proficiency",
    filters: {
      all: "All",
      core: "Core Frontend",
      frameworks: "Frameworks",
      ui: "UI / UX",
      backend: "Backend .NET",
      cloud: "Cloud / DevTools",
      marketingCms: "SEO / CMS / Analytics",
      ai: "AI / AI Tools",
      quality: "Testing / Quality",
    },
    categoryNames: {
      core: "Core Frontend",
      frameworks: "Frameworks",
      ui: "UI / UX",
      backend: "Backend .NET",
      cloud: "Cloud / DevTools",
      marketingCms: "SEO / CMS / Analytics",
      ai: "AI / AI Tools",
      quality: "Testing / Quality",
    },
  },
} as const;

const skills: Skill[] = [
  { key: "react", name: { es: "React", en: "React" }, icon: <FaReact />, level: 95, category: "core" },
  { key: "nextjs", name: { es: "Next.js", en: "Next.js" }, icon: <SiNextdotjs />, level: 90, category: "frameworks" },
  { key: "typescript", name: { es: "TypeScript", en: "TypeScript" }, icon: <SiTypescript />, level: 85, category: "core" },
  { key: "javascript", name: { es: "JavaScript", en: "JavaScript" }, icon: <SiJavascript />, level: 95, category: "core" },
  { key: "html", name: { es: "HTML", en: "HTML" }, icon: <FaHtml5 />, level: 97, category: "core" },
  { key: "css", name: { es: "CSS", en: "CSS" }, icon: <FaCss3Alt />, level: 98, category: "core" },
  { key: "sass", name: { es: "SASS / SCSS", en: "SASS / SCSS" }, icon: <SiSass />, level: 90, category: "core" },

  { key: "tailwind", name: { es: "Tailwind CSS", en: "Tailwind CSS" }, icon: <SiTailwindcss />, level: 92, category: "ui" },
  { key: "mui", name: { es: "Material UI (MUI)", en: "Material UI (MUI)" }, icon: <FaFigma />, level: 85, category: "ui" },
  { key: "bootstrap", name: { es: "Bootstrap", en: "Bootstrap" }, icon: <SiBootstrap />, level: 75, category: "ui" },
  { key: "figma", name: { es: "Figma", en: "Figma" }, icon: <FaFigma />, level: 82, category: "ui" },
  { key: "responsive", name: { es: "Diseño Responsive", en: "Responsive Design" }, icon: <FaFigma />, level: 96, category: "ui" },

  { key: "node", name: { es: "Node.js", en: "Node.js" }, icon: <FaNodeJs />, level: 78, category: "frameworks" },
  { key: "redux", name: { es: "Redux Toolkit", en: "Redux Toolkit" }, icon: <SiRedux />, level: 84, category: "frameworks" },
  { key: "jquery", name: { es: "jQuery", en: "jQuery" }, icon: <SiJquery />, level: 80, category: "frameworks" },
  { key: "vite", name: { es: "Vite", en: "Vite" }, icon: <SiVite />, level: 87, category: "frameworks" },
  { key: "webpack", name: { es: "Webpack", en: "Webpack" }, icon: <SiWebpack />, level: 85, category: "frameworks" },
  { key: "vue", name: { es: "Vue.js", en: "Vue.js" }, icon: <FaVuejs />, level: 50, category: "frameworks" },
  { key: "angular", name: { es: "Angular", en: "Angular" }, icon: <FaAngular />, level: 50, category: "frameworks" },

  { key: "git", name: { es: "Git", en: "Git" }, icon: <FaGitAlt />, level: 93, category: "cloud" },
  { key: "git-flow", name: { es: "Git Flow", en: "Git Flow" }, icon: <FaCodeBranch />, level: 90, category: "cloud" },
  { key: "code-reviews", name: { es: "Pull Requests / Code Reviews", en: "Pull Requests / Code Reviews" }, icon: <FaCodeBranch />, level: 90, category: "cloud" },
  { key: "cicd", name: { es: "CI/CD", en: "CI/CD" }, icon: <FaTools />, level: 89, category: "cloud" },
  { key: "docker", name: { es: "Docker", en: "Docker" }, icon: <FaDocker />, level: 70, category: "cloud" },
  { key: "aws", name: { es: "AWS", en: "AWS" }, icon: <FaAws />, level: 60, category: "cloud" },
  { key: "firebase", name: { es: "Firebase", en: "Firebase" }, icon: <SiFirebase />, level: 50, category: "cloud" },
  { key: "vercel", name: { es: "Vercel", en: "Vercel" }, icon: <SiVercel />, level: 88, category: "cloud" },

  { key: "jest", name: { es: "Jest", en: "Jest" }, icon: <SiJest />, level: 80, category: "quality" },
  { key: "cypress", name: { es: "Cypress", en: "Cypress" }, icon: <SiCypress />, level: 78, category: "quality" },
  { key: "storybook", name: { es: "Storybook", en: "Storybook" }, icon: <SiStorybook />, level: 70, category: "quality" },
  { key: "debugging", name: { es: "Depuración Frontend", en: "Front-end Debugging" }, icon: <FaTools />, level: 90, category: "quality" },

  { key: "seo", name: { es: "SEO", en: "SEO" }, icon: <SiGoogleanalytics />, level: 88, category: "marketingCms" },
  { key: "performance", name: { es: "Optimización de Performance", en: "Performance Optimization" }, icon: <SiGoogleanalytics />, level: 90, category: "marketingCms" },
  { key: "gtm", name: { es: "Google Tag Manager", en: "Google Tag Manager" }, icon: <SiGoogleanalytics />, level: 80, category: "marketingCms" },
  { key: "ga", name: { es: "Google Analytics", en: "Google Analytics" }, icon: <SiGoogleanalytics />, level: 84, category: "marketingCms" },
  { key: "wordpress", name: { es: "WordPress", en: "WordPress" }, icon: <FaWordpress />, level: 78, category: "marketingCms" },
  { key: "webflow", name: { es: "Webflow", en: "Webflow" }, icon: <SiWebflow />, level: 76, category: "marketingCms" },

  { key: "openai", name: { es: "OpenAI API", en: "OpenAI API" }, icon: <SiOpenai />, level: 76, category: "ai" },
  { key: "copilot", name: { es: "GitHub Copilot", en: "GitHub Copilot" }, icon: <SiGithub />, level: 75, category: "ai" },
  { key: "ai-agents", name: { es: "AI Agents", en: "AI Agents" }, icon: <FaRobot />, level: 74, category: "ai" },
  { key: "chatbots", name: { es: "Chatbots", en: "Chatbots" }, icon: <FaComments />, level: 80, category: "ai" },

  { key: "csharp", name: { es: "C#", en: "C#" }, icon: <TbBrandCSharp />, level: 88, category: "backend" },
  { key: "oop", name: { es: "Programación Orientada a Objetos", en: "Object-Oriented Programming" }, icon: <FaCodeBranch />, level: 92, category: "backend" },
  { key: "dotnet", name: { es: ".NET / .NET Core", en: ".NET / .NET Core" }, icon: <SiDotnet />, level: 90, category: "backend" },
  { key: "dotnet-core-678", name: { es: ".NET Core 6/7/8", en: ".NET Core 6/7/8" }, icon: <SiDotnet />, level: 92, category: "backend" },
  { key: "aspnet", name: { es: "ASP.NET / ASP.NET Core", en: "ASP.NET / ASP.NET Core" }, icon: <SiDotnet />, level: 89, category: "backend" },
  { key: "dotnet-framework", name: { es: ".NET Framework 4.6", en: ".NET Framework 4.6" }, icon: <SiDotnet />, level: 85, category: "backend" },
  { key: "mvc", name: { es: "ASP.NET MVC", en: "ASP.NET MVC" }, icon: <SiDotnet />, level: 88, category: "backend" },
  { key: "blazor", name: { es: "Blazor", en: "Blazor" }, icon: <SiDotnet />, level: 82, category: "backend" },
  { key: "sqlserver", name: { es: "SQL Server", en: "SQL Server" }, icon: <SiMicrosoftsqlserver />, level: 90, category: "backend" },
  { key: "stored-procedures", name: { es: "Stored Procedures", en: "Stored Procedures" }, icon: <BsDatabaseGear />, level: 87, category: "backend" },
  { key: "webapi", name: { es: "ASP.NET Core Web API", en: "ASP.NET Core Web API" }, icon: <TbApi />, level: 90, category: "backend" },
  { key: "rest-apis", name: { es: "REST APIs", en: "REST APIs" }, icon: <TbApi />, level: 92, category: "backend" },
  { key: "graphql", name: { es: "GraphQL", en: "GraphQL" }, icon: <SiGraphql />, level: 80, category: "backend" },
  { key: "soap", name: { es: "SOAP Web Services", en: "SOAP Web Services" }, icon: <TbApi />, level: 80, category: "backend" },
  { key: "jwt", name: { es: "JWT Authentication", en: "JWT Authentication" }, icon: <BsShieldCheck />, level: 87, category: "backend" },
  { key: "azure", name: { es: "Azure / Azure DevOps", en: "Azure / Azure DevOps" }, icon: <SiAzuredevops />, level: 85, category: "backend" },
  { key: "xunit", name: { es: "xUnit Testing", en: "xUnit Testing" }, icon: <SiJest />, level: 83, category: "quality" },

  { key: "entity-framework", name: { es: "Entity Framework Core", en: "Entity Framework Core" }, icon: <SiMicrosoftsqlserver />, level: 88, category: "backend" },
  { key: "dapper", name: { es: "Dapper ORM", en: "Dapper ORM" }, icon: <SiMicrosoftsqlserver />, level: 85, category: "backend" },
  { key: "azure-services", name: { es: "Azure Services", en: "Azure Services" }, icon: <SiAzuredevops />, level: 82, category: "backend" },
  { key: "clean-architecture", name: { es: "Clean Architecture", en: "Clean Architecture" }, icon: <MdArchitecture />, level: 86, category: "backend" },
  { key: "ddd", name: { es: "Domain Driven Design", en: "Domain Driven Design" }, icon: <MdArchitecture />, level: 84, category: "backend" },
  { key: "cqrs", name: { es: "CQRS Pattern", en: "CQRS Pattern" }, icon: <MdArchitecture />, level: 83, category: "backend" },
  { key: "oauth2", name: { es: "OAuth 2.0", en: "OAuth 2.0" }, icon: <BsShieldCheck />, level: 87, category: "backend" },
  { key: "azure-ad", name: { es: "Azure AD", en: "Azure AD" }, icon: <SiAzuredevops />, level: 80, category: "backend" },
  { key: "identity-server", name: { es: "Identity Server", en: "Identity Server" }, icon: <BsShieldCheck />, level: 78, category: "backend" },

  { key: "zustand", name: { es: "Zustand", en: "Zustand" }, icon: <SiRedux />, level: 82, category: "frameworks" },
  { key: "react-query", name: { es: "React Query", en: "React Query" }, icon: <SiRedux />, level: 85, category: "frameworks" },
  { key: "ant-design", name: { es: "Ant Design", en: "Ant Design" }, icon: <FaFigma />, level: 78, category: "ui" },
  { key: "react-testing-library", name: { es: "React Testing Library", en: "React Testing Library" }, icon: <SiJest />, level: 84, category: "quality" },
  { key: "babel", name: { es: "Babel", en: "Babel" }, icon: <SiJavascript />, level: 80, category: "frameworks" },

  { key: "kubernetes", name: { es: "Kubernetes", en: "Kubernetes" }, icon: <FaDocker />, level: 75, category: "cloud" },
  { key: "scrum", name: { es: "Scrum", en: "Scrum" }, icon: <FaProjectDiagram />, level: 90, category: "cloud" },
  { key: "kanban", name: { es: "Kanban", en: "Kanban" }, icon: <FaProjectDiagram />, level: 85, category: "cloud" },
  { key: "python", name: { es: "Python", en: "Python" }, icon: <FaPython />, level: 40, category: "backend" },
  { key: "jira", name: { es: "Jira", en: "Jira" }, icon: <FaJira />, level: 88, category: "cloud" },
  { key: "azure-boards", name: { es: "Azure Boards", en: "Azure Boards" }, icon: <SiAzuredevops />, level: 86, category: "cloud" },
  { key: "confluence", name: { es: "Confluence", en: "Confluence" }, icon: <FaConfluence />, level: 82, category: "cloud" },
];

export default function SkillsSection() {
  const { language } = useLanguage();
  const lang: Lang = language === "en" ? "en" : "es";

  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const t = content[lang];

  const categoryTabs: Category[] = [
    "all",
    "core",
    "frameworks",
    "ui",
    "backend",
    "cloud",
    "marketingCms",
    "ai",
    "quality",
  ];

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20 xl:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-1/3 h-36 w-36 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
              {t.badge}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl">
            {t.title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3 md:mb-10">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-fuchsia-400/40 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 text-white shadow-[0_0_25px_rgba(123,44,255,0.18)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/30 hover:text-white"
                }`}
              >
                {t.filters[tab]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => (
            <article
              key={skill.key}
              className="group min-h-[220px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.92),rgba(5,11,29,0.98))] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(32,240,199,0.10)] md:p-6"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-cyan-300 transition-all duration-300 group-hover:scale-105 group-hover:text-pink-400">
                {skill.icon}
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name[lang]}
                </h3>
                <p className="mt-1 text-sm text-white/55">
                  {t.categoryLabel}:{" "}
                  <span className="text-cyan-300">
                    {t.categoryNames[skill.category]}
                  </span>
                </p>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-white/65">
                  {t.proficiencyLabel}
                </span>
                <span className="text-sm font-semibold text-white/80">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}