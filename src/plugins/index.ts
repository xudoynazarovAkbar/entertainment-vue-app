import type { App } from 'vue'

import router from './router'
import vueQuery from './vue-query'
import globalComponents from './global-components'
import setupVeeValidate from './vee-validate'

export function registerPlugins(app: App) {
  app.use(router)
  app.use(globalComponents)
  vueQuery(app)
  setupVeeValidate()
}
