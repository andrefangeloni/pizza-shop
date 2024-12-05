import { api } from './api'

type UpdateProfileBody = {
  name: string
  description: string
}

export const updateProfile = async ({
  name,
  description,
}: UpdateProfileBody) => {
  await api.put('/profile', {
    name,
    description,
  })
}
