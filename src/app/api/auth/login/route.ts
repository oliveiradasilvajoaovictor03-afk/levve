import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth';
import { validateCredentials, ensureAdminExists } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Garantir que admin existe
    await ensureAdminExists();

    const body = await request.json();
    let { email, password } = body;

    console.log('=== API LOGIN INICIADA ===');
    console.log('[AUTH API] Login attempt:', { email });

    // Trim dos valores
    email = email?.trim();
    password = password?.trim();

    // Validação básica
    if (!email || !password) {
      console.log('[AUTH API] ❌ Missing credentials');
      return NextResponse.json(
        { success: false, message: 'E-mail e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[AUTH API] ❌ Invalid email format');
      return NextResponse.json(
        { success: false, message: 'Formato de e-mail inválido' },
        { status: 400 }
      );
    }

    // Verificar se é administrador
    const isAdminUser = isAdmin(email);
    
    console.log('[AUTH API] Validating credentials...');

    // Validar credenciais no banco de dados
    const user = await validateCredentials(email, password);

    if (!user) {
      console.log('[AUTH API] ❌ Invalid credentials');
      return NextResponse.json(
        { success: false, message: 'E-mail ou senha incorretos' },
        { status: 401 }
      );
    }

    console.log('[AUTH API] ✅ Authentication successful');

    // Criar token de sessão
    const sessionToken = `levve_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Criar dados do usuário
    const userData = {
      id: user.id,
      email: user.email,
      name: user.name,
      isLoggedIn: true,
      isAdmin: user.role === 'admin',
      hasActiveSubscription: user.hasActiveSubscription,
      onboardingCompleted: user.onboardingCompleted,
      loginDate: new Date().toISOString(),
    };

    console.log('[AUTH API] ✅ LOGIN_SUCCESS - User data created:', { 
      email: userData.email, 
      isAdmin: userData.isAdmin,
      hasActiveSubscription: userData.hasActiveSubscription
    });

    // Criar resposta com cookie httpOnly
    const response = NextResponse.json(
      {
        success: true,
        message: 'Login realizado com sucesso',
        user: userData,
        token: sessionToken,
      },
      { status: 200 }
    );

    // Detectar ambiente
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    console.log('[AUTH API] Environment:', { 
      NODE_ENV: process.env.NODE_ENV,
      isDevelopment
    });

    // Configuração de cookies
    const cookieOptions = {
      httpOnly: true,
      secure: !isDevelopment, // secure=false em dev, true em prod
      sameSite: 'lax' as const,
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    };

    console.log('[AUTH API] ✅ SESSION_CREATED - Setting cookies with options:', cookieOptions);

    // Cookie principal de autenticação
    response.cookies.set('levve_auth', 'true', cookieOptions);

    // Cookie com dados do usuário (para leitura no cliente)
    response.cookies.set('levve_user', JSON.stringify(userData), {
      ...cookieOptions,
      httpOnly: false, // Permitir leitura no cliente
    });

    // Cookie com token de sessão
    response.cookies.set('levve_token', sessionToken, cookieOptions);

    // Cookie adicional para identificar admin
    if (userData.isAdmin) {
      response.cookies.set('levve_admin', 'true', cookieOptions);
      console.log('[AUTH API] 🔑 Admin cookie set - Full access granted');
    }

    console.log('[AUTH API] ✅ Cookies set successfully - Authentication complete');
    console.log('[AUTH API] Response ready:', {
      success: true,
      hasUser: !!userData,
      hasToken: !!sessionToken,
      cookiesSet: true,
      isAdmin: userData.isAdmin,
      redirectTarget: userData.isAdmin ? '/dashboard' : (userData.hasActiveSubscription ? '/dashboard' : '/checkout')
    });

    return response;

  } catch (error) {
    console.error('[AUTH API] ❌ Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
