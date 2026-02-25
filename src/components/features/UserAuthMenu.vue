<script setup lang="ts">
import { computed, ref } from 'vue'
import { loginUser, registerUser } from '@/api/services/users.api'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { setToken } = useAuth()

const activeTab = ref<'signin' | 'login'>('signin')

const showPasswordSignIn = ref(false)
const showPasswordLogin = ref(false)

const isLoading = ref(false)
const buttontext = computed(() => {
  if (isLoading.value) {
    return activeTab.value === 'signin' ? 'Creating...' : 'Logging in...'
  }
  return activeTab.value === 'signin' ? 'Create Account' : 'Log In'
})

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

function resetForm() {
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  password.value = ''
}

function handleTabChange(tab: 'signin' | 'login') {
  activeTab.value = tab
  resetForm()
}

async function handleLoginSubmit() {
  isLoading.value = true

  try {
    const response = await loginUser({
      email: email.value,
      password: password.value,
    })

    setToken(response.token)
    router.push('/')
  } catch {
    console.log('Error happened inside submit')
  } finally {
    isLoading.value = false
  }
}

async function handleRegisterSubmit() {
  isLoading.value = true

  try {
    const response = await registerUser({
      full_name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      password: password.value,
    })
    setToken(response.token)
    router.push('/')
  } catch {
    console.log('Error happened inside submit')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth">
    <div class="tabs">
      <button
        :class="['tab', { active: activeTab === 'signin' }]"
        :disabled="isLoading"
        @click="handleTabChange('signin')"
      >
        Sign in
      </button>

      <button
        :class="['tab', { active: activeTab === 'login' }]"
        :disabled="isLoading"
        @click="handleTabChange('login')"
      >
        Log in
      </button>
    </div>

    <form
      v-if="activeTab === 'signin'"
      class="form"
      @submit.prevent="handleRegisterSubmit"
    >
      <MyInput
        label="First Name"
        v-model="firstName"
      />
      <MyInput
        label="Last Name"
        v-model="lastName"
      />
      <MyInput
        label="Email"
        type="email"
        v-model="email"
      />

      <MyInput
        label="Password"
        :type="showPasswordSignIn ? 'text' : 'password'"
        v-model="password"
      >
        <div @click="showPasswordSignIn = !showPasswordSignIn">
          {{ showPasswordSignIn ? 'EyeOff' : 'EyeOn' }}
        </div>
      </MyInput>

      <button
        class="submit"
        :disabled="isLoading"
      >
        {{ buttontext }}
      </button>
    </form>

    <form
      v-else
      class="form"
      @submit.prevent="handleLoginSubmit"
    >
      <MyInput
        label="Email"
        type="email"
        v-model="email"
      />

      <MyInput
        label="Password"
        :type="showPasswordLogin ? 'text' : 'password'"
        v-model="password"
      >
        <div @click="showPasswordLogin = !showPasswordLogin">
          {{ showPasswordLogin ? 'EyeOff' : 'EyeOn' }}
        </div>
      </MyInput>

      <button
        class="submit"
        :disabled="isLoading"
      >
        {{ buttontext }}
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.auth {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 32px;
  background: var(--semi-dark-blue);
  color: var(--pure-white);
  border-radius: 16px;
}

.tabs {
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tab {
  flex: 1;
  padding: 12px;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.2s;
}

.tab.active {
  opacity: 1;
  border-bottom: 2px solid var(--red);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
}

.submit:hover {
  opacity: 0.9;
}
</style>
