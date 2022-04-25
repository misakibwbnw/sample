import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './route'

createApp(App).use(Quasar, quasarUserOptions, router).mount('#app')
