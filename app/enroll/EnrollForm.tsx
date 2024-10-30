// app/enroll/EnrollForm.tsx (Client Component)
"use client";

import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";
import { useState } from "react";

export default function EnrollForm() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Función para manejar el envío del formulario
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Llama a la función insertEmail mediante la llamada a la API
    const response = await fetch("/api/insertEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setMessage("¡Correo enviado con éxito!");
      setEmail(""); // Limpia el campo de entrada
    } else {
      const error = await response.json();
      setMessage(`Error: ${error.message}`);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <GoogleTagManager gtmId="GTM-5TGWT9ZQ" />
      <h1 className="font-semibold text-[#2E5797] text-center">
        ¡Inscríbete en el Ministerio J.A. Moyobamba y únete a nuestra comunidad
        de jóvenes adventistas!
      </h1>
      <p className="font-normal text-sm text-[#a4a4a4] text-center mb-10">
        Proporciónanos tu correo electrónico para enviarte la lección de la
        semana directamente.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          name="email"
          className="border w-full p-2 text-center font-bold text-[#333333]"
          placeholder="email@gmail.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() =>
            sendGTMEvent({ event: "buttonClicked", value: "enviar_correo" })
          }
          className="font-semibold border mt-5 p-2 bg-[#2E5797] text-white border-[#2E5797] hover:bg-[#3e6cb4] hover:text-white"
          type="submit"
        >
          Enviar correo
        </button>
      </form>
      {message && <p className="text-center mt-5">{message}</p>}
    </div>
  );
}
