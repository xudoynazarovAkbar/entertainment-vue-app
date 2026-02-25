import type { App } from 'vue'

import router from './router'
import vueQuery from './vue-query'
import globalComponents from './global-components'

export function registerPlugins(app: App) {
  app.use(router)
  app.use(globalComponents)
  vueQuery(app)
}
