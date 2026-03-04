<script setup lang="ts">
import MoviesList from '@/components/widgets/MoviesList/MoviesList.vue'
import { useMoviesView } from '@/composables/useMoviesView'
import { MOVIE_CATEGORY } from '@/utils/constants/category'

const { error, filteredMovies, isError, isLoading, titleText } = useMoviesView({
  category: MOVIE_CATEGORY,
  title: 'Movies',
})
</script>

<template>
  <div>
    <div v-if="isLoading">
      <MyTitle type="large">Loading...</MyTitle>
    </div>

    <div v-else-if="isError">
      <MyTitle type="large"> Failed to load movies: {{ error?.message }} </MyTitle>
    </div>

    <div v-else>
      <MyTitle
        type="large"
        class="mb-38"
      >
        {{ titleText }}
      </MyTitle>

      <MoviesList :moviesData="filteredMovies" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.mb-38 {
  margin-bottom: clamp(24px, 4vw, 38px);
}
</style>
