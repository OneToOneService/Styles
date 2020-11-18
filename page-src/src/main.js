import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'
import CKEditor from '@ckeditor/ckeditor5-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CKEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
