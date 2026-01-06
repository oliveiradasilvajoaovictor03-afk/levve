"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, isAdmin } from "@/lib/auth";

interface ProtectedRouteProps {
  children: ReactNode;
  requiresSubscription?: boolean;
}

/**
 * Componente para proteger rotas que exigem autenticação e/ou assinatura
 * Admin (admin@levve.app) tem acesso total sem restrições
 */
export default function ProtectedRoute({ 
  children, 
  requiresSubscription = false 
}: ProtectedRouteProps) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        console.log('[PROTECTED ROUTE] Checking access...');
        
        // Aguardar um pouco para garantir que cookies foram carregados
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Obter sessão (prioriza cookies, fallback localStorage)
        const session = getSession();
        
        if (!session) {
          console.log('[PROTECTED ROUTE] ❌ No session found, redirecting to login');
          setIsChecking(false);
          router.replace('/login');
          return;
        }

        const userData = session.user;
        const userEmail = userData?.email;

        console.log('[PROTECTED ROUTE] Session found:', {
          email: userEmail,
          isAdmin: userData?.isAdmin,
          hasSubscription: userData?.hasActiveSubscription,
          source: 'cookie or localStorage'
        });

        // Verificar se é admin
        if (isAdmin(userEmail)) {
          console.log('[PROTECTED ROUTE] 🔑 ADMIN ACCESS - Full access granted');
          setHasPermission(true);
          setIsChecking(false);
          return;
        }

        // Se não é admin e a rota requer assinatura
        if (requiresSubscription) {
          const hasActiveSubscription = userData?.hasActiveSubscription || false;
          
          if (!hasActiveSubscription) {
            console.log('[PROTECTED ROUTE] ❌ No active subscription, redirecting to plans');
            setIsChecking(false);
            router.replace('/planos');
            return;
          }
        }

        console.log('[PROTECTED ROUTE] ✅ Access granted');
        setHasPermission(true);
        setIsChecking(false);
      } catch (error) {
        console.error('[PROTECTED ROUTE] ❌ Access check error:', error);
        setIsChecking(false);
        router.replace('/login');
      }
    };

    checkAccess();
  }, [router, requiresSubscription]);

  // Mostrar loading enquanto verifica acesso
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  // Se não tem permissão, não renderiza nada (já redirecionou)
  if (!hasPermission) {
    return null;
  }

  return <>{children}</>;
}
