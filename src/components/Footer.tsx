'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-b  text-white py-10 px-6"
    >
      <div className="w-full h-px bg-zinc-600 mb-8" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-zinc-200">
            <li className="hover:underline cursor-pointer">
            <Link href="/sobremim">Sobre</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/projetos">Projetos</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/contatos">Contatos</Link>
          </li>
          </ul>
        </div>

        {/* Outros */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Outros</h3>
          <ul className="space-y-2 text-zinc-200">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:email@exemplo.com" className="hover:underline">Email</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/renivaldo-junior/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/RenivaldoJunior1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mt-10 text-sm text-zinc-300 text-left">
        © 2021 Reinaldo Junior. Todos os direitos reservados.
      </div>
    </motion.footer>
  );
}
