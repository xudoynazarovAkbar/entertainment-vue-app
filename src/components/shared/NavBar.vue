<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes().filter((r) => r.meta.showInNav)
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        :key="item.path"
        v-for="item in routes"
        class="nav__item"
      >
        <RouterLink :to="item.path">
          <component
            :is="item.meta.icon"
            class="icon"
          />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(22px, 5vw, 40px);
  }

  &__item {
    color: var(--greyish-blue);
    transition: color 0.3s ease;

    &:not(.router-link-exact-active):hover {
      color: var(--red);
    }

    .icon {
      width: clamp(16px, 3vw, 20px);
      aspect-ratio: 1;
      display: flex;
      align-items: center;
    }
  }
}
.router-link-exact-active {
  color: var(--pure-white);
}
@media (max-width: 992px) {
  .nav {
    &__list {
      flex-direction: row;
    }
  }
}
</style>
