"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { FiSend, FiUser } from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineChip } from "react-icons/hi";
import { useLanguage } from "@/app/context/language-context";

type Message = { role: "user" | "assistant"; content: string };

export default function AssistantSection() {
  const { t, language } = useLanguage();
  const lang = language === "en" ? "en" : "es";

  const suggestedQuestions = useMemo(
    () =>
      lang === "es"
        ? [
            "Háblame de tu experiencia como Senior Frontend Developer",
            "¿Qué tecnologías dominas actualmente?",
            "¿Tienes experiencia con IA?",
            "¿Qué proyectos destacados has desarrollado?",
            "¿Tienes experiencia con Next.js?",
          ]
        : [
            "Tell me about your experience as a Senior Frontend Developer",
            "What technologies do you master?",
            "Do you have AI experience?",
            "What featured projects have you built?",
            "Do you have experience with Next.js?",
          ],
    [lang]
  );

  const getDemoReply = (input: string) => {
    const q = input.toLowerCase();

    if (q.includes("experience") || q.includes("experiencia")) {
      return lang === "es"
        ? "Tengo experiencia sólida como Senior Frontend Developer trabajando con React, Next.js y TypeScript. Me enfoco en crear productos escalables, con excelente UX, performance y arquitectura limpia."
        : "I have solid experience as a Senior Frontend Developer working with React, Next.js, and TypeScript. I focus on building scalable products with great UX, performance, and clean architecture.";
    }

    if (q.includes("ai") || q.includes("ia")) {
      return lang === "es"
        ? "Sí, he trabajado integrando IA en aplicaciones, incluyendo chatbots, AI Agents y consumo de APIs de modelos LLM. También utilizo herramientas de desarrollo asistido por IA."
        : "Yes, I’ve worked integrating AI into applications, including chatbots, AI Agents, and LLM APIs. I also use AI-assisted development tools.";
    }

    return lang === "es"
      ? "Puedo ayudarte con preguntas sobre mi experiencia, stack o proyectos."
      : "I can help you with questions about my experience, stack, or projects.";
  };

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t.assistant.welcome },
  ]);

  useEffect(() => {
    setMessages([{ role: "assistant", content: t.assistant.welcome }]);
  }, [t.assistant.welcome]);

  function sendMessage(userMessage: string) {
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    setTimeout(() => {
      const reply = getDemoReply(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 600);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!message.trim() || loading) return;
    sendMessage(message);
    setMessage("");
  }

  return (
    <section id="assistant" className="relative my-16 overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1022] p-6 md:p-10 shadow-[0_0_60px_rgba(124,58,237,0.15)]">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs mb-3">
          <HiOutlineSparkles />
          {lang === "es" ? "Asistente Inteligente" : "AI Assistant"}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {t.assistant.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {t.assistant.subtitle}
        </p>
      </div>

      {/* Suggested */}
      <div className="flex flex-wrap gap-2 mb-5">
        {suggestedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => sendMessage(q)}
            className="text-xs px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="custom-scroll relative z-10 max-h-[420px] overflow-y-auto space-y-4 mb-6 pr-2">

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : ""}`}>
            
            <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              
              {/* Avatar */}
              <div className="mt-1">
                {msg.role === "user" ? (
                  <FiUser className="text-white/70" />
                ) : (
                  <HiOutlineChip className="text-cyan-300" />
                )}
              </div>

              {/* Bubble */}
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed
                ${msg.role === "user"
                  ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                  : "bg-[#11182f] border border-white/10 text-gray-200"
                }`}
              >
                {msg.content}
              </div>

            </div>
          </div>
        ))}

        {/* Loader */}
        {loading && (
          <div className="flex gap-2 items-center text-cyan-300 text-sm">
            <HiOutlineChip />
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce delay-150" />
              <span className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#0b1022] to-transparent z-20" />
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#0b1022] to-transparent z-20" />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="relative flex items-center">
        
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.assistant.placeholder}
          className="w-full rounded-2xl bg-[#0f1629] border border-white/10 px-4 py-4 pr-14 text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 p-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-105 transition"
        >
          <FiSend className="text-white" />
        </button>

      </form>
    </section>
  );
}