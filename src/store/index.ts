import { createPinia } from 'pinia'
import type { App } from 'vue'
import devalue from '@nuxt/devalue'
import { createPersistedState } from 'pinia-plugin-persistedstate'
export const pinia = createPinia()

export const painaInstall = (app: App) => {
  pinia.use(
    createPersistedState({
      storage: {
        getItem(key: string): string | null {
          return uni.getStorageSync(key)
        },
        setItem(key: string, value: string) {
          uni.setStorageSync(key, value)
        }
      }
    })
  )
  app.use(pinia)

  devalue(pinia.state.value)
}
