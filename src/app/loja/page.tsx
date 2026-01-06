"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Home,
  TrendingUp,
  Apple,
  User,
  Plus,
  Target,
  Flame,
} from "lucide-react";

export default function LojaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 text-[#0066FF] hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Levve</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-6 max-w-4xl pb-24">
        {/* Saudação */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Olá! Bem-vindo ao Levve 👋
          </h2>
          <p className="text-gray-600">
            Comece registrando sua primeira refeição
          </p>
        </div>

        {/* Card de Progresso Diário */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Hoje</h3>
            <span className="text-sm text-gray-600">
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </span>
          </div>

          {/* Calorias */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Calorias
              </span>
              <span className="text-sm text-gray-600">0 / 2000 kcal</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-[#0066FF] h-3 rounded-full transition-all"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          {/* Macros */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#10B981"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset="176"
                    className="transition-all"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">0%</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-700">Proteínas</p>
              <p className="text-xs text-gray-600">0g / 150g</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#F59E0B"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset="176"
                    className="transition-all"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">0%</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-700">Carboidratos</p>
              <p className="text-xs text-gray-600">0g / 250g</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#EF4444"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset="176"
                    className="transition-all"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">0%</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-700">Gorduras</p>
              <p className="text-xs text-gray-600">0g / 65g</p>
            </div>
          </div>
        </div>

        {/* Botão de Adicionar Refeição */}
        <button className="w-full bg-[#0066FF] text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mb-6 shadow-lg">
          <Plus className="w-6 h-6" />
          Registrar refeição
        </button>

        {/* Cards de Ação Rápida */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
            <Target className="w-8 h-8 text-[#0066FF] mb-2" />
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              Metas
            </h4>
            <p className="text-xs text-gray-600">Configure seus objetivos</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
            <Flame className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              Progresso
            </h4>
            <p className="text-xs text-gray-600">Veja sua evolução</p>
          </div>
        </div>

        {/* Mensagem Motivacional */}
        <div className="bg-gradient-to-r from-[#0066FF] to-blue-700 rounded-xl p-6 text-white text-center">
          <h3 className="text-lg font-bold mb-2">
            Você está no caminho certo! 💪
          </h3>
          <p className="text-sm text-blue-100">
            Comece registrando sua primeira refeição e veja como é fácil
            acompanhar seu progresso.
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button className="flex flex-col items-center gap-1 text-[#0066FF]">
              <Home className="w-6 h-6" />
              <span className="text-xs font-semibold">Início</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0066FF] transition-colors">
              <Apple className="w-6 h-6" />
              <span className="text-xs">Refeições</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0066FF] transition-colors">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs">Progresso</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0066FF] transition-colors">
              <User className="w-6 h-6" />
              <span className="text-xs">Perfil</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
