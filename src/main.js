import Vue from 'vue'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'

// normalize
// require('normalize.css/normalize.css')

// router components
import ItemDetailView from './ItemDetailView.vue'

Vue.use(Resource)
Vue.use(VueRouter)

const routes = [
  { path: '', name: 'itemRoot', component: ItemDetailView }, 
  { path: '/:id', name: 'itemDetail', component: ItemDetailView }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
