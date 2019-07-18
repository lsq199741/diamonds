<template>
    <div id="app">
        <img class="logo" alt="Diamonds" src="@assets/img/logo000.png" oncontextmenu="return false">
        <br/>
        <img class="title" alt="Diamonds" src="@assets/img/title000.png" oncontextmenu="return false">
        <HelloWorld msg="Welcome to World of Warcraft Diamonds"
                    video="https://itime-1254007442.cos.ap-beijing.myqcloud.com/video/wow1.mp4"/>
        <!--<HelloWorld msg="Welcome to World of Warcraft Diamonds" video="@/video/wow1.mp4"/>-->
    </div>
</template>


<script>
    import HelloWorld from '@components/front/HelloWorld'

    export default {
        components: {
            HelloWorld
        }
    }
</script>

<style>
    #app {
        /*padding-top: 60px;*/
        text-align: center;
    }

    .logo {
        width: 12%;
        position: absolute;
        top: 10%;
        left: 44%;
    }

    .title {
        width: 24%;
        position: absolute;
        left: 38%;
        top: 35%;
    }

</style>
