import { Education } from "@/app/types/education";

export const educations: Education[] = [
  {
    id: 1,
    type: "degree",
    title: {
      es: "Ingeniería en Sistemas Computacionales",
      en: "Systems Engineering Degree",
    },
    institution: {
      es: "Centro Universitario Ixtlahuaca, México",
      en: "Centro Universitario Ixtlahuaca, Mexico",
    },
    duration: "2004 - 2009",
    extra: {
      es: "Cédula Profesional: 09635092",
      en: "Professional License: 09635092",
    },
  },
  {
    id: 2,
    type: "cert",
    title: {
      es: "React JS Advanced / Next.js",
      en: "Advanced React JS / Next.js",
    },
    institution: {
      es: "Certificación Profesional",
      en: "Professional Certification",
    },
  },
  {
    id: 3,
    type: "cert",
    title: {
      es: "Scrum Master & Scrum Fundamentals",
      en: "Scrum Master & Scrum Fundamentals",
    },
    institution: {
      es: "Metodologías Ágiles",
      en: "Agile Methodologies",
    },
  },
  {
    id: 4,
    type: "cert",
    title: {
      es: "Azure Fundamentals AZ-900",
      en: "Azure Fundamentals AZ-900",
    },
    institution: {
      es: "Certificación Microsoft",
      en: "Microsoft Certification",
    },
  },
  {
    id: 5,
    type: "cert",
    title: {
      es: "AWS S3 & Cloud",
      en: "AWS S3 & Cloud",
    },
    institution: {
      es: "Cloud Training",
      en: "Cloud Training",
    },
  },
  {
    id: 6,
    type: "lang",
    title: {
      es: "Inglés B2 (Comunicación profesional)",
      en: "English B2 (Professional proficiency)",
    },
    institution: {
      es: "Comunicación internacional",
      en: "International communication",
    },
  },
];