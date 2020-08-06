<template>
    <div class="home">
        <img class="home_img" src="@/assets/images/home.png" alt="">
        <p class="home_welcome">WELCOME</p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Home extends Vue {

    }
</script>

<style scoped lang="less">
    .home{
        position: relative;
        height: 100%;
        background:rgba(255,255,255,1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .home_img{
            width: 600px;
            height: 426px;
        }
        .home_welcome{
            font-size:30px;
            font-weight:400;
            color:rgba(0,0,0,0.85);
            line-height:42px;
            margin-top: 24px;
        }
    }
</style>