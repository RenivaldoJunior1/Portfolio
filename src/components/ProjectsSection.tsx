'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaRobot, FaAccessibleIcon, FaPaw } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-white px-6"
      aria-labelledby="projects-title"
    >
      <motion.h2
        id="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-left w-full max-w-5xl"
      >
        Projetos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Projeto Idoson */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-zinc-900 border-zinc-700 hover:border-blue-500 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 text-blue-400 justify-start pl-4">
                <FaRobot className="text-xl" />
                <h3 className="text-xl font-semibold">I.D.O.S.ON</h3>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-1 text-left">
                <p className="text-sm text-zinc-300 mb-4">
                  O Idoson é um projeto criado para facilitar a inclusão digital de idosos, 
                  com um site de interface simples e intuitiva. Ele oferece dicas práticas 
                  e conta com uma IA que analisa o perfil do idoso e faz recomendações 
                  personalizadas, além de um chatbot interativo com comandos de voz.
                </p>

                <div className="flex gap-2 items-center mb-4">
                  <FaAccessibleIcon className="text-green-400" title="Acessibilidade" />
                  <span className="text-xs text-zinc-400">Comandos de voz</span>
                </div>

                <Link href="https://github.com/RenivaldoJunior1/I.D.O.S.ON" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full md:w-auto">
                    Veja o projeto →
                  </Button>
                </Link>
              </div>
              <div className="flex-shrink-0 w-60 h-60">
                <img
                  src="/images/logo-login-removebg-preview-3.png"
                  alt="I.D.O.S.ON"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projeto Pet Hope */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-zinc-900 border-zinc-700 hover:border-pink-500 transition-all h-full">
            <CardHeader>
              <div className="flex items-center gap-2 text-pink-400 justify-start pl-4">
                <FaPaw className="text-xl" />
                <h3 className="text-xl font-semibold">Pet Hope</h3>
              </div>
            </CardHeader>

<CardContent className="flex flex-col md:flex-row gap-4 items-start h-full">
  <div className="flex-1 flex flex-col justify-between text-left">
    <div>
      <p className="text-sm text-zinc-300 mb-4">
        O Pet Hope é um aplicativo mobile desenvolvido para facilitar a adoção de animais. 
        ONGs e clínicas podem cadastrar pets disponíveis, enquanto usuários podem navegar, 
        visualizar detalhes e encontrar um novo amigo de forma prática e intuitiva.
      </p>

      <div className="flex gap-2 items-center mb-4">
        <FaPaw className="text-pink-400" title="Adoção de pets" />
        <span className="text-xs text-zinc-400">App Mobile</span>
      </div>
    </div>

    <Link
      href="https://github.com/RenivaldoJunior1/PetHope"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" className="w-full md:w-auto mt-10">
        Veja o projeto →
      </Button>
    </Link>
  </div>

  <div className="flex-shrink-0 w-60 h-60 flex items-center justify-center">
    <img
      src="/images/Logopethope.png"
      alt="Pet Hope"
      className="max-w-full max-h-full object-contain rounded-md"
    />
  </div>
</CardContent>

          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
