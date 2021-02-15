import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta';
//import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import ProductMenu from '../views/Menu/ProductMenu.vue'
import ProductPage from '../views/components/v-product-page.vue'
import CategoryMenu from '../views/Menu/CategoryMenu.vue'
import Cart from '../views/cart/v-cart.vue'
import PaymentInfo from '../views/Paymentinfo.vue'
import Confidance from '../views/Confidencpolitic.vue'
import Userpolitic from '../views/Userpolitic.vue'


Vue.use(VueRouter)
Vue.use(VueMeta);


  const routes = [
  {
    path: '/',
    name: 'CategoryMenu',
    component: CategoryMenu,
    props: true
  },
  {
    path: '/menu',
    name: 'ProductMenu',
    component: ProductMenu,
    props: true
  },
  {
    path: '/productPage',
    name: 'ProductPage',
    component: ProductPage,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    props: true
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/paymentinfo',
    name: 'paymentinfo',
    component: PaymentInfo
  },
  {
    path: '/confidance',
    name: 'confidance',
    component: Confidance
  },
  {
    path: '/userpolitic',
    name: 'userpolitic',
    component: Userpolitic
  },
]

const router = new VueRouter({
  mode: 'history',

  
  base: process.env.BASE_URL,
  routes
})

export default router
