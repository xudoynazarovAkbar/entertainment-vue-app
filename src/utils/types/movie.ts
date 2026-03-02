import { type CategoryType } from './category'

export interface IMovieNormalized {
  id: string
  image: string
  title: string
  isBookmarked: boolean
  isTrending: boolean
  movieInfo: {
    category: CategoryType
    year: number
    extraInfo: string
  }
}

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
  category: CategoryType
  rating: string
  isBookmarked: boolean
  isTrending: boolean
}
