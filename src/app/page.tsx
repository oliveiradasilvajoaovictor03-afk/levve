import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle, TrendingDown, DollarSign, Heart, Scale, Apple, Activity, Users, Smartphone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import QuickNav from "@/components/QuickNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 2 Colunas: Texto à Esquerda + Imagem à Direita */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0066FF] rounded-full text-sm font-semibold border border-blue-100">
                <Sparkles className="w-4 h-4" />
                Acompanhamento por IA
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Emagreça com planejamento inteligente, gastando pouco.
              </h1>
              
              {/* Parágrafo de Suporte */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Acompanhamento diário por IA, plano alimentar acessível e foco em constância.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  href="/quiz/start"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Começar gratuitamente
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link 
                  href="/planos"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#0066FF] text-gray-700 hover:text-[#0066FF] text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Ver planos
                </Link>
              </div>

              {/* Texto de Confiança */}
              <p className="text-sm text-gray-500 pt-2">
                Sem cartão • Cancele quando quiser
              </p>

              {/* Selos de Confiança */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 font-medium">Sem taxa de adesão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 font-medium">Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 font-medium">Resultados reais</span>
                </div>
              </div>
            </div>

            {/* Lado Direito - Imagem */}
            <div className="relative">
              {/* Container com altura controlada */}
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop"
                  alt="Refeição saudável e acessível"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Card Flutuante - Mini UI de Macros */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Calorias</div>
                      <div className="text-lg font-bold text-[#0066FF]">485</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Proteínas</div>
                      <div className="text-lg font-bold text-[#10B981]">32g</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Carbos</div>
                      <div className="text-lg font-bold text-orange-500">58g</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - NOVA SEÇÃO */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Feito para o brasileiro real.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pessoas todos os dias usando o Levve para emagrecer com planejamento simples, comida acessível e acompanhamento por IA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Sem taxa de adesão</h3>
              <p className="text-sm text-gray-600">Comece sem compromisso financeiro inicial</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Cancele quando quiser</h3>
              <p className="text-sm text-gray-600">Flexibilidade total, sem multas ou burocracias</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Resultados com constância</h3>
              <p className="text-sm text-gray-600">Evolução real através de hábitos sustentáveis</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
            <Users className="w-12 h-12 text-[#0066FF] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Você não faz isso sozinho
            </h3>
            <p className="text-gray-600">
              O Levve te acompanha todos os dias com inteligência artificial personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Calorie Tracker Feature Highlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
              <Activity className="w-4 h-4" />
              Funcionalidade Principal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Rastreador de Calorias Inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tenha clareza total sobre o que você está comendo e alcance seus objetivos com precisão
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#0066FF] rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Monitoramento de Calorias
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhe suas calorias diárias com precisão. Saiba exatamente quanto você consumiu e quanto ainda pode comer.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <Apple className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Macros Detalhados
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhe proteínas, carboidratos e gorduras. Entenda a composição de cada refeição e otimize sua alimentação.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clareza Total
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visualize seu progresso com gráficos claros. Saiba o que está funcionando e ajuste sua estratégia facilmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Feito para o brasileiro real
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sem frescura, sem dietas impossíveis. Comida de verdade, preços acessíveis e acompanhamento que funciona.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#0066FF] rounded-xl flex items-center justify-center mb-6">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Resultados reais
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Planos baseados em ciência, adaptados à sua realidade. Sem promessas milagrosas, só constância e evolução.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comida acessível
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Planos com alimentos que cabem no seu bolso. Arroz, feijão, ovo, frango, frutas da época. Comida de verdade.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                IA que te entende
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhamento diário personalizado. A IA aprende com você e te ajuda a manter a constância sem pressão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Images Section - FOTOS REAIS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Refeições reais que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600">
              Comida de verdade, nutritiva e barata. Nada de dieta de revista.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Food Card 1 - Arroz, feijão e frango */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop" 
                  alt="Arroz, feijão, frango e salada" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">Prato Completo</h4>
                <p className="text-sm text-gray-600">Arroz, feijão, frango e salada</p>
                <p className="text-lg font-bold text-[#0066FF] mt-2">~R$ 12/refeição</p>
              </div>
            </div>

            {/* Food Card 2 - Ovos e banana */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop" 
                  alt="Ovos mexidos com banana" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">Café da Manhã</h4>
                <p className="text-sm text-gray-600">Ovos mexidos e banana</p>
                <p className="text-lg font-bold text-[#0066FF] mt-2">~R$ 5/refeição</p>
              </div>
            </div>

            {/* Food Card 3 - Salada */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop" 
                  alt="Salada completa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">Salada Completa</h4>
                <p className="text-sm text-gray-600">Mix de vegetais frescos</p>
                <p className="text-lg font-bold text-[#0066FF] mt-2">~R$ 8/refeição</p>
              </div>
            </div>

            {/* Food Card 4 - Iogurte */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop" 
                  alt="Iogurte com granola" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">Lanche Saudável</h4>
                <p className="text-sm text-gray-600">Iogurte com granola e frutas</p>
                <p className="text-lg font-bold text-[#0066FF] mt-2">~R$ 6/refeição</p>
              </div>
            </div>

            {/* Food Card 5 - Peixe */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop" 
                  alt="Peixe grelhado com legumes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">Jantar Leve</h4>
                <p className="text-sm text-gray-600">Peixe com legumes</p>
                <p className="text-lg font-bold text-[#0066FF] mt-2">~R$ 15/refeição</p>
              </div>
            </div>

            {/* Food Card 6 - Marmita */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop" 
                  alt="Marmita fit completa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">Marmita Fit</h4>
                <p className="text-sm text-gray-600">Completa e balanceada</p>
                <p className="text-lg font-bold text-[#0066FF] mt-2">~R$ 12/refeição</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simples, direto e eficaz
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Responda o quiz
              </h3>
              <p className="text-gray-600">
                Conte sobre sua rotina, orçamento e objetivos
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Receba seu plano
              </h3>
              <p className="text-gray-600">
                Plano alimentar personalizado e acessível
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Registre suas refeições
              </h3>
              <p className="text-gray-600">
                Acompanhe calorias e macros facilmente
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Evolua com a IA
              </h3>
              <p className="text-gray-600">
                Acompanhamento diário e ajustes personalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DOWNLOAD DO APP */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Smartphone className="w-8 h-8 text-[#0066FF]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Baixe o app e comece agora
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Disponível para iOS e Android
          </p>

          {/* Botões de Download */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Botão App Store */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>

            {/* Botão Google Play */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Texto de Confiança */}
          <p className="text-sm text-gray-500">
            App oficial • Seguro • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#0066FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comece sua transformação hoje
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
            Sem truques, sem dietas impossíveis. Só um plano que funciona de verdade.
          </p>
          <Link 
            href="/quiz/start"
            className="inline-flex items-center gap-3 px-10 py-5 sm:px-12 sm:py-6 bg-white text-[#0066FF] text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Começar gratuitamente
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-white/80 mt-6 text-sm">
            Sem cartão de crédito necessário • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer - CONTRASTE PERFEITO */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BrandLogo size="lg" showText={false} />
              {/* FORÇAR BRANCO PURO - CONTRASTE AAA */}
              <span className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                Levve
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Emagreça gastando pouco com acompanhamento diário por IA
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/termos" className="text-gray-300 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="/privacidade" className="text-gray-300 hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="/contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 Levve. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* QuickNav - Atalhos Fixos */}
      <QuickNav />
    </div>
  );
}
