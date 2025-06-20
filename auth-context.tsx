"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type User, type AuthState, signOut as authSignOut } from "@/lib/auth"

interface AuthContextType extends AuthState {
  signIn: (user: User) => void
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = (user: User) => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const signOut = async () => {
    await authSignOut()
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
