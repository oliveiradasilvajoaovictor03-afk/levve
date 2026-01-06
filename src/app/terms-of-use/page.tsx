import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <BrandLogo size="lg" showText={false} />
            <span className="text-2xl font-bold text-gray-900">Levve</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#0066FF]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Termos de Uso
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e usar o aplicativo Levve ("Aplicativo", "Serviço", "nós" ou "nosso"), 
                você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não 
                concordar com qualquer parte destes termos, não use nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-700 leading-relaxed">
                O Levve é um aplicativo de planejamento alimentar e acompanhamento nutricional 
                que oferece:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Planos alimentares personalizados e acessíveis</li>
                <li>Rastreamento de calorias e macronutrientes</li>
                <li>Acompanhamento diário por inteligência artificial</li>
                <li>Ferramentas de monitoramento de progresso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Elegibilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Você deve ter pelo menos 18 anos de idade para usar o Levve. Ao usar nosso 
                serviço, você declara e garante que tem capacidade legal para aceitar estes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cadastro e Conta</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para usar o Levve, você deve:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornecer informações precisas e completas durante o cadastro</li>
                <li>Manter a segurança de sua senha e conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                <li>Ser responsável por todas as atividades em sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Aviso Médico Importante</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                <p className="text-gray-800 font-semibold mb-2">⚠️ ATENÇÃO:</p>
                <p className="text-gray-700 leading-relaxed">
                  O Levve NÃO substitui aconselhamento médico, diagnóstico ou tratamento profissional. 
                  As informações fornecidas são apenas para fins educacionais e informativos. 
                  Sempre consulte um médico ou nutricionista antes de iniciar qualquer programa 
                  de dieta ou exercícios.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Planos e Pagamentos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O Levve oferece planos gratuitos e pagos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Plano Gratuito:</strong> Acesso a funcionalidades básicas</li>
                <li><strong>Planos Pagos:</strong> Recursos premium com cobrança recorrente</li>
                <li>Você pode cancelar sua assinatura a qualquer momento</li>
                <li>Reembolsos seguem nossa política específica</li>
                <li>Preços podem ser alterados mediante aviso prévio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Uso Aceitável</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você concorda em NÃO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Usar o serviço para fins ilegais ou não autorizados</li>
                <li>Tentar acessar áreas restritas do sistema</li>
                <li>Interferir ou interromper o funcionamento do aplicativo</li>
                <li>Copiar, modificar ou distribuir conteúdo sem autorização</li>
                <li>Usar bots, scripts ou ferramentas automatizadas</li>
                <li>Compartilhar sua conta com terceiros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo o conteúdo do Levve, incluindo textos, gráficos, logos, ícones, imagens, 
                áudio, vídeo e software, é propriedade do Levve ou de seus licenciadores e está 
                protegido por leis de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                O Levve é fornecido "como está" e "conforme disponível". Não garantimos que o 
                serviço será ininterrupto, seguro ou livre de erros. Em nenhuma circunstância 
                seremos responsáveis por danos indiretos, incidentais, especiais ou consequenciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cancelamento e Suspensão</h2>
              <p className="text-gray-700 leading-relaxed">
                Reservamo-nos o direito de suspender ou encerrar sua conta se você violar estes 
                termos ou se acreditarmos que seu uso do serviço pode causar danos ao Levve ou 
                a outros usuários.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificações dos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos modificar estes Termos de Uso a qualquer momento. Notificaremos você 
                sobre mudanças significativas por e-mail ou através do aplicativo. O uso 
                continuado do serviço após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> suporte@levve.app<br />
                  <strong>Endereço:</strong> [Endereço da empresa]
                </p>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/privacy-policy"
                className="text-[#0066FF] hover:underline font-semibold"
              >
                Ver Política de Privacidade
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-all"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
