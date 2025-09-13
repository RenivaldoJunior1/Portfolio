"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContatoPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r84hova", // Substitua pelo seu
        "template_tomzay9", // Substitua pelo seu
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "UxiaPbE46br5Am0_l" // Substitua pela sua
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso 🚀");
          setForm({ email: "", name: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Erro:", error);
          alert("Ocorreu um erro ao enviar. Tente novamente!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mt-5 mb-10 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Entre em contato
      </motion.h1>

      <div className="w-full max-w-11xl h-px bg-zinc-700 mb-12" />

      {/* Card estilo janela */}
      <motion.div
        className="w-full max-w-2xl bg-neutral-900 rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Barra estilo macOS */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-neutral-400 text-sm">Nova mensagem</p>
          <div></div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-neutral-400 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu endereço de e-mail"
              required
              className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-neutral-400 mb-1">Nome:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-neutral-400 mb-1">Assunto:</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Digite o assunto"
              required
              className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-neutral-400 mb-1">Mensagem:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escreva aqui sua mensagem"
              rows={5}
              required
              className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-neutral-800 border border-neutral-700 text-white rounded-md hover:bg-neutral-700 transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
