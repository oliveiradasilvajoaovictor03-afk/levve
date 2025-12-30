"use client";

import Link from "next/link";
import { Check, DollarSign, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Seu plano ideal está pronto
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-600 text-center mb-10">
          Criamos um plano de emagrecimento simples, acessível e possível para sua rotina.
        </p>

        {/* Bloco de Benefícios */}
        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Alimentação barata e com comida de verdade
              </h3>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Acompanhamento diário por IA
              </h3>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Foco em resultado gradual e sustentável
              </h3>
            </div>
          </div>
        </div>

        {/* Texto Emocional */}
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6 mb-8">
          <p className="text-gray-800 text-center leading-relaxed">
            Com base nas suas respostas, o <span className="font-bold text-emerald-700">LEVVE</span> entendeu suas dificuldades e criou um plano que cabe no seu bolso e na sua rotina.
          </p>
        </div>

        {/* Botão CTA Principal */}
        <Link href="/planos">
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-semibold py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-4">
            Ver meu plano personalizado
          </button>
        </Link>

        {/* Link Secundário - Refazer Quiz */}
        <div className="text-center">
          <Link href="/quiz-start" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline transition-colors">
            Refazer quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
