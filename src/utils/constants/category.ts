import MovieIcon from '@/assets/icons/nav/movies.svg'
import TvSeriesIcon from '@/assets/icons/nav/tv-series.svg'

export const MOVIE_CATEGORY = 'Movie' as const
export const TV_SERIES_CATEGORY = 'TV Series' as const

export const CATEGORY_MAP = {
  [MOVIE_CATEGORY]: {
    icon: MovieIcon,
    label: MOVIE_CATEGORY,
  },
  [TV_SERIES_CATEGORY]: {
    icon: TvSeriesIcon,
    label: TV_SERIES_CATEGORY,
  },
} as const
