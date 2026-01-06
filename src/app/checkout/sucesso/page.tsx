"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function CheckoutSucessoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <BrandLogo size="lg" showText={true} />
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pagamento confirmado! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Bem-vindo ao Levve! Sua jornada de transformação começa agora.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-3">Próximos passos:</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-[#0066FF] font-bold mt-1">1.</span>
                <p>Acesse seu dashboard personalizado</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0066FF] font-bold mt-1">2.</span>
                <p>Veja seu plano alimentar acessível</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0066FF] font-bold mt-1">3.</span>
                <p>Comece a registrar suas refeições</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0066FF] font-bold mt-1">4.</span>
                <p>Converse com a IA nutricional</p>
              </div>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ir para o dashboard
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Um e-mail de confirmação foi enviado para você
        </p>
      </div>
    </div>
  );
}
