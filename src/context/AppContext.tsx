import React, { createContext, useContext, useState } from 'react'

import { useRouter } from 'next/navigation'
import { User } from '@/types/user'
import { getUser, removeUser, saveUser } from '@/utils/user'
import * as fakeApi from '@/service/fakeApi'

interface AppContextType {
  user: User | undefined
  search: string
  handleSearch: (search: string) => void
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  getLoggedUser: () => Promise<void>
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>()
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const login = async (email: string, password: string) => {
    return fakeApi.login(email, password).then(user => {
      setUser(user as User)
      saveUser(user as User)
    })
  }

  const logout = () => {
    removeUser()
    setUser(undefined)
    router.push('/login')
  }

  const getLoggedUser = async () => {
    if (user) return
    const savedUser = getUser()
    if (!savedUser) {
      router.push('/login')
      return
    }
    setUser(savedUser)
  }

  const handleSearch = (search = '') => {
    setSearch(search)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        getLoggedUser,
        handleSearch,
        search
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  const { user, login, logout, getLoggedUser, handleSearch, search } = context
  return {
    user,
    login,
    logout,
    getLoggedUser,
    handleSearch,
    search
  }
}
