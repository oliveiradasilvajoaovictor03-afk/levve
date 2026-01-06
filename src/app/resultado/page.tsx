"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sparkles, Check, DollarSign, TrendingUp, Heart, Scale, Apple, Activity, BarChart3 } from "lucide-react";

export default function ResultadoPage() {
  const [goal, setGoal] = useState<string>("emagrecer");

  useEffect(() => {
    // Ler objetivo do localStorage
    const savedGoal = localStorage.getItem("levve_goal");
    if (savedGoal) {
      setGoal(savedGoal);
    }
  }, []);

  const isGainMass = goal === "ganhar_massa";

  // Configurações baseadas no objetivo
  const config = {
    headline: isGainMass 
      ? "Seu plano para ganhar massa muscular está pronto"
      : "Entendemos sua jornada",
    subheadline: isGainMass
      ? "Com base nas suas respostas, você precisa de um plano inteligente com foco em proteínas, calorias adequadas e constância."
      : "Com base nas suas respostas, você precisa de clareza, acompanhamento constante e um plano que caiba no seu bolso.",
    trackerTitle: isGainMass
      ? "Rastreador de Macros para Hipertrofia"
      : "Rastreador de Calorias Inteligente",
    trackerSubtitle: isGainMass
      ? "O coração do Levve: controle total sobre proteínas e calorias"
      : "O coração do Levve: clareza total sobre o que você come",
    benefit1: isGainMass ? {
      title: "Alimentação para ganho de massa",
      description: "Planos com comida acessível e rica em proteínas: frango, ovos, arroz, feijão, batata-doce. Nada de suplementos caros obrigatórios."
    } : {
      title: "Alimentação que cabe no bolso",
      description: "Planos com comida de verdade: arroz, feijão, ovo, frango, frutas da época. Nada de ingredientes caros ou impossíveis."
    },
    benefit2: isGainMass ? {
      title: "Foco em proteínas e constância",
      description: "A IA te ajuda a atingir suas metas de proteína diárias e mantém você no caminho certo, sem pressão."
    } : {
      title: "Acompanhamento diário por IA",
      description: "A inteligência artificial te acompanha todos os dias, ajusta seu plano e te mantém motivado sem pressão."
    },
    benefit3: isGainMass ? {
      title: "Ganho inteligente, não apenas peso",
      description: "Resultados reais vêm da constância e do consumo adequado de calorias e proteínas. Não precisa ser perfeito, só precisa continuar."
    } : {
      title: "Foco em constância, não perfeição",
      description: "Resultados reais vêm da constância. Não precisa ser perfeito, só precisa continuar."
    },
    emotionalMessage: isGainMass
      ? "Seu objetivo é ganhar massa muscular de forma inteligente, sem dietas caras e com acompanhamento diário por IA."
      : "Você não está sozinho(a) nessa jornada.",
    emotionalSubtext: isGainMass
      ? "Sabemos que ganhar massa de qualidade é desafiador. Mas com o plano certo, alimentação acessível e acompanhamento constante, você vai conseguir."
      : "O Levve foi feito para pessoas reais, com rotinas reais e orçamentos reais."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12">
          {/* Success Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
            <Check className="w-4 h-4" />
            Análise completa
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {config.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {config.subheadline}
          </p>
        </div>

        {/* Tracker Highlight Section */}
        <div className={`bg-gradient-to-br ${isGainMass ? 'from-purple-500 to-green-500' : 'from-[#0066FF] to-[#10B981]'} rounded-3xl p-8 sm:p-12 mb-8 text-white`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Activity className="w-4 h-4" />
              Funcionalidade Central
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {config.trackerTitle}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              {config.trackerSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {isGainMass ? "Controle de Calorias" : "Monitoramento Preciso"}
              </h3>
              <p className="text-white/80 text-sm">
                {isGainMass 
                  ? "Acompanhe seu consumo calórico para garantir superávit adequado ao ganho de massa"
                  : "Acompanhe cada caloria consumida e saiba exatamente quanto falta para sua meta diária"
                }
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {isGainMass ? "Foco em Proteínas" : "Macros Detalhados"}
              </h3>
              <p className="text-white/80 text-sm">
                {isGainMass
                  ? "Atinja suas metas diárias de proteína para maximizar o ganho de massa muscular"
                  : "Visualize proteínas, carboidratos e gorduras de cada refeição em tempo real"
                }
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Clareza Total</h3>
              <p className="text-white/80 text-sm">
                Entenda o que está funcionando com gráficos simples e insights personalizados
              </p>
            </div>
          </div>
        </div>

        {/* Visual Sections with Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Brazilian Food Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="text-7xl mb-4">🍽️</div>
                <p className="text-lg font-bold text-gray-800">
                  {isGainMass ? "Comida para ganhar massa" : "Comida brasileira acessível"}
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                {isGainMass ? "Proteínas acessíveis" : "Refeições que cabem no bolso"}
              </h3>
              <p className="text-gray-600 text-sm">
                {isGainMass
                  ? "Frango, ovos, carne moída, arroz, feijão, batata-doce. Comida de verdade que você já conhece e pode comprar."
                  : "Arroz, feijão, frango, ovos, saladas. Comida de verdade que você já conhece e pode comprar."
                }
              </p>
            </div>
          </div>

          {/* Real People Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="text-7xl mb-4">💪</div>
                <p className="text-lg font-bold text-gray-800">Pessoas reais, resultados reais</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Transformação sustentável</h3>
              <p className="text-gray-600 text-sm">
                Sem promessas milagrosas. Resultados construídos com constância e acompanhamento diário.
              </p>
            </div>
          </div>
        </div>

        {/* App Mockup Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Veja como funciona na prática
            </h2>
            <p className="text-gray-600">
              Interface simples e intuitiva para acompanhar seu progresso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Dashboard Mockup */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
              <div className="bg-white rounded-lg p-4 shadow-md mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-700">
                    {isGainMass ? "Calorias Hoje" : "Calorias Hoje"}
                  </span>
                  <span className="text-xs font-bold text-[#0066FF]">
                    {isGainMass ? "2.450/2.800" : "1.245/1.800"}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0066FF] to-[#10B981] rounded-full" style={{width: isGainMass ? '87%' : '69%'}}></div>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Dashboard Intuitivo</h4>
              <p className="text-xs text-gray-600">Veja seu progresso em tempo real</p>
            </div>

            {/* Calories Mockup */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100">
              <div className="bg-white rounded-lg p-4 shadow-md mb-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded p-2 text-center">
                    <div className="text-[10px] text-gray-600">Proteínas</div>
                    <div className="text-sm font-bold text-[#0066FF]">
                      {isGainMass ? "165g" : "85g"}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-2 text-center">
                    <div className="text-[10px] text-gray-600">Carbos</div>
                    <div className="text-sm font-bold text-[#10B981]">
                      {isGainMass ? "285g" : "145g"}
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded p-2 text-center">
                    <div className="text-[10px] text-gray-600">Gorduras</div>
                    <div className="text-sm font-bold text-orange-500">
                      {isGainMass ? "78g" : "42g"}
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Macros Detalhados</h4>
              <p className="text-xs text-gray-600">Controle total da sua nutrição</p>
            </div>

            {/* Progress Mockup */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100">
              <div className="bg-white rounded-lg p-4 shadow-md mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-purple-500" />
                  <span className="text-xs font-semibold text-gray-700">Progresso Semanal</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  <div className="flex-1 bg-purple-200 rounded-t" style={{height: '60%'}}></div>
                  <div className="flex-1 bg-purple-300 rounded-t" style={{height: '75%'}}></div>
                  <div className="flex-1 bg-purple-400 rounded-t" style={{height: '85%'}}></div>
                  <div className="flex-1 bg-purple-500 rounded-t" style={{height: '100%'}}></div>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Evolução Clara</h4>
              <p className="text-xs text-gray-600">Acompanhe sua jornada</p>
            </div>
          </div>
        </div>

        {/* Benefits Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            O Levve resolve exatamente o que você precisa:
          </h2>

          <div className="space-y-6">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {config.benefit1.title}
                </h3>
                <p className="text-gray-600">
                  {config.benefit1.description}
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4 p-5 bg-green-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {config.benefit2.title}
                </h3>
                <p className="text-gray-600">
                  {config.benefit2.description}
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {config.benefit3.title}
                </h3>
                <p className="text-gray-600">
                  {config.benefit3.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Message */}
        <div className={`bg-gradient-to-r ${isGainMass ? 'from-purple-500 to-green-500' : 'from-[#0066FF] to-[#10B981]'} rounded-2xl p-8 sm:p-10 text-center mb-8`}>
          <p className="text-2xl sm:text-3xl text-white leading-relaxed mb-3 font-bold">
            {config.emotionalMessage}
          </p>
          <p className="text-lg sm:text-xl text-white/90">
            {config.emotionalSubtext}
          </p>
          {!isGainMass && (
            <p className="text-base text-white/80 mt-4">
              Sabemos que você já tentou antes. Sabemos que é difícil manter a constância. <br className="hidden sm:block" />
              Mas dessa vez, você terá o suporte que sempre precisou.
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center space-y-4">
          <Link 
            href="/planos"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#0066FF] to-[#10B981] hover:from-[#0052CC] hover:to-[#059669] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ver meu plano personalizado
          </Link>

          <div>
            <Link 
              href="/quiz/start"
              className="text-gray-600 hover:text-[#0066FF] font-medium text-sm underline transition-colors"
            >
              Refazer quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
