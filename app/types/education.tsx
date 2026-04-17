export type Lang = "es" | "en";

export type Education = {
  id: number;
  type: "degree" | "cert" | "lang";
  title: {
    es: string;
    en: string;
  };
  institution: {
    es: string;
    en: string;
  };
  duration?: string;
  extra?: {
    es: string;
    en: string;
  };
};