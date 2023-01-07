import { createApp } from 'vue'
import App from './App.vue'

import router from "./router"

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md2 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md2,
  theme: {
    defaultTheme: 'dark'
  }
})

import "./assets/styles.css"

createApp(App).use(router).use(vuetify).mount('#app')