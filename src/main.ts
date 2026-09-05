import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import router from '@/app/router/index'
import App from './app/App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
