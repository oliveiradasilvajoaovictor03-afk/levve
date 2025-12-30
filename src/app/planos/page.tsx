'use client';

import { useRouter } from 'next/navigation';
import { Check, Bot, Utensils, BarChart3, Brain, Heart, Sparkles, Shield } from 'lucide-react';

export default function Page() {
  const router = useRouter();

  const handleSelectPlan = () => {
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 1️⃣ HERO - DECISÃO SEM PRESSÃO */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Seu plano está pronto. Agora é só começar.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            Escolha o tempo de acompanhamento ideal para a sua transformação.
            <br />
            <span className="font-semibold text-blue-600">
              Quanto maior o compromisso, maior o resultado.
            </span>
          </p>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mt-8">
            <p className="text-gray-700 leading-relaxed">
              Você terá acesso completo ao LEVVE por <span className="font-bold text-blue-600">7 dias grátis</span>.
              <br />
              Para ativar o teste, é necessário cadastrar um cartão.
              <br />
              <span className="font-semibold">Você pode cancelar a qualquer momento antes da cobrança.</span>
            </p>
          </div>
        </div>

        {/* 2️⃣ O QUE ESTÁ INCLUSO EM TODOS OS PLANOS */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            O que está incluso em todos os planos
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <p className="font-semibold text-gray-900">Acompanhamento diário por IA</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-4">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <p className="font-semibold text-gray-900">Planejamento alimentar simples e acessível</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 rounded-full p-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <p className="font-semibold text-gray-900">Monitoramento de progresso e hábitos</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 rounded-full p-4">
                  <Brain className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <p className="font-semibold text-gray-900">Orientações claras todos os dias</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-100 rounded-full p-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              <p className="font-semibold text-gray-900">App feito para o brasileiro real</p>
            </div>
          </div>
        </div>

        {/* 3️⃣ PLANOS - FOCO TOTAL EM CONVERSÃO */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Escolha seu plano
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* PLANO MENSAL */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensal</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$49,90</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Ideal para quem quer começar com flexibilidade.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Acesso completo ao app</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Acompanhamento diário</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Cancelamento a qualquer momento</span>
                </li>
              </ul>
              <button
                onClick={handleSelectPlan}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Começar 7 dias grátis
              </button>
            </div>

            {/* PLANO 3 MESES */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-300 hover:border-green-500 transition-all hover:shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3 Meses</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">R$129,90</span>
                </div>
                <p className="text-green-600 font-semibold text-sm mb-2">economize R$20</p>
                <p className="text-gray-600 text-sm">
                  Mais tempo para criar consistência e ver resultados reais.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tudo do plano mensal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Melhor custo-benefício inicial</span>
                </li>
              </ul>
              <button
                onClick={handleSelectPlan}
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors"
              >
                Começar 7 dias grátis
              </button>
            </div>

            {/* PLANO 6 MESES */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-400 hover:border-blue-600 transition-all hover:shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6 Meses</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">R$229,90</span>
                </div>
                <p className="text-blue-600 font-semibold text-sm mb-2">economize R$70</p>
                <p className="text-gray-600 text-sm">
                  O equilíbrio ideal entre compromisso e resultado.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tudo dos planos anteriores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Transformação mais sólida</span>
                </li>
              </ul>
              <button
                onClick={handleSelectPlan}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Começar 7 dias grátis
              </button>
            </div>

            {/* PLANO ANUAL - DESTAQUE */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 border-4 border-yellow-400 relative transform hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  MAIS VANTAJOSO
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">Anual</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">R$399,90</span>
                  <span className="text-blue-100">/ano</span>
                </div>
                <p className="text-yellow-300 font-semibold text-sm mb-2">equivale a R$33/mês</p>
                <p className="text-white text-sm">
                  Para quem decidiu mudar de verdade.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">Tudo dos planos anteriores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">Maior economia</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">Melhor resultado a longo prazo</span>
                </li>
              </ul>
              <button
                onClick={handleSelectPlan}
                className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Começar 7 dias grátis
              </button>
            </div>
          </div>
        </div>

        {/* 4️⃣ TESTE GRÁTIS - QUEBRA TOTAL DE OBJEÇÃO */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-10 text-center text-white">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Experimente o LEVVE por 7 dias gratuitamente
            </h2>
            <p className="text-xl leading-relaxed mb-6">
              O cartão é necessário apenas para ativar o teste.
              <br />
              Se não fizer sentido para você, cancele antes da cobrança.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="font-semibold">Transparente</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="font-semibold">Sem letras miúdas</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="font-semibold">Sem surpresas</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5️⃣ CTA FINAL - DECISÃO */}
        <div className="text-center mb-16">
          <button
            onClick={handleSelectPlan}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold py-6 px-16 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-6"
          >
            Ativar meu teste grátis agora
          </button>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Você não está comprando um app.
            <br />
            <span className="font-bold text-gray-900">
              Você está investindo na sua transformação.
            </span>
          </p>
        </div>

        {/* 6️⃣ PROVA DE CONFIANÇA FINAL */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="font-semibold text-gray-900">Sem dietas caras</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="font-semibold text-gray-900">Sem promessas milagrosas</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="font-semibold text-gray-900">Simples, possível e acessível</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="font-semibold text-gray-900">Acompanhamento diário que não deixa você desistir</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
