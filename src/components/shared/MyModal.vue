<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()
defineOptions({
  name: 'MyModal',
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="overlay"
      @click="close"
    >
      <div
        class="content"
        @click.stop
      >
        <slot :close="close"></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.content {
  padding: 20px;
  width: auto;
  background-color: var(--semi-dark-blue);
  border-radius: 24px;
  z-index: 100;
}
</style>
