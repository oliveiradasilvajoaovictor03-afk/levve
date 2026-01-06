import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, createPasswordResetToken } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    console.log('[FORGOT-PASSWORD] Request for:', email);

    // Validação básica
    if (!email) {
      console.log('[FORGOT-PASSWORD] Missing email');
      return NextResponse.json(
        { success: false, message: 'E-mail é obrigatório' },
        { status: 400 }
      );
    }

    // Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[FORGOT-PASSWORD] Invalid email format');
      return NextResponse.json(
        { success: false, message: 'Formato de e-mail inválido' },
        { status: 400 }
      );
    }

    // Verificar se usuário existe
    const user = getUserByEmail(email);
    if (!user) {
      console.log('[FORGOT-PASSWORD] User not found');
      // Por segurança, não revelar se o usuário existe ou não
      return NextResponse.json(
        {
          success: true,
          message: 'Se o e-mail existir, você receberá um código de recuperação',
        },
        { status: 200 }
      );
    }

    // Gerar código de reset
    const resetCode = createPasswordResetToken(email);
    console.log('[FORGOT-PASSWORD] Reset code generated:', resetCode);

    // Detectar ambiente
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Em desenvolvimento, retornar o código na resposta
    if (isDevelopment) {
      console.log('[FORGOT-PASSWORD] 🔧 DEV MODE - Returning code in response');
      console.log('[FORGOT-PASSWORD] 🔑 CÓDIGO DE RESET:', resetCode);
      
      return NextResponse.json(
        {
          success: true,
          message: 'Código de recuperação gerado (modo DEV)',
          devCode: resetCode,
          devMode: true,
        },
        { status: 200 }
      );
    }

    // Em produção, enviar e-mail (TODO: implementar SMTP)
    // Por enquanto, apenas simular envio
    console.log('[FORGOT-PASSWORD] Code sent successfully (simulated)');

    return NextResponse.json(
      {
        success: true,
        message: 'Código de recuperação enviado com sucesso',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[FORGOT-PASSWORD] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
