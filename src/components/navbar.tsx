'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Para você', href: '/paravoce' },
    { name: 'Para empresas', href: '#' },
    { name: 'Ajuda', href: '#' }
  ];

  return (
    <nav>
      {/* Container Principal */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Botão do Menu Hamburguer (Visível apenas em telas pequenas) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Ícone de Hambúrguer ou X. Use um ícone real. */}
            {isOpen ? (
              // Exemplo de um X (fechar)
              <svg 
                className="w-9 h-9" 
                fill="none" 
                stroke="#47A138" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12">
                  </path>
              </svg>
            ) : (
              // Exemplo de Hambúrguer (abrir)
              <svg 
                className="w-9 h-9" 
                fill="none" 
                stroke="#47A138" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
            )}
          </button>
        </div>

        {/* Links de Navegação (Visível em telas grandes e Oculto em telas pequenas) */}
        <div className="hidden md:flex xl:space-x-16 lg:space-x-10 md:space-x-7">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-[#47A138] text-[19px] font-medium hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu Mobile (Visível apenas quando 'isOpen' é true e em telas pequenas) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mt-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-[#47A138] block py-2 text-[19px]"
              onClick={toggleMenu} // Fecha o menu ao clicar no link
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;