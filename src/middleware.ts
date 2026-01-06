import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log('=== MIDDLEWARE EXECUTADO ===');
  console.log('[MIDDLEWARE] currentRoute:', pathname);

  // Permitir acesso a assets, API routes e arquivos estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Verificar se usuário está autenticado (via cookie)
  const authCookie = request.cookies.get('levve_auth');
  const tokenCookie = request.cookies.get('levve_token');
  const isAuthenticated = authCookie?.value === 'true' && !!tokenCookie;

  // Verificar se é administrador (via cookie)
  const adminCookie = request.cookies.get('levve_admin');
  const isAdminUser = adminCookie?.value === 'true';

  // Obter dados do usuário do cookie
  const userCookie = request.cookies.get('levve_user');
  let hasActivePlan = false;
  
  if (userCookie?.value) {
    try {
      const userData = JSON.parse(decodeURIComponent(userCookie.value));
      hasActivePlan = userData?.hasActiveSubscription || false;
    } catch (error) {
      console.error('[MIDDLEWARE] Error parsing user cookie:', error);
    }
  }

  console.log('[MIDDLEWARE] Auth status:', {
    isAuthenticated,
    isAdmin: isAdminUser,
    hasActivePlan,
    currentRoute: pathname
  });

  // ROTAS PÚBLICAS (não precisam de autenticação)
  const publicRoutes = [
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
    '/onboarding',
    '/welcome',
    '/boas-vindas',
    '/boas-lindas',
    '/teste',
  ];

  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/'));

  // 🔑 ADMIN: Acesso total sem restrições
  if (isAdminUser && isAuthenticated) {
    console.log('[MIDDLEWARE] 🔑 ADMIN ACCESS - Full access granted to:', pathname);
    console.log('[MIDDLEWARE] ✅ MIDDLEWARE_AUTH_OK (Admin)');
    
    // Se admin está em /login, redirecionar para /dashboard
    if (pathname === '/login') {
      console.log('[MIDDLEWARE] 🔑 ADMIN in /login, redirecting to /dashboard');
      console.log('[MIDDLEWARE] redirectTarget: /dashboard');
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    return NextResponse.next();
  }

  // REDIRECIONAMENTO: Se está em /login e JÁ está autenticado -> redirecionar
  if (pathname === '/login' && isAuthenticated) {
    console.log('[MIDDLEWARE] ✅ Already authenticated, redirecting from /login');
    
    // Determinar destino baseado no plano
    const redirectTarget = hasActivePlan ? '/dashboard' : '/checkout';
    console.log('[MIDDLEWARE] redirectTarget:', redirectTarget);
    console.log('[MIDDLEWARE] ✅ REDIRECT_TO_DASHBOARD');
    
    return NextResponse.redirect(new URL(redirectTarget, request.url));
  }

  // PROTEÇÃO: Se está tentando acessar /app/* e NÃO está autenticado -> redirecionar para /login
  if (pathname.startsWith('/app') && !isAuthenticated) {
    console.log('[MIDDLEWARE] ❌ Not authenticated, redirecting to /login (protected route /app/*)');
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // PROTEÇÃO: Se está tentando acessar /dashboard e NÃO está autenticado -> redirecionar para /login
  if (pathname === '/dashboard' && !isAuthenticated) {
    console.log('[MIDDLEWARE] ❌ Not authenticated, redirecting to /login (protected route /dashboard)');
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // PROTEÇÃO: Se está tentando acessar /dashboard e NÃO tem plano ativo (e não é admin) -> redirecionar para /checkout
  if (pathname === '/dashboard' && isAuthenticated && !isAdminUser && !hasActivePlan) {
    console.log('[MIDDLEWARE] ⚠️ User without active plan, redirecting to /checkout');
    console.log('[MIDDLEWARE] redirectTarget: /checkout');
    return NextResponse.redirect(new URL('/checkout', request.url));
  }

  // Permitir acesso normal a rotas públicas
  if (isPublicRoute) {
    console.log('[MIDDLEWARE] ✅ Public route, allowing access to:', pathname);
    return NextResponse.next();
  }

  // Permitir acesso normal a usuários autenticados
  if (isAuthenticated) {
    console.log('[MIDDLEWARE] ✅ MIDDLEWARE_AUTH_OK - Authenticated user, allowing access to:', pathname);
    return NextResponse.next();
  }

  // Se chegou aqui e não está autenticado, redirecionar para login
  console.log('[MIDDLEWARE] ❌ Not authenticated, redirecting to /login');
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}

// Configurar quais rotas o middleware deve processar
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
