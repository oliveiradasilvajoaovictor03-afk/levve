"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  Utensils, 
  Package, 
  Activity, 
  TrendingUp, 
  Sparkles,
  Plus,
  DollarSign,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  Pill,
  Camera,
  Barcode,
  Settings,
  Loader2,
  ExternalLink
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import QuickNav from "@/components/QuickNav";
import { analyzeMealPhoto, type MealAnalysisResult } from "@/lib/services/meal-analyzer";
import { buscarProdutoPorCodigo, validateBarcode, type ProductInfo } from "@/lib/services/barcode-scanner";

type Tab = "visao-geral" | "alimentacao" | "marmitas" | "calorias" | "progresso" | "ia" | "loja" | "vitaminas" | "foto-prato" | "codigo-barras" | "configuracoes";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("visao-geral");

  const tabs = [
    { id: "visao-geral" as Tab, label: "Visão Geral", icon: LayoutDashboard },
    { id: "alimentacao" as Tab, label: "Alimentação", icon: Utensils },
    { id: "marmitas" as Tab, label: "Marmitas", icon: Package },
    { id: "calorias" as Tab, label: "Calorias", icon: Activity },
    { id: "foto-prato" as Tab, label: "Foto do Prato", icon: Camera },
    { id: "codigo-barras" as Tab, label: "Código de Barras", icon: Barcode },
    { id: "vitaminas" as Tab, label: "Vitaminas", icon: Pill },
    { id: "loja" as Tab, label: "Loja", icon: ShoppingBag },
    { id: "progresso" as Tab, label: "Progresso", icon: TrendingUp },
    { id: "ia" as Tab, label: "IA Nutricional", icon: Sparkles },
    { id: "configuracoes" as Tab, label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Profissional */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <BrandLogo size="md" showText={true} href="/" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:inline">
                Plano: <strong className="text-[#0066FF]">Mensal</strong>
              </span>
              <div className="w-10 h-10 bg-[#0066FF] rounded-full flex items-center justify-center text-white font-bold">
                U
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Bem-vindo ao Levve! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Seu plano personalizado está pronto. Vamos começar!
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[#0066FF] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          {activeTab === "visao-geral" && <VisaoGeralTab />}
          {activeTab === "alimentacao" && <AlimentacaoTab />}
          {activeTab === "marmitas" && <MarmitasTab />}
          {activeTab === "calorias" && <CaloriasTab />}
          {activeTab === "foto-prato" && <FotoPratoTab />}
          {activeTab === "codigo-barras" && <CodigoBarrasTab />}
          {activeTab === "vitaminas" && <VitaminasTab />}
          {activeTab === "loja" && <LojaTab />}
          {activeTab === "progresso" && <ProgressoTab />}
          {activeTab === "ia" && <IATab />}
          {activeTab === "configuracoes" && <ConfiguracoesTab />}
        </div>
      </div>

      {/* QuickNav - Atalhos Fixos */}
      <QuickNav />
    </div>
  );
}

// Componentes das tabs (mantidos do código original)

function VisaoGeralTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Visão Geral</h2>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-6 h-6 text-[#0066FF]" />
            <span className="text-sm font-medium text-gray-600">Hoje</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">1.450</p>
          <p className="text-sm text-gray-600">de 1.800 calorias</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            <span className="text-sm font-medium text-gray-600">Orçamento</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">R$ 280</p>
          <p className="text-sm text-gray-600">de R$ 400/mês</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-gray-600">Marmitas</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">preparadas esta semana</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            <span className="text-sm font-medium text-gray-600">Sequência</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">7 dias</p>
          <p className="text-sm text-gray-600">mantendo o plano</p>
        </div>
      </div>

      {/* Mensagem da IA */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#0066FF] rounded-full">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Mensagem do dia</h3>
            <p className="text-gray-700">
              Você está indo muito bem! Hoje você já consumiu 80% das suas calorias. 
              Lembre-se de incluir proteínas no jantar. Continue assim! 💪
            </p>
          </div>
        </div>
      </div>

      {/* Próximas Ações */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Próximas ações</h3>
        <div className="space-y-3">
          <a
            href="/alimentos"
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-[#0066FF]" />
            <div className="flex-1">
              <p className="font-bold text-gray-900">Registrar alimento</p>
              <p className="text-xs text-gray-600">Acesse a loja nutricional completa</p>
            </div>
            <Plus className="w-5 h-5 text-[#0066FF]" />
          </a>
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">Registrar jantar de hoje</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <Calendar className="w-5 h-5 text-[#0066FF]" />
            <span className="text-gray-700">Preparar marmitas para amanhã</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlimentacaoTab() {
  const planoSemanal = [
    {
      dia: "Segunda-feira",
      refeicoes: [
        { nome: "Café da manhã", alimentos: "2 ovos mexidos + 1 fatia de pão integral + café" },
        { nome: "Almoço", alimentos: "Arroz (100g) + Feijão (80g) + Frango grelhado (120g) + Salada" },
        { nome: "Jantar", alimentos: "Omelete (2 ovos) + Legumes refogados" },
      ],
    },
    {
      dia: "Terça-feira",
      refeicoes: [
        { nome: "Café da manhã", alimentos: "Tapioca com queijo + café" },
        { nome: "Almoço", alimentos: "Arroz (100g) + Feijão (80g) + Carne moída (100g) + Cenoura" },
        { nome: "Jantar", alimentos: "Sopa de legumes com frango desfiado" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Planejamento Alimentar</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all">
          <Plus className="w-5 h-5" />
          Gerar novo plano
        </button>
      </div>

      {/* Lista de Compras */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Package className="w-5 h-5 text-green-600" />
          Lista de Compras Mensal
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Arroz (5kg) - R$ 25,00",
            "Feijão (2kg) - R$ 14,00",
            "Frango (3kg) - R$ 36,00",
            "Ovos (30 unidades) - R$ 18,00",
            "Legumes variados - R$ 30,00",
            "Pão integral - R$ 8,00",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-green-200">
          <p className="text-lg font-bold text-gray-900">
            Total estimado: R$ 131,00
          </p>
          <p className="text-sm text-gray-600">
            Dentro do seu orçamento mensal de R$ 400
          </p>
        </div>
      </div>

      {/* Plano Semanal */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Plano Semanal</h3>
        <div className="space-y-4">
          {planoSemanal.map((dia, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h4 className="font-bold text-gray-900 mb-3">{dia.dia}</h4>
              <div className="space-y-2">
                {dia.refeicoes.map((refeicao, j) => (
                  <div key={j} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">{refeicao.nome}</p>
                    <p className="text-sm text-gray-600 mt-1">{refeicao.alimentos}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarmitasTab() {
  const marmitas = [
    {
      nome: "Marmita 1 - Frango com Arroz",
      ingredientes: [
        { nome: "Arroz branco", quantidade: "150g", calorias: 195 },
        { nome: "Feijão carioca", quantidade: "100g", calorias: 77 },
        { nome: "Frango grelhado", quantidade: "120g", calorias: 198 },
        { nome: "Brócolis refogado", quantidade: "80g", calorias: 27 },
      ],
      totalCalorias: 497,
      proteinas: 42,
      custo: 8.50,
    },
    {
      nome: "Marmita 2 - Carne Moída",
      ingredientes: [
        { nome: "Arroz branco", quantidade: "150g", calorias: 195 },
        { nome: "Feijão carioca", quantidade: "100g", calorias: 77 },
        { nome: "Carne moída", quantidade: "100g", calorias: 250 },
        { nome: "Cenoura cozida", quantidade: "80g", calorias: 33 },
      ],
      totalCalorias: 555,
      proteinas: 38,
      custo: 9.20,
    },
    {
      nome: "Marmita 3 - Ovo com Legumes",
      ingredientes: [
        { nome: "Arroz branco", quantidade: "150g", calorias: 195 },
        { nome: "Feijão carioca", quantidade: "100g", calorias: 77 },
        { nome: "Ovos cozidos (2 unidades)", quantidade: "100g", calorias: 155 },
        { nome: "Mix de legumes", quantidade: "100g", calorias: 40 },
      ],
      totalCalorias: 467,
      proteinas: 26,
      custo: 6.80,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sistema de Marmitas</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all">
          <Plus className="w-5 h-5" />
          Nova marmita
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <p className="text-gray-700">
          <strong>💡 Dica:</strong> Prepare 12 marmitas por semana (almoço e jantar) 
          para economizar tempo e dinheiro. Custo médio: R$ 8,17 por marmita.
        </p>
      </div>

      {/* Cards de Marmitas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {marmitas.map((marmita, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#0066FF] transition-all">
            <h3 className="font-bold text-gray-900 text-lg mb-4">{marmita.nome}</h3>
            
            <div className="space-y-2 mb-4">
              {marmita.ingredientes.map((ing, j) => (
                <div key={j} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{ing.nome}</p>
                    <p className="text-sm text-gray-600">{ing.quantidade}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {ing.calorias} kcal
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Total de Calorias:</span>
                <span className="text-xl font-bold text-[#0066FF]">
                  {marmita.totalCalorias} kcal
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Proteínas:</span>
                <span className="text-lg font-bold text-green-600">
                  {marmita.proteinas}g
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Custo estimado:</span>
                <span className="text-lg font-bold text-orange-600">
                  R$ {marmita.custo.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaloriasTab() {
  const metaDiaria = {
    calorias: 1800,
    proteinas: 120,
    carboidratos: 200,
    gorduras: 60,
  };

  const consumido = {
    calorias: 1450,
    proteinas: 95,
    carboidratos: 165,
    gorduras: 48,
  };

  const calcularPercentual = (consumido: number, meta: number) => {
    return Math.min((consumido / meta) * 100, 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Tracker de Calorias</h2>
        <a
          href="/alimentos"
          className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all"
        >
          <Plus className="w-5 h-5" />
          Registrar refeição
        </a>
      </div>

      {/* Resumo do Dia */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-4">Resumo de Hoje</h3>
        
        {/* Calorias */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-700">Calorias</span>
            <span className="text-lg font-bold text-gray-900">
              {consumido.calorias} / {metaDiaria.calorias} kcal
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-[#0066FF] h-4 rounded-full transition-all"
              style={{ width: `${calcularPercentual(consumido.calorias, metaDiaria.calorias)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Faltam {metaDiaria.calorias - consumido.calorias} kcal para sua meta
          </p>
        </div>

        {/* Macronutrientes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Proteínas */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Proteínas</span>
              <span className="text-sm font-bold text-gray-900">
                {consumido.proteinas}g / {metaDiaria.proteinas}g
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all"
                style={{ width: `${calcularPercentual(consumido.proteinas, metaDiaria.proteinas)}%` }}
              />
            </div>
          </div>

          {/* Carboidratos */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Carboidratos</span>
              <span className="text-sm font-bold text-gray-900">
                {consumido.carboidratos}g / {metaDiaria.carboidratos}g
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all"
                style={{ width: `${calcularPercentual(consumido.carboidratos, metaDiaria.carboidratos)}%` }}
              />
            </div>
          </div>

          {/* Gorduras */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Gorduras</span>
              <span className="text-sm font-bold text-gray-900">
                {consumido.gorduras}g / {metaDiaria.gorduras}g
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full transition-all"
                style={{ width: `${calcularPercentual(consumido.gorduras, metaDiaria.gorduras)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Refeições Registradas */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Refeições de Hoje</h3>
        <div className="space-y-3">
          {[
            { nome: "Café da manhã", calorias: 350, horario: "08:00" },
            { nome: "Almoço", calorias: 650, horario: "12:30" },
            { nome: "Lanche", calorias: 150, horario: "16:00" },
            { nome: "Jantar", calorias: 300, horario: "19:00" },
          ].map((refeicao, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#0066FF] transition-all">
              <div>
                <p className="font-medium text-gray-900">{refeicao.nome}</p>
                <p className="text-sm text-gray-600">{refeicao.horario}</p>
              </div>
              <span className="text-lg font-bold text-[#0066FF]">
                {refeicao.calorias} kcal
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FotoPratoTab() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
  const [analisando, setAnalisando] = useState(false);
  const [resultado, setResultado] = useState<MealAnalysisResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemSelecionada(reader.result as string);
        setResultado(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analisarRefeicao = async () => {
    if (!imagemSelecionada) return;
    
    setAnalisando(true);
    
    try {
      const resultado = await analyzeMealPhoto(imagemSelecionada);
      setResultado(resultado);
    } catch (error) {
      console.error("Erro ao analisar refeição:", error);
    } finally {
      setAnalisando(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Foto do Prato</h2>
        <p className="text-gray-600">
          Tire uma foto da sua refeição e receba uma estimativa nutricional instantânea.
        </p>
      </div>

      {/* Upload de Imagem */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-all">
        {!imagemSelecionada ? (
          <div>
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Adicionar foto da refeição</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tire uma foto ou selecione uma imagem da galeria
            </p>
            <label className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all cursor-pointer">
              <Camera className="w-5 h-5" />
              Selecionar foto
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <div>
            <img
              src={imagemSelecionada}
              alt="Refeição"
              className="max-w-full max-h-96 mx-auto rounded-xl mb-4"
            />
            <div className="flex gap-3 justify-center">
              <button
                onClick={analisarRefeicao}
                disabled={analisando}
                className="flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
              >
                {analisando ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Analisar refeição
                  </>
                )}
              </button>
              <label className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all cursor-pointer">
                <Camera className="w-5 h-5" />
                Trocar foto
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Resultado da Análise */}
      {resultado && (
        <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-gray-900">Análise Concluída</h3>
            <span className="ml-auto text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              Estimativa (MVP)
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Calorias</p>
              <p className="text-2xl font-bold text-[#0066FF]">{resultado.calorias}</p>
              <p className="text-xs text-gray-500">kcal</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Proteínas</p>
              <p className="text-2xl font-bold text-green-600">{resultado.proteinas}g</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Carboidratos</p>
              <p className="text-2xl font-bold text-orange-600">{resultado.carboidratos}g</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Gorduras</p>
              <p className="text-2xl font-bold text-purple-600">{resultado.gorduras}g</p>
            </div>
          </div>

          {resultado.alimentos && resultado.alimentos.length > 0 && (
            <div className="bg-white rounded-xl p-4 mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Alimentos detectados:</p>
              <div className="flex flex-wrap gap-2">
                {resultado.alimentos.map((alimento, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {alimento}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl mb-4">
            <p className="text-sm text-gray-700">
              <strong>💡 Nota:</strong> Esta é uma estimativa baseada em análise visual. 
              Para valores precisos, registre os alimentos manualmente no tracker de calorias.
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all">
            <Plus className="w-5 h-5" />
            Adicionar ao diário
          </button>
        </div>
      )}

      {/* Informações */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">Como funciona?</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">1.</span>
            <p>Tire uma foto clara do seu prato</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">2.</span>
            <p>Nossa IA analisa os alimentos visíveis</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">3.</span>
            <p>Receba estimativas de calorias e macronutrientes</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">4.</span>
            <p>Adicione ao seu diário alimentar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodigoBarrasTab() {
  const [codigo, setCodigo] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [produto, setProduto] = useState<ProductInfo | null>(null);
  const [erro, setErro] = useState("");

  const buscarProduto = async () => {
    if (!codigo) return;
    
    setErro("");
    
    if (!validateBarcode(codigo)) {
      setErro("Código de barras inválido. Digite 8, 12, 13 ou 14 dígitos.");
      return;
    }
    
    setBuscando(true);
    
    try {
      const resultado = await buscarProdutoPorCodigo(codigo);
      setProduto(resultado);
    } catch (error) {
      setErro("Erro ao buscar produto. Tente novamente.");
    } finally {
      setBuscando(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Scanner de Código de Barras</h2>
        <p className="text-gray-600">
          Digite o código de barras do produto para ver informações nutricionais.
        </p>
      </div>

      {/* Input de Código */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Barcode className="w-8 h-8 text-[#0066FF]" />
          <h3 className="font-bold text-gray-900">Digite o código de barras</h3>
        </div>
        
        <div className="flex gap-3">
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ""))}
            placeholder="Ex: 7891234567890"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            maxLength={14}
          />
          <button
            onClick={buscarProduto}
            disabled={buscando || !codigo}
            className="flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {buscando ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Buscando...
              </>
            ) : (
              "Buscar"
            )}
          </button>
        </div>
        
        {erro && (
          <p className="text-sm text-red-600 mt-2">{erro}</p>
        )}
      </div>

      {/* Resultado */}
      {produto && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-gray-900">Produto Encontrado</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 mb-4">
            <h4 className="text-xl font-bold text-gray-900 mb-1">{produto.nome}</h4>
            <p className="text-gray-600 mb-4">{produto.marca}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Porção</p>
                <p className="text-lg font-bold text-gray-900">{produto.porcao}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Calorias</p>
                <p className="text-lg font-bold text-[#0066FF]">{produto.calorias} kcal</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Proteínas</p>
                <p className="text-lg font-bold text-green-600">{produto.proteinas}g</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Carboidratos</p>
                <p className="text-lg font-bold text-orange-600">{produto.carboidratos}g</p>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all">
            <Plus className="w-5 h-5" />
            Adicionar ao diário
          </button>
        </div>
      )}

      {/* Informações */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">Como usar?</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">1.</span>
            <p>Localize o código de barras na embalagem do produto</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">2.</span>
            <p>Digite os números do código no campo acima</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">3.</span>
            <p>Clique em "Buscar" para ver as informações nutricionais</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">4.</span>
            <p>Adicione ao seu diário alimentar</p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-xs text-gray-600">
            <strong>Em breve:</strong> Scanner automático com câmera para leitura instantânea de códigos de barras.
          </p>
        </div>
      </div>
    </div>
  );
}

function VitaminasTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Organização de Vitaminas</h2>
          <p className="text-gray-600">
            Organize sua rotina de suplementos e vitaminas.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all">
          <Plus className="w-5 h-5" />
          Adicionar
        </button>
      </div>

      {/* Lista de Vitaminas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { nome: "Vitamina D", objetivo: "Saúde óssea e imunidade", horario: "Manhã" },
          { nome: "Ômega 3", objetivo: "Saúde cardiovascular", horario: "Almoço" },
          { nome: "Multivitamínico", objetivo: "Nutrição geral", horario: "Café da manhã" },
        ].map((vitamina, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <Pill className="w-8 h-8 text-blue-600" />
              <span className="text-xs bg-blue-200 text-blue-700 px-3 py-1 rounded-full font-medium">
                {vitamina.horario}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{vitamina.nome}</h3>
            <p className="text-sm text-gray-700">{vitamina.objetivo}</p>
          </div>
        ))}
      </div>

      {/* Informações */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">💡 Dicas importantes</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Consulte um médico antes de iniciar qualquer suplementação</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Respeite os horários recomendados para melhor absorção</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Mantenha uma alimentação equilibrada - suplementos são complementos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LojaTab() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "suplementos", nome: "Suplementos" },
    { id: "acessorios", nome: "Acessórios" },
    { id: "alimentos", nome: "Alimentos" },
  ];

  const produtos = [
    {
      nome: "Whey Protein Concentrado",
      categoria: "suplementos",
      beneficio: "Ajuda no ganho de massa muscular e recuperação",
      porQueVoce: "Ideal para bater sua meta de proteínas diárias de forma prática",
      preco: "R$ 89,90",
      imagem: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      nome: "Marmita Térmica 3 Divisórias",
      categoria: "acessorios",
      beneficio: "Mantenha suas refeições organizadas e na temperatura ideal",
      porQueVoce: "Perfeito para quem prepara marmitas semanais e economiza tempo",
      preco: "R$ 45,00",
      imagem: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      nome: "Balança Digital de Cozinha",
      categoria: "acessorios",
      beneficio: "Controle preciso das porções e calorias",
      porQueVoce: "Essencial para quem quer precisão no controle de macros",
      preco: "R$ 35,00",
      imagem: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      nome: "Pasta de Amendoim Integral",
      categoria: "alimentos",
      beneficio: "Fonte de proteínas e gorduras boas",
      porQueVoce: "Ótimo para lanches rápidos e aumentar calorias saudáveis",
      preco: "R$ 18,90",
      imagem: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      nome: "Multivitamínico Completo",
      categoria: "suplementos",
      beneficio: "Suporte nutricional completo para sua rotina",
      porQueVoce: "Garante que você não tenha deficiências nutricionais",
      preco: "R$ 42,00",
      imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      nome: "Garrafa Térmica 1L",
      categoria: "acessorios",
      beneficio: "Mantenha-se hidratado durante todo o dia",
      porQueVoce: "Hidratação adequada é essencial para o emagrecimento",
      preco: "R$ 55,00",
      imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      link: "#",
    },
  ];

  const produtosFiltrados = categoriaAtiva === "todos" 
    ? produtos 
    : produtos.filter(p => p.categoria === categoriaAtiva);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loja Levve</h2>
        <p className="text-gray-600">
          Produtos recomendados para ajudar você a alcançar seus objetivos.
        </p>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">Recomendações para sua meta</h3>
        <p className="text-blue-100">
          Produtos selecionados especialmente para quem busca emagrecimento saudável e acessível.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaAtiva(cat.id)}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              categoriaAtiva === cat.id
                ? "bg-[#0066FF] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtosFiltrados.map((produto, i) => (
          <div
            key={i}
            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#0066FF] transition-all"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={produto.imagem} 
                alt={produto.nome}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">{produto.nome}</h3>
              <p className="text-sm text-gray-600 mb-3">{produto.beneficio}</p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs font-medium text-gray-700">
                  <strong>Por que você precisa:</strong> {produto.porQueVoce}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#0066FF]">{produto.preco}</span>
                <a
                  href={produto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all"
                >
                  Ver produto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Informações */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">💡 Sobre a Loja</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Produtos selecionados por especialistas em nutrição</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Preços acessíveis e ótimo custo-benefício</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Checkout externo seguro (compatível com App Store e Google Play)</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <p>Suporte ao cliente disponível</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressoTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Seu Progresso</h2>

      {/* Estatísticas Semanais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Dias Consistentes</p>
          <p className="text-4xl font-bold text-gray-900">7/7</p>
          <p className="text-sm text-gray-600 mt-1">Esta semana</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Média de Calorias</p>
          <p className="text-4xl font-bold text-gray-900">1.720</p>
          <p className="text-sm text-gray-600 mt-1">kcal/dia</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Média de Proteínas</p>
          <p className="text-4xl font-bold text-gray-900">108g</p>
          <p className="text-sm text-gray-600 mt-1">por dia</p>
        </div>
      </div>

      {/* Evolução Semanal */}
      <div className="border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-4">Evolução Semanal</h3>
        <div className="space-y-3">
          {[
            { dia: "Segunda", calorias: 1750, proteinas: 105, status: "ok" },
            { dia: "Terça", calorias: 1820, proteinas: 112, status: "ok" },
            { dia: "Quarta", calorias: 1680, proteinas: 98, status: "ok" },
            { dia: "Quinta", calorias: 1900, proteinas: 120, status: "atencao" },
            { dia: "Sexta", calorias: 1700, proteinas: 110, status: "ok" },
            { dia: "Sábado", calorias: 1650, proteinas: 102, status: "ok" },
            { dia: "Domingo", calorias: 1740, proteinas: 108, status: "ok" },
          ].map((dia, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                {dia.status === "ok" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                )}
                <span className="font-medium text-gray-900">{dia.dia}</span>
              </div>
              <div className="flex gap-6 text-sm">
                <span className="text-gray-700">
                  <strong>{dia.calorias}</strong> kcal
                </span>
                <span className="text-gray-700">
                  <strong>{dia.proteinas}g</strong> proteínas
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mensagem Motivacional */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-2">🎉 Parabéns!</h3>
        <p className="text-gray-700">
          Você completou 7 dias seguidos mantendo o plano! Continue assim e os resultados virão. 
          Lembre-se: constância é mais importante que perfeição.
        </p>
      </div>
    </div>
  );
}

function IATab() {
  const mensagens = [
    {
      tipo: "ia",
      texto: "Bom dia! Como foi seu café da manhã hoje?",
      horario: "08:15",
    },
    {
      tipo: "usuario",
      texto: "Comi 2 ovos mexidos com pão integral",
      horario: "08:20",
    },
    {
      tipo: "ia",
      texto: "Ótima escolha! Você começou o dia com uma boa dose de proteínas. Lembre-se de beber bastante água ao longo do dia. 💧",
      horario: "08:21",
    },
    {
      tipo: "ia",
      texto: "Hoje você mandou bem nas proteínas! Amanhã vamos ajustar um pouco o almoço para incluir mais legumes. Você está no caminho certo! 💪",
      horario: "20:30",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">IA Nutricional</h2>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#0066FF] rounded-full">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Seu acompanhamento personalizado</h3>
            <p className="text-gray-700">
              A IA do Levve analisa suas refeições diariamente e te ajuda a manter a constância. 
              Converse sempre que precisar de orientação ou motivação!
            </p>
          </div>
        </div>
      </div>

      {/* Chat com a IA */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Conversas de Hoje</h3>
        </div>
        
        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {mensagens.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.tipo === "usuario" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-xl ${
                  msg.tipo === "usuario"
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{msg.texto}</p>
                <p className={`text-xs mt-2 ${msg.tipo === "usuario" ? "text-blue-100" : "text-gray-500"}`}>
                  {msg.horario}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none"
            />
            <button className="px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all font-medium">
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* Análises Recentes */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Análises Recentes</h3>
        <div className="space-y-3">
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="font-medium text-gray-900 mb-1">✅ Proteínas em dia</p>
            <p className="text-sm text-gray-600">
              Você atingiu sua meta de proteínas nos últimos 5 dias. Continue assim!
            </p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="font-medium text-gray-900 mb-1">💡 Dica de hidratação</p>
            <p className="text-sm text-gray-600">
              Tente beber pelo menos 2 litros de água por dia. Isso ajuda no emagrecimento!
            </p>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
            <p className="font-medium text-gray-900 mb-1">⚠️ Atenção ao jantar</p>
            <p className="text-sm text-gray-600">
              Nos últimos 2 dias você pulou o jantar. Lembre-se: pular refeições não ajuda!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfiguracoesTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Configurações</h2>

      <div className="space-y-4">
        {/* Perfil */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Perfil</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Editar informações pessoais
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Alterar senha
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Preferências alimentares
            </button>
          </div>
        </div>

        {/* Plano */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Plano e Pagamento</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Gerenciar assinatura
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Histórico de pagamentos
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Alterar forma de pagamento
            </button>
          </div>
        </div>

        {/* Notificações */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Notificações</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Lembretes de refeições
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Mensagens da IA
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Atualizações do app
            </button>
          </div>
        </div>

        {/* Suporte */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Suporte</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Central de ajuda
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Falar com suporte
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-all">
              Reportar problema
            </button>
          </div>
        </div>

        {/* Sair */}
        <div className="bg-white border border-red-200 rounded-xl p-6">
          <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all font-medium">
            Sair da conta
          </button>
        </div>
      </div>
    </div>
  );
}
