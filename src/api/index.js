import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAxiosPlugin from 'vue-axios-plugin'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Vue.use(VueAxios, axios)
Vue.use(VueAxiosPlugin, {
    // 请求拦截处理
    reqHandleFunc: config => config,
    reqErrorFunc: error => Promise.reject(error),
    // 响应拦截处理
    resHandleFunc: response => response,
    resErrorFunc: error => Promise.reject(error)
})





Vue.axios.get(api).then((response) => {
    console.log(response.data)
})

this.axios.get(api).then((response) => {
    console.log(response.data)
})

this.$http.get(api).then((response) => {
    console.log(response.data)
})
