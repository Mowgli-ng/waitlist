import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLoading from 'vue-loading-overlay';
import Toaster from "@meforma/vue-toaster"

// Styles
import "./themes/bootstrap/css/bootstrap.css"
import "./themes/variables.css"
import "./themes/style.less"
import "./themes/fonts.css"
import 'vue-loading-overlay/dist/vue-loading.css';

createApp(App)
.use(router)
.use(VueLoading)
.use(Toaster, {
    position: "top-left",
    maxToasts:1,
    opacity:.8,
})
.mount('#app')
