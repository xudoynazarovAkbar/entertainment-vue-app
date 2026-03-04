<script setup lang="ts">
import { useId, useAttrs } from 'vue'
import SearchIcon from '@/assets/icons/search.svg'

const model = defineModel<string>()

defineProps<{
  wrapperClass?: string
}>()

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
const inputId = useId()
</script>

<template>
  <label
    class="wrapper"
    :for="inputId"
    :class="wrapperClass ?? ''"
  >
    <span class="icon">
      <SearchIcon />
    </span>

    <input
      :id="inputId"
      v-model="model"
      type="text"
      class="input"
      v-bind="attrs"
    />
  </label>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
}
.icon {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.input {
  width: 100%;
  padding: 14px 0;
  font-weight: 300;
  font-size: 24px;
  &::placeholder {
    font-weight: 400;
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 1px solid currentColor;
  }
}
</style>
