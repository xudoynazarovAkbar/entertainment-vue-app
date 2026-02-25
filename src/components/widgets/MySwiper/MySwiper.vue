<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/mousewheel'
import SwiperItem from '@/components/widgets/MySwiper/SwiperItem.vue'
import type { IMovieNormalized } from '@/utils/types/movie'

const { swiperData } = defineProps<{
  swiperData: IMovieNormalized[]
}>()

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
}
</script>

<template>
  <div class="wrapper">
    <Swiper
      :modules="[Autoplay, Mousewheel]"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :mousewheel="true"
      :breakpoints
    >
      <SwiperSlide
        v-for="item in swiperData"
        :key="item.id"
      >
        <SwiperItem v-bind="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  position: relative;
  flex-shrink: 1;
}
</style>
