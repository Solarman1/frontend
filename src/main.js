import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './vuex/store';
import VueMeta from 'vue-meta';
import VueYandexMetrika from 'vue-yandex-metrika'                               

Vue.use(VueYandexMetrika, {
    id: 91580089,
    router: router,
    env: process.env.NODE_ENV
})

Vue.config.productionTip = false;
Vue.use(VueMeta);

export const eventEmitter = new Vue();

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')