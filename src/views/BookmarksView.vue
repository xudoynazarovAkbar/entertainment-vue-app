<script setup lang="ts">
import MoviesList from '@/components/widgets/MoviesList/MoviesList.vue'
import { useMoviesView } from '@/composables/useMoviesView'

const movies = useMoviesView({
  category: 'movie',
  title: 'Bookmarked Movies',
  onlyBookmarked: true,
})
const tvSeries = useMoviesView({
  category: 'tvSeries',
  title: 'Bookmarked TV Series',
  onlyBookmarked: true,
})
</script>

<template>
  <div class="mb-40">
    <div v-if="movies.isLoading.value">
      <MyTitle type="large">Loading...</MyTitle>
    </div>

    <div v-else-if="movies.isError.value">
      <MyTitle type="large"> Failed to load movies: {{ movies.error.value?.message }} </MyTitle>
    </div>

    <div v-else>
      <MyTitle
        type="large"
        class="mb-38"
      >
        {{ movies.titleText.value }}
      </MyTitle>

      <MoviesList :moviesData="movies.filteredMovies.value" />
    </div>
  </div>
  <div>
    <div v-if="tvSeries.isLoading.value">
      <MyTitle type="large">Loading...</MyTitle>
    </div>

    <div v-else-if="tvSeries.isError.value">
      <MyTitle type="large"> Failed to load movies: {{ tvSeries.error.value?.message }} </MyTitle>
    </div>

    <div v-else>
      <MyTitle
        type="large"
        class="mb-38"
      >
        {{ tvSeries.titleText.value }}
      </MyTitle>

      <MoviesList :moviesData="tvSeries.filteredMovies.value" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.mb-38 {
  margin-bottom: clamp(24px, 4vw, 38px);
}
.mb-40 {
  margin-bottom: clamp(24px, 4vw, 40px);
}
</style>
