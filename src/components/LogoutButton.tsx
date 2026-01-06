"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { clearSession } from "@/lib/auth";

interface LogoutButtonProps {
  className?: string;
  variant?: "button" | "link";
}

export default function LogoutButton({ 
  className = "", 
  variant = "button" 
}: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      console.log('[LOGOUT] Starting logout process...');

      // Limpar localStorage
      clearSession();
      console.log('[LOGOUT] LocalStorage cleared');

      // Chamar API de logout para limpar cookies
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      console.log('[LOGOUT] Cookies cleared');

      // Redirecionar para login
      console.log('[LOGOUT] Redirecting to login...');
      window.location.href = '/login';
    } catch (error) {
      console.error('[LOGOUT] Error during logout:', error);
      // Mesmo com erro, redirecionar para login
      window.location.href = '/login';
    }
  };

  if (variant === "link") {
    return (
      <button
        onClick={handleLogout}
        className={`flex items-center gap-2 text-red-600 hover:text-red-700 transition-all ${className}`}
      >
        <LogOut className="w-5 h-5" />
        Sair da conta
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all ${className}`}
    >
      <LogOut className="w-5 h-5" />
      Sair
    </button>
  );
}
