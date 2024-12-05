import { api } from './api'

export const signOut = async () => {
  await api.post('/sign-out')
}
