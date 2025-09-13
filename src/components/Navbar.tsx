"use client";

import { Menu } from "@headlessui/react";
import { Sun } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative mx-auto mt-4 max-w-2xl">
      {/* Botão Home absoluto à esquerda da Navbar */}
      <div className="absolute left-[-125px] top-1/2 -translate-y-1/2 w-[150px] h-[150px]">
      <Link href="/">
        <Image
          src="/images/botaoHome.png"
          alt="Botão Home"
          width={150}
          height={150}
          className="rounded-full cursor-pointer"
        />
        </Link>
      </div>

      {/* Navbar */}
      <nav className="relative px-4 py-4 bg-[#18181D]/[24%] text-white rounded-lg shadow-md flex justify-between items-center">
        {/* Menu principal */}
        <ul className="flex space-x-6 mx-auto">
          <li className="hover:underline cursor-pointer">
            <Link href="/sobremim">Sobre</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/projetos">Projetos</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/contatos">Contatos</Link>
          </li>

          <Menu as="div" className="relative">
            <Menu.Button className="hover:underline cursor-pointer">Mais</Menu.Button>
            <Menu.Items className="absolute mt-2 w-32 bg-white text-black rounded shadow-lg">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`block px-4 py-2 ${active && "bg-gray-200"}`}
                    href="/Renivaldo_Júnior.pdf" // coloca seu PDF na pasta /public da aplicação
    download
                  >
                    Currículo
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </ul>

        {/* Ícones à direita */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/renivaldo-junior/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/RenivaldoJunior1" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <button>
            <Sun size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
}
