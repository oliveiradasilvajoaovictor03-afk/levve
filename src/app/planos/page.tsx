"use client";

import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

// Links oficiais da Stripe (NetRip)
const STRIPE_MENSAL = "https://buy.stripe.com/test_4gM4gs8Azf6g3cf1C663K03";
const STRIPE_TRIMESTRAL = "https://buy.stripe.com/test_14A3co5on5vG9ADa8C63K02";
const STRIPE_SEMESTRAL = "https://buy.stripe.com/test_7sY7sE5onbU4aEH94y63K01";
const STRIPE_ANUAL = "https://buy.stripe.com/test_dRm7sE2cb4rCdQT4Oi63K00";

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Botão Voltar */}
        <Link
          href="/resultado"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </Link>

        {/* Conteúdo Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu plano no Levve
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Invista na sua saúde com o melhor custo-benefício. Quanto mais tempo, mais você economiza.
          </p>
        </div>

        {/* Cards de Planos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Plano Mensal */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#0066FF] transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensal</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-[#0066FF]">R$ 49,90</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">por mês</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Tracker de calorias completo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Acompanhamento diário por IA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Plano alimentar personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Relatórios de progresso</span>
              </li>
            </ul>

            <a
              href={STRIPE_MENSAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#0066FF] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Escolher Mensal
            </a>
          </div>

          {/* Plano Trimestral */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#0066FF] transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trimestral</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-[#0066FF]">R$ 129,90</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">a cada 3 meses</p>
              <div className="mt-3 inline-block bg-blue-100 text-[#0066FF] px-3 py-1 rounded-full text-sm font-semibold">
                R$ 43,30/mês
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-center">
              <p className="text-green-800 font-bold text-sm">
                Economize R$ 19,80 (13%)
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Tracker de calorias completo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Acompanhamento diário por IA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Plano alimentar personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Relatórios de progresso</span>
              </li>
            </ul>

            <a
              href={STRIPE_TRIMESTRAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#0066FF] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Escolher Trimestral
            </a>
          </div>

          {/* Plano Semestral */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#0066FF] hover:border-blue-700 transition-all relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              Mais Popular
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Semestral</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-[#0066FF]">R$ 229,90</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">a cada 6 meses</p>
              <div className="mt-3 inline-block bg-blue-100 text-[#0066FF] px-3 py-1 rounded-full text-sm font-semibold">
                R$ 38,32/mês
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-center">
              <p className="text-green-800 font-bold text-sm">
                Economize R$ 69,50 (23%)
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Tracker de calorias completo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Acompanhamento diário por IA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Plano alimentar personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Relatórios de progresso</span>
              </li>
            </ul>

            <a
              href={STRIPE_SEMESTRAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#0066FF] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Escolher Semestral
            </a>
          </div>

          {/* Plano Anual */}
          <div className="bg-gradient-to-br from-[#0066FF] to-blue-700 rounded-2xl shadow-xl p-6 border-2 border-[#0066FF] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              Melhor Custo
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Anual</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-white">R$ 399,00</span>
              </div>
              <p className="text-blue-100 text-sm mt-1">cobrado anualmente</p>
              <div className="mt-3 inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                R$ 33,25/mês
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3 mb-4 text-center">
              <p className="text-white font-bold text-sm">
                Economize R$ 199,80 (33%)
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Tracker de calorias completo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Acompanhamento diário por IA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Plano alimentar personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Relatórios de progresso</span>
              </li>
            </ul>

            <a
              href={STRIPE_ANUAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-[#0066FF] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Escolher Anual
            </a>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center bg-green-50 rounded-xl p-6 border border-green-200">
          <p className="text-green-800 font-semibold">
            ✓ Garantia de 7 dias - Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  );
}
