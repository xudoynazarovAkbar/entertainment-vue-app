export type CategoryNormalizedType = 'movie' | 'tvSeries'

export interface IMovieNormalized {
  id: string
  image: string
  title: string
  isBookmarked: boolean
  isTrending: boolean
  movieInfo: {
    category: CategoryNormalizedType
    year: number
    extraInfo: string
  }
}

export type CategoryRawType = 'Movie' | 'TV Series'

export interface IMovieRaw {
  thumbnail: {
    regular: {
      large: string
      medium: string
      small: string
    }
  }
  _id: string
  title: string
  year: number
  category: CategoryRawType
  rating: string
  isBookmarked: boolean
  isTrending: boolean
}
