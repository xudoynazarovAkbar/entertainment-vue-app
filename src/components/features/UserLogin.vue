<script setup lang="ts">
import { ref, computed } from 'vue'
import { Form, Field } from 'vee-validate'
import { loginUser } from '@/api/services/users.api'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { assertLoginValues } from '@/utils/types/assertFormValues'

const props = defineProps<{ isLoading: boolean }>()
const emit = defineEmits<{ (e: 'update:isLoading', value: boolean): void }>()

const router = useRouter()
const { setToken } = useAuth()
const showPassword = ref(false)

const buttonText = computed(() => (props.isLoading ? 'Logging in...' : 'Log In'))

const handleLoginSubmit = async (values: unknown) => {
  emit('update:isLoading', true)
  try {
    assertLoginValues(values)

    const response = await loginUser({
      email: values.email,
      password: values.password,
    })
    setToken(response.token)
    router.push('/')
  } catch (err) {
    console.log('Error happened inside submit', err)
  } finally {
    emit('update:isLoading', false)
  }
}
</script>

<template>
  <Form
    @submit="handleLoginSubmit"
    v-slot="{ meta }"
    class="form"
  >
    <Field
      name="email"
      rules="required|email"
      v-slot="{ field, errorMessage }"
    >
      <MyInput
        v-bind="field"
        type="email"
        placeholder="john.doe@example.com"
        label="Email Address"
        :error="errorMessage"
      />
    </Field>

    <Field
      name="password"
      rules="required|min:8"
      v-slot="{ field, errorMessage }"
    >
      <MyInput
        v-bind="field"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Password"
        label="Password"
        :error="errorMessage"
      >
        <div @click="showPassword = !showPassword">{{ showPassword ? 'EyeOff' : 'EyeOn' }}</div>
      </MyInput>
    </Field>

    <button
      type="submit"
      class="submit"
      :disabled="isLoading || !meta.valid"
    >
      {{ buttonText }}
    </button>
  </Form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.submit {
  margin-top: 8px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: var(--red);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    opacity: 0.9;
  }
}
</style>
