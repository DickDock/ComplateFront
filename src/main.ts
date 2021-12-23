import {createApp} from 'vue'
import App from './App.vue'
import './assets/css/app.css'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$showNav = true
app.use(router)
app.mount('#app')