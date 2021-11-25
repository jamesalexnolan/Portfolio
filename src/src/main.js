import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin, CollapsePlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './scss/app.scss'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CollapsePlugin)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
