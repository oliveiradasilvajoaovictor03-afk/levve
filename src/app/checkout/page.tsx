'use client';

import { Check, Shield, Lock, CreditCard, Sparkles } from 'lucide-react';

export default function CheckoutPage() {
  const plans = [
    {
      id: 'mensal',
      name: 'Plano Mensal',
      price: 'R$49,90',
      period: '/ mês',
      benefits: [
        '7 dias de teste grátis',
        'Cartão obrigatório',
        'Acesso completo ao app Levve'
      ],
      kiwifyUrl: 'https://pay.kiwify.com.br/IG342B7',
      badge: null,
      color: 'blue'
    },
    {
      id: 'trimestral',
      name: 'Plano Trimestral',
      price: 'R$129,90',
      period: 'a cada 3 meses',
      benefits: [
        '7 dias de teste grátis',
        'Cartão obrigatório',
        'Economia em relação ao mensal',
        'Mais escolhido pelos usuários'
      ],
      kiwifyUrl: 'https://pay.kiwify.com.br/B2eZMYo',
      badge: 'MAIS VANTAJOSO',
      color: 'green'
    },
    {
      id: 'semestral',
      name: 'Plano Semestral',
      price: 'R$229,90',
      period: 'a cada 6 meses',
      benefits: [
        '7 dias de teste grátis',
        'Cartão obrigatório',
        'Melhor custo-benefício de médio prazo'
      ],
      kiwifyUrl: 'https://pay.kiwify.com.br/O6tTx4z',
      badge: null,
      color: 'cyan'
    },
    {
      id: 'anual',
      name: 'Plano Anual',
      price: 'R$399,90',
      period: '/ ano',
      benefits: [
        '7 dias de teste grátis',
        'Cartão obrigatório',
        'Maior economia possível',
        'Compromisso total com resultados'
      ],
      kiwifyUrl: 'https://pay.kiwify.com.br/svL1OlA',
      badge: null,
      color: 'purple'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-4">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu plano no Levve
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comece com 7 dias grátis. Cancele quando quiser.
          </p>
        </div>

        {/* CARDS DE PLANOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white rounded-2xl shadow-lg p-6
                transition-all duration-300 hover:shadow-2xl
                ${plan.badge ? 'border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50' : 'border-2 border-gray-200'}
              `}
            >
              {/* BADGE */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                  🔥 {plan.badge}
                </div>
              )}

              {/* CONTEÚDO DO CARD */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.period}</p>
              </div>

              {/* BENEFÍCIOS */}
              <ul className="space-y-3 mb-6">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* BOTÃO EXPLÍCITO COM LINK DIRETO */}
              <a
                href={plan.kiwifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block w-full py-4 rounded-xl font-bold text-white text-base text-center
                  transition-all duration-300 hover:scale-105 hover:shadow-xl
                  ${plan.badge 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }
                `}
              >
                Ativar teste grátis
              </a>
            </div>
          ))}
        </div>

        {/* BLOCO DE SEGURANÇA */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Teste grátis por 7 dias
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              O cartão é necessário apenas para ativar o teste. Se não fizer sentido para você, 
              cancele antes da cobrança. Sem surpresas, sem letras miúdas.
            </p>
          </div>

          {/* SELOS DE SEGURANÇA */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
              <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-sm font-semibold text-gray-900">
                Pagamento 100% seguro
              </p>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
              <Lock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-sm font-semibold text-gray-900">
                Seus dados protegidos
              </p>
            </div>
            <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-4">
              <CreditCard className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <p className="text-sm font-semibold text-gray-900">
                Cancele quando quiser
              </p>
            </div>
          </div>
        </div>

        {/* AVISO LEGAL */}
        <div className="text-center text-sm text-gray-600 max-w-2xl mx-auto">
          <p>
            Ao clicar em qualquer plano, você será redirecionado para a página de pagamento segura da Kiwify. 
            Processamos pagamentos de forma 100% segura e seus dados estão protegidos.
          </p>
        </div>
      </div>
    </main>
  );
}
