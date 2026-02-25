import { useQueryClient } from '@tanstack/vue-query'
import type { IMovieNormalized } from '@/utils/types/movie'
import { addBookmark, removeBookmark } from '@/api/services/bookmarks.api'

export function useBookmark() {
  const queryClient = useQueryClient()

  const toggleBookmark = async (movieId: string) => {
    const movies = queryClient.getQueryData<IMovieNormalized[]>(['movies'])

    if (!movies) return

    const targetMovie = movies.find((m) => m.id === movieId)
    if (!targetMovie) return

    const isCurrentlyBookmarked = targetMovie.isBookmarked

    queryClient.setQueryData<IMovieNormalized[]>(['movies'], (oldData) => {
      if (!oldData) return oldData

      return oldData.map((movie) =>
        movie.id === movieId ? { ...movie, isBookmarked: !isCurrentlyBookmarked } : movie,
      )
    })

    if (isCurrentlyBookmarked) {
      await removeBookmark(movieId)
    } else {
      await addBookmark(movieId)
    }
  }

  return { toggleBookmark }
}
