"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, AlertCircle, CheckCircle, ArrowLeft, Copy } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [devCode, setDevCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validação básica
      if (!email) {
        setError("Por favor, insira seu e-mail");
        setLoading(false);
        return;
      }

      // Validação de e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Por favor, insira um e-mail válido");
        setLoading(false);
        return;
      }

      console.log('[FORGOT-PASSWORD] Sending reset code to:', email);

      // Chamar API de recuperação de senha
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log('[FORGOT-PASSWORD] Failed:', data.message);
        setError(data.message || 'Erro ao enviar código de recuperação');
        setLoading(false);
        return;
      }

      console.log('[FORGOT-PASSWORD] Success:', data);

      // Se recebeu código de DEV, mostrar na tela
      if (data.devCode) {
        setDevCode(data.devCode);
        console.log('🔑 CÓDIGO DE RESET (DEV):', data.devCode);
      }

      setSuccess(true);

    } catch (err) {
      console.error('[FORGOT-PASSWORD] Error:', err);
      setError("Erro ao enviar código. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (devCode) {
      navigator.clipboard.writeText(devCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BrandLogo size="lg" showText={false} />
            <span className="text-3xl font-bold text-gray-900">Levve</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Recuperar senha
          </h1>
          <p className="text-gray-600">
            Digite seu e-mail para receber o código de recuperação
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {success ? (
            // Mensagem de Sucesso
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Código enviado!
                </h2>
                <p className="text-gray-600">
                  Enviamos um código de recuperação para <strong>{email}</strong>
                </p>
                {!devCode && (
                  <p className="text-sm text-gray-500 mt-2">
                    Verifique sua caixa de entrada e spam
                  </p>
                )}
              </div>

              {/* Mostrar código em DEV */}
              {devCode && (
                <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-orange-700 font-semibold">
                    <AlertCircle className="w-5 h-5" />
                    <span>MODO DESENVOLVIMENTO</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">
                      Código de Reset:
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <code className="text-2xl font-mono font-bold text-gray-900 tracking-wider">
                        {devCode}
                      </code>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copiar código"
                      >
                        <Copy className={`w-5 h-5 ${copied ? 'text-green-600' : 'text-gray-600'}`} />
                      </button>
                    </div>
                    {copied && (
                      <p className="text-xs text-green-600 mt-2">✓ Código copiado!</p>
                    )}
                  </div>
                  <p className="text-xs text-orange-700">
                    Este código é válido por 15 minutos
                  </p>
                </div>
              )}

              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-[#0066FF] hover:underline font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o login
              </Link>
            </div>
          ) : (
            // Formulário
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensagem de Erro */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando código...
                  </>
                ) : (
                  "Enviar código"
                )}
              </button>

              {/* Link Voltar */}
              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para o login
                </Link>
              </div>
            </form>
          )}
        </div>

        {/* Texto de Confiança */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Seus dados estão seguros conosco
        </p>
      </div>
    </div>
  );
}
