import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './vuex/store';
import VueMeta from 'vue-meta';


Vue.config.productionTip = false;
Vue.use(VueMeta);

export const eventEmitter = new Vue();

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')