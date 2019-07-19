<template>
    <div class="content-box">

        <el-form id="pwdLoginForm" ref="form" :model="form">
            <el-form-item>
                <el-input class="pwdInput" placeholder="账号" v-model="form.account" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-input class="pwdInput" placeholder="密码" v-model="form.password" show-password clearable></el-input>
            </el-form-item>
            <el-form-item style="text-align: center">
                <el-button type="primary" @click="onSubmit" style="width: 100%">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {back_login} from '@api/index'

    export default {
        name: "LoginForm",
        data() {
            return {
                form: {
                    account: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$http.post(back_login, this.form).then((res) => {
                    const data = res.data;
                    if (data.r == 1) {
                        this.login_success()
                        this.$router.push('/back/home')
                    } else {
                        this.login_error(data.msg)
                    }
                })
            },
            login_success(){
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },
            login_error(msg){
                this.$message.error(msg);
            }

        }
    }
</script>

<style>
    /*//修改input的样式，为了不覆盖本组件其他处的样式，需要自定义一个类名*/
    .pwdInput input.el-input__inner {
        border-radius:15px;
        background-color: transparent;
        color: white;
    }
</style>
<style scoped>
    .content-box {
        width: 562px;
        margin: 0px auto;
        padding: 20px 50px;
        border-radius: 5px;
        margin-top: 20px;
        padding-bottom: 3em;
    }

    #pwdLoginForm {
        padding: 0px 80px;
    }
    .pwdInput{
        background-color: transparent;
    }

</style>
