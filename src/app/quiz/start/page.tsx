"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function QuizStartPage() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    // Salvar objetivo no localStorage
    localStorage.setItem("levve_goal", goal);
  };

  const handleContinue = () => {
    if (!selectedGoal) {
      alert("Por favor, selecione seu objetivo antes de continuar.");
      return;
    }
    router.push("/quiz");
  };

  const goals = [
    {
      id: "emagrecer",
      title: "Emagrecer",
      description: "Perder peso de forma saudável e sustentável",
      emoji: "🎯",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "manter",
      title: "Manter peso",
      description: "Manter o peso atual com hábitos saudáveis",
      emoji: "⚖️",
      color: "from-green-500 to-green-600"
    },
    {
      id: "ganhar_massa",
      title: "Ganhar massa muscular",
      description: "Aumentar músculos, força e melhorar o corpo",
      emoji: "💪",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Bem-vindo ao Levve
        </h1>
        <p className="text-lg text-gray-600">
          Descubra como transformar sua alimentação com inteligência artificial
        </p>
      </div>

      {/* Seleção de Objetivo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Qual é o seu objetivo?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Escolha seu objetivo para personalizarmos seu plano
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleGoalSelect(goal.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  selectedGoal === goal.id
                    ? "border-[#0066FF] bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-[#0066FF] hover:bg-gray-50"
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-3">{goal.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {goal.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Cards - Estilo MyFitnessPal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 - Vitórias */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop"
                alt="Pessoa feliz treinando"
                fill
                className="object-cover"
              />
              {/* Overlay discreto com gráfico */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 inline-flex items-center gap-2">
                  <div className="text-xs font-semibold text-green-600">↗ +12%</div>
                  <div className="text-xs text-gray-600">Evolução</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quer ver suas vitórias?
              </h3>
              <p className="text-sm text-gray-600">
                Acompanhe sua evolução todos os dias.
              </p>
            </div>
          </div>

          {/* Card 2 - Impacto do que você come */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Smartphone mostrando app"
                fill
                className="object-cover"
              />
              {/* Overlay discreto com macros */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="font-semibold text-gray-900">485 cal</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-gray-900">32g prot</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Descubra o impacto do que você come
              </h3>
              <p className="text-sm text-gray-600">
                Calorias, proteínas, carbs e gorduras em segundos.
              </p>
            </div>
          </div>

          {/* Card 3 - Hábito certo */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
                alt="Prato saudável"
                fill
                className="object-cover"
              />
              {/* Overlay discreto com macros */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-gray-900">Refeição balanceada</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Crie o hábito certo
              </h3>
              <p className="text-sm text-gray-600">
                Coma com atenção e constância.
              </p>
            </div>
          </div>
        </div>

        {/* Botão CONTINUAR */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedGoal}
            className={`inline-flex items-center gap-3 px-12 py-4 text-white text-lg font-bold rounded-xl shadow-lg transition-all duration-300 ${
              selectedGoal
                ? "bg-[#0066FF] hover:bg-[#0052CC] hover:shadow-xl hover:scale-105"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            CONTINUAR
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Apenas 6 perguntas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Resultado imediato</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <p className="text-gray-700 font-medium text-lg">
            Junte-se à comunidade que está transformando a forma de emagrecer no Brasil.
          </p>
        </div>
      </div>
    </div>
  );
}
