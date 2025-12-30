"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Vamos criar seu plano ideal
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Responda algumas perguntas rápidas para personalizar sua experiência no Levve
          </p>
        </div>

        {/* Botão Principal */}
        <div className="pt-4">
          <Link href="/quiz">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Começar quiz
            </button>
          </Link>
        </div>

        {/* Indicador visual */}
        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ⏱️ Leva apenas 2 minutos
          </p>
        </div>
      </div>
    </div>
  );
}
