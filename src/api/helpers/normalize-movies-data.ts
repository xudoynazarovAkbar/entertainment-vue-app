import type { IMovieNormalized, IMovieRaw } from '@/utils/types/movie'
import { normalizeMovieData } from './normalize-movie-data'

export function normalizeMoviesData(data: IMovieRaw[]): IMovieNormalized[] {
  return data.map(normalizeMovieData)
}
