<script setup lang="ts">
import SideBar from '@/components/widgets/SideBar.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import { searchQuery } from '@/composables/useSearch'
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <SideBar />
      <div class="main">
        <SearchInput
          v-model="searchQuery"
          wrapper-class="mb-34"
          placeholder="Search for movies or TV series"
        />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: flex-start;
  gap: clamp(24px, 4vw, 36px);
  padding: 0 32px;
  margin: 35px auto;
}
.main {
  width: 100%;
  min-width: 0;
}
.mb-34 {
  margin-bottom: clamp(24px, 4vw, 34px);
}
@media (max-width: 992px) {
  .container {
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  .main {
    padding: 0 20px;
  }
}
</style>
