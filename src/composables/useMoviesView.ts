import { useMovies } from '@/api/queries/useMovies'
import type { CategoryType } from '@/utils/types/category'
import { searchQuery } from '@/composables/useSearch'
import { computed } from 'vue'

export function useMoviesView(options: {
  category?: CategoryType
  onlyBookmarked?: boolean
  title?: string
}) {
  const { data, isLoading, isError, error } = useMovies()

  const baseFiltered = computed(() => {
    if (!data.value) return []

    let result = data.value

    if (options.category) {
      result = result.filter((movie) => movie.movieInfo.category === options.category)
    }

    if (options.onlyBookmarked) {
      result = result.filter((movie) => movie.isBookmarked)
    }

    return result
  })

  const filteredMovies = computed(() => {
    if (!searchQuery.value.trim()) {
      return baseFiltered.value
    }

    return baseFiltered.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.value.trim().toLowerCase()),
    )
  })

  const swiperData = computed(() => filteredMovies.value.filter((movie) => movie.isTrending))

  const titleText = computed(() => {
    if (!searchQuery.value.trim()) {
      return options.title ?? 'Recommended for you'
    }
    return `Found ${filteredMovies.value.length} results for '${searchQuery.value.trim()}'`
  })

  return {
    isLoading,
    isError,
    error,
    titleText,
    filteredMovies,
    searchQuery,
    swiperData,
  }
}
