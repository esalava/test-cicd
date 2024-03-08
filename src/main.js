import { createApp } from 'vue'
import App from './App.vue'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(vuetify).mount('#app')
