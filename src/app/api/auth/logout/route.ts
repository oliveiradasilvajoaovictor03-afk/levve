import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('[AUTH API] Logout request');

    // Criar resposta
    const response = NextResponse.json(
      {
        success: true,
        message: 'Logout realizado com sucesso',
      },
      { status: 200 }
    );

    // Remover cookies de autenticação
    response.cookies.set('levve_auth', '', {
      httpOnly: true,
      secure: (process.env.NODE_ENV ?? 'production') === 'production',
      sameSite: 'lax',
      maxAge: 0, // Expira imediatamente
      path: '/',
    });

    response.cookies.set('levve_admin', '', {
      httpOnly: true,
      secure: (process.env.NODE_ENV ?? 'production') === 'production',
      sameSite: 'lax',
      maxAge: 0, // Expira imediatamente
      path: '/',
    });

    console.log('[AUTH API] ✅ Logout completed successfully, cookies cleared');

    return response;

  } catch (error) {
    console.error('[AUTH API] Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
