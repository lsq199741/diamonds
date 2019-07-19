<template>
    <div class="bg">
        <img id="bg" src="../../../assets/img/bg.jpg" width="100%" height="100%"/>
        <img class="title" alt="Diamonds" src="@assets/img/title000.png" oncontextmenu="return false">
        <login-form></login-form>
    </div>
</template>

<script>
    import LoginForm from "@/components/admin/login/index";

    export default {
        name: "backIndex",
        components: {LoginForm},
        component: {
            LoginForm
        }
    }
</script>

<style scoped>
    .bg {
        text-align: center;
    }
    #bg {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
    }
    .title {
        width: 24%;
        margin: 150px auto 10px;
    }
</style>
