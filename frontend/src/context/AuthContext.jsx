import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

function decodeToken(token) {
  try {
    const parts = token.split('.')

    if (parts.length !== 3) {
      return null
    }

    const payload = parts[1]

    const base64 = payload
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const decodedPayload = JSON.parse(atob(base64))

    return decodedPayload
  } catch {
    return null
  }
}

function getStoredUser(token) {
  if (!token) {
    return null
  }

  const decodedUser = decodeToken(token)

  if (!decodedUser) {
    return null
  }

  if (
    decodedUser.exp &&
    decodedUser.exp * 1000 <= Date.now()
  ) {
    return null
  }

  return decodedUser
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() =>
    localStorage.getItem('pulsecart_token'),
  )

  const [user, setUser] = useState(() => {
    const storedToken =
      localStorage.getItem('pulsecart_token')

    return getStoredUser(storedToken)
  })

  useEffect(() => {
    const storedToken =
      localStorage.getItem('pulsecart_token')

    if (!storedToken) {
      setToken(null)
      setUser(null)
      return
    }

    const storedUser = getStoredUser(storedToken)

    if (!storedUser) {
      localStorage.removeItem('pulsecart_token')
      setToken(null)
      setUser(null)
      return
    }

    setToken(storedToken)
    setUser(storedUser)
  }, [])

  const login = (newToken) => {
    const decodedUser = getStoredUser(newToken)

    if (!decodedUser) {
      return false
    }

    localStorage.setItem(
      'pulsecart_token',
      newToken,
    )

    setToken(newToken)
    setUser(decodedUser)

    return true
  }

  const logout = () => {
    localStorage.removeItem('pulsecart_token')
    setToken(null)
    setUser(null)
  }

  const isAuthenticated =
    Boolean(token && user)

  const value = {
    token,
    user,
    isAuthenticated,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuth must be used inside an AuthProvider',
    )
  }

  return context
}