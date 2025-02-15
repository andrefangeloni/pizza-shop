import { api } from './api'

type GetProfileResponse = {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async () => {
  const { data } = await api.get<GetProfileResponse>('/me')

  return data || {}
}
