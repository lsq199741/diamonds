<template>
    <div class="hello">
        <!--<img alt="Vue logo" src="../assets/img/logo.png">-->
        <!--<h1>{{ msg }}</h1>-->
        <video :src=video muted="muted" preload="auto" loop="loop" height="100%" width="100%"
               autoplay="autoplay"  oncontextmenu="return false"></video>
        <!--<video src="@assets/video/wow1.mp4" muted="muted" preload="auto" loop="loop" height="100%" width="100%"-->
               <!--autoplay="autoplay"></video>-->
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            video: String
        }
    }
</script>
<style scoped>
    * {
        color: white;
    }
    h1 {
        width: 99%;
        position: absolute;
        top: 40%;
        color: white;
        text-align: center;
    }
    video {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
        background: #000000;
    }
</style>
