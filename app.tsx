"use client"

import { AuthProvider, useAuth } from "@/contexts/auth-context"
import { LoginForm } from "@/components/login-form"
import { Dashboard } from "@/components/dashboard"
import { Loader2 } from "lucide-react"

function AppContent() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return user ? <Dashboard /> : <LoginForm />
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
