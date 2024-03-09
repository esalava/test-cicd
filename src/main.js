import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
import '@mdi/font/css/materialdesignicons.css'
import {router} from '@/routes/index.js'

const i18 = createI18n({
    legacy: false,
    locale: 'es', //como default en español
    fallbackLocale: 'en', //como fallback en inglés
    messages: {
        "en": {
          "hello": "hello world!"
        },
        "ja": {
          "hello": "こんにちは、世界！"
        }
      }
})

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    }
})

createApp(App).use(i18).use(router).use(vuetify).mount('#app')
