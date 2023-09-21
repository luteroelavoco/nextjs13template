export type User = {
  _id?: string
  firstName: string
  lastName: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
  password?: string
}
