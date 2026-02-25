<script setup lang="ts">
import MoviesList from '@/components/widgets/MoviesList/MoviesList.vue'
import MySwiper from '@/components/widgets/MySwiper/MySwiper.vue'
import { useMoviesView } from '@/composables/useMoviesView'

const { swiperData, filteredMovies, error, isError, isLoading, titleText, searchQuery } =
  useMoviesView({})
</script>

<template>
  <div>
    <div v-if="isLoading">
      <MyTitle type="large">Loading movies...</MyTitle>
    </div>

    <div v-else-if="isError">
      <MyTitle type="large">Something went wrong: {{ error?.message }}</MyTitle>
    </div>

    <div v-else-if="filteredMovies">
      <div
        class="mb-40"
        v-if="!searchQuery.trim()"
      >
        <MyTitle
          type="large"
          class="mb-32"
        >
          Trending
        </MyTitle>
        <MySwiper :swiperData="swiperData" />
      </div>

      <div>
        <MyTitle
          type="large"
          class="mb-32"
        >
          {{ titleText }}
        </MyTitle>
        <MoviesList :moviesData="filteredMovies" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mb-40 {
  margin-bottom: clamp(24px, 4vw, 40px);
}
.mb-32 {
  margin-bottom: clamp(24px, 4vw, 32px);
}
</style>
