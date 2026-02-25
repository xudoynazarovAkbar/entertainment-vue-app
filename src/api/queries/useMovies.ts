import { useQuery } from '@tanstack/vue-query'
import { getMovies } from '@/api/services/movies.api'

export function useMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  })
}
