import { api } from '../configs/api'

export const addBookmark = async (movieId: string) => {
  const response = await api.post('/user/add_bookmark', { movieId })
  return response.data
}

export const removeBookmark = async (movieId: string) => {
  const response = await api.delete(`/user/remove_bookmark/${movieId}`)
  return response.data
}
