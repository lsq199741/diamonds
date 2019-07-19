import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:9090/diamonds';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// export const baseUrl = 'http://154.8.214.165:8080/lessonCloud'

// 管理后台
//登陆
export const back_login = '/backLogin/login';

Vue.use(VueAxios, axios)


