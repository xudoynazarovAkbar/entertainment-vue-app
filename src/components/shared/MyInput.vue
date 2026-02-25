<script setup lang="ts">
import { useAttrs, useId } from 'vue'

defineProps<{
  label: string
}>()

const model = defineModel<string>()

defineOptions({ inheritAttrs: false, name: 'MyInput' })

const id = useId()
const attrs = useAttrs()
</script>

<template>
  <div class="field">
    <label
      :for="id"
      class="label"
    >
      {{ label }}
    </label>

    <div class="input-wrapper">
      <input
        :id="id"
        class="input"
        v-bind="attrs"
        v-model="model"
      />
      <div class="right-icon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.label {
  font-size: 14px;
  opacity: 0.8;
}
.input {
  min-height: 24px;
  padding: 10px 40px 10px 14px;
  border-radius: 8px;
  border: 1px solid #555;
  background: var(--dark-blue);
  width: 100%;
}
.input-wrapper {
  position: relative;
  width: 100%;
}
.input:focus {
  outline: none;
  border-color: #fc4747;
}
.right-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  opacity: 0.7;
}
</style>
