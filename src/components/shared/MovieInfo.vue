<script setup lang="ts">
import { CATEGORY_MAP } from '@/utils/constants/category'
import type { CategoryType } from '@/utils/types/category'

defineOptions({
  name: 'MovieInfo',
})

const {
  category,
  year,
  extraInfo,
  type = 'small',
} = defineProps<{
  type: 'large' | 'small'
  category: CategoryType
  year: number
  extraInfo: string
}>()

const categoryInfo = CATEGORY_MAP[category]
</script>

<template>
  <ul
    class="list"
    :class="type"
  >
    <li class="item">
      {{ year }}
    </li>
    <li class="item">
      <component
        :is="categoryInfo.icon"
        class="icon"
      />
      <p>{{ categoryInfo.label }}</p>
    </li>
    <li class="item">
      {{ extraInfo }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  align-items: center;
  opacity: 0.5;

  &.large {
    font-size: clamp(12px, 2.5vw, 15px);
  }

  &.small {
    font-size: clamp(11px, 1.8vw, 13px);
  }
}
.item {
  font-weight: 400;
  display: flex;
  align-items: center;

  &:not(:first-child)::before {
    content: '';
    width: 4px;
    height: 4px;
    margin: 0 8px;
    background-color: var(--pure-white);
    border-radius: 50%;
    display: inline-block;
  }
}
.icon {
  margin-right: 6px;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}
</style>
