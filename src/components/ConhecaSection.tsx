'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from "next/link";

export default function ConhecaSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Me conheça</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sobre Mim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.10 }} // 👈 aumenta ao passar o mouse
          >
            <Card className="bg-zinc-800 w-80 h-80 text-white flex flex-col items-center transition-all duration-300">
              <CardHeader className=" w-full px-4 justify-center items-center text-center text-2xl font-semibold">
                Sobre mim
              </CardHeader>
              <p>Saiba mais sobre a minha história</p>
              <Link href="/sobremim">
              <CardContent className="text-center text-zinc-300">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/avatar.png"
                    alt="Avatar"
                    width={150}
                    height={150}
                  />
                </div>
              </CardContent>
             </Link>
            </Card>
          </motion.div>

          {/* Projetos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.10 }}
          >
            <Card className="bg-zinc-800 w-80 h-80 text-white flex flex-col items-center transition-all duration-300">
              <CardHeader className="justify-center items-center text-center text-2xl font-semibold">
                Projetos
              </CardHeader>
              <p>Veja meus projetos</p>
              <Link href="/projetos">
              <CardContent className="text-center text-zinc-300">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/TechStack.png"
                    alt="Tech Stack"
                    width={254}
                    height={300}
                  />
                </div>
              </CardContent>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}