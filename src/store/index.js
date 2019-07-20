import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //后台登陆
        backuser: {
            //是否登陆
            logined: 0,
            //账号
            account: '',
            //游戏id
            nickname: '',
            //战网昵称
            username: '',
            //战网邮箱
            email: '',
            //备注
            note: '',
            //会阶
            role: '',
            //权限
            permission: []
        }
    },
    mutations: {
        backlogin(state, data) {
            state.backuser = data
        }
    }
})

export default store
