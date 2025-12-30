"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo?",
    options: [
      "Perder peso",
      "Ganhar massa muscular",
      "Melhorar condicionamento",
      "Manter a saúde",
    ],
  },
  {
    id: 2,
    question: "Qual é o seu nível de experiência com exercícios?",
    options: [
      "Iniciante (nunca treinei)",
      "Intermediário (treino há alguns meses)",
      "Avançado (treino há mais de 1 ano)",
      "Atleta (treino profissionalmente)",
    ],
  },
  {
    id: 3,
    question: "Quantos dias por semana você pode treinar?",
    options: [
      "1-2 dias",
      "3-4 dias",
      "5-6 dias",
      "Todos os dias",
    ],
  },
  {
    id: 4,
    question: "Quanto tempo você tem disponível por treino?",
    options: [
      "Menos de 30 minutos",
      "30-45 minutos",
      "45-60 minutos",
      "Mais de 60 minutos",
    ],
  },
  {
    id: 5,
    question: "Onde você prefere treinar?",
    options: [
      "Em casa",
      "Na academia",
      "Ao ar livre",
      "Qualquer lugar",
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelectOption = (option: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    // Salvar respostas (localStorage ou contexto)
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    // Redirecionar automaticamente para /resultado
    router.push('/resultado');
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentAnswer = answers[questions[currentQuestion].id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="p-8 shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectOption(option)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    currentAnswer === option
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-md"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {option}
                  </span>
                </button>
              ))}
            </div>

            {/* Action Button */}
            {isLastQuestion ? (
              <Button
                onClick={handleFinish}
                disabled={!currentAnswer}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Finalizar quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Avançar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
