import Link from 'next/link'
import { Check, Sparkles, ArrowRight } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-8 animate-bounce">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bem-vindo ao Levve
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Seu acesso foi liberado com sucesso
          </p>

          {/* Confirmation Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full mb-16">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Pagamento confirmado • Plano ativo</span>
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            O que fazer agora?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Acesse sua conta
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Faça login com seu e-mail e comece a explorar todos os recursos do Levve
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Configure seu perfil
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete suas informações para receber um plano 100% personalizado
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comece sua jornada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Inicie seu plano personalizado e transforme sua relação com a comida
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Entrar no app
            <ArrowRight className="w-6 h-6" />
          </Link>

          {/* Emotional Reinforcement */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Você tomou uma decisão importante. O Levve vai te acompanhar todos os dias, 
              com simplicidade, comida de verdade e foco em resultados reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
