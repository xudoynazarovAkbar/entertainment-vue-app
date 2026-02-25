<script setup lang="ts">
import type { IMovieNormalized } from '@/utils/types/movie'
import MoviesItem from './MoviesItem.vue'
import { computed } from 'vue'

const { moviesData } = defineProps<{
  moviesData: IMovieNormalized[]
}>()

const hasData = computed(() => Boolean(moviesData.length))
</script>

<template>
  <div
    class="cards"
    v-if="hasData"
  >
    <MoviesItem
      v-for="item in moviesData"
      v-bind="item"
      :key="item.id"
    />
  </div>

  <MyTitle
    v-else
    type="large"
  >
    No content was found
  </MyTitle>
</template>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 24px;
  justify-items: center;
}
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 992px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 375px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
