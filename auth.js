// auth.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Substitua pelos seus dados reais do Supabase (Dashboard > Project Settings > API)
const SUPABASE_URL = 'https://mrparduxlvvflasgefpt.supabase.co' // Exemplo baseado na sua URL
const SUPABASE_ANON_KEY = 'SUA_CHAVE_ANON_AQUI' 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// --- Funções de Autenticação ---

export async function signUp(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  })
  return { data, error }
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (!error) {
    window.location.href = 'login.html'
  }
  return { error }
}

// --- Proteção de Rotas (Middleware Simples) ---

// Use esta função no topo do dashboard.html para bloquear acesso não autorizado
export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    // Se não tiver sessão, manda para o login
    window.location.href = 'login.html'
    return null
  }
  
  return session
}

// Função auxiliar para pegar o usuário logado em qualquer lugar
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
