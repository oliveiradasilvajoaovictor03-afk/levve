import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import Footer from "@/components/Footer";

export default function BoasVindasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <BrandLogo size="md" showText={true} href="/" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Ícone de Sucesso */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Título */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Boas-vindas! 🎉
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Seu plano está pronto. Vamos começar.
            </p>
          </div>

          {/* Benefícios */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-4 text-left">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-[#0066FF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Plano personalizado</h3>
                <p className="text-gray-600">Criado especialmente para você e seus objetivos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-[#0066FF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Acompanhamento diário</h3>
                <p className="text-gray-600">IA nutricional te guia todos os dias</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-[#0066FF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Comida acessível</h3>
                <p className="text-gray-600">Refeições que cabem no seu bolso</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Começar meu acompanhamento
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-sm text-gray-500">
              Sem cartão • Cancele quando quiser
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
