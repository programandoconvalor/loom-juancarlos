"use client";

import Image from "next/image";
import {
  BsArrowUpRight,
  BsCalendar3,
  BsCheckCircle,
  BsCloudArrowUp,
  BsCodeSlash,
  BsDatabaseGear,
  BsGraphUpArrow,
  BsLightningCharge,
  BsPersonWorkspace,
  BsShieldCheck,
  BsWindowStack,
} from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiAuth0,
  SiAwslambda,
  SiAzuredevops,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDrupal,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiOpenai,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { VscSymbolMethod } from "react-icons/vsc";

import { useLanguage } from "@/app/context/language-context";

const experienceContent = {
  es: {
    badge: "TRAYECTORIA PROFESIONAL",
    titleStart: "Experiencia enfocada en",
    titleHighlight: "Full Stack de alto impacto",
    description:
      "Más de 8 años desarrollando aplicaciones web y APIs con React.js, Next.js, TypeScript, .NET Core, C# y SQL Server para productos enterprise. Mi enfoque es crear soluciones end-to-end: arquitectura full stack, APIs robustas, bases de datos optimizadas, UX/UI, performance, testing, seguridad, CI/CD, Docker, Azure DevOps y despliegues automatizados.",
    stackLabel: "Stack relevante",
    projectsLabel: "Proyectos destacados",
    strengthsLabel: "Fortalezas clave",
    metricsLabel: "Métricas y enfoque técnico",
    panel: {
      overline: "FULL STACK ENGINEERING",
      heading:
        "Arquitectura end-to-end, APIs robustas, bases de datos, cloud y DevOps con excelencia técnica",
      cards: [
        {
          title: "FRONTEND MODERNO",
          value: "React",
          caption: "Interfaces reutilizables, performance y UX excepcional",
          borderClass:
            "border-[rgba(32,240,199,0.58)] shadow-[0_0_0_1px_rgba(32,240,199,0.12)]",
          titleClass: "text-[#20f0c7]",
        },
        {
          title: "BACKEND ROBUSTO",
          value: ".NET Core",
          caption: "APIs escalables, SQL Server, stored procedures y DevOps",
          borderClass:
            "border-[rgba(123,44,255,0.58)] shadow-[0_0_0_1px_rgba(123,44,255,0.12)]",
          titleClass: "text-[#52c7ff]",
        },
        {
          title: "DELIVERY ÁGIL",
          value: "CI/CD",
          caption: "Docker, Azure DevOps, pipelines automatizados y cloud",
          borderClass:
            "border-[rgba(255,60,172,0.58)] shadow-[0_0_0_1px_rgba(255,60,172,0.12)]",
          titleClass: "text-[#ffd84d]",
        },
      ],
      bullets: [
        "React.js avanzado, Next.js, Hooks, TypeScript y componentes SSR/SSG",
        ".NET Core APIs 6/7/8, C#, arquitectura SOLID y patrones clean code",
        "SQL Server: stored procedures, triggers, optimización de queries y integridad de datos",
        "Docker, CI/CD, Azure DevOps, GitHub Actions, pipelines y despliegues automatizados en cloud",
      ],
    },
    metrics: [
      {
        label: "APIs Backend",
        value: ".NET Core + SQL",
        icon: "api",
        caption: "REST APIs escalables, stored procedures, triggers, transacciones ACID y optimización de BD.",
      },
      {
        label: "CI/CD + DevOps",
        value: "Azure / Docker",
        icon: "delivery",
        caption: "Pipelines automatizados, GitHub Actions, YAML workflows, Azure DevOps y despliegues en cloud.",
      },
      {
        label: "Testing Full Stack",
        value: "Jest + xUnit",
        icon: "testing",
        caption: "Cobertura funcional frontend, unit tests backend, integración y validación continua.",
      },
      {
        label: "Cloud & Docker",
        value: "Azure / AWS",
        icon: "cloud",
        caption: "Contenedorización con Docker, orquestación y modernización de sistemas legacy en cloud.",
      },
      {
        label: "Next.js + .NET",
        value: "Full Stack",
        icon: "performance",
        caption: "Renderizado SSR/SSG, APIs backend optimizadas y estrategias end-to-end de arquitectura.",
      },
      {
        label: "Security",
        value: "JWT / OAuth2",
        icon: "security",
        caption: "Autenticación enterprise, autorización RBAC, protección de datos y seguridad de APIs.",
      },
    ],
    roles: [
      {
        id: 1,
        period: "Feb 2022 - Ene 2025",
        role: "Senior Full Stack Engineer",
        company: "Afore Principal",
        type: "Remote Freelancer · Fintech / Enterprise",
        summary:
          "Desarrollo de widgets, librerías y APIs full stack con React.js, Next.js, TypeScript, .NET Core, C# y SQL Server para sistemas internos enterprise. Diseño de APIs REST robustas, stored procedures, triggers, bases de datos optimizadas y componentes frontend reutilizables. Implementación de CI/CD con Docker, Azure DevOps y despliegues automatizados, colaborando bajo metodologías ágiles.",
        highlights: [
          "Desarrollo full stack con React.js, Next.js, TypeScript en frontend y .NET Core APIs, C# en backend, SQL Server para bases de datos.",
          "Diseño e implementación de stored procedures, triggers, índices y queries optimizadas en SQL Server para integridad y performance de datos.",
          "Construcción de APIs REST escalables con .NET Core 6/7/8, manejo de transacciones ACID, autenticación JWT y validación de datos.",
          "Implementación de interfaces frontend reutilizables consumidas como librerías, integración con APIs backend y Server Actions en Next.js.",
          "Configuración de CI/CD completo: Docker, GitHub Actions, Azure DevOps pipelines, YAML workflows y despliegues automatizados.",
          "Despliegues en Azure cloud infrastructure: aplicaciones containerizadas, gestión de ambientes QA, Staging y Production.",
          "Testing full stack: Jest + React Testing Library (frontend), xUnit (backend), cobertura funcional y validación continua.",
          "Aplicación de SOLID, clean code, architectural patterns y buenas prácticas en ambos lados del stack.",
          "Implementación de seguridad enterprise: autenticación JWT/OAuth2, autorización RBAC, protección de APIs y manejo seguro de sesiones.",
          "Participación en code reviews, documentación técnica, runbooks y definición de estándares full stack.",
          "Trabajo diario con Scrum, Azure Boards, dailys, refinamientos y colaboración con backend, DevOps y equipos multidisciplinarios.",
          "Colaboración con Docker, Drupal, infraestructura cloud y flujos de despliegue en ambientes enterprise.",
        ],
        projects: [
          "Widget inteligente de simulación y recomendación asistida con OpenAI para orientar opciones y escenarios financieros dentro del portal.",
          "Módulo de ayuda contextual con IA para formularios y flujos internos, generando asistencia dinámica y respuestas guiadas para usuarios y asesores.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Material UI",
          ".NET Core",
          "C#",
          "SQL Server",
          "Stored Procedures",
          "REST APIs",
          "GraphQL",
          "Docker",
          "GitHub Actions",
          "Azure DevOps",
          "Jest",
          "xUnit",
          "Testing Library",
          "JWT",
          "OAuth2",
          "Redux",
          "AWS Lambda",
          "Azure",
          "Git",
          "GitHub",
        ],
      },
      {
        id: 2,
        period: "Jul 2018 - Ene 2022",
        role: "Senior Full Stack Developer",
        company: "AXA Assistance",
        type: "Enterprise · Remote / Hybrid",
        summary:
          "Desarrollo y modernización de soluciones full stack enterprise con React.js, Next.js, TypeScript, .NET C# y SQL Server para productos asegurador. Integración de APIs REST externas, refactorización de sistemas legacy hacia arquitectura moderna, migración a Azure con CI/CD, diseño de bases de datos optimizadas y construcción de interfaces escalables.",
        highlights: [
          "Desarrollo full stack con React.js, Next.js, TypeScript en frontend y .NET, C#, SQL Server en backend para productos asegurador.",
          "Diseño e implementación de APIs REST robustas con .NET, integrando múltiples proveedores externos de grúas y asistencia con transacciones seguras.",
          "Optimización de bases de datos SQL Server con stored procedures, triggers, índices y queries complejas para performance y escalabilidad.",
          "Refactorización de sistemas legacy hacia arquitectura moderna con Next.js, TypeScript e interfaces reutilizables.",
          "Implementación de estrategias de renderizado SSR/SSG en Next.js y APIs backend Well-designed para mejorar performance general.",
          "Migración de módulos a Azure mediante CI/CD pipelines, control de ambientes y modernización progresiva de la plataforma.",
          "Configuración de Azure DevOps, Git, control de versiones, code reviews y seguimiento continuo bajo metodología Scrum.",
          "Aplicación de SOLID, clean code, documentación técnica y buenas prácticas en componentes frontend, APIs backend y flujos de negocio.",
          "Implementación de autenticación y autorización enterprise-grade con JWT, OAuth2 y security best practices en sistemas conectados.",
          "Docker containerization para aplicaciones backend, facilitando despliegues consistentes en múltiples ambientes.",
          "Colaboración multidisciplinaria: validación de requerimientos, prioridades, arquitectura y entregables técnicos con stakeholders.",
        ],
        projects: [
          "Integración front-end con proveedores externos de asistencia vial y grúas para visualizar disponibilidad, estatus y datos operativos en tiempo real para usuarios finales.",
          "Refactorización y migración de módulos legacy hacia Next.js + TypeScript, desplegados en Azure mediante pipelines automatizados y ambientes controlados.",
          "Chatbot de apoyo para usuarios de pólizas de auto, orientado a respuestas rápidas, guía de flujos y consulta contextual dentro del portal.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material UI",
          "Redux",
          "REST APIs",
          "GraphQL",
          "Auth0",
          "Azure",
          "Git",
          "GitHub",
          "Vercel",
        ],
      },
      {
        id: 3,
        period: "Jul 2016 - Jun 2018",
        role: "Full Stack Developer",
        company: "SEP",
        type: "Government Projects",
        summary:
          "Desarrollo y mantenimiento de sistemas administrativos enterprise con .NET, C#, SQL Server. Construcción de Web APIs, interfaces responsivas y soluciones backend, consolidando expertise en arquitectura full stack para gobiernos.",
        highlights: [
          "Mantenimiento y evolución de múltiples sistemas administrativos web con .NET backend y SQL Server.",
          "Desarrollo de Web APIs REST robustas en .NET, integrando datos y procesos de negocio gubernamental.",
          "Diseño e implementación de bases de datos SQL Server con stored procedures y queries optimizadas.",
          "Construcción de interfaces frontend responsivas con HTML5, CSS3, Bootstrap, consumiendo APIs backend.",
          "Trabajo en equipos ágiles orientados a entregas estables, continuas y bajo compliance gubernamental.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "C#",
          ".NET",
          "SQL Server",
          "Stored Procedures",
          "REST APIs",
          "Azure",
          "Git",
        ],
      },
      {
        id: 4,
        period: "Mar 2012 - May 2016",
        role: "Junior Full Stack Developer",
        company: "Metrix Networks",
        type: "Healthcare Systems",
        summary:
          "Diseño y desarrollo de plataformas web para sistemas de salud con .NET Framework 4.6, MVC, Blazor, SOAP, SQL Server y interfaces responsivas. Construcción de componentes frontend, integración de servicios backend y experiencia de usuario orientada a profesionales médicos y gestión de pacientes.",
        highlights: [
          "Desarrollo full stack con ASP.NET MVC y Blazor, HTML5, CSS3, JavaScript y componentes reutilizables.",
          "Implementación en .NET Framework 4.6 con patrones MVC y arquitectura en capas para sistemas médicos.",
          "Integración de servicios SOAP con sistemas legacy hospitalarios para intercambio de datos de pacientes y registros médicos.",
          "Diseño e implementación de bases de datos SQL Server con stored procedures y optimización de queries.",
          "Desarrollo de interfaces adaptables para múltiples dispositivos y compatibilidad cross-browser.",
          "Construcción de componentes visuales reutilizables orientados a UX y consistencia en sistemas médicos.",
          "Integración de APIs SOAP y REST backend para mostrar datos de pacientes en tiempo real.",
          "Implementación de Ajax, validación de formularios en cliente y servidor, y experiencia de usuario fluida.",
        ],
        projects: [],
        stack: [
          "ASP.NET",
          ".NET Framework 4.6",
          "MVC",
          "Blazor",
          "C#",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Sass",
          "Bootstrap",
          "Material UI",
          "jQuery",
          "SQL Server",
          "Stored Procedures",
          "SOAP",
          "REST APIs",
          "Firebase",
        ],
      },
    ],
  },
  en: {
    badge: "PROFESSIONAL JOURNEY",
    titleStart: "Experience focused on",
    titleHighlight: "high-impact Full Stack engineering",
    description:
      "8+ years building web applications and APIs with React.js, Next.js, TypeScript, .NET Core, C#, and SQL Server for enterprise products. My focus is creating end-to-end solutions: full stack architecture, robust APIs, optimized databases, UX/UI, performance, testing, security, CI/CD, Docker, Azure DevOps, and automated cloud delivery.",
    stackLabel: "Relevant stack",
    projectsLabel: "Highlighted projects",
    strengthsLabel: "Core strengths",
    metricsLabel: "Metrics & technical focus",
    panel: {
      overline: "FULL STACK ENGINEERING",
      heading:
        "End-to-end architecture, robust APIs, databases, cloud, and DevOps with technical excellence",
      cards: [
        {
          title: "MODERN FRONTEND",
          value: "React",
          caption: "Reusable interfaces, performance, and exceptional UX",
          borderClass:
            "border-[rgba(32,240,199,0.58)] shadow-[0_0_0_1px_rgba(32,240,199,0.12)]",
          titleClass: "text-[#20f0c7]",
        },
        {
          title: "ROBUST BACKEND",
          value: ".NET Core",
          caption: "Scalable APIs, SQL Server, stored procedures, and DevOps",
          borderClass:
            "border-[rgba(123,44,255,0.58)] shadow-[0_0_0_1px_rgba(123,44,255,0.12)]",
          titleClass: "text-[#52c7ff]",
        },
        {
          title: "AGILE DELIVERY",
          value: "CI/CD",
          caption: "Docker, Azure DevOps, automated pipelines, and cloud",
          borderClass:
            "border-[rgba(255,60,172,0.58)] shadow-[0_0_0_1px_rgba(255,60,172,0.12)]",
          titleClass: "text-[#ffd84d]",
        },
      ],
      bullets: [
        "Advanced React.js, Next.js, Hooks, TypeScript, and SSR/SSG components",
        ".NET Core APIs 6/7/8, C#, SOLID architecture, and clean code patterns",
        "SQL Server: stored procedures, triggers, query optimization, and data integrity",
        "Docker, CI/CD, Azure DevOps, GitHub Actions, pipelines, and automated cloud deployments",
      ],
    },
    metrics: [
      {
        label: "Backend APIs",
        value: ".NET Core + SQL",
        icon: "api",
        caption: "Scalable REST APIs, stored procedures, triggers, ACID transactions, and DB optimization.",
      },
      {
        label: "CI/CD + DevOps",
        value: "Azure / Docker",
        icon: "delivery",
        caption: "Automated pipelines, GitHub Actions, YAML workflows, Azure DevOps, and cloud deployments.",
      },
      {
        label: "Full Stack Testing",
        value: "Jest + xUnit",
        icon: "testing",
        caption: "Frontend functional coverage, backend unit tests, integration, and continuous validation.",
      },
      {
        label: "Cloud & Docker",
        value: "Azure / AWS",
        icon: "cloud",
        caption: "Docker containerization, orchestration, and legacy system modernization in cloud.",
      },
      {
        label: "Next.js + .NET",
        value: "Full Stack",
        icon: "performance",
        caption: "SSR/SSG rendering, optimized backend APIs, and end-to-end architectural strategies.",
      },
      {
        label: "Security",
        value: "JWT / OAuth2",
        icon: "security",
        caption: "Enterprise authentication, RBAC authorization, data protection, and API security.",
      },
    ],
    roles: [
      {
        id: 1,
        period: "Feb 2022 - Mar 2026",
        role: "Senior Full Stack Engineer",
        company: "Afore Principal",
        type: "Remote Freelancer · Fintech / Enterprise",
        summary:
          "Developed full stack widgets, libraries, and APIs with React.js, Next.js, TypeScript, .NET Core, C#, and SQL Server for internal enterprise systems. Designed robust REST APIs, implemented stored procedures, triggers, optimized databases, and reusable frontend components. Implemented full CI/CD with Docker, Azure DevOps, and automated deployments under agile workflows.",
        highlights: [
          "Developed full stack with React.js, Next.js, TypeScript frontend and .NET Core APIs, C# backend, SQL Server databases.",
          "Designed and implemented stored procedures, triggers, indexes, and optimized queries in SQL Server for data integrity and performance.",
          "Built scalable REST APIs with .NET Core 6/7/8, handling ACID transactions, JWT authentication, and data validation.",
          "Implemented reusable frontend components consumed as libraries, integrated with backend APIs and Next.js Server Actions.",
          "Configured complete CI/CD: Docker, GitHub Actions, Azure DevOps pipelines, YAML workflows, and automated deployments.",
          "Deployed to Azure cloud infrastructure: containerized applications, managed QA, Staging, and Production environments.",
          "Full stack testing: Jest + React Testing Library (frontend), xUnit (backend), functional coverage, and continuous validation.",
          "Applied SOLID principles, clean code, architectural patterns, and best practices across the full stack.",
          "Implemented enterprise security: JWT/OAuth2 authentication, RBAC authorization, API protection, and secure session handling.",
          "Participated in code reviews, technical documentation, runbooks, and full stack standards definition.",
          "Worked daily with Scrum, Azure Boards, standups, refinements, and cross-functional collaboration including backend and DevOps teams.",
          "Collaborated with Docker, Drupal, cloud infrastructure, and enterprise deployment workflows.",
        ],
        projects: [
          "OpenAI-powered simulation and recommendation widget to guide financial scenarios and decision-making flows inside the portal.",
          "AI-assisted contextual help module for forms and internal workflows, providing dynamic guidance for users and advisors.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Material UI",
          ".NET Core",
          "C#",
          "SQL Server",
          "Stored Procedures",
          "REST APIs",
          "GraphQL",
          "Docker",
          "GitHub Actions",
          "Azure DevOps",
          "Jest",
          "xUnit",
          "Testing Library",
          "JWT",
          "OAuth2",
          "Redux",
          "AWS Lambda",
          "Azure",
          "Git",
          "GitHub",
        ],
      },
      {
        id: 2,
        period: "Jul 2018 - Jan 2022",
        role: "Senior Full Stack Developer",
        company: "AXA Assistance",
        type: "Enterprise · Remote / Hybrid",
        summary:
          "Built and modernized enterprise full stack solutions with React.js, Next.js, TypeScript, .NET, C#, and SQL Server for insurance products. Contributed to REST API integrations, legacy refactoring to modern architecture, Azure migration with CI/CD, optimized database design, and scalable UI development.",
        highlights: [
          "Developed full stack with React.js, Next.js, TypeScript frontend and .NET, C#, SQL Server backend for insurance products.",
          "Designed and implemented robust REST APIs with .NET, integrating multiple external roadside assistance and towing providers with secure transactions.",
          "Optimized SQL Server databases with stored procedures, triggers, indexes, and complex queries for performance and scalability.",
          "Refactored legacy front-end systems into modern solutions using Next.js, TypeScript, and scalable component patterns.",
          "Implemented modern rendering and architectural strategies in Next.js and backend APIs to improve overall performance.",
          "Migrated modules and applications to Azure through CI/CD pipelines, controlled deployment flows, and progressive platform modernization.",
          "Configured Azure DevOps, Git, version control, code reviews, and continuous delivery practices under Scrum methodology.",
          "Applied SOLID principles, clean code, technical documentation, and best practices across frontend components, backend APIs, and business workflows.",
          "Implemented enterprise-grade authentication and secure session handling with JWT, OAuth2, and security best practices.",
          "Docker containerization for backend applications, enabling consistent deployments across multiple environments.",
          "Cross-team collaboration: validated requirements, priorities, architecture decisions, and technical deliverables with stakeholders.",
        ],
        projects: [
          "Front-end integration with external roadside assistance and towing providers to display real-time availability, status, and service data.",
          "Legacy module refactor and migration to Next.js + TypeScript, deployed to Azure through automated pipelines and controlled environments.",
          "Support chatbot for auto policy users, focused on quick answers, guided flows, and contextual assistance inside the platform.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Material UI",
          ".NET",
          "C#",
          "SQL Server",
          "Stored Procedures",
          "REST APIs",
          "GraphQL",
          "Auth0",
          "Azure",
          "Azure DevOps",
          "Docker",
          "Git",
          "GitHub",
        ],
      },
      {
        id: 3,
        period: "Jul 2016 - Jun 2018",
        role: "Full Stack Developer",
        company: "SEP",
        type: "Government Projects",
        summary:
          "Developed and maintained enterprise administrative systems with .NET, C#, and SQL Server. Built Web APIs, responsive interfaces, and backend solutions, consolidating full stack expertise for government systems.",
        highlights: [
          "Maintained and evolved multiple administrative web systems with .NET backend and SQL Server.",
          "Built robust REST Web APIs in .NET, integrating government business data and processes.",
          "Designed and implemented SQL Server databases with stored procedures and optimized queries.",
          "Built responsive frontend interfaces with HTML5, CSS3, and Bootstrap, consuming backend APIs.",
          "Worked in agile teams focused on stable, continuous delivery under government compliance requirements.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "C#",
          ".NET",
          "SQL Server",
          "Stored Procedures",
          "REST APIs",
          "Azure",
          "Git",
        ],
      },
      {
        id: 4,
        period: "Mar 2012 - May 2016",
        role: "Junior Full Stack Developer",
        company: "Metrix Networks",
        type: "Healthcare Systems",
        summary:
          "Designed and developed web platforms for healthcare systems with .NET Framework 4.6, MVC, Blazor, SOAP, and SQL Server. Built responsive interfaces, backend APIs, and patient management solutions focused on medical professionals.",
        highlights: [
          "Developed full stack with ASP.NET MVC and Blazor, HTML5, CSS3, JavaScript, and reusable components.",
          "Implemented systems using .NET Framework 4.6 with MVC patterns and layered architecture for healthcare.",
          "Integrated SOAP web services with legacy hospital systems for patient data and medical records exchange.",
          "Designed and implemented SQL Server databases with stored procedures and query optimization.",
          "Built adaptive interfaces for multiple devices and cross-browser compatibility.",
          "Created reusable visual components focused on UX and consistency in medical applications.",
          "Integrated SOAP and REST backend APIs to display patient data and hospital records in real-time.",
          "Implemented Ajax, client and server-side form validation, and fluid user experiences.",
        ],
        projects: [],
        stack: [
          "ASP.NET",
          ".NET Framework 4.6",
          "MVC",
          "Blazor",
          "C#",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Sass",
          "Bootstrap",
          "Material UI",
          "jQuery",
          "SQL Server",
          "Stored Procedures",
          "SOAP",
          "REST APIs",
          "Firebase",
        ],
      },
    ],
  },
};

function getTechIcon(tech: string) {
  const iconClass = "h-[0.9rem] w-[0.9rem] shrink-0";

  switch (tech) {
    case "React":
      return <SiReact className={iconClass} />;
    case "Next.js":
      return <SiNextdotjs className={iconClass} />;
    case "TypeScript":
      return <SiTypescript className={iconClass} />;
    case "JavaScript":
      return <SiJavascript className={iconClass} />;
    case "Tailwind CSS":
      return <SiTailwindcss className={iconClass} />;
    case "Material UI":
      return <SiMui className={iconClass} />;
    case "Redux":
      return <SiRedux className={iconClass} />;
    case "REST APIs":
      return <TbApi className={iconClass} />;
    case "GraphQL":
      return <SiGraphql className={iconClass} />;
    case "Auth0":
      return <SiAuth0 className={iconClass} />;
    case "Azure":
      return <SiAzuredevops className={iconClass} />;
    case "Azure DevOps":
      return <SiAzuredevops className={iconClass} />;
    case "AWS":
      return <SiAwslambda className={iconClass} />;
    case "AWS Lambda":
      return <SiAwslambda className={iconClass} />;
    case "HTML5":
      return <SiHtml5 className={iconClass} />;
    case "CSS3":
      return <SiCss3 className={iconClass} />;
    case "Bootstrap":
      return <SiBootstrap className={iconClass} />;
    case "C#":
      return <TbBrandCSharp className={iconClass} />;
    case ".NET":
      return <VscSymbolMethod className={iconClass} />;
    case ".NET Core":
      return <VscSymbolMethod className={iconClass} />;
    case "SQL Server":
      return <BsWindowStack className={iconClass} />;
    case "Stored Procedures":
      return <BsDatabaseGear className={iconClass} />;
    case "Git":
      return <SiGit className={iconClass} />;
    case "GitHub":
      return <SiGithub className={iconClass} />;
    case "GitHub Actions":
      return <SiGithub className={iconClass} />;
    case "Sass":
      return <SiSass className={iconClass} />;
    case "Firebase":
      return <SiFirebase className={iconClass} />;
    case "Figma":
      return <SiFigma className={iconClass} />;
    case "Jest":
      return <SiJest className={iconClass} />;
    case "xUnit":
      return <HiOutlineSparkles className={iconClass} />;
    case "Testing Library":
      return <HiOutlineSparkles className={iconClass} />;
    case "JWT":
      return <HiOutlineSparkles className={iconClass} />;
    case "OAuth2":
      return <SiAuth0 className={iconClass} />;
    case "Docker":
      return <SiDocker className={iconClass} />;
    case "Drupal":
      return <SiDrupal className={iconClass} />;
    case "OpenAI":
      return <SiOpenai className={iconClass} />;
    case "Vercel":
      return <SiVercel className={iconClass} />;
    case "Cypress":
      return <HiOutlineSparkles className={iconClass} />;
    case "jQuery":
      return <BsWindowStack className={iconClass} />;
    default:
      return <BsWindowStack className={iconClass} />;
  }
}

function getMetricIcon(icon: string) {
  const className = "h-[1rem] w-[1rem]";

  switch (icon) {
    case "api":
      return <BsDatabaseGear className={className} />;
    case "delivery":
      return <BsLightningCharge className={className} />;
    case "testing":
      return <BsCheckCircle className={className} />;
    case "cloud":
      return <BsCloudArrowUp className={className} />;
    case "performance":
      return <BsCodeSlash className={className} />;
    case "security":
      return <BsShieldCheck className={className} />;
    default:
      return <BsGraphUpArrow className={className} />;
  }
}

function Experience() {
  const { language } = useLanguage();
  const content =
    language === "es" ? experienceContent.es : experienceContent.en;

  return (
    <section
      id="experience"
      className="relative z-50 my-16 overflow-hidden border-t border-[var(--color-border)] pt-14 lg:my-24 lg:pt-20"
    >
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 max-w-none -translate-x-1/2 opacity-70"
      />

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[8%] top-[10%] h-44 w-44 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-64 w-64 rounded-full bg-[var(--color-brand)]/16 blur-3xl" />
        <div className="absolute bottom-[10%] left-[35%] h-56 w-56 rounded-full bg-[var(--color-brand-strong)]/10 blur-3xl" />
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-4">
          <span className="hidden h-[2px] w-16 bg-[linear-gradient(90deg,transparent,#2a2252)] sm:block" />
          <span className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(26,20,67,0.88)_0%,rgba(13,17,46,0.92)_100%)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(15,10,40,0.28)] sm:text-base">
            {content.badge}
          </span>
          <span className="hidden h-[2px] w-16 bg-[linear-gradient(90deg,#2a2252,transparent)] sm:block" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
        <div className="order-2 lg:order-1">
          <div className="sticky top-24">
            <div className="max-w-xl">
              <h2 className="text-[2.1rem] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[2.7rem] lg:text-[3.2rem]">
                <span className="text-white">{content.titleStart} </span>
                <span className="bg-[linear-gradient(90deg,#ffffff_0%,#d8b4fe_20%,#60a5fa_48%,#67e8f9_72%,#f472b6_100%)] bg-clip-text text-transparent">
                  {content.titleHighlight}
                </span>
              </h2>

              <p className="mt-6 text-[1rem] leading-[1.95] text-[rgba(235,240,255,0.82)] sm:text-[1.03rem] lg:text-[1.04rem]">
                {content.description}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.74)_0%,rgba(7,14,38,0.96)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="relative p-5 sm:p-6 lg:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,240,199,0.07),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(123,44,255,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,60,172,0.10),transparent_26%)]" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#20f0c7]">
                    <BsGraphUpArrow size={12} />
                    <span>{content.panel.overline}</span>
                  </div>

                  <h3 className="mt-5 max-w-md text-[1.12rem] font-semibold leading-[1.45] text-white sm:text-[1.3rem]">
                    {content.panel.heading}
                  </h3>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {content.panel.cards.map((card) => (
                      <div
                        key={card.title}
                        className={`min-h-[220px] rounded-[1.45rem] border bg-[linear-gradient(180deg,rgba(10,18,48,0.88)_0%,rgba(8,14,36,0.96)_100%)] px-4 py-5 backdrop-blur-sm ${card.borderClass}`}
                      >
                        <p
                          className={`text-center text-[0.74rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.8rem] ${card.titleClass}`}
                        >
                          {card.title}
                        </p>

                        <p className="mt-4 text-center text-[0.96rem] font-bold text-white sm:text-[1rem]">
                          {card.value}
                        </p>

                        <p className="mt-4 text-center text-[0.83rem] leading-7 text-white/68 sm:text-[0.88rem]">
                          {card.caption}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-4 sm:p-5">
                    <div className="mb-3 flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white/48">
                      <HiOutlineSparkles size={14} />
                      <span>{content.strengthsLabel}</span>
                    </div>

                    <div className="grid gap-3">
                      {content.panel.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-[0.35rem] h-2 w-2 rounded-full bg-[#20f0c7]" />
                          <p className="text-[0.88rem] leading-7 text-white/75">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-4 flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white/48">
                      <BsGraphUpArrow size={13} />
                      <span>{content.metricsLabel}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {content.metrics.map((metric, index) => (
                        <div
                          key={`${metric.label}-${index}`}
                          className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-4 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:bg-white/[0.04]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#7dd3fc]">
                              {getMetricIcon(metric.icon)}
                            </div>

                            <div>
                              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                                {metric.label}
                              </p>
                              <p className="mt-1 text-[0.98rem] font-semibold text-white">
                                {metric.value}
                              </p>
                              <p className="mt-2 text-[0.82rem] leading-6 text-white/62">
                                {metric.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#20f0c7] shadow-[0_0_14px_rgba(32,240,199,0.55)]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#b14cff] shadow-[0_0_14px_rgba(177,76,255,0.55)]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff3cac] shadow-[0_0_14px_rgba(255,60,172,0.55)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative ml-3 border-l border-white/10 pl-0 sm:ml-4">
            {content.roles.map((item, index) => (
              <article
                key={item.id}
                className={`relative mb-6 ml-6 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,48,0.88)_0%,rgba(8,14,36,0.96)_100%)] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/30 hover:shadow-[0_22px_50px_rgba(123,44,255,0.12)] sm:p-6 ${
                  index !== content.roles.length - 1 ? "" : "mb-0"
                }`}
              >
                <span className="absolute -left-[2.35rem] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-brand)]/40 bg-[linear-gradient(180deg,rgba(123,44,255,0.95)_0%,rgba(255,60,172,0.88)_100%)] shadow-[0_0_0_6px_rgba(7,12,32,1)]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>

                <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-[radial-gradient(circle_at_top_right,rgba(123,44,255,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(32,240,199,0.05),transparent_24%)]" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#9b6dff] shadow-[0_8px_20px_rgba(123,44,255,0.12)]">
                        <BsPersonWorkspace size={24} />
                      </div>

                      <div>
                        <h3 className="text-[1.05rem] font-semibold uppercase tracking-[0.01em] text-white sm:text-[1.22rem]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-[0.95rem] font-medium text-white/82 sm:text-[1rem]">
                          {item.company}
                        </p>
                        <p className="mt-1 text-[0.82rem] uppercase tracking-[0.14em] text-white/40">
                          {item.type}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#20f0c7]/18 bg-[#20f0c7]/[0.06] px-3 py-1.5 text-[0.78rem] font-medium text-[#20f0c7] sm:text-[0.84rem]">
                      <BsCalendar3 size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-[0.92rem] leading-8 text-[rgba(235,240,255,0.78)] sm:text-[0.97rem]">
                    {item.summary}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3"
                      >
                        <span className="mt-0.5 text-[#20f0c7]">
                          <HiOutlineSparkles size={16} />
                        </span>
                        <p className="text-[0.88rem] leading-7 text-white/72 sm:text-[0.94rem]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {item.projects.length > 0 && (
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                        <HiOutlineSparkles size={14} />
                        <span>{content.projectsLabel}</span>
                      </div>

                      <div className="grid gap-3">
                        {item.projects.map((project, projectIndex) => (
                          <div
                            key={project}
                            className="rounded-2xl border border-[#20f0c7]/10 bg-[linear-gradient(180deg,rgba(32,240,199,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-4 py-3"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 text-[#7dd3fc]">
                                {projectIndex < 2 &&
                                item.company.includes("Principal") ? (
                                  <SiOpenai size={16} />
                                ) : (
                                  <HiOutlineSparkles size={16} />
                                )}
                              </span>
                              <p className="text-[0.88rem] leading-7 text-white/72 sm:text-[0.94rem]">
                                {project}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <div className="mb-3 flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                      <BsArrowUpRight size={13} />
                      <span>{content.stackLabel}</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-3 py-2 text-[0.77rem] font-medium tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:text-white"
                        >
                          <span className="text-white/70">{getTechIcon(tech)}</span>
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;