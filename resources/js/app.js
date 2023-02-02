

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from './assets/icons'
import DocsExample from './components/DocsExample.vue'

import { createPinia } from 'pinia'
import piniaPliginPersistedstate from 'pinia-plugin-persistedstate'
import './axios.js'

const pinia = createPinia()
pinia.use(piniaPliginPersistedstate)
const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(pinia)
app.use(Toast)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)

app.mount('#app')
