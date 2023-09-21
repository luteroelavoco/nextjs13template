import user from '@/static/user.json'

const STATIC_EMAIL = 'teste@gmail.com'
const STATIC_PASSWORD = '123456'

export const login = async (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === STATIC_EMAIL && password === STATIC_PASSWORD)
        return resolve(user)
      return reject(null)
    }, 2000)
  })
}
