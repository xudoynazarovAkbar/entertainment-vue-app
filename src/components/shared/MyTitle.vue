<script setup lang="ts">
defineOptions({
  name: 'MyTitle',
})

defineProps<{
  type: 'large' | 'medium' | 'small'
}>()
</script>

<template>
  <h4
    class="base"
    :class="type"
  >
    <slot></slot>
  </h4>
</template>

<style scoped lang="scss">
.base {
  color: var(--pure-white);
  line-height: 1.2;
}
.large {
  font-weight: 300;
  font-size: clamp(20px, 5.5vw, 32px);
  letter-spacing: -0.02em;
}
.medium {
  font-weight: 500;
  font-size: clamp(15px, 4vw, 24px);
}
.small {
  font-weight: 500;
  font-size: clamp(14px, 3vw, 18px);
}
</style>
