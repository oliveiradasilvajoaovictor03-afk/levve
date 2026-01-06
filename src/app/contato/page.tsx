"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setEnviado(true);
    setEnviando(false);
    
    // Reset após 3 segundos
    setTimeout(() => {
      setEnviado(false);
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas ou sugestões? Estamos aqui para ajudar. 
            Envie sua mensagem e responderemos o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua mensagem
            </h2>

            {enviado ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-600 text-center">
                  Obrigado pelo contato. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre o produto</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descreva sua dúvida ou sugestão..."
                  />
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {enviando ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* E-mail de Suporte */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">E-mail de Suporte</h3>
                  <p className="text-gray-600 mb-3">
                    Prefere enviar um e-mail direto? Entre em contato através do nosso suporte.
                  </p>
                  <a
                    href="mailto:suporte@levve.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    suporte@levve.com
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8">
              <h3 className="font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    Como funciona o plano alimentar?
                  </p>
                  <p className="text-sm text-gray-600">
                    Criamos um plano personalizado baseado no seu objetivo e orçamento.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    Posso cancelar a qualquer momento?
                  </p>
                  <p className="text-sm text-gray-600">
                    Sim! Sem taxas de cancelamento ou multas.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    A IA realmente funciona?
                  </p>
                  <p className="text-sm text-gray-600">
                    Sim! Nossa IA analisa seus dados e oferece orientações personalizadas diariamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="font-bold text-gray-900 mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Horário de Brasília (GMT-3)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
