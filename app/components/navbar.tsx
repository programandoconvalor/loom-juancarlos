"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useLanguage } from "../context/language-context";

interface NavItem {
  label: string;
  href: string;
  key: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { language, toggleLanguage, t, mounted } = useLanguage();

  const brandName = useMemo(() => "JUAN CARLOS ZEPEDA", []);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: t.nav.about, href: "/#about", key: "about" },
      { label: t.nav.experience, href: "/#experience", key: "experience" },
      { label: t.nav.skills, href: "/#skills", key: "skills" },
      { label: t.nav.projects, href: "/#projects", key: "projects" },
      { label: t.nav.assistant, href: "/#assistant", key: "assistant" },
      { label: t.nav.education, href: "/#education", key: "education" },
      { label: t.nav.contact, href: "/#contact", key: "contact" },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = (): void => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "assistant",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element =
          section === "home" ? document.body : document.getElementById(section);

        if (!element || section === "home") continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-[100] bg-[var(--bg-primary)]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between border-b border-[color:var(--color-border)] bg-[var(--bg-primary)]/60 px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group min-w-0 flex-[1_1_auto] pr-2 text-[var(--color-brand)] transition duration-300 hover:text-[var(--color-brand-strong)] lg:flex-none"
          aria-label={language === "es" ? "Ir al inicio" : "Go to home"}
          onClick={() => {
            setActiveSection("home");
            closeMenu();
          }}
        >
<span className="block whitespace-nowrap font-extrabold tracking-[-0.03em]">
  {/* Mobile */}
  <span className="block uppercase text-[1.05rem] xs:text-[1.12rem] sm:hidden">
    Juan Carlos
  </span>

  {/* Desktop */}
  <span className="hidden uppercase sm:block sm:text-2xl lg:text-3xl">
    {brandName}
  </span>
</span>


          <span
            className={`mt-2 block h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand-strong)] to-[var(--color-accent)] transition-transform duration-300 ${
              activeSection === "home"
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative block rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                      isActive
                        ? "text-[var(--color-brand)]"
                        : "text-[var(--color-text)] hover:text-[var(--color-brand)]"
                    }`}
                    onClick={() => setActiveSection(item.key)}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`absolute inset-x-3 bottom-1 h-px origin-left rounded-full bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand-strong)] to-[var(--color-accent)] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "es" ? "Cambiar idioma" : "Change language"
            }
            className="relative ml-3 inline-flex h-11 w-[92px] items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface-soft)] p-1 shadow-[var(--shadow-accent)] transition duration-300 hover:border-[var(--color-brand-strong)]"
          >
            <span
              className={`absolute top-1 h-9 w-[42px] rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-strong)] shadow-[var(--shadow-brand)] transition-all duration-300 ${
                language === "es" ? "left-1" : "left-[45px]"
              }`}
            />
            <span className="relative z-10 grid w-full grid-cols-2 text-xs font-bold text-[var(--color-text)]">
              <span
                className={language === "en" ? "opacity-70" : "opacity-100"}
              >
                ES
              </span>
              <span
                className={language === "en" ? "opacity-100" : "opacity-70"}
              >
                EN
              </span>
            </span>
          </button>
        </div>

        <div className="ml-3 flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "es" ? "Cambiar idioma" : "Change language"
            }
            className="relative inline-flex h-10 w-[84px] items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface-soft)] p-1 shadow-[var(--shadow-accent)] transition duration-300 hover:border-[var(--color-brand-strong)]"
          >
            <span
              className={`absolute top-1 h-8 w-[38px] rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-strong)] transition-all duration-300 ${
                language === "es" ? "left-1" : "left-[41px]"
              }`}
            />
            <span className="relative z-10 grid w-full grid-cols-2 text-[11px] font-bold text-[var(--color-text)]">
              <span
                className={language === "en" ? "opacity-70" : "opacity-100"}
              >
                ES
              </span>
              <span
                className={language === "en" ? "opacity-100" : "opacity-70"}
              >
                EN
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] shadow-[var(--shadow-accent)] transition duration-300 hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-surface)]"
          >
            {isMenuOpen ? (
              <HiOutlineX className="text-[24px]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[24px]" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[color:var(--color-border)] bg-[var(--bg-secondary)]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[92rem] px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                onClick={() => {
                  setActiveSection("home");
                  closeMenu();
                }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide transition duration-300 ${
                  activeSection === "home"
                    ? "border border-[color:var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-brand)]"
                    : "border border-transparent bg-white/[0.03] text-[var(--color-text)] hover:border-[color:var(--color-border)] hover:bg-[var(--color-surface-soft)]"
                }`}
              >
                <span>{t.nav.home}</span>
                <span className="text-[var(--color-brand-strong)]">→</span>
              </Link>
            </li>

            {navItems.map((item) => {
              const isActive = activeSection === item.key;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.key);
                      closeMenu();
                    }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide transition duration-300 ${
                      isActive
                        ? "border border-[color:var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-brand)]"
                        : "border border-transparent bg-white/[0.03] text-[var(--color-text)] hover:border-[color:var(--color-border)] hover:bg-[var(--color-surface-soft)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[var(--color-brand-strong)]">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
