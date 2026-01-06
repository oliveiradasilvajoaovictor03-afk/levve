"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Target } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [goal, setGoal] = useState<string>("emagrecer");

  useEffect(() => {
    // Ler objetivo do localStorage
    const savedGoal = localStorage.getItem("levve_goal");
    if (savedGoal) {
      setGoal(savedGoal);
    }
  }, []);

  // Perguntas adaptadas ao objetivo
  const getQuestions = () => {
    const isGainMass = goal === "ganhar_massa";
    
    return [
      {
        id: 1,
        question: isGainMass 
          ? "O que você mais quer alcançar com o ganho de massa?"
          : "O que você mais quer alcançar agora?",
        subtitle: "Seja honesto(a), estamos aqui para te ajudar",
        options: isGainMass ? [
          { value: "hipertrofia", label: "Ganhar massa muscular de qualidade", emoji: "💪" },
          { value: "forca", label: "Aumentar força e performance", emoji: "🏋️" },
          { value: "saude", label: "Melhorar saúde e composição corporal", emoji: "❤️" },
        ] : [
          { value: "emagrecer", label: "Perder peso e me sentir melhor", emoji: "🎯" },
          { value: "habitos", label: "Criar hábitos saudáveis que durem", emoji: "🥗" },
          { value: "saude", label: "Melhorar minha saúde e disposição", emoji: "❤️" },
        ],
      },
      {
        id: 2,
        question: "Quanto você consegue investir por semana em alimentação?",
        subtitle: "Queremos criar um plano que caiba no seu bolso",
        options: [
          { value: "ate50", label: "Até R$ 50 por semana", emoji: "💰" },
          { value: "50a100", label: "Entre R$ 50 e R$ 100", emoji: "💵" },
          { value: "100a150", label: "Entre R$ 100 e R$ 150", emoji: "💸" },
          { value: "mais150", label: "Mais de R$ 150", emoji: "🤑" },
        ],
      },
      {
        id: 3,
        question: "Qual é a sua maior dificuldade hoje?",
        subtitle: "Entender sua dor é o primeiro passo para resolver",
        options: [
          { value: "constancia", label: "Não consigo manter a constância", emoji: "😔" },
          { value: "planejamento", label: "Não sei planejar minhas refeições", emoji: "📝" },
          { value: "tempo", label: "Não tenho tempo para cozinhar", emoji: "⏰" },
          { value: "motivacao", label: "Perco a motivação rapidamente", emoji: "💔" },
        ],
      },
      {
        id: 4,
        question: isGainMass
          ? "Quantas vezes você já tentou ganhar massa?"
          : "Quantas vezes você já tentou emagrecer?",
        subtitle: "Não tem problema ter tentado antes - dessa vez será diferente",
        options: [
          { value: "nunca", label: "Esta é minha primeira vez", emoji: "🆕" },
          { value: "1vez", label: "Já tentei uma vez", emoji: "1️⃣" },
          { value: "varias", label: "Já tentei várias vezes", emoji: "🔄" },
          { value: "sempre", label: "Sinto que estou sempre tentando", emoji: "😞" },
        ],
      },
      {
        id: 5,
        question: "Por quanto tempo você consegue manter uma rotina?",
        subtitle: "Seja sincero(a) - vamos trabalhar com sua realidade",
        options: [
          { value: "dias", label: "Alguns dias, depois desanimo", emoji: "📆" },
          { value: "semanas", label: "Algumas semanas, mas é difícil", emoji: "📊" },
          { value: "meses", label: "Consigo manter por meses", emoji: "📈" },
          { value: "longo", label: "Sou persistente no longo prazo", emoji: "🏆" },
        ],
      },
      {
        id: 6,
        question: "Como você se sente em relação à sua disciplina?",
        subtitle: "Não julgamos - queremos te apoiar do jeito certo",
        options: [
          { value: "baixo", label: "Preciso de muito apoio e motivação", emoji: "🆘" },
          { value: "medio", label: "Consigo com orientação clara", emoji: "👍" },
          { value: "alto", label: "Sou disciplinado(a) quando tenho um plano", emoji: "💪" },
          { value: "muito-alto", label: "Sou muito disciplinado(a) e focado(a)", emoji: "🔥" },
        ],
      },
    ];
  };

  const questions = getQuestions();

  const handleSelectOption = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    // Auto-advance após seleção
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Salvar respostas e redirecionar
        localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
        router.push("/resultado");
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[questions[currentQuestion].id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Definir cor e texto da pill baseado no objetivo
  const goalConfig = goal === "ganhar_massa" 
    ? { color: "bg-green-100 text-[#10B981] border-green-200", text: "Objetivo: Ganhar massa" }
    : { color: "bg-blue-100 text-[#0066FF] border-blue-200", text: "Objetivo: Emagrecer" };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section - FOTO REAL */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=300&fit=crop" 
            alt="Refeição saudável" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-[#0066FF]/90 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Seu plano personalizado está quase pronto!
              </h2>
              <p className="text-white/90">
                Responda com sinceridade para receber o melhor plano para você
              </p>
            </div>
          </div>
        </div>

        {/* Pill com objetivo selecionado */}
        <div className="flex justify-center mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${goalConfig.color}`}>
            <Target className="w-4 h-4" />
            {goalConfig.text}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-bold text-[#0066FF]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0066FF] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              {questions[currentQuestion].question}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {questions[currentQuestion].subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option.value)}
                className={`w-full p-5 sm:p-6 text-left rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] ${
                  currentAnswer === option.value
                    ? "border-[#0066FF] bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-[#0066FF] hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl">{option.emoji}</span>
                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="mt-8 flex items-center gap-2 text-gray-600 hover:text-[#0066FF] font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
          )}
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Suas respostas nos ajudam a criar o plano perfeito para você
        </p>
      </div>
    </div>
  );
}
