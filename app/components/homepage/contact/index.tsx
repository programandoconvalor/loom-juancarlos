"use client";

import ContactForm from "./contact-form";
import { useLanguage } from "@/app/context/language-context";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";

  return (
    <section id="contact" className="my-20 relative text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Contacto" : "Contact"}
        </h2>
        <p className="text-gray-400 mt-2">
          {lang === "es"
            ? "Disponible para oportunidades y proyectos 100% remotos"
            : "Available for opportunities and projects 100% remote"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* FORM */}
        <ContactForm />

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center gap-8">
          {/* Contact Info */}
          <div className="text-center">
            <p className="text-lg font-medium">ingenierozepeda@gmail.com</p>
            <p className="text-gray-400">Toluca, México</p>
            <p className="text-gray-400">Whatsapp: +52 1 722 791 4217</p>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex items-center gap-4">
         
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
