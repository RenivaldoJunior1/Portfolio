"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SobreMim() {
  return (
    <section className="min-h-[60vh] w-full text-white px-8 md:px-20 py-16">
      {/* Título */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Um pouco sobre mim
      </motion.h1>

      <div className="w-full h-px bg-zinc-700 mb-10" />

      {/* Conteúdo em 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Texto */}
        <motion.div
          className="space-y-6 text-gray-400 text-justify w-full max-w-2xl rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm tracking-widest text-gray-500 font-semibold uppercase">
            Quem eu sou
          </h2>
          <p>
            Sou um desenvolvedor full stack com uma sólida base em diversas áreas da
            programação. Desde 2022, venho me dedicando intensamente ao
            aprendizado e à prática de desenvolvimento de software, adquirindo
            experiência valiosa ao colaborar com startups e transformar suas
            visões em realidade, além de trabalhar em projetos pessoais.
          </p>
          <p>
            Atualmente, estou focado em ajudar pequenas startups a impulsionar
            suas ideias e também estou envolvido em vários projetos próprios.
            Com 5 semestres concluídos na faculdade de Sistemas de Informação,
            adquiri conhecimentos abrangentes em front-end e back-end, e estou
            atuando como desenvolvedor full stack. Este ano, dediquei-me a
            aprimorar significativamente minhas habilidades em React.js, Next.js,
            TailwindCSS, TypeScript, JavaScript e Bootstrap.
          </p>
          <p>
            Minha jornada no desenvolvimento de software é marcada por um
            entusiasmo constante em aprender e aplicar novas tecnologias. Estou
            sempre em busca de novos desafios e oportunidades para crescer e
            contribuir para projetos inovadores e impactantes.
          </p>

          <Link href="/contatos">
            <Button variant="secondary" className="rounded-xl px-6 py-2">
              Entre em contato
            </Button>
          </Link>
        </motion.div>

        {/* Avatar / Ilustração */}
        <motion.div
          className="flex justify-center md:justify-end mr-40"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-56 h-64 bg-zinc-800 rounded-lg flex items-center justify-center">
            {/* Aqui você pode colocar sua foto, avatar ou ícone */}
            <span className="text-gray-600">[Imagem/Avatar]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
