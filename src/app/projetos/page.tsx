"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Projetos() {
  return (
    <section className="w-full text-white px-8 md:px-20 py-16 flex flex-col items-center">
      {/* Título */}
      <div className="w-full max-w-4xl self-start">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projetos
        </motion.h1>
      </div>

      <div className="w-full max-w-11xl h-px bg-zinc-700 mb-12" />

      {/* Projeto Idoson */}
      <motion.div
        className="bg-zinc-900/60 border border-zinc-800 rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl w-full mb-12"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Conteúdo esquerdo */}
        <div className="space-y-4">
          <Image
            src="/images/logo-login-removebg-preview-3.png"
            alt="Logo Idoson"
            width={60}
            height={60}
            className="rounded-md"
          />

          <h2 className="text-2xl font-bold">I.D.O.S.ON</h2>

          <p className="text-gray-400 leading-relaxed">
            O Idoson é um projeto voltado para facilitar a inclusão dos idosos
            no mundo digital. Foi desenvolvido com uma interface intuitiva,
            pensada especialmente para que os idosos possam navegar com
            facilidade. Além disso, o sistema conta com inteligência artificial
            para analisar o perfil do idoso com base nas respostas de um
            formulário e oferecer um guia de inclusão adaptado às suas
            necessidades.
          </p>

          <Link
            href="https://github.com/RenivaldoJunior1/I.D.O.S.ON"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="w-full md:w-auto">
              Veja o projeto →
            </Button>
          </Link>
        </div>

        {/* Imagem direita */}
        <div className="flex justify-center md:justify-center">
          <Image
            src="/images/logo-login-removebg-preview-3.png"
            alt="Preview do projeto Idoson"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Projeto Adoção de Pets */}
      <motion.div
        className="bg-zinc-900/60 border border-zinc-800 rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Conteúdo esquerdo */}
        <div className="space-y-4">
          <Image
            src="/images/Logopethope.png"
            alt="Logo App Adoção de Pets"
            width={60}
            height={60}
            className="rounded-md"
          />

          <h2 className="text-2xl font-bold">Pet Hope</h2>

          <p className="text-gray-400 leading-relaxed">
            O aplicativo de adoção de pets foi desenvolvido em React Native com
            Expo, permitindo que ONGs e clínicas cadastrem animais disponíveis
            para adoção. O app conta com uma interface intuitiva, foco em
            acessibilidade e busca conectar pessoas interessadas em adotar com
            instituições que cuidam dos animais.
          </p>

          <Link
            href="https://github.com/RenivaldoJunior1/Frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="w-full md:w-auto">
              Veja o projeto →
            </Button>
          </Link>
        </div>

        {/* Imagem direita */}
        <div className="flex justify-center md:justify-center">
          <Image
            src="/images/Logopethope.png"
            alt="Preview do App de Adoção de Pets"
            width={300}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
