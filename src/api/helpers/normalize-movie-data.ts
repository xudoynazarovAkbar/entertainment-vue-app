import type { IMovieNormalized, IMovieRaw } from '@/utils/types/movie'

export function normalizeMovieData(movie: IMovieRaw): IMovieNormalized {
  return {
    id: movie._id,
    isTrending: movie.isTrending,
    image: movie.thumbnail.regular.medium,
    title: movie.title,
    isBookmarked: movie.isBookmarked,
    movieInfo: {
      year: movie.year,
      extraInfo: movie.rating,
      category: movie.category,
    },
  }
}
