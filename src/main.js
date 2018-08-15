import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HelloWorld from './components/HelloWorld';
import Calculator from './components/Calculator';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/HelloWorld',
      component : HelloWorld
    },
    {
      path: '/Calculator',
      component: Calculator
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
