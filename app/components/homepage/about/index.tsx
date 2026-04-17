"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/language-context";
import { personalData } from "@/utils/data/personal-data";
import { useRef, useState } from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function AboutSection() {
  const { t } = useLanguage();
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [areVideosPlaying, setAreVideosPlaying] = useState(false);

  const toggleBothVideos = async () => {
    const leftVideo = leftVideoRef.current;
    const rightVideo = rightVideoRef.current;
    if (!leftVideo || !rightVideo) return;

    if (areVideosPlaying) {
      leftVideo.pause();
      rightVideo.pause();
      setAreVideosPlaying(false);
      return;
    }

    try {
      await Promise.all([leftVideo.play(), rightVideo.play()]);
      setAreVideosPlaying(true);
    } catch {
      setAreVideosPlaying(false);
    }
  };

  return (
    <section
      id="about"
      className="relative z-50 my-16 overflow-hidden lg:my-24"
    >
      <div className="absolute inset-0 -z-10 opacity-100">
        <div className="absolute left-[-4rem] top-10 h-44 w-44 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
        <div className="absolute right-[8%] top-[6%] h-60 w-60 rounded-full bg-[var(--color-brand)]/18 blur-3xl" />
        <div className="absolute bottom-0 left-[20%] h-52 w-52 rounded-full bg-[var(--color-brand-strong)]/10 blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(90deg,rgba(5,11,29,0.94)_0%,rgba(7,15,42,0.96)_48%,rgba(8,17,51,0.98)_100%)] px-6 py-8 shadow-[0_20px_80px_rgba(3,8,24,0.45)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,240,199,0.05),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(123,44,255,0.14),transparent_22%),radial-gradient(circle_at_70%_85%,rgba(255,60,172,0.08),transparent_20%)]" />

        <div className="relative space-y-10">
          <div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_25px_90px_rgba(0,0,0,0.45)] ring-1 ring-[var(--color-border)]">
                <div className="aspect-video">
                  <video
                    ref={leftVideoRef}
                    src="/image/video_JC.mp4"
                    className="h-full w-full object-cover"
                    playsInline
                    preload="metadata"
                    onPlay={() => setAreVideosPlaying(true)}
                    onPause={() => setAreVideosPlaying(false)}
                  />
                </div>

                <button
                  type="button"
                  onClick={toggleBothVideos}
                  aria-label={areVideosPlaying ? "Pausar ambos videos" : "Reproducir ambos videos"}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 hover:bg-black/10"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0000] shadow-[0_4px_24px_rgba(255,0,0,0.5)] transition-transform duration-150 hover:scale-110 active:scale-95">
                    {areVideosPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8 translate-x-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_25px_90px_rgba(0,0,0,0.45)] ring-1 ring-[var(--color-border)]">
                <div className="aspect-video">
                  <video
                    ref={rightVideoRef}
                    src="/image/Video_JC_Codigo.mp4"
                    className="h-full w-full object-cover"
                    playsInline
                    preload="metadata"
                    onEnded={() => setAreVideosPlaying(false)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                href={personalData.linkedIn}
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20f0c7]/50 hover:text-[#20f0c7] hover:shadow-[0_0_22px_rgba(32,240,199,0.18)]"
              >
                <BsLinkedin size={22} />
              </Link>

              <Link
                href={personalData.github}
                target="_blank"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a78bfa]/50 hover:text-[#a78bfa] hover:shadow-[0_0_22px_rgba(167,139,250,0.18)]"
              >
                <BsGithub size={22} />
              </Link>

              <Link
                href={personalData.meWhatsApp}
                target="_blank"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#22c55e]/40 bg-[rgba(34,197,94,0.12)] text-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22c55e] hover:bg-[rgba(34,197,94,0.18)] hover:text-[#4ade80] hover:shadow-[0_0_24px_rgba(34,197,94,0.22)]"
              >
                <BsWhatsapp size={22} />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {t.about.title}
            </h2>

            <div className="mb-7 mt-4">
              <span className="relative text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {t.hero.greeting} {t.hero.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full " />
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              {t.about.description}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-[rgba(32,240,199,0.55)] bg-[linear-gradient(180deg,rgba(8,19,48,0.82)_0%,rgba(6,14,36,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(32,240,199,0.08),0_0_24px_rgba(32,240,199,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(32,240,199,0.12)]">
                <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {t.about.cardTitle1}
                </h3>
                <p className="text-center text-sm leading-7 text-[var(--color-text-soft)]">
                  {t.about.cardText1}
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[rgba(123,44,255,0.52)] bg-[linear-gradient(180deg,rgba(8,19,48,0.82)_0%,rgba(6,14,36,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(123,44,255,0.08),0_0_24px_rgba(123,44,255,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(123,44,255,0.14)]">
                <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#52c7ff]">
                  {t.about.cardTitle2}
                </h3>
                <p className="text-center text-sm leading-7 text-[var(--color-text-soft)]">
                  {t.about.cardText2}
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[rgba(255,60,172,0.50)] bg-[linear-gradient(180deg,rgba(8,19,48,0.82)_0%,rgba(6,14,36,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,60,172,0.08),0_0_24px_rgba(255,60,172,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,60,172,0.14)]">
                <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-hero-code-string)]">
                  {t.about.cardTitle3}
                </h3>
                <p className="text-center text-sm leading-7 text-[var(--color-text-soft)]">
                  {t.about.cardText3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}