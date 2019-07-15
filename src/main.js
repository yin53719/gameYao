// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import socket from './style/socket'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import $ from 'jquery'
Vue.config.productionTip = false
Vue.prototype.socket = socket
Vue.use(iView);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
