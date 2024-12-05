import { api } from './api'

type RegisterRestaurantBody = {
  email: string
  phone: string
  managerName: string
  restaurantName: string
}

export const registerRestaurant = async ({
  email,
  phone,
  managerName,
  restaurantName,
}: RegisterRestaurantBody) => {
  await api.post('/restaurants', {
    email,
    phone,
    managerName,
    restaurantName,
  })
}
