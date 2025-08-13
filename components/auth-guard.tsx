"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

const CORRECT_PASSWORD = "hclick@828"
const AUTH_KEY = "gallery_authenticated"

interface AuthGuardProps {
  children: React.ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem(AUTH_KEY)
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem(AUTH_KEY, "true")
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
              <Lock className="h-6 w-6 text-violet-600" />
            </div>
            <CardTitle className="font-serif text-2xl">Access Required</CardTitle>
            <CardDescription className="font-sans">Enter the password to view the photo gallery</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-sans"
                  autoFocus
                />
                {error && <p className="text-sm text-red-600 mt-2 font-sans">{error}</p>}
              </div>
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 font-sans font-medium">
                Enter Gallery
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
