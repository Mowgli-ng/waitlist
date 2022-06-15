import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Styles
import "./themes/bootstrap/css/bootstrap.css"
import "./themes/variables.css"
import "./themes/style.less"
import "./themes/fonts.css"
createApp(App).use(router).mount('#app')
