"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { ArrowRight, ArrowLeft, User, Target, Wallet, Sparkles } from "lucide-react";
import { getSession } from "@/lib/auth";

type OnboardingData = {
  name: string;
  age: string;
  gender: string;
  goal: string;
  budget: string;
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    name: "",
    age: "",
    gender: "",
    goal: "",
    budget: "",
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Salvar dados do onboarding (localStorage para demo)
      if (typeof window !== "undefined") {
        localStorage.setItem("levve_onboarding", JSON.stringify(data));
        
        // Marcar onboarding como completo no perfil do usuário
        const session = getSession();
        if (session) {
          const updatedUser = {
            ...session.user,
            onboardingCompleted: true,
          };
          localStorage.setItem("levve_user", JSON.stringify(updatedUser));
        }
      }
      
      console.log('[ONBOARDING] Completed, redirecting to /app/dashboard');
      
      // Finalizar onboarding e redirecionar para /app/dashboard
      router.push("/app/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.name.trim().length > 0;
      case 2:
        return data.goal.length > 0;
      case 3:
        return data.budget.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header com Logo */}
        <div className="text-center mb-8">
          <BrandLogo size="md" showText={true} />
        </div>

        {/* Indicador de Progresso */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Etapa {step} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-[#0066FF]">
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#0066FF] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10">
          {/* ETAPA 1 - Perfil Básico */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <User className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Vamos nos conhecer!
                </h2>
              </div>

              <p className="text-gray-600 text-lg">
                Conte um pouco sobre você para personalizarmos sua experiência.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Como você se chama? *
                  </label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qual sua idade? (opcional)
                  </label>
                  <input
                    type="number"
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    placeholder="Ex: 28"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sexo (opcional)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Masculino", "Feminino", "Outro"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setData({ ...data, gender: option })}
                        className={`px-4 py-3 rounded-xl border-2 transition-all font-medium ${
                          data.gender === option
                            ? "border-[#0066FF] bg-blue-50 text-[#0066FF]"
                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 2 - Objetivo Principal */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Target className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Qual é seu objetivo?
                </h2>
              </div>

              <p className="text-gray-600 text-lg">
                Vamos focar no que realmente importa para você agora.
              </p>

              <div className="space-y-3">
                {[
                  {
                    value: "emagrecer",
                    label: "Emagrecer",
                    desc: "Perder peso de forma saudável",
                  },
                  {
                    value: "manter",
                    label: "Manter peso",
                    desc: "Manter o peso atual",
                  },
                  {
                    value: "habitos",
                    label: "Criar hábitos saudáveis",
                    desc: "Melhorar alimentação e rotina",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setData({ ...data, goal: option.value })}
                    className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                      data.goal === option.value
                        ? "border-[#0066FF] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-bold text-lg text-gray-900">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
                <p className="text-green-800 text-sm font-medium">
                  💪 Você está no caminho certo! Vamos te ajudar a alcançar esse objetivo.
                </p>
              </div>
            </div>
          )}

          {/* ETAPA 3 - Realidade Financeira */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Wallet className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Vamos falar de orçamento
                </h2>
              </div>

              <p className="text-gray-600 text-lg">
                Quanto você pode gastar por semana com alimentação?
              </p>

              <div className="space-y-3">
                {[
                  {
                    value: "muito-pouco",
                    label: "Muito pouco",
                    desc: "Até R$ 50 por semana",
                  },
                  {
                    value: "pouco",
                    label: "Pouco",
                    desc: "Entre R$ 50 e R$ 100 por semana",
                  },
                  {
                    value: "moderado",
                    label: "Moderado",
                    desc: "Acima de R$ 100 por semana",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setData({ ...data, budget: option.value })}
                    className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                      data.budget === option.value
                        ? "border-[#0066FF] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-bold text-lg text-gray-900">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                <p className="text-blue-800 text-sm font-medium">
                  💡 O Levve adapta o plano alimentar à sua realidade financeira. Você não precisa gastar muito para comer bem!
                </p>
              </div>
            </div>
          )}

          {/* ETAPA 4 - Acompanhamento por IA */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Sparkles className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Seu acompanhamento por IA
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  A partir de agora, você terá uma IA ao seu lado todos os dias para:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Acompanhar suas calorias
                      </h3>
                      <p className="text-sm text-gray-600">
                        Registre suas refeições e receba feedback instantâneo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Planejar suas refeições
                      </h3>
                      <p className="text-sm text-gray-600">
                        Sugestões personalizadas dentro do seu orçamento
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Manter sua constância
                      </h3>
                      <p className="text-sm text-gray-600">
                        Lembretes e motivação para você não desistir
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6 text-center">
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    🤝 Você não está sozinho
                  </p>
                  <p className="text-gray-700">
                    Estamos aqui para te apoiar em cada passo da sua jornada
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Botões de Navegação */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all ${
                canProceed()
                  ? "bg-[#0066FF] text-white hover:bg-blue-700 hover:shadow-lg hover:scale-105"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {step === totalSteps ? "Finalizar e entrar no app" : "Continuar"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
