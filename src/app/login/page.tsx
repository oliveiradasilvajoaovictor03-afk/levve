"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 text-[#3B82F6] text-3xl font-bold mb-8">
          <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          Levve
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Bem-vindo de volta
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Entre para continuar sua jornada
        </p>

        {/* Formulário */}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Entrar
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center space-y-4">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 block">
            Esqueci minha senha
          </Link>
          <div className="text-sm text-gray-600">
            Não tem uma conta?{" "}
            <Link href="/quiz-start" className="text-blue-600 hover:text-blue-700 font-semibold">
              Comece agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
