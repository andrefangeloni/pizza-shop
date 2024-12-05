import { api } from './api'

type SignInBody = {
  email: string
}

export const signIn = async ({ email }: SignInBody) => {
  await api.post('/authenticate', { email })
}
