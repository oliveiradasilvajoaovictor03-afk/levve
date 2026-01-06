/**
 * Sistema de banco de dados em memória (simulação)
 * Em produção, substituir por banco real (Supabase, PostgreSQL, etc.)
 */

// TODO: Voltar a usar bcryptjs quando o ambiente permitir
// import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'user' | 'admin';
  hasActiveSubscription: boolean;
  onboardingCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PasswordResetToken {
  email: string;
  code: string;
  expiresAt: string;
}

// Banco de dados em memória
const users: Map<string, User> = new Map();
const resetTokens: Map<string, PasswordResetToken> = new Map();

/**
 * FALLBACK TEMPORÁRIO: Hash simples para destravar preview
 * TODO: Voltar a usar bcrypt.hash quando ambiente permitir
 */
async function simpleHash(password: string): Promise<string> {
  return `hash_${password}`;
}

/**
 * FALLBACK TEMPORÁRIO: Comparação simples para destravar preview
 * TODO: Voltar a usar bcrypt.compare quando ambiente permitir
 */
async function simpleCompare(password: string, hash: string): Promise<boolean> {
  return hash === `hash_${password}`;
}

/**
 * Inicializar admin se não existir
 */
export async function ensureAdminExists(): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL || 'oficiallevve@gmail.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Levve@2026#Forte';

  // Verificar se admin já existe
  const existingAdmin = Array.from(users.values()).find(
    (u) => u.email.toLowerCase() === adminEmail.toLowerCase()
  );

  if (existingAdmin) {
    // Garantir que tem role admin
    if (existingAdmin.role !== 'admin') {
      existingAdmin.role = 'admin';
      existingAdmin.hasActiveSubscription = true;
      existingAdmin.updatedAt = new Date().toISOString();
      console.log('[DB] ✅ Admin role updated for:', adminEmail);
    }
    return;
  }

  // Criar admin
  const passwordHash = await simpleHash(adminPassword);
  const admin: User = {
    id: `admin_${Date.now()}`,
    name: 'Admin Levve',
    email: adminEmail,
    passwordHash,
    role: 'admin',
    hasActiveSubscription: true,
    onboardingCompleted: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  users.set(admin.email.toLowerCase(), admin);
  console.log('[DB] ✅ Admin created:', adminEmail);
}

/**
 * Criar usuário
 */
export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const emailLower = email.toLowerCase();

  // Verificar se usuário já existe
  if (users.has(emailLower)) {
    throw new Error('Usuário já existe');
  }

  // Hash da senha
  const passwordHash = await simpleHash(password);

  // Criar usuário
  const user: User = {
    id: `user_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    name,
    email,
    passwordHash,
    role: 'user',
    hasActiveSubscription: false,
    onboardingCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  users.set(emailLower, user);
  console.log('[DB] ✅ User created:', email);

  return user;
}

/**
 * Buscar usuário por email
 */
export function getUserByEmail(email: string): User | null {
  return users.get(email.toLowerCase()) || null;
}

/**
 * Validar credenciais
 */
export async function validateCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const user = getUserByEmail(email);
  if (!user) {
    console.log('[DB] ❌ User not found:', email);
    return null;
  }

  const isValid = await simpleCompare(password, user.passwordHash);
  if (!isValid) {
    console.log('[DB] ❌ Invalid password for:', email);
    return null;
  }

  console.log('[DB] ✅ Credentials valid for:', email);
  return user;
}

/**
 * Atualizar usuário
 */
export function updateUser(email: string, updates: Partial<User>): User | null {
  const user = getUserByEmail(email);
  if (!user) {
    return null;
  }

  Object.assign(user, updates, {
    updatedAt: new Date().toISOString(),
  });

  users.set(email.toLowerCase(), user);
  console.log('[DB] ✅ User updated:', email);

  return user;
}

/**
 * Criar token de reset de senha
 */
export function createPasswordResetToken(email: string): string {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 minutos

  const token: PasswordResetToken = {
    email: email.toLowerCase(),
    code,
    expiresAt,
  };

  resetTokens.set(email.toLowerCase(), token);
  console.log('[DB] ✅ Reset token created for:', email);

  return code;
}

/**
 * Validar token de reset de senha
 */
export function validatePasswordResetToken(
  email: string,
  code: string
): boolean {
  const token = resetTokens.get(email.toLowerCase());
  if (!token) {
    console.log('[DB] ❌ No reset token found for:', email);
    return false;
  }

  if (new Date(token.expiresAt) < new Date()) {
    console.log('[DB] ❌ Reset token expired for:', email);
    resetTokens.delete(email.toLowerCase());
    return false;
  }

  if (token.code !== code) {
    console.log('[DB] ❌ Invalid reset code for:', email);
    return false;
  }

  console.log('[DB] ✅ Reset token valid for:', email);
  return true;
}

/**
 * Resetar senha
 */
export async function resetPassword(
  email: string,
  code: string,
  newPassword: string
): Promise<boolean> {
  if (!validatePasswordResetToken(email, code)) {
    return false;
  }

  const user = getUserByEmail(email);
  if (!user) {
    return false;
  }

  const passwordHash = await simpleHash(newPassword);
  user.passwordHash = passwordHash;
  user.updatedAt = new Date().toISOString();

  users.set(email.toLowerCase(), user);
  resetTokens.delete(email.toLowerCase());

  console.log('[DB] ✅ Password reset for:', email);
  return true;
}

// Inicializar admin ao carregar o módulo
ensureAdminExists().catch(console.error);
