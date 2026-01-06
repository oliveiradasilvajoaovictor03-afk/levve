import React from 'react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Nome - BRANCO PURO (#FFFFFF) para contraste AAA */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <BrandLogo showText={false} size="sm" />
              {/* FORÇAR BRANCO PURO - CONTRASTE PERFEITO */}
              <span className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>Levve</span>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left max-w-xs leading-relaxed">
              Emagrecimento simples e acessível com suporte diário por IA
            </p>
          </div>

          {/* Links - BRANCO/CINZA CLARO para contraste */}
          <div className="flex flex-wrap gap-8 text-sm">
            <a href="/termos" className="text-gray-300 hover:text-white transition-colors font-medium">
              Termos de Uso
            </a>
            <a href="/privacidade" className="text-gray-300 hover:text-white transition-colors font-medium">
              Privacidade
            </a>
            <a href="/contato" className="text-gray-300 hover:text-white transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} Levve.<br className="md:hidden" /> Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
