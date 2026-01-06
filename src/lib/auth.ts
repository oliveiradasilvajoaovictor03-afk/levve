/**
 * Utilitários de autenticação e controle de acesso
 */

// E-mail do administrador com acesso total
export const ADMIN_EMAIL = 'oficiallevve@gmail.com';

/**
 * Interface de dados do usuário
 */
export interface UserData {
  id: string;
  email: string;
  name: string;
  isLoggedIn: boolean;
  isAdmin: boolean;
  hasActiveSubscription: boolean;
  onboardingCompleted: boolean;
  loginDate: string;
}

/**
 * Interface de sessão
 */
export interface Session {
  user: UserData;
  token: string;
  expiresAt: string;
}

/**
 * Obter cookie por nome (funciona no cliente)
 */
function getCookie(name: string): string | null {
  if (typeof window === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  
  return null;
}

/**
 * Salvar sessão (agora usa cookies + localStorage como backup)
 */
export function setSession(userData: UserData): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Salvar no localStorage como backup (para compatibilidade)
    localStorage.setItem('levve_user', JSON.stringify(userData));
    localStorage.setItem('levve_session', 'active');
    
    console.log('[AUTH] ✅ SESSION_CREATED - Session saved (localStorage backup)', { 
      email: userData.email, 
      isAdmin: userData.isAdmin 
    });
  } catch (error) {
    console.error('[AUTH] Error saving session:', error);
  }
}

/**
 * Obter sessão atual (prioriza cookies, fallback para localStorage)
 */
export function getSession(): Session | null {
  if (typeof window === 'undefined') return null;
  
  try {
    // Tentar ler do cookie primeiro (fonte primária)
    const userCookie = getCookie('levve_user');
    const authCookie = getCookie('levve_auth');
    
    if (userCookie && authCookie === 'true') {
      const userData = JSON.parse(decodeURIComponent(userCookie)) as UserData;
      
      console.log('[AUTH] Session loaded from cookie', { 
        email: userData.email,
        isAdmin: userData.isAdmin,
        hasSubscription: userData.hasActiveSubscription
      });
      
      return {
        user: userData,
        token: `cookie_session_${Date.now()}`,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      };
    }
    
    // Fallback: tentar localStorage
    const userDataString = localStorage.getItem('levve_user');
    const sessionStatus = localStorage.getItem('levve_session');
    
    if (userDataString && sessionStatus === 'active') {
      const userData = JSON.parse(userDataString) as UserData;
      
      console.log('[AUTH] Session loaded from localStorage (fallback)', { 
        email: userData.email,
        isAdmin: userData.isAdmin,
        hasSubscription: userData.hasActiveSubscription
      });
      
      return {
        user: userData,
        token: `local_session_${Date.now()}`,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      };
    }
    
    console.log('[AUTH] No valid session found');
    return null;
  } catch (error) {
    console.error('[AUTH] Error getting session:', error);
    return null;
  }
}

/**
 * Verificar se há sessão válida
 */
export function hasValidSession(): boolean {
  const session = getSession();
  const isValid = session !== null && session.user.isLoggedIn;
  
  console.log('[AUTH] Session validation:', { 
    hasSession: !!session,
    isValid,
    isAuthenticated: isValid
  });
  
  return isValid;
}

/**
 * Limpar sessão (logout) - limpa cookies e localStorage
 */
export function clearSession(): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Limpar localStorage
    localStorage.removeItem('levve_user');
    localStorage.removeItem('levve_session');
    localStorage.removeItem('levve_token');
    
    // Limpar cookies (setando expiração no passado)
    document.cookie = 'levve_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'levve_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'levve_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'levve_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    console.log('[AUTH] Session cleared (cookies + localStorage)');
  } catch (error) {
    console.error('[AUTH] Error clearing session:', error);
  }
}

/**
 * Verifica se o usuário é administrador
 * Admin global: oficiallevve@gmail.com
 */
export function isAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  const isAdminUser = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  
  if (isAdminUser) {
    console.log('[AUTH] 🔑 ADMIN DETECTED:', email);
  }
  
  return isAdminUser;
}

/**
 * Verifica se o usuário tem acesso a uma rota protegida
 * Administradores têm acesso total, usuários comuns precisam de assinatura ativa
 */
export function hasAccess(email: string | null | undefined, hasActiveSubscription: boolean = false): boolean {
  // Admin sempre tem acesso total
  if (isAdmin(email)) {
    console.log('[AUTH] 🔑 ADMIN - Full access granted');
    return true;
  }
  
  // Usuários comuns precisam de assinatura ativa
  const access = hasActiveSubscription;
  console.log('[AUTH] User access check:', { email, hasActiveSubscription, hasAccess: access });
  return access;
}

/**
 * Verifica se deve mostrar paywall para o usuário
 * Admin nunca vê paywall
 */
export function shouldShowPaywall(email: string | null | undefined, hasActiveSubscription: boolean = false): boolean {
  // Admin nunca vê paywall
  if (isAdmin(email)) {
    console.log('[AUTH] 🔑 ADMIN - No paywall');
    return false;
  }
  
  // Usuários comuns veem paywall se não tiverem assinatura
  const showPaywall = !hasActiveSubscription;
  console.log('[AUTH] Paywall check:', { email, hasActiveSubscription, showPaywall });
  return showPaywall;
}

/**
 * Verifica se deve redirecionar para checkout
 * Admin nunca é redirecionado
 */
export function shouldRedirectToCheckout(email: string | null | undefined, hasActiveSubscription: boolean = false): boolean {
  // Admin nunca é redirecionado
  if (isAdmin(email)) {
    console.log('[AUTH] 🔑 ADMIN - No checkout redirect');
    return false;
  }
  
  // Usuários comuns são redirecionados se não tiverem assinatura
  const shouldRedirect = !hasActiveSubscription;
  console.log('[AUTH] Checkout redirect check:', { email, hasActiveSubscription, shouldRedirect });
  return shouldRedirect;
}
