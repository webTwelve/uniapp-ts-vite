import { createSSRApp } from 'vue'
import App from './App.vue'
import { painaInstall } from '@/store/index'
// import '@/static/css/base.less'
export function createApp() {
  const app = createSSRApp(App)
  app.use(painaInstall)
  return {
    app
  }
}
