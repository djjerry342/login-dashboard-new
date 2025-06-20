export interface User {
  id: string
  email: string
  name: string
}

export interface AuthState {
  user: User | null
  isLoading: boolean
}

// Mock authentication - replace with your actual auth logic
export async function signIn(email: string, password: string): Promise<User> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock validation
  if (email === "eddy@yopmail.com" && password === "123123") {
    return {
      id: "1",
      email: "eddy@yopmail.com",
      name: "Admin User",
    }
  }

  throw new Error("Invalid credentials")
}

export async function signOut(): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))
}
