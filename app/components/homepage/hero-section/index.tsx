"use client";

import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import { useLanguage } from "@/app/context/language-context";
import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden pb-8 pt-4 lg:pb-10 lg:pt-5">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[8%] top-[10%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(123,44,255,0.16)_0%,rgba(123,44,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[8%] top-[12%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(255,60,172,0.12)_0%,rgba(255,60,172,0)_72%)] blur-3xl" />
        <div className="absolute left-[30%] bottom-[8%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(32,240,199,0.10)_0%,rgba(32,240,199,0)_72%)] blur-3xl" />
      </div>

      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        priority
        className="pointer-events-none absolute -top-[98px] left-1/2 -z-10 max-w-none -translate-x-1/2 opacity-75"
      />

      <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(470px,600px)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(500px,630px)] xl:gap-10 2xl:grid-cols-[minmax(0,1fr)_minmax(530px,650px)]">
        <div className="order-1 flex w-full flex-col items-start justify-start px-1 md:px-2 lg:max-w-[580px] lg:pt-3 xl:max-w-[610px]">
          <h1 className="max-w-[610px] text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.3rem] md:text-[2.6rem] lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[3.1rem]">
            <span className="bg-gradient-to-r from-[#ffffff] via-[#ff8bd1] to-[#ff3cac] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,60,172,0.22)]">
              {t.hero.role}
            </span>

            <br />

            <span className="text-white">{t.hero.roleComplement}</span>
          </h1>

          <p className="mt-5 max-w-[600px] text-[0.96rem] leading-[1.8] text-[rgba(244,247,251,0.80)] sm:text-[0.98rem] lg:mt-5 lg:max-w-[550px] lg:text-[0.9rem] xl:max-w-[590px] xl:text-[0.94rem]">
            {t.hero.tagline}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4"
          >
            <ul className="flex flex-wrap gap-x-20 gap-y-2 text-sm text-gray-300">
              {t.hero.highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-1 max-w-[380px]"
                >
                  <span className="text-green-400">✔</span>
                  {item.replace("✔", "")}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-6 flex items-center gap-4">
            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20f0c7]/50 hover:text-[#20f0c7] hover:shadow-[0_0_22px_rgba(32,240,199,0.18)]"
            >
              <BsLinkedin size={22} />
            </Link>

            <Link
              href={personalData.meWhatsApp}
              target="_blank"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#22c55e]/40 bg-[rgba(34,197,94,0.12)] text-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#22c55e] hover:bg-[rgba(34,197,94,0.18)] hover:text-[#4ade80] hover:shadow-[0_0_24px_rgba(34,197,94,0.22)]"
            >
              <BsWhatsapp size={22} />
            </Link>
          </div>

          <div className="mt-6 flex flex-nowrap items-center gap-3 sm:flex-wrap sm:gap-4">
            <Link
              href="#projects"
              className="group shrink-0 flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-2 py-2 text-[0.60rem] font-semibold uppercase tracking-[0.10em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:border-[#20f0c7]/40 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(32,240,199,0.14)] sm:px-6 sm:py-3.5 md:px-7 md:text-[0.69rem]"
            >
              <span>{t.hero.contact}</span>
              <RiContactsFill size={14} />
            </Link>

            <a
              href={
                language === "es"
                  ? "/pdf/Juan_Carlos_Zepeda_FullStack_ES.pdf"
                  : "/pdf/Juan_Carlos_Zepeda_FullStack_EN.pdf"
              }
              download={
                language === "es"
                  ? "Juan_Carlos_Zepeda_CV_ES.pdf"
                  : "Juan_Carlos_Zepeda_CV_EN.pdf"
              }
              className="group shrink-0 rounded-full border border-[#7b2cff]/50 bg-gradient-to-r from-[#ff3cac] via-[#b14cff] to-[#7b2cff] p-[1px] shadow-[0_10px_30px_rgba(123,44,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(123,44,255,0.28)]"
            >
              <span className="flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,rgba(8,17,51,0.92)_0%,rgba(7,15,42,0.96)_100%)] px-2 py-2 text-[0.60rem] font-semibold uppercase tracking-[0.10em] text-white transition-all duration-300 group-hover:gap-3 sm:px-6 sm:py-3.5 md:px-7 md:text-[0.69rem]">
                <span>{t.hero.resume}</span>
                <MdDownload size={14} />
              </span>
            </a>
          </div>
        </div>

        <div className="order-2 relative mx-auto w-full max-w-full self-start overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.96)_0%,rgba(7,15,42,0.98)_100%)] shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:-mt-3 xl:-mt-3">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b14cff] to-transparent opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,44,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(32,240,199,0.08),transparent_24%)]" />

          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 lg:px-4 xl:px-5">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#20f0c7] shadow-[0_0_12px_rgba(32,240,199,0.45)] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#b14cff] shadow-[0_0_12px_rgba(177,76,255,0.45)] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#ff3cac] shadow-[0_0_12px_rgba(255,60,172,0.45)] sm:h-3.5 sm:w-3.5" />
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/45">
              profile.tsx
            </div>
          </div>

          <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-4 lg:py-6 xl:px-5">
            <code className="block whitespace-pre-wrap break-words font-mono text-[0.76rem] leading-[1.9] text-[#f8fafc] sm:text-[0.8rem] md:text-[0.82rem] lg:text-[0.78rem] xl:text-[0.82rem]">
              <div>
                <span className="mr-3 text-[#ff3cac]">const</span>
                <span className="mr-3 text-[#f8fafc]">developer</span>
                <span className="mr-3 text-[#ff3cac]">=</span>
                <span className="text-[#94a3b8]">{"{"}</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">name:</span>
                <span className="text-[#ffd166]">'{personalData.name}'</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">role:</span>
                <span className="text-[#ffd166]">
                  'Full Stack Developer'
                </span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">experience:</span>
                <span className="text-[#ffd166]">'8+ years'</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">frontEnd:</span>
                <span className="text-[#94a3b8]">[</span>
                <span className="text-[#ff3cac]">'React'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Next.js'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'TypeScript'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'JavaScript'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'HTML5'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'CSS3'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'SASS'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Tailwind'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Bootstrap'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Material UI'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Angular'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'ECMAScript 6'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Responsive UI/UX'</span>
                <span className="text-[#94a3b8]">]</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">backend:</span>
                <span className="text-[#ffd166]">
                  ['.NET 6/7/8', 'ASP.NET Core', 'MVC', 'Blazor', '.NET Framework 4.6', 'SOAP', 'Web API', 'REST API', 'SQL Server', 'Python', 'PHP', 'Entity Framework', 'Dapper']
                </span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">db:</span>
                <span className="text-[#ff3cac]">'SQL Server'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'MySQL'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Stored Procedures'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Views'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'Triggers'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'PostgreSQL'</span><span className="text-[#94a3b8]">, </span>
                <span className="text-[#ff3cac]">'ETL'</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">security:</span>
                <span className="text-[#ffd166]">
                  ['JWT', 'OAuth2', 'RBAC', 'OWASP', 'SAST', 'Secure Coding']
                </span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">cloud:</span>
                <span className="text-[#7dd3fc]">
                  ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions']
                </span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">architecture:</span>
                <span className="text-[#ffd166]">
                  ['Clean Architecture', 'DDD', 'CQRS', 'Microservices', 'Event-Driven', 'API Design']
                </span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#f8fafc]">coreStrengths:</span>
                <span className="text-[#94a3b8]">{"{"}</span>
              </div>

              <div className="ml-8 sm:ml-10 lg:ml-9">
                <span className="mr-3 text-[#f8fafc]">quickLearner:</span>
                <span className="text-[#ff9f1c]">true</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-8 sm:ml-10 lg:ml-9">
                <span className="mr-3 text-[#f8fafc]">problemSolver:</span>
                <span className="text-[#ff9f1c]">true</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-8 sm:ml-10 lg:ml-9">
                <span className="mr-3 text-[#f8fafc]">ownership:</span>
                <span className="text-[#ff9f1c]">true</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="text-[#94a3b8]">{"}"}</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 break-words sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#20f0c7]">aiTooling:</span>
                <span className="text-[#94a3b8]">[</span>
                <span className="text-[#20f0c7] tracking-[-0.01em]">
                  'ChatGPT', 'Gemini', 'OpenAI APIs', 'VSCode AI Agents', 'Make'
                </span>
                <span className="text-[#94a3b8]">]</span>
                <span className="text-[#94a3b8]">,</span>
              </div>

              <div className="ml-4 sm:ml-5 lg:ml-5">
                <span className="mr-3 text-[#20f0c7]">hireable:</span>
                <span className="text-[#ff9f1c]">true</span>
              </div>

              <div>
                <span className="text-[#94a3b8]">{"};"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
