import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta';
//import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import ProductMenu from '../views/Menu/ProductMenu.vue'
import ProductPage from '../views/components/v-product-page.vue'
import CategoryMenu from '../views/Menu/CategoryMenu.vue'
import Cart from '../views/cart/v-cart.vue'
import LunchCalc from '../views/lunchcalc/calc.vue'
import PaymentInfo from '../views/Paymentinfo.vue'
import Confidance from '../views/Confidencpolitic.vue'
import Userpolitic from '../views/Userpolitic.vue'
import Actions from '../views/Actions.vue'


Vue.use(VueRouter)
Vue.use(VueMeta);


  const routes = [
  {
    path: '/',
    name: 'CategoryMenu',
    meta: {
      title: 'Меню доставки | Кафе-Бистро Очаг',
    },
    component: CategoryMenu,
    props: true
  },
  {
    path: '/menu',
    name: 'ProductMenu',
    meta: {
      title: 'Доставка еды 24 часа | Кафе-Бистро Очаг',
    },
    component: ProductMenu,
    props: true
  },
  {
    path: '/actions',
    name: 'Actions',
    meta: {
      title: 'Акции | Кафе-Бистро Очаг',
    },
    component: Actions,
  },
  {
    path: '/productPage',
    name: 'ProductPage',
    meta: {
      title: 'Карточка товара | Кафе-Бистро Очаг',
    },
    component: ProductPage,
    props: true
  },
  {
    path: '/lunch',
    name: 'LunchCalc',
    meta: {
      title: 'Конструктор бизнес-ланча | Кафе-Бистро Очаг',
    },
    component: LunchCalc,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Информация о нас | Кафе-Бистро Очаг',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      title: 'Корзина покупок | Кафе-Бистро Очаг',
    },
    component: Cart,
    props: true
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: {
      title: 'Контактные данные | Кафе-Бистро Очаг',
    },
    component: Contacts
  },
  {
    path: '/paymentinfo',
    name: 'paymentinfo',
    meta: {
      title: 'Информация о доставке и оплате | Кафе-Бистро Очаг',
    },
    component: PaymentInfo
  },
  {
    path: '/confidance',
    name: 'confidance',
    meta: {
      title: 'Политика конфиденциальности | Кафе-Бистро Очаг',
    },
    component: Confidance
  },
  {
    path: '/userpolitic',
    name: 'userpolitic',
    meta: {
      title: 'Пользовательское соглашение | Кафе-Бистро Очаг',
    },
    component: Userpolitic
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode?.removeChild(el));
  if (!nearestWithMeta) {
      return next();
  }
  nearestWithMeta.meta.metaTags.map((tagDef) => {
      const tag = document.createElement('meta');
      Object.keys(tagDef).forEach(key => {
          tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute('data-vue-router-controlled', '');
      return tag;
  })
      .forEach((tag) => document.head.appendChild(tag));
  next();
});

export default router
