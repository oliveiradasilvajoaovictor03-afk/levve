"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Clock } from "lucide-react";

export default function QuizStartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-[#3B82F6] text-2xl font-bold">
            <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            LEVVE
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-[#3B82F6] rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Personalização inteligente
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Vamos criar seu plano ideal
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Responda algumas perguntas para entendermos sua rotina, orçamento e objetivos. Assim criamos um plano que funciona de verdade para você.
          </p>

          {/* Time indicator */}
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Leva apenas 2 minutos</span>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link 
              href="/quiz"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] hover:from-[#2563EB] hover:to-[#059669] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Começar quiz
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Personalizado</h3>
              <p className="text-sm text-gray-600">Plano feito para sua realidade</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Acessível</h3>
              <p className="text-sm text-gray-600">Comida que cabe no bolso</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">Com IA</h3>
              <p className="text-sm text-gray-600">Acompanhamento diário</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
