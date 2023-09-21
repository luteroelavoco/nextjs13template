import { User } from '@/types/user'

const checkWindow = () => typeof window !== 'undefined'

export const saveUser = (user: User) => {
  if (checkWindow()) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export const removeUser = () => {
  if (checkWindow()) {
    localStorage.removeItem('user')
  }
}

export const getUser = (): User | null => {
  if (checkWindow()) {
    const savedUser = localStorage.getItem('user')
    if (savedUser) return JSON.parse(savedUser)
  }
  return null
}
