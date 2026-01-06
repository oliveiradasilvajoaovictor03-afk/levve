import { NextRequest, NextResponse } from 'next/server';
import { createUser, ensureAdminExists } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Garantir que admin existe
    await ensureAdminExists();

    const body = await request.json();
    let { name, email, password } = body;

    console.log('[SIGNUP API] Signup attempt:', { name, email });

    // Trim dos valores
    name = name?.trim();
    email = email?.trim();
    password = password?.trim();

    // Validação básica
    if (!name || !email || !password) {
      console.log('[SIGNUP API] ❌ Missing fields');
      return NextResponse.json(
        { success: false, message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[SIGNUP API] ❌ Invalid email format');
      return NextResponse.json(
        { success: false, message: 'Formato de e-mail inválido' },
        { status: 400 }
      );
    }

    // Validação de senha
    if (password.length < 6) {
      console.log('[SIGNUP API] ❌ Password too short');
      return NextResponse.json(
        { success: false, message: 'A senha deve ter pelo menos 6 caracteres' },
        { status: 400 }
      );
    }

    // Criar usuário
    let user;
    try {
      user = await createUser(name, email, password);
    } catch (error: any) {
      console.log('[SIGNUP API] ❌ User creation failed:', error.message);
      return NextResponse.json(
        { success: false, message: error.message || 'Erro ao criar usuário' },
        { status: 400 }
      );
    }

    console.log('[SIGNUP API] ✅ User created successfully');

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

    console.log('[SIGNUP API] ✅ SIGNUP_SUCCESS - User data created:', { 
      email: userData.email, 
      isAdmin: userData.isAdmin
    });

    // Criar resposta com cookie httpOnly
    const response = NextResponse.json(
      {
        success: true,
        message: 'Conta criada com sucesso',
        user: userData,
        token: sessionToken,
      },
      { status: 201 }
    );

    // Detectar ambiente
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Configuração de cookies
    const cookieOptions = {
      httpOnly: true,
      secure: !isDevelopment,
      sameSite: 'lax' as const,
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    };

    console.log('[SIGNUP API] ✅ SESSION_CREATED - Setting cookies');

    // Cookie principal de autenticação
    response.cookies.set('levve_auth', 'true', cookieOptions);

    // Cookie com dados do usuário
    response.cookies.set('levve_user', JSON.stringify(userData), {
      ...cookieOptions,
      httpOnly: false,
    });

    // Cookie com token de sessão
    response.cookies.set('levve_token', sessionToken, cookieOptions);

    console.log('[SIGNUP API] ✅ Cookies set successfully');

    return response;

  } catch (error) {
    console.error('[SIGNUP API] ❌ Signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
