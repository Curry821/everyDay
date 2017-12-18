// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScroller from 'vue-scroller'

<<<<<<< HEAD
=======
//过滤器
import filter from '../static/filter'
>>>>>>> 1367a4f1cc862aa49ddb889bfcabc2f426f6a6ce

Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)
Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App ,Map}
})
