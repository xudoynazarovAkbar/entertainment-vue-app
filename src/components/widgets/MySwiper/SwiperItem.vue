<script setup lang="ts">
import type { IMovieNormalized } from '@/utils/types/movie'

defineProps<IMovieNormalized>()
</script>

<template>
  <div class="swiper-item">
    <img
      :src="image"
      :alt="title"
      class="swiper-item__img"
    />
    <div class="swiper-item__text">
      <MovieInfo
        v-bind="movieInfo"
        type="large"
      />
      <MyTitle type="medium">
        {{ title }}
      </MyTitle>
    </div>
    <BookmarkButton
      :isBookmarked="isBookmarked"
      :movieId="id"
      class="swiper-item__bookmark"
    />
  </div>
</template>

<style scoped lang="scss">
.swiper-item {
  position: relative;
  width: 100%;
  height: 230px;

  &__img {
    border-radius: 24px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    opacity: 0.8;
  }

  &__text {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  &__bookmark {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
