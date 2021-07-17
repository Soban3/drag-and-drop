import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
