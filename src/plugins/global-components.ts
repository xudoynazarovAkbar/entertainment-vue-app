import type { App } from 'vue'

import MyTitle from '@/components/shared/MyTitle.vue'
import MyInput from '@/components/shared/MyInput.vue'
import MyModal from '@/components/shared/MyModal.vue'
import MovieInfo from '@/components/shared/MovieInfo.vue'
import BookmarkButton from '@/components/shared/BookmarkButton.vue'

const components = [MyTitle, BookmarkButton, MovieInfo, MyInput, MyModal]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name!, component)
    })
  },
}
