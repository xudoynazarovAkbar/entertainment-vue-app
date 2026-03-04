<script setup lang="ts">
import { ref } from 'vue'
import UserRegister from './UserRegister.vue'
import UserLogin from './UserLogin.vue'

const activeTab = ref<'signin' | 'login'>('signin')
const isLoading = ref(false)

function handleTabChange(tab: 'signin' | 'login') {
  activeTab.value = tab
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

    <UserRegister
      v-if="activeTab === 'signin'"
      :isLoading="isLoading"
      @update:isLoading="isLoading = $event"
    />
    <UserLogin
      v-else
      :isLoading="isLoading"
      @update:isLoading="isLoading = $event"
    />
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

  &:not(.active):disabled {
    cursor: not-allowed;
  }

  &.active {
    opacity: 1;
    border-bottom: 2px solid var(--red);
  }
}
</style>
