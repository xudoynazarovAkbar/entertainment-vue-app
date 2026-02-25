<script setup lang="ts"></script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
</style>
