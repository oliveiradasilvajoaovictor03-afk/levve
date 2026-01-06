import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-100 rounded-2xl">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidade
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
              A Levve valoriza e respeita sua privacidade. Esta política descreve como coletamos, 
              usamos e protegemos suas informações pessoais ao utilizar nossos serviços.
            </p>
          </section>

          {/* Informações Coletadas */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Informações que Coletamos
              </h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Dados de cadastro:</strong> nome, e-mail, telefone</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Dados de saúde:</strong> peso, altura, objetivo de emagrecimento</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Dados alimentares:</strong> refeições registradas, preferências</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Dados de uso:</strong> interações com o app, páginas visitadas</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Dados de pagamento:</strong> processados por parceiros seguros (não armazenamos dados de cartão)</p>
              </div>
            </div>
          </section>

          {/* Como Usamos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Como Usamos Suas Informações
              </h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Personalizar seu plano alimentar e recomendações</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Fornecer acompanhamento por IA nutricional</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Melhorar nossos serviços e experiência do usuário</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Enviar notificações importantes sobre sua conta</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Cumprir obrigações legais e regulatórias</p>
              </div>
            </div>
          </section>

          {/* Segurança */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Segurança dos Dados
              </h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações contra acesso não autorizado, perda ou alteração.
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <p>Criptografia de dados em trânsito e em repouso</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <p>Servidores seguros e monitorados 24/7</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <p>Acesso restrito apenas a funcionários autorizados</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <p>Backups regulares e recuperação de desastres</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compartilhamento */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Compartilhamento de Dados
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Não vendemos</strong> suas informações pessoais. Compartilhamos dados apenas quando:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Você autoriza expressamente</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Necessário para processar pagamentos (com parceiros seguros)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Exigido por lei ou ordem judicial</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>Para proteger direitos, propriedade ou segurança</p>
              </div>
            </div>
          </section>

          {/* Seus Direitos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Seus Direitos (LGPD)
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Acessar</strong> seus dados pessoais</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Corrigir</strong> dados incompletos ou desatualizados</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Solicitar exclusão</strong> de dados não necessários</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Revogar consentimento</strong> a qualquer momento</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p><strong>Portabilidade</strong> dos seus dados</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-gray-700">
                Para exercer seus direitos, entre em contato através do e-mail:{" "}
                <a href="mailto:privacidade@levve.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  privacidade@levve.com
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies e Tecnologias Similares
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies para melhorar sua experiência, analisar o uso do site e 
              personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas 
              configurações do navegador.
            </p>
          </section>

          {/* Alterações */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Alterações nesta Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
              significativas através do e-mail cadastrado ou aviso no aplicativo.
            </p>
          </section>

          {/* Contato */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dúvidas sobre Privacidade?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se tiver dúvidas sobre esta política ou sobre como tratamos seus dados, 
              entre em contato conosco:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:privacidade@levve.com" className="text-blue-600 hover:text-blue-700">
                  privacidade@levve.com
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

          {/* Link para Termos */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-3">
              Leia também nossos Termos de Uso
            </p>
            <a
              href="/termos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium"
            >
              Ver Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
