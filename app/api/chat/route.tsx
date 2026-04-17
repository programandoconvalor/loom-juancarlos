import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Mensaje requerido" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Eres un asistente profesional que responde como Juan Carlos Zepeda IA.
Full-Stack Developer con React, Next.js, .NET Core e Inteligencia Artificial.
Responde de forma clara, profesional y enfocada a negocio.
          `.trim(),
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    });

    return NextResponse.json({
      reply: response.choices?.[0]?.message?.content ?? "No hubo respuesta del modelo.",
    });
  } catch (error: unknown) {
    console.error("ERROR /api/chat:", error);

    return NextResponse.json({
      reply:
        "Actualmente el asistente está en modo demostración. Juan Carlos Zepeda cuenta con amplia experiencia en Front-End con React, Next.js, interfaces responsivas y soluciones modernas apoyadas con IA.",
      demo: true,
    });
  }
}