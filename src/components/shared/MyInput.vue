<script setup lang="ts">
import { ref, watch, useAttrs, useId } from 'vue'

const props = defineProps<{
  label?: string
  modelValue?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])

defineOptions({ inheritAttrs: false, name: 'MyInput' })

const id = useId()
const attrs = useAttrs()

// Local reactive value for standalone usage
const internalValue = ref(props.modelValue ?? '')

// Watch for parent updates
watch(
  () => props.modelValue,
  (val) => {
    if (val !== internalValue.value) internalValue.value = val ?? ''
  },
)

// Emit changes to parent
function updateValue(e: Event) {
  const target = e.target as HTMLInputElement
  internalValue.value = target.value
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="field">
    <label
      v-if="label"
      :for="id"
      class="label"
      >{{ label }}</label
    >

    <div class="input-wrapper">
      <input
        :id="id"
        class="input"
        v-bind="attrs"
        :value="internalValue"
        @input="updateValue"
      />
      <div class="right-icon">
        <slot></slot>
      </div>
    </div>
    <span class="error">{{ error }}</span>
  </div>
</template>

<style scoped>
.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
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
.error {
  color: var(--red);
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  font-size: 14px;
}
</style>
