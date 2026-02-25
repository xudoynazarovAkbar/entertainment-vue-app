<script setup lang="ts">
import type { IMovieNormalized } from '@/utils/types/movie'

defineProps<IMovieNormalized>()
</script>

<template>
  <div class="card">
    <div class="image-layout">
      <BookmarkButton
        :isBookmarked="isBookmarked"
        :movieId="id"
        class="card__bookmark"
      />
      <img
        :src="image"
        :alt="title"
        class="card__image"
      />
    </div>
    <div class="card__text">
      <MovieInfo
        v-bind="movieInfo"
        type="large"
      />
      <MyTitle type="small">{{ title }}</MyTitle>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  &__text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 8px;
  }

  &__image {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__bookmark {
    position: absolute;
    top: clamp(8px, 1.4vw, 16px);
    right: clamp(8px, 1.4vw, 16px);
  }
  .image-layout {
    position: relative;
    height: clamp(110px, 22vw, 174px);
  }
}
</style>
