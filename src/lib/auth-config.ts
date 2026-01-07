/**
 * 🔧 CONFIGURAÇÃO DE AUTENTICAÇÃO - TOGGLE CENTRAL
 * 
 * Este arquivo controla o comportamento de autenticação do sistema.
 * Altere BYPASS_AUTH para ativar/desativar proteção de rotas.
 */

/**
 * 🚨 BYPASS_AUTH - INTERRUPTOR PRINCIPAL
 * 
 * true  = LOGIN DESATIVADO (acesso total a todas as páginas)
 * false = LOGIN ATIVO (proteção aplicada normalmente)
 * 
 * IMPORTANTE: 
 * - Home, quiz, planos e checkout são SEMPRE públicos (não afeta conversão)
 * - Este flag controla apenas rotas protegidas (/dashboard, /app/*, etc)
 */
export const BYPASS_AUTH = true;

/**
 * Rotas que são SEMPRE públicas (independente do BYPASS_AUTH)
 * Estas rotas nunca exigem autenticação para garantir conversão
 */
export const ALWAYS_PUBLIC_ROUTES = [
  '/',
  '/login',
  '/signup',
  '/create-account',
  '/forgot-password',
  '/reset-password',
  '/privacy-policy',
  '/terms-of-use',
  '/privacidade',
  '/termos',
  '/contato',
  '/planos',
  '/quiz-start',
  '/quiz',
  '/resultado',
  '/checkout', // SEMPRE público para conversão
];

/**
 * Rotas que podem ser liberadas com BYPASS_AUTH
 * Quando BYPASS_AUTH = true, estas rotas ficam acessíveis sem login
 */
export const BYPASSABLE_ROUTES = [
  '/dashboard',
  '/onboarding',
  '/welcome',
  '/boas-vindas',
  '/boas-lindas',
  '/loja',
  '/alimentos',
  '/app',
];

/**
 * Verifica se uma rota deve ser pública
 */
export function isPublicRoute(pathname: string): boolean {
  // Sempre público
  const isAlwaysPublic = ALWAYS_PUBLIC_ROUTES.some(
    route => pathname === route || pathname.startsWith(route + '/')
  );
  
  if (isAlwaysPublic) return true;
  
  // Se BYPASS_AUTH está ativo, rotas bypassáveis também são públicas
  if (BYPASS_AUTH) {
    const isBypassable = BYPASSABLE_ROUTES.some(
      route => pathname === route || pathname.startsWith(route + '/')
    );
    return isBypassable;
  }
  
  return false;
}

/**
 * Verifica se deve aplicar proteção de autenticação
 */
export function shouldProtectRoute(pathname: string): boolean {
  // Se é rota pública, não protege
  if (isPublicRoute(pathname)) return false;
  
  // Se BYPASS_AUTH está ativo, não protege nenhuma rota
  if (BYPASS_AUTH) return false;
  
  // Caso contrário, protege
  return true;
}
