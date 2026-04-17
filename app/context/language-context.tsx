"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    projects: string;
    assistant: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    roleComplement: string;
    contact: string;
    resume: string;
    highlights: string[];
  };
  about: {
    title: string;
    label: string;
    description: string;
    badge: string;
    cardTitle1: string;
    cardText1: string;
    cardTitle2: string;
    cardText2: string;
    cardTitle3: string;
    cardText3: string;
  };
  assistant: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    thinking: string;
    error: string;
    welcome: string;
  };
  footer: {
      madeWith: string;
      by: string;
    copyright: string;
  };
};

const dictionaries: Record<Language, Dictionary> = {
  es: {
    nav: {
      home: "INICIO",
      about: "SOBRE MÍ",
      experience: "EXPERIENCIA",
      skills: "HABILIDADES",
      education: "EDUCACIÓN",
      contact: "CONTACTO",
      projects: "PROYECTOS",
      assistant: "IA",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Juan Carlos Zepeda",
      role: "Full Stack Developer",
      roleComplement:
        "especializado en crear soluciones end-to-end modernas, escalables y de alto rendimiento + IA.",
      tagline:
        "Soy un Full Stack Developer orientado a resultados; entrego proyectos listos para producción con enfoque en velocidad e impacto de negocio."
,
      contact: "Ver Proyectos",
      resume: "Descargar CV",
      highlights: [
        "✔ FRONT: Interfaces modernas con React, Next.js & UI/UX excepcional",
        "✔ BACK: .NET Core, APIs REST y arquitecturas backend sólidas",
        "✔ CLOUD & SECURITY: Soluciones seguras en Azure/AWS con alto rendimiento",
      ],
    },
    about: {
      title: "Loom para equipo Kleva",
      label: "SOBRE MÍ",
      badge: "Full Stack + IA",
      description:
        "Full Stack Developer con más de 8 años de experiencia entregando productos web en producción para clientes y equipos globales. Dejo constancia de proyectos entregados con React, Next.js, TypeScript, Node.js, .NET Core y APIs REST/SOAP conectadas a SQL Server y PostgreSQL. Mi enfoque es la escalabilidad, la automatización (CI/CD con GitHub Actions/Azure DevOps), el monitoreo y la seguridad (JWT, OAuth2), garantizando código mantenible y velocidad de entrega. Trabajo con metodologías ágiles (Scrum + tests + code review) para equipos de alto rendimiento. Mi prioridad es alinear herramientas técnicas con resultados de negocio y reducir el tiempo al valor del producto. Integro IA para automatizar procesos, mejorar UX y acelerar entrega de valor.",

      cardTitle1: "Full Stack Architecture",
      cardText1:
        "Soluciones end-to-end robustas con frontend moderno y backends escalables que funcionan perfectamente juntos.",
      cardTitle2: "APIs y Backend Robusto",
      cardText2:
        "Diseño de APIs RESTful y GraphQL, gestión de datos, seguridad y arquitecturas listos para escalar.",
      cardTitle3: "IA aplicada",
      cardText3:
        "Integro herramientas de IA como Agentes de GitHub Copilot / Claude en todo el desarrollo para mejorar performance, productividad y experiencia del usuario.",
    },
    assistant: {
      title: "Asistente IA",
      subtitle: "Haz preguntas sobre experiencia, stack o proyectos.",
      placeholder: "Escribe tu pregunta...",
      send: "Enviar",
      thinking: "Pensando...",
      error: "No pude responder en este momento.",
      welcome:
        "Hola, soy el asistente de Juan Carlos Zepeda IA. ¿Qué te gustaría saber?",
    },
    footer:{ 
      madeWith: "Hecho con", 
      by: "por",
      copyright: "Juan Carlos Zepeda © 2026."
    }
  },

  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      experience: "EXPERIENCE",
      skills: "SKILLS",
      education: "EDUCATION",
      contact: "CONTACT",
      projects: "PROJECTS",
      assistant: "AI",
    },
    hero: {
      greeting: "Hello, I’m",
      name: "Juan Carlos Zepeda",
      role: "Full Stack Developer",
      roleComplement:
        "specialized in building modern, scalable, and high-performance end-to-end solutions with AI.",
      tagline:
        "I deliver production-ready full stack solutions that drive business impact, combining speed, reliability and long-term scalability.",
      contact: "View Projects",
      resume: "Download Resume",
      highlights: [
        "✔ FRONT: Modern interfaces with React, Next.js & exceptional UI/UX",
        "✔ BACK: .NET Core, REST APIs and robust backend architectures",
        "✔ CLOUD & SECURITY: Secure solutions on Azure/AWS with high performance",
      ],
    },
    about: {
      title: "Loom for Kleva team",
      label: "ABOUT ME",
      badge: "Full Stack + AI",
      description:
        "Full Stack Developer with over 8 years of delivering production-grade web products for global clients and teams. Proven track record with React, Next.js, TypeScript, Node.js, .NET Core, and REST/SOAP APIs connected to SQL Server and PostgreSQL. My focus is scalability, automation (CI/CD with GitHub Actions/Azure DevOps), monitoring and security (JWT, OAuth2), ensuring maintainable code and fast delivery. I work in agile methodologies (Scrum + tests + code review) for high-performance teams. My priority is aligning technical tools with business outcomes and reducing time to value. I integrate AI to automate processes, improve UX, and accelerate value delivery.",

      cardTitle1: "Full Stack Architecture",
      cardText1:
        "End-to-end robust solutions with modern frontends and scalable backends working seamlessly together.",
      cardTitle2: "APIs and Backend",
      cardText2:
        "RESTful and GraphQL API design, data management, security, and scalable architectures.",
      cardTitle3: "Applied AI",
      cardText3:
        "I integrate AI tools like GitHub Copilot Agents / Claude throughout development to enhance performance, productivity, and user experience.",
    },
    assistant: {
      title: "AI Assistant",
      subtitle: "Ask about experience, stack, or projects.",
      placeholder: "Type your question...",
      send: "Send",
      thinking: "Thinking...",
      error: "I could not answer right now.",
      welcome:
        "Hi, I am Juan Carlos Zepeda IA assistant. What would you like to know?",
    },
    footer:{
      madeWith: "Made with",
      by: "by",
      copyright: "Juan Carlos Zepeda © 2026."
    }
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (value: Language) => void;
  toggleLanguage: () => void;
  mounted: boolean;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("site-language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language, mounted]);

  const toggleLanguage = (): void => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      mounted,
      t: dictionaries[language],
    }),
    [language, mounted],
  );

  return (
    <LanguageContext.Provider value={value}>
      {mounted ? children : null}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}