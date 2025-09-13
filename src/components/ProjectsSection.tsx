'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaRobot, FaAccessibleIcon } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'


const ProjectsSection = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-white"
      aria-labelledby="projects-title"
    >
      <motion.h2
        id="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-left w-full max-w-xl"
      >
        Projetos
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl w-full"
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
      O Idoson é um projeto criado para facilitar a inclusão digital de idosos, com um site de interface simples e intuitiva. Ele oferece dicas práticas para ajudar os usuários a se adaptarem à tecnologia. O diferencial é uma IA que analisa o perfil do idoso e faz recomendações personalizadas, além de um chatbot interativo com comandos de voz para esclarecer dúvidas, tornando a experiência mais acessível.</p>

    <div className="flex gap-2 items-center mb-4">
      <FaAccessibleIcon className="text-green-400" title="Acessibilidade" />
      <span className="text-xs text-zinc-400">Comandos de voz</span>
    </div>
    

    <a href="https://www.linkedin.com/in/renivaldo-junior/" target="_blank" rel="noopener noreferrer"></a>

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
    </section>
  )
}

export default ProjectsSection
