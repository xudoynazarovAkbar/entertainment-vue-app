import BookmarkIcon from '@/assets/icons/nav/bookmarks.svg'
import MoviesIcon from '@/assets/icons/nav/movies.svg'
import HomeIcon from '@/assets/icons/nav/home.svg'
import TvSeriesIcon from '@/assets/icons/nav/tv-series.svg'

import type { RouteRecordRaw } from 'vue-router'

export const ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
          icon: HomeIcon,
          showInNav: true,
          requiresAuth: true,
        },
      },
      {
        path: 'movies',
        name: 'Movies',
        component: () => import('@/views/MoviesView.vue'),
        meta: {
          icon: MoviesIcon,
          showInNav: true,
          requiresAuth: true,
        },
      },
      {
        path: 'tv-series',
        name: 'TV Series',
        component: () => import('@/views/TvSeriesView.vue'),
        meta: {
          icon: TvSeriesIcon,
          showInNav: true,
          requiresAuth: true,
        },
      },
      {
        path: 'bookmarks',
        name: 'Bookmarks',
        component: () => import('@/views/BookmarksView.vue'),
        meta: {
          icon: BookmarkIcon,
          showInNav: true,
          requiresAuth: true,
        },
      },
    ],
  },

  {
    path: '/',
    component: () => import('@/layouts/SecondLayout.vue'),
    children: [
      {
        path: 'auth',
        name: 'Auth',
        component: () => import('@/views/AuthView.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundView.vue'),
      },
    ],
  },
] as const
