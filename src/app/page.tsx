"use client";
import { HeroSection } from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ConhecaSection from "@/components/ConhecaSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <ProjectsSection />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <SkillsSection />
      </motion.div>

      {/* Conheça Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ConhecaSection />
      </motion.div>

      {/* Contato final */}
      <section className="min-h-[40vh] justify-center items-center px-8 md:px-20 text-white">
        <div className="ms-75">
          <motion.h1
            className="text-5xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Vamos trabalhar juntos
          </motion.h1>

          <motion.p
            className="mt-2 text-lg items-center text-gray-500 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Quer discutir uma oportunidade de criar algo incrível? <br />
            Estou pronto quando você estiver, só me contatar.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/contatos">
              <Button variant="secondary" className="rounded-xl px-6 py-2">
                Entre em contato
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
