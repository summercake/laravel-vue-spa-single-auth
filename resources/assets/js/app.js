/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
import router from './routes'
import store from './store/index'
import JwtToken from './helpers/jwt'
import App from './components/App'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from './locale/zh_CN'

axios.interceptors.request.use(function (config) {
  if (JwtToken.getToken()) {
    config.headers['Authorization'] = 'Bearer ' + JwtToken.getToken()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

Validator.localize('zh_CN', zh_CN)
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component('app', App)
new Vue({
  el: '#app',
  router,
  store,
})
