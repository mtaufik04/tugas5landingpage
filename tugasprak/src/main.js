import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Quasar, {
  plugins: {}, 
})

app.mount('#app')
