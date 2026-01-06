"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Home, 
  Apple, 
  TrendingUp, 
  Settings, 
  User,
  Plus,
  Target,
  Activity,
  Calendar,
  Award,
  Scan
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function AppPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timeout de segurança: máximo 3 segundos para verificação
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    try {
      // Verificar se usuário está logado
      const userData = localStorage.getItem("levve_user");
      
      if (!userData) {
        clearTimeout(timeoutId);
        router.push("/login");
        return;
      }

      const parsedUser = JSON.parse(userData);
      if (!parsedUser.isLoggedIn) {
        clearTimeout(timeoutId);
        router.push("/login");
        return;
      }

      setUser(parsedUser);
      setLoading(false);
      clearTimeout(timeoutId);
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      clearTimeout(timeoutId);
      router.push("/login");
    }

    return () => clearTimeout(timeoutId);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Evita flash de conteúdo durante redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" showText={false} />
              <span className="text-2xl font-bold text-gray-900">Levve</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                Olá, {user?.name?.split(" ")[0] || "Usuário"}
              </span>
              <Link 
                href="/app/settings"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Bem-vindo de volta, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-white/90">
            Continue sua jornada de transformação
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-[#0066FF]" />
              <span className="text-sm font-semibold text-gray-500">Meta Diária</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">1.800</p>
            <p className="text-sm text-gray-600">calorias</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-green-500" />
              <span className="text-sm font-semibold text-gray-500">Consumido</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">1.245</p>
            <p className="text-sm text-gray-600">calorias</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-orange-500" />
              <span className="text-sm font-semibold text-gray-500">Sequência</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">7</p>
            <p className="text-sm text-gray-600">dias</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Ações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/app/barcode"
              className="flex flex-col items-center gap-3 p-6 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors"
            >
              <Scan className="w-8 h-8 text-indigo-600" />
              <span className="text-sm font-semibold text-gray-900 text-center">Escanear Código de Barras</span>
            </Link>

            <Link
              href="/alimentos"
              className="flex flex-col items-center gap-3 p-6 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
            >
              <Plus className="w-8 h-8 text-[#0066FF]" />
              <span className="text-sm font-semibold text-gray-900 text-center">Adicionar Refeição</span>
            </Link>

            <Link
              href="/app/plano"
              className="flex flex-col items-center gap-3 p-6 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
            >
              <Apple className="w-8 h-8 text-green-600" />
              <span className="text-sm font-semibold text-gray-900">Meu Plano</span>
            </Link>

            <Link
              href="/app/progresso"
              className="flex flex-col items-center gap-3 p-6 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <span className="text-sm font-semibold text-gray-900">Progresso</span>
            </Link>
          </div>
        </div>

        {/* Store Notice */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Apple className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Em breve: Loja Integrada
              </h3>
              <p className="text-gray-700">
                Loja integrada com indicação de suplementos e itens acessíveis, alinhados ao seu objetivo.
              </p>
            </div>
          </div>
        </div>

        {/* Today's Meals */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Refeições de Hoje</h2>
          
          <div className="space-y-4">
            {/* Placeholder para refeições */}
            <div className="text-center py-12">
              <Apple className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Nenhuma refeição registrada hoje</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/app/barcode"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all"
                >
                  <Scan className="w-5 h-5" />
                  Escanear código de barras
                </Link>
                <Link
                  href="/alimentos"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-all"
                >
                  <Plus className="w-5 h-5" />
                  Adicionar manualmente
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="grid grid-cols-4 gap-1">
          <Link
            href="/app"
            className="flex flex-col items-center gap-1 py-3 text-[#0066FF]"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Início</span>
          </Link>
          <Link
            href="/alimentos"
            className="flex flex-col items-center gap-1 py-3 text-gray-600"
          >
            <Apple className="w-6 h-6" />
            <span className="text-xs font-medium">Alimentos</span>
          </Link>
          <Link
            href="/app/progresso"
            className="flex flex-col items-center gap-1 py-3 text-gray-600"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs font-medium">Progresso</span>
          </Link>
          <Link
            href="/app/perfil"
            className="flex flex-col items-center gap-1 py-3 text-gray-600"
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
