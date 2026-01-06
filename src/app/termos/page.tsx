import { FileText, CheckCircle2, XCircle, AlertTriangle, Scale, CreditCard } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-100 rounded-2xl">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-gray-600">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12 space-y-8">
          {/* Introdução */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Bem-vindo ao Levve! Ao utilizar nossos serviços, você concorda com estes termos. 
              Por favor, leia atentamente antes de continuar.
            </p>
          </section>

          {/* Aceitação */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Aceitação dos Termos
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao criar uma conta ou usar o Levve, você confirma que:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Tem pelo menos 18 anos de idade</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Leu e compreendeu estes termos</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Concorda em cumprir todas as regras e políticas</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Fornecerá informações verdadeiras e precisas</p>
              </div>
            </div>
          </section>

          {/* Serviços */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Descrição dos Serviços
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Levve oferece:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Planos alimentares personalizados</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Sistema de organização de marmitas</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Tracker de calorias e macronutrientes</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Acompanhamento por IA nutricional</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Controle financeiro de alimentação</p>
              </div>
            </div>
          </section>

          {/* Responsabilidades */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Responsabilidades do Usuário
              </h2>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
              <p className="text-gray-700 leading-relaxed font-medium mb-3">
                <strong>Importante:</strong> O Levve é uma ferramenta de apoio ao emagrecimento, 
                não substitui orientação médica ou nutricional profissional.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Você é responsável por consultar profissionais de saúde antes de iniciar 
                qualquer programa de emagrecimento, especialmente se tiver condições médicas 
                pré-existentes.
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Manter suas credenciais de acesso seguras</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Fornecer informações precisas sobre saúde e objetivos</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Usar o serviço de forma legal e ética</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Não compartilhar sua conta com terceiros</p>
              </div>
            </div>
          </section>

          {/* Uso Proibido */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Uso Proibido
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              É proibido:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <p>Usar o serviço para fins ilegais</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <p>Tentar acessar sistemas ou dados não autorizados</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <p>Copiar, modificar ou distribuir nosso conteúdo sem autorização</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <p>Usar bots ou scripts automatizados</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <p>Interferir no funcionamento do serviço</p>
              </div>
            </div>
          </section>

          {/* Pagamentos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Pagamentos e Assinaturas
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Planos Disponíveis</h3>
                <p className="leading-relaxed">
                  Oferecemos planos mensais e anuais. Os valores e benefícios estão 
                  descritos na página de preços.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Renovação Automática</h3>
                <p className="leading-relaxed">
                  Assinaturas são renovadas automaticamente. Você pode cancelar a qualquer 
                  momento nas configurações da conta.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Política de Reembolso</h3>
                <p className="leading-relaxed">
                  Oferecemos garantia de 7 dias. Se não estiver satisfeito, solicite 
                  reembolso total dentro deste prazo.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cancelamento</h3>
                <p className="leading-relaxed">
                  Sem taxas de cancelamento. Você mantém acesso até o fim do período pago.
                </p>
              </div>
            </div>
          </section>

          {/* Propriedade Intelectual */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Propriedade Intelectual
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo o conteúdo do Levve (textos, imagens, logos, código, algoritmos) é 
              protegido por direitos autorais e propriedade intelectual.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Você recebe uma licença limitada, não exclusiva e intransferível para 
                usar o serviço apenas para fins pessoais e não comerciais.
              </p>
            </div>
          </section>

          {/* Limitação de Responsabilidade */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitação de Responsabilidade
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>O Levve não se responsabiliza por:</strong>
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <p>Resultados individuais de emagrecimento</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <p>Problemas de saúde decorrentes do uso inadequado</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <p>Interrupções temporárias do serviço</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <p>Perda de dados por falhas técnicas</p>
                </div>
              </div>
            </div>
          </section>

          {/* Modificações */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modificações nos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar estes termos periodicamente. Mudanças significativas serão 
              notificadas por e-mail ou aviso no aplicativo. O uso continuado após as 
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          {/* Lei Aplicável */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Lei Aplicável
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
              resolvida no foro da comarca de São Paulo/SP.
            </p>
          </section>

          {/* Contato */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dúvidas sobre os Termos?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se tiver dúvidas sobre estes termos, entre em contato:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:juridico@levve.com" className="text-blue-600 hover:text-blue-700">
                  juridico@levve.com
                </a>
              </p>
              <p>
                <strong>Página de contato:</strong>{" "}
                <a href="/contato" className="text-blue-600 hover:text-blue-700">
                  levve.com/contato
                </a>
              </p>
            </div>
          </section>

          {/* Link para Privacidade */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-3">
              Leia também nossa Política de Privacidade
            </p>
            <a
              href="/privacidade"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium"
            >
              Ver Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
