<script setup lang="ts">
import NavBar from '../features/NavBar.vue'
import Logo from '@/assets/icons/logo.svg'
import UserIcon from '@/assets/icons/user.svg'
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()

const isOpenLogoutModal = ref(false)

const { removeToken } = useAuth()

function logout() {
  removeToken()
  isOpenLogoutModal.value = false
  router.push('/auth')
}
</script>

<template>
  <div class="responsive-container">
    <div class="wrapper">
      <RouterLink
        to="/"
        class="logo"
      >
        <Logo />
      </RouterLink>

      <NavBar />
    </div>

    <button
      class="user-logo"
      @click="isOpenLogoutModal = true"
    >
      <UserIcon />
    </button>
  </div>
  <MyModal
    :model-value="isOpenLogoutModal"
    @update:model-value="isOpenLogoutModal = $event"
  >
    <MyTitle type="large">Are you sure you want to log out?</MyTitle>
    <div class="buttons">
      <button
        class="cancel"
        @click="isOpenLogoutModal = false"
      >
        Cancel
      </button>
      <button
        class="confirm"
        @click="logout"
      >
        Log Out
      </button>
    </div>
  </MyModal>
</template>

<style scoped lang="scss">
.responsive-container {
  display: flex;
  flex-direction: column;
  width: 96px;
  height: calc(100vh - 70px);
  padding: 32px 28px;
  border-radius: 20px;
  background-color: var(--semi-dark-blue);
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.logo {
  width: clamp(25px, 4.2vw, 32px);
  height: clamp(20px, 3.3vw, 26px);
}
.user-logo {
  width: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  background-color: var(--greyish-blue);
}
.buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}
.cancel {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background: var(--greyish-blue);
  color: white;
  font-weight: 600;
}
.confirm {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background: var(--red);
  color: white;
  font-weight: 600;
}

@media (max-width: 992px) {
  .responsive-container {
    flex-direction: row;
    width: calc(100% - 48px);
    height: 72px;
    justify-content: space-between;
    padding: 21px 16px;
  }
  .wrapper {
    display: contents;
  }
}
@media (max-width: 600px) {
  .responsive-container {
    width: 100%;
    height: 56px;
    border-radius: 0;
    padding: 16px;
  }
}
</style>
