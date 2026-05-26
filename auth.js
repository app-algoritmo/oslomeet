// auth.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Substitua pelos seus dados reais do Supabase (Dashboard > Project Settings > API)
const SUPABASE_URL = 'https://mrparduxlvyflasgefpt.supabase.co' // Exemplo baseado na sua URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ycGFyZHV4bHZ5Zmxhc2dlZnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzE4NDUsImV4cCI6MjA5NTEwNzg0NX0.JXlq6E4t2iD_tvtlXhwVtE_oQBsgPP3QrIPi2UULji0' 

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
