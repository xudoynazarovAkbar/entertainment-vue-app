import { api } from '@/api/configs/api'
import { normalizeMoviesData } from '../helpers/normalize-movies-data'

export const getMovies = async () => {
  const response = await api.get('/movies')
  return normalizeMoviesData(response.data)
}
