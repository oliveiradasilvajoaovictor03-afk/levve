"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, AlertCircle, ArrowRight, Eye, EyeOff } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { setSession } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Trim dos valores
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validação: somente mostrar erro se realmente vazio após trim
    if (!trimmedEmail || !trimmedPassword) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Por favor, insira um e-mail válido");
      return;
    }

    // Bloquear duplo clique
    if (loading) return;
    setLoading(true);

    try {
      console.log("LOGIN_SUBMIT", { email: trimmedEmail, senhaLength: trimmedPassword.length });

      // Chamar API de login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: trimmedEmail,
          password: trimmedPassword,
        }),
      });

      const data = await response.json();

      console.log("LOGIN_RESPONSE", { 
        status: response.status, 
        body: data 
      });
if (!response.ok) {
  setError(data?.error || data?.message || 'Email ou senha inválidos.')
  return
}

// Se sua API retornar alguma coisa tipo data.session ou data.user, ótimo.
// Se não, salva pelo menos o email.
await setSession({
  email: trimmedEmail,
  user: data?.user ?? null,
  session: data?.session ?? null,
})

router.push('/app')   // ou '/dashboard' se você preferir
router.refresh()
    

      console.log("✅ LOGIN_SUCCESS", { 
        user: data.user,
        isAdmin: data.user?.isAdmin,
        hasSubscription: data.user?.hasActiveSubscription
      });

  
      }

      // Aguardar para garantir que cookies foram setados
      await new Promise(resolve => setTimeout(resolve, 300));

      // Determinar destino do redirecionamento
      let destination = "/dashboard";
      
      if (data.user.isAdmin) {
        destination = "/dashboard";
        console.log("🔑 ADMIN LOGIN - Redirecionando para:", destination);
      } else if (data.user.hasActiveSubscription) {
        destination = "/dashboard";
        console.log("✅ Usuário com plano - Redirecionando para:", destination);
      } else if (!data.user.onboardingCompleted) {
        destination = "/onboarding";
        console.log("⚠️ Onboarding não completo - Redirecionando para:", destination);
      } else {
        destination = "/checkout";
        console.log("⚠️ Usuário sem plano - Redirecionando para:", destination);
      }

      console.log("🚀 REDIRECT_TO:", destination);
      router.push(destination);
router.refresh();
      
 } catch (err) {
  console.error('LOGIN ERROR (EXCEPTION)', err);
  setError('Erro ao fazer login. Verifique sua conexão e tente novamente.');
} finally {
  setLoading(false);
}
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
            Entre para continuar sua transformação
          </h1>
          <p className="text-gray-600">
            Seu plano personalizado está te esperando
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
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

            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  disabled={loading}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Link Esqueci Senha */}
            <div className="text-right">
              <Link 
                href="/forgot-password" 
                className="text-sm text-[#0066FF] hover:underline font-medium"
              >
                Esqueci minha senha
              </Link>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Link para Criar Conta */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <Link 
                href="/signup" 
                className="text-[#0066FF] font-semibold hover:underline"
              >
                Criar conta
              </Link>
            </p>
          </div>
        </div>

        {/* Texto de Confiança */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Sem cartão • Cancele quando quiser
        </p>
      </div>
    </div>
  );
}
