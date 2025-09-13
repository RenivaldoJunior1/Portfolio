"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mt-30 mb-20 flex flex-col justify-center items-start px-8 md:px-20 text-white">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Eu sou{" "}
        <span className="text-white">
          <Typewriter
            words={["Júnior", "Desenvolvedor Full Stack"]}
            loop={0} // 0 = infinito
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Sou um desenvolvedor full stack, com uma sólida base em diversas áreas da programação.
         Desde 2022, venho me dedicando intensamente ao aprendizado e à prática de desenvolvimento de software,
          adquirindo experiência tanto em ajudando startups a transformar suas visões em realidade, em projetos
           pessoais quanto e em colaboração com outras equipes.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
          <a
    href="/Renivaldo_Júnior.pdf" // coloca seu PDF na pasta /public da aplicação
    download
  >
        <Button className="rounded-xl px-6 py-2">Veja meu currículo</Button>

        </a>
        <Link href="/contatos">
        <Button variant="secondary" className="rounded-xl px-6 py-2">
          Entre em contato
        </Button>
        </Link>
      </motion.div>
    </section>
  );
}
