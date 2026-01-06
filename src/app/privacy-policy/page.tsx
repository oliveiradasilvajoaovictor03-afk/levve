import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function PrivacyPolicyPage() {
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
              <Shield className="w-8 h-8 text-[#0066FF]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Política de Privacidade
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                O Levve ("nós", "nosso" ou "aplicativo") está comprometido em proteger sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos 
                suas informações pessoais quando você usa nosso aplicativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coletamos as seguintes informações para fornecer e melhorar nossos serviços:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Informações de Cadastro:</strong> Nome, e-mail e senha (criptografada)</li>
                <li><strong>Dados de Saúde:</strong> Peso, altura, objetivos de saúde e preferências alimentares</li>
                <li><strong>Dados de Uso:</strong> Refeições registradas, calorias consumidas e progresso</li>
                <li><strong>Informações Técnicas:</strong> Tipo de dispositivo, sistema operacional e dados de uso do app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornecer planos alimentares personalizados</li>
                <li>Acompanhar seu progresso e fornecer feedback por IA</li>
                <li>Melhorar nossos serviços e desenvolver novos recursos</li>
                <li>Enviar notificações importantes sobre sua conta</li>
                <li>Garantir a segurança e prevenir fraudes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Nós NÃO vendemos suas informações pessoais.</strong> Seus dados podem ser 
                compartilhados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com provedores de serviços que nos ajudam a operar o aplicativo (sob acordos de confidencialidade)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Segurança dos Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
                informações contra acesso não autorizado, alteração, divulgação ou destruição. 
                Isso inclui criptografia de dados, acesso restrito e monitoramento contínuo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>Exportar seus dados em formato legível</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                analisar o uso do aplicativo e personalizar conteúdo. Você pode gerenciar 
                suas preferências de cookies nas configurações do aplicativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
                os propósitos descritos nesta política, a menos que um período de retenção 
                mais longo seja exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Menores de Idade</h2>
              <p className="text-gray-700 leading-relaxed">
                Nosso serviço não é destinado a menores de 18 anos. Não coletamos 
                intencionalmente informações de menores. Se você é pai/mãe ou responsável 
                e acredita que seu filho nos forneceu dados, entre em contato conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
                você sobre mudanças significativas por e-mail ou através de um aviso no aplicativo. 
                Recomendamos revisar esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer 
                seus direitos, entre em contato conosco:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> privacidade@levve.app<br />
                  <strong>Endereço:</strong> [Endereço da empresa]
                </p>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/terms-of-use"
                className="text-[#0066FF] hover:underline font-semibold"
              >
                Ver Termos de Uso
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
