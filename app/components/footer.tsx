"use client";

import { useLanguage } from "../context/language-context";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full py-6 text-center text-sm text-gray-400">
      <p className="flex items-center justify-center gap-2">
{t.footer.madeWith}{" "}
       {"<"}<FiHeart className="text-pink-500 animate-pulse" />{">"}{" "}

        {t.footer.by}{" "}
        <span className="font-semibold text-white">
          {t.footer.copyright}
        </span>
      </p>
    </footer>
  );
}