"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AppLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Verificar se está autenticado
    const checkAuth = async () => {
      try {
        // Verificar se há dados do usuário no localStorage
        const userData = localStorage.getItem("levve_user");
        
        if (!userData) {
          console.log('[APP LAYOUT] No user data found, redirecting to login');
          router.push('/login');
          return;
        }

        console.log('[APP LAYOUT] User authenticated');
        setIsChecking(false);
      } catch (error) {
        console.error('[APP LAYOUT] Auth check error:', error);
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  // Mostrar loading enquanto verifica autenticação
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {children}
    </div>
  );
}
