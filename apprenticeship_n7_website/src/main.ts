import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// Icônes (optionnel mais recommandé)
import '@mdi/font/css/materialdesignicons.css'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#1947ba',
    secondary: '#FF9800', // Orange
    accent: '#FF9800',
    error: '#dc3545',
    info: '#17a2b8',
    success: '#28a745',
    warning: '#ffc107',
    background: '#f4f6f8',
  }
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: '#4a7cf3',
    secondary: '#FFB74D', // Light Orange
    accent: '#FFB74D',
    error: '#e57373',
    info: '#64b5f6',
    success: '#81c784',
    warning: '#fff176',
    background: '#0f1d3d',
    surface: '#1f2b46'
  }
}

// Config Vuetify
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
