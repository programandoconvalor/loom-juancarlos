"use client";

import { educations } from "@/utils/data/educations";
import Image from "next/image";
import {
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineGlobe,
} from "react-icons/hi";
import GlowCard from "../../helper/glow-card";
import { useLanguage } from "@/app/context/language-context";

function Education() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";

  return (
    <section  id="education" className="relative z-50 my-16 lg:my-28 border-t border-[#25213b]">

      <Image
        src="/section.svg"
        alt="bg"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-30"
      />

      {/* TITLE */}
      <div className="flex justify-center my-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {lang === "es" ? "Educación & Certificaciones" : "Education & Certifications"}
          </h2>
          <div className="mt-3 h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto px-4">

        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500/40 via-fuchsia-500/30 to-transparent" />

        <div className="flex flex-col gap-10">

          {educations.map((education, index) => {
            const isLeft = index % 2 === 0;

            const extraText = education.extra?.[lang];

            const getIcon = () => {
              if (education.type === "degree")
                return <HiOutlineAcademicCap size={20} />;
              if (education.type === "cert")
                return <HiOutlineBadgeCheck size={20} />;
              return <HiOutlineGlobe size={20} />;
            };

            const getLabel = () => {
              if (education.type === "degree")
                return lang === "es" ? "Educación" : "Education";
              if (education.type === "cert")
                return lang === "es" ? "Certificación" : "Certification";
              return lang === "es" ? "Idioma" : "Language";
            };

            return (
              <div
                key={education.id}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* DOT */}
                <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-lg" />

                {/* CARD */}
                <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                  <GlowCard identifier={`education-${education.id}`}>
                    <div className="p-6 rounded-2xl bg-[#0f1629]/80 border border-white/10 backdrop-blur-xl hover:border-violet-500/40 transition-all group">

                      {/* BADGE + DATE */}
                      <div className="flex justify-between items-center mb-3 flex-wrap gap-2">

                        <span className={`text-[10px] px-2 py-1 rounded-full border ${
                          education.type === "degree"
                            ? "text-violet-300 border-violet-400/30"
                            : education.type === "cert"
                            ? "text-cyan-300 border-cyan-400/30"
                            : "text-green-300 border-green-400/30"
                        }`}>
                          {getLabel()}
                        </span>

                        {education.duration && (
                          <span className="text-xs text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            {education.duration}
                          </span>
                        )}
                      </div>

                      {/* CONTENT */}
                      <div className="flex gap-4">

                        <div className="p-3 rounded-xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-400">
                          {getIcon()}
                        </div>

                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white">
                            {education.title[lang]}
                          </h3>

                          <p className="text-sm text-gray-400 mt-1">
                            {education.institution[lang]}
                          </p>

                          {extraText && (
                            <p className="text-xs text-cyan-300 mt-2">
                              {extraText}
                            </p>
                          )}
                        </div>
                      </div>

                    </div>
                  </GlowCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;