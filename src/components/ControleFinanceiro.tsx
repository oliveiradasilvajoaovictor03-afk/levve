"use client";

import { DollarSign, TrendingDown, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";

export default function ControleFinanceiro() {
  const orcamento = {
    mensal: 400,
    gasto: 280,
    percentual: 70,
  };

  const dentroDoOrcamento = orcamento.gasto <= orcamento.mensal;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-100 rounded-xl">
          <DollarSign className="w-6 h-6 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Controle Financeiro</h2>
      </div>

      {/* Status do Orçamento */}
      <div className={`p-6 rounded-xl border-2 mb-6 ${
        dentroDoOrcamento 
          ? "bg-green-50 border-green-200" 
          : "bg-orange-50 border-orange-200"
      }`}>
        <div className="flex items-center gap-3 mb-4">
          {dentroDoOrcamento ? (
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          ) : (
            <AlertCircle className="w-8 h-8 text-orange-600" />
          )}
          <div>
            <h3 className="font-bold text-gray-900 text-lg">
              {dentroDoOrcamento 
                ? "Você está dentro do seu orçamento ✔" 
                : "Atenção: acima do planejado"}
            </h3>
            <p className="text-sm text-gray-600">
              {dentroDoOrcamento 
                ? "Continue assim! Você está economizando." 
                : "Vamos ajustar o plano para voltar ao orçamento."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Orçamento Mensal</p>
            <p className="text-2xl font-bold text-gray-900">R$ {orcamento.mensal}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Gasto até Agora</p>
            <p className="text-2xl font-bold text-gray-900">R$ {orcamento.gasto}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progresso</span>
            <span className="text-sm font-bold text-gray-900">{orcamento.percentual}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                dentroDoOrcamento ? "bg-green-500" : "bg-orange-500"
              }`}
              style={{ width: `${orcamento.percentual}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mensagem Motivacional */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <p className="font-bold text-gray-900 mb-2">💡 Lembre-se:</p>
        <p className="text-gray-700">
          Você <strong>NÃO precisa gastar muito para emagrecer</strong>. 
          O Levve te ajuda a comer bem gastando pouco, com alimentos simples e acessíveis.
        </p>
      </div>

      {/* Detalhamento de Gastos */}
      <div className="mt-6">
        <h3 className="font-bold text-gray-900 mb-4">Detalhamento de Gastos</h3>
        <div className="space-y-3">
          {[
            { categoria: "Proteínas (frango, ovos)", valor: 120, percentual: 43 },
            { categoria: "Carboidratos (arroz, pão)", valor: 80, percentual: 29 },
            { categoria: "Legumes e verduras", valor: 50, percentual: 18 },
            { categoria: "Outros", valor: 30, percentual: 10 },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900">{item.categoria}</span>
                <span className="font-bold text-gray-900">R$ {item.valor}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#0066FF] h-2 rounded-full transition-all"
                  style={{ width: `${item.percentual}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dicas de Economia */}
      <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl">
        <h3 className="font-bold text-gray-900 mb-3">💰 Dicas para Economizar</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <TrendingDown className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Compre frango em promoção e congele em porções</span>
          </li>
          <li className="flex items-start gap-2">
            <TrendingDown className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Ovos são fonte barata de proteína de qualidade</span>
          </li>
          <li className="flex items-start gap-2">
            <TrendingDown className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Legumes da estação são mais baratos e frescos</span>
          </li>
          <li className="flex items-start gap-2">
            <TrendingDown className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Prepare marmitas em lote para economizar tempo e gás</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
