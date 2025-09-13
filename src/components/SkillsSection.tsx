'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJava, FaRobot, FaPython, FaGit, FaBootstrap } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs, SiNestjs, SiExpress, SiPostgresql, SiMongodb, SiSass, SiFigma, SiTailwindcss, SiSharp } from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
  { name: 'IA', icon: <FaRobot className="text-purple-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
  { name: 'Sass', icon: <SiSass className="text-pink-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-indigo-500" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-green-400" /> },
  { name: 'C#', icon: <SiSharp className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-orange-500" /> },
  { name: 'Git', icon: <FaGit className="text-red-500" /> },
]

const SkillsSection = () => {
  return (
    <section className="py-20 px-6  bg-zinc-900 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        <div className="bg-zinc-600 px-4 py-1 rounded-3xl mx-auto text-center w-fit text-white text-2xl font-bold">
            Skills
        </div>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-zinc-400 mb-10"
      >
        Essas são praticamente todas as minhas skills
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-3xl">{skill.icon}</div>
            <span className="text-sm text-zinc-300">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
