import Link from "next/link";
import { Sparkles, TrendingDown, Smartphone, DollarSign, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#3B82F6] text-2xl font-bold">
            <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            Levve
          </div>
          <Link href="/login" className="text-gray-900 font-semibold hover:text-[#3B82F6] transition-colors">
            ENTRAR
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Emagreça gastando pouco com comida de verdade
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Acompanhamento diário por IA que cabe no seu bolso
          </p>

          <Link 
            href="/quiz-start"
            className="inline-block px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-[#3B82F6] to-[#10B981] hover:from-[#2563EB] hover:to-[#059669] text-white text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Começar agora
          </Link>

          <p className="mt-6 text-sm sm:text-base text-gray-500">
            7 dias grátis • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            Por que escolher o Levve?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Alimentação acessível
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Planos alimentares com comida de verdade que cabem no seu orçamento
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-[#10B981]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                IA que te acompanha
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Suporte diário personalizado com inteligência artificial 24/7
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Resultados reais
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Monitoramento simples do seu progresso e conquistas diárias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            O que você vai ter
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Plano alimentar personalizado
                </h3>
                <p className="text-base text-gray-600">
                  Receitas simples e acessíveis adaptadas ao seu objetivo e rotina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Chat com IA 24/7
                </h3>
                <p className="text-base text-gray-600">
                  Tire dúvidas, peça ajustes e receba motivação a qualquer hora
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Acompanhamento de progresso
                </h3>
                <p className="text-base text-gray-600">
                  Veja sua evolução com gráficos simples e celebre cada conquista
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Suporte humano quando precisar
                </h3>
                <p className="text-base text-gray-600">
                  Nossa equipe está pronta para te ajudar em casos especiais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Comece sua transformação hoje
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10">
            Teste grátis por 7 dias. Sem compromisso.
          </p>
          <Link 
            href="/quiz-start"
            className="inline-block px-10 py-5 sm:px-12 sm:py-6 bg-white text-[#3B82F6] text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Começar agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-white text-2xl font-bold mb-4">
              <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              Levve
            </div>
            <p className="text-sm">
              Emagreça gastando pouco com acompanhamento diário por IA
            </p>
            <p className="text-xs text-gray-500">
              © 2024 Levve. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
