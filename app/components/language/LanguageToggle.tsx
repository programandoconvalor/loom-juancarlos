
"use client";
import { useLanguage } from "@/app/context/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const next = language === 'es' ? 'en' : 'es';
  return (
    <button
      type="button"
      aria-label="Toggle language"
      onClick={() => setLanguage(next)}
      className="ml-2 rounded-full border border-violet-500/70 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-600/20"
    >
      {language.toUpperCase()} | {next.toUpperCase()}
    </button>
  );
}
