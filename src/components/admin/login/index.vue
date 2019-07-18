<template>
    <div id="login_form">
        <el-form ref="form" :model="form">
            <el-form-item>
                <el-input placeholder="账号" v-model="form.account" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="密码" v-model="form.password" show-password clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
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
                console.log("登陆");
            }
        }
    }
</script>

<style scoped>
    #login_form {
        width: 562px;
    }

</style>
