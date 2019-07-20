import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './api/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
