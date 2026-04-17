"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { useLanguage } from "@/app/context/language-context";
import axios from "axios";

export default function ContactForm() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🧠 MENSAJES DINÁMICOS
  const getErrorMessage = (key: string) => {
    const messages: any = {
      es: {
        required: "Requerido",
        nameMin: "Mínimo 3 caracteres",
        nameLetters: "Solo letras",
        emailInvalid: "Email inválido",
        messageMin: "Mínimo 10 caracteres",
        messageMax: "Máximo 500 caracteres",
      },
      en: {
        required: "Required",
        nameMin: "Minimum 3 characters",
        nameLetters: "Only letters allowed",
        emailInvalid: "Invalid email",
        messageMin: "Minimum 10 characters",
        messageMax: "Maximum 500 characters",
      },
    };

    return messages[lang][key];
  };

  // 🔥 VALIDACIÓN
  const validate = (data = form) => {
    const newErrors: any = {};

    if (!data.name.trim()) {
      newErrors.name = getErrorMessage("required");
    } else if (data.name.trim().length < 3) {
      newErrors.name = getErrorMessage("nameMin");
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(data.name)) {
      newErrors.name = getErrorMessage("nameLetters");
    }

    if (!data.email.trim()) {
      newErrors.email = getErrorMessage("required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = getErrorMessage("emailInvalid");
    }

    if (!data.message.trim()) {
      newErrors.message = getErrorMessage("required");
    } else if (data.message.trim().length < 10) {
      newErrors.message = getErrorMessage("messageMin");
    } else if (data.message.length > 500) {
      newErrors.message = getErrorMessage("messageMax");
    }

    return newErrors;
  };

  // 🔁 REVALIDAR CUANDO CAMBIA EL IDIOMA
  useEffect(() => {
    setErrors(validate(form));
  }, [language]);

  // 🔄 INPUT CHANGE
  const handleChange = (field: string, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    setErrors(validate(updated));
  };

  // 🚀 SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const text =
        lang === "es"
          ? `Hola Juan Carlos 👋\n\nNuevo lead:\n\n👤 ${form.name}\n📧 ${form.email}\n💬 ${form.message}`
          : `Hi Juan Carlos 👋\n\nNew lead:\n\n👤 ${form.name}\n📧 ${form.email}\n💬 ${form.message}`;

      const phone = "5217227914217";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

      // 👉 WhatsApp primero
      window.open(url, "_blank", "noopener,noreferrer");

      // 👉 Guardar en background
      axios.post("/api/contact", form).catch(() => {});

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  const isValid =
    Object.keys(errors).length === 0 &&
    form.name &&
    form.email &&
    form.message;

  return (
    <motion.div className="relative p-6 md:p-8 rounded-[28px] bg-[#0f172a]/60 border border-white/10 backdrop-blur-xl">

      {/* SUCCESS */}
      <AnimatePresence>
        {success && (
          <motion.div className="absolute inset-0 flex items-center justify-center bg-[#0f172a]/90 rounded-[28px]">
            <div className="text-center">
              <FiCheckCircle className="text-green-400 text-5xl mb-3" />
              <p className="text-white">
                {lang === "es"
                  ? "Abriendo WhatsApp 🚀"
                  : "Opening WhatsApp 🚀"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="text-xl font-semibold text-white mb-6">
        {lang === "es" ? "Contáctame y envíame WhatsApp" : "Contact Me and Send WhatsApp"}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* NAME */}
        <div>
          <input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => setTouched({ ...touched, name: true })}
            placeholder={lang === "es" ? "Nombre" : "Name"}
            className={`input-pro ${
              touched.name && errors.name ? "border-red-500" : ""
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-xs text-red-400 mt-1 ml-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => setTouched({ ...touched, email: true })}
            placeholder="Email"
            className={`input-pro ${
              touched.email && errors.email ? "border-red-500" : ""
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-xs text-red-400 mt-1 ml-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => setTouched({ ...touched, message: true })}
            placeholder={lang === "es" ? "Mensaje" : "Message"}
            className={`input-pro ${
              touched.message && errors.message ? "border-red-500" : ""
            }`}
          />
          {touched.message && errors.message && (
            <p className="text-xs text-red-400 mt-1 ml-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
      

<div className="relative">
  

  <motion.button
  type="submit"
  disabled={!isValid || loading}
  className={`absolute right-4 bottom-6 p-4 top-1/2 -translate-y-1/2 p-3 rounded-xl text-white transition flex items-center justify-center
  ${
    isValid && !loading
      ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 shadow-lg shadow-purple-500/30"
      : "bg-gray-600 cursor-not-allowed"
  }`}
>
  {loading ? (
    "..."
  ) : (
    <FiSend className="text-white text-lg" />
  )}
</motion.button>
</div>


      </form>
    </motion.div>
  );
}