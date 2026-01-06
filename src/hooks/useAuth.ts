"use client";

import { useEffect, useState } from "react";
import { isAdmin, hasAccess, shouldShowPaywall } from "@/lib/auth";

interface UseAuthReturn {
  isAuthenticated: boolean;
  isAdminUser: boolean;
  userEmail: string | null;
  hasActiveSubscription: boolean;
  hasFullAccess: boolean;
  showPaywall: boolean;
  isLoading: boolean;
}

/**
 * Hook customizado para verificar autenticação e permissões
 * Admin (admin@levve.app) sempre tem acesso total
 */
export function useAuth(): UseAuthReturn {
  const [authState, setAuthState] = useState<UseAuthReturn>({
    isAuthenticated: false,
    isAdminUser: false,
    userEmail: null,
    hasActiveSubscription: false,
    hasFullAccess: false,
    showPaywall: false,
    isLoading: true,
  });

  useEffect(() => {
    const checkAuth = () => {
      try {
        console.log('[useAuth] Checking authentication...');
        
        // Verificar se há dados do usuário no localStorage
        const userDataString = localStorage.getItem("levve_user");
        
        if (!userDataString) {
          console.log('[useAuth] ❌ No user data found');
          setAuthState({
            isAuthenticated: false,
            isAdminUser: false,
            userEmail: null,
            hasActiveSubscription: false,
            hasFullAccess: false,
            showPaywall: false,
            isLoading: false,
          });
          return;
        }

        const userData = JSON.parse(userDataString);
        const email = userData?.email || null;
        const subscription = userData?.hasActiveSubscription || false;

        console.log('[useAuth] User data found:', {
          email,
          isAdmin: userData?.isAdmin,
          hasSubscription: subscription
        });

        // Verificar se é admin
        const adminUser = isAdmin(email);

        setAuthState({
          isAuthenticated: true,
          isAdminUser: adminUser,
          userEmail: email,
          hasActiveSubscription: adminUser ? true : subscription, // Admin sempre tem "assinatura"
          hasFullAccess: hasAccess(email, subscription),
          showPaywall: shouldShowPaywall(email, subscription),
          isLoading: false,
        });

        if (adminUser) {
          console.log('[useAuth] 🔑 ADMIN USER DETECTED - Full access granted');
        } else {
          console.log('[useAuth] ✅ Regular user authenticated');
        }
      } catch (error) {
        console.error('[useAuth] ❌ Error checking auth:', error);
        setAuthState({
          isAuthenticated: false,
          isAdminUser: false,
          userEmail: null,
          hasActiveSubscription: false,
          hasFullAccess: false,
          showPaywall: false,
          isLoading: false,
        });
      }
    };

    checkAuth();

    // Listener para mudanças no localStorage (caso usuário faça login em outra aba)
    const handleStorageChange = () => {
      console.log('[useAuth] Storage changed, re-checking auth...');
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return authState;
}
