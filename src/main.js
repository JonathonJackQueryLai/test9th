// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false

import VueRouter from 'vue-router';
import App from './App.vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router'

import axios from 'axios'
Vue.use(VueRouter);
Vue.use(ViewUI);
axios({
  url:"http://192.168.32.243/swagger/index.html",
  method:"get",
  
}).then(res=>{
  console.log(res);
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router ,
  components: { App },
  
  render:h => h(App),
    
 
})
