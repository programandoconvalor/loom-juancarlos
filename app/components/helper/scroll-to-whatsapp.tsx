"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const SCROLL_THRESHOLD = 420;

export default function ScrollToWhatsapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="https://wa.me/5217227914217"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className={[
        "fixed z-[120] flex items-center justify-center rounded-full",
        "h-12 w-12",
        "border border-[#22c55e]/45",
        "bg-[rgba(3,18,47,0.92)] text-[#22c55e]",
        "shadow-[0_8px_30px_rgba(34,197,94,0.20)] backdrop-blur-md",
        "transition-all duration-500 ease-out",
        "hover:scale-110 hover:border-[#22c55e]",
        "hover:bg-[rgba(34,197,94,0.16)] hover:text-[#4ade80]",
        "hover:shadow-[0_10px_34px_rgba(34,197,94,0.28)]",

        // MOBILE: abajo derecha
        "right-4 bottom-24 top-auto",

        // DESKTOP: arriba derecha
        "md:right-6 md:bottom-auto md:top-24",

        isVisible
          ? "pointer-events-auto opacity-100 translate-y-0 md:translate-y-0"
          : "pointer-events-none opacity-0 translate-y-6 md:-translate-y-6",
      ].join(" ")}
    >
      <FaWhatsapp size={24} />
    </Link>
  );
}