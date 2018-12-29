// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'
import  './assets/resize/fontSize'
import 'lib-flexible'
import mui from './assets/js/mui.min'
import './assets/css/mui.min.css'
Vue.prototype.mui = mui
Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
