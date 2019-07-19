import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routes = [
    {path: '/', redirect: '/index'},
    {path: '/back', redirect: '/back/login'},
    {path: '/index', component: () => import('@view/front/index')},
    {path: '/back/login', component: () => import('@view/back/login/index')},
    {path: '/back/home', component: () => import('@view/back/home')},
]

const router = new Router({
    mode: 'history',
    routes: routes
})

export default router


