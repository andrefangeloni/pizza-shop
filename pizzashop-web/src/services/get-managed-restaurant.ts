import { api } from './api'

export type GetManagedRestaurantResponse = {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string
  managerId: string | null
}

export const getManagedRestaurant = async () => {
  const { data } = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return data || {}
}
