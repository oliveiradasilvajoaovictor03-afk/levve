import React from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import LanguageSelector from './LanguageSelector';

export default function AppHeader() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Nome */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <BrandLogo showText={true} size="md" />
          </Link>

          {/* Tagline (opcional em telas maiores) */}
          <div className="hidden md:block text-sm text-gray-600 max-w-md text-center">
            Emagrecimento simples e acessível com suporte diário por IA
          </div>

          {/* Seletor de Idioma */}
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
