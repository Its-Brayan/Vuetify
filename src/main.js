import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Add these lines:
import { createPinia } from 'pinia'
import router from './router'
// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
