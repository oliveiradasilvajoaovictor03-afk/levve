"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Sparkles, Camera, Barcode, TrendingDown, DollarSign, Heart, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function ResultadoQuizPage() {
  const router = useRouter();
  const [perfil, setPerfil] = useState<any>(null);

  useEffect(() => {
    // Carregar respostas do quiz
    const savedAnswers = localStorage.getItem("quizAnswers");
    const savedGoal = localStorage.getItem("levve_goal");

    if (!savedAnswers) {
      router.push("/quiz/start");
      return;
    }

    // Processar respostas e criar perfil
    const answers = JSON.parse(savedAnswers);
    const isGainMass = savedGoal === "ganhar_massa";

    setPerfil({
      objetivo: isGainMass ? "Ganhar massa muscular" : "Emagrecimento saudável",
      orcamento: getOrcamentoLabel(answers[2]),
      dificuldade: getDificuldadeLabel(answers[3]),
      tentativas: getTentativasLabel(answers[4]),
      disciplina: getDisciplinaLabel(answers[6]),
    });
  }, [router]);

  const getOrcamentoLabel = (value: string) => {
    const labels: Record<string, string> = {
      ate50: "Até R$ 50/semana",
      "50a100": "R$ 50-100/semana",
      "100a150": "R$ 100-150/semana",
      mais150: "Mais de R$ 150/semana",
    };
    return labels[value] || "Não informado";
  };

  const getDificuldadeLabel = (value: string) => {
    const labels: Record<string, string> = {
      constancia: "Manter constância",
      planejamento: "Planejar refeições",
      tempo: "Falta de tempo",
      motivacao: "Motivação",
    };
    return labels[value] || "Não informado";
  };

  const getTentativasLabel = (value: string) => {
    const labels: Record<string, string> = {
      nunca: "Primeira tentativa",
      "1vez": "Segunda tentativa",
      varias: "Várias tentativas",
      sempre: "Muitas tentativas",
    };
    return labels[value] || "Não informado";
  };

  const getDisciplinaLabel = (value: string) => {
    const labels: Record<string, string> = {
      baixo: "Precisa de apoio constante",
      medio: "Disciplina moderada",
      alto: "Disciplinado com plano",
      "muito-alto": "Muito disciplinado",
    };
    return labels[value] || "Não informado";
  };

  if (!perfil) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Analisando suas respostas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <BrandLogo size="md" showText={true} href="/" />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Ícone de Sucesso */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Seu plano está pronto! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            Analisamos suas respostas e criamos um plano personalizado para você
          </p>
        </div>

        {/* Perfil Resumido */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seu Perfil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Objetivo</p>
              <p className="text-lg font-bold text-gray-900">{perfil.objetivo}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Orçamento</p>
              <p className="text-lg font-bold text-gray-900">{perfil.orcamento}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Maior dificuldade</p>
              <p className="text-lg font-bold text-gray-900">{perfil.dificuldade}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Nível de disciplina</p>
              <p className="text-lg font-bold text-gray-900">{perfil.disciplina}</p>
            </div>
          </div>
        </div>

        {/* Como o Levve vai ajudar */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#0066FF] rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Como o Levve vai te ajudar</h2>
          </div>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0066FF] rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Planejamento acessível</h3>
                <p className="text-gray-700">
                  Planos alimentares com comida de verdade que cabe no seu bolso. 
                  Arroz, feijão, ovo, frango - nada de dieta de revista.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Traqueador inteligente</h3>
                <p className="text-gray-700">
                  Acompanhe suas calorias facilmente. Registre manualmente, 
                  tire foto do prato ou escaneie código de barras.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Foto do prato</h3>
                <p className="text-gray-700">
                  Tire uma foto da sua refeição e receba estimativas de calorias 
                  e macronutrientes instantaneamente.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Barcode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Scanner de código de barras</h3>
                <p className="text-gray-700">
                  Escaneie produtos industrializados e veja informações 
                  nutricionais completas na hora.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">IA diária personalizada</h3>
                <p className="text-gray-700">
                  Acompanhamento diário por inteligência artificial que aprende 
                  com você e te ajuda a manter a constância.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Começar agora
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-sm text-gray-500">
            Sem cartão • Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  );
}
