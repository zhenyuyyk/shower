<template>
    <div class="not_found">
        <img src="@/assets/images/404.png" alt="">
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class NotFound extends Vue {

    }
</script>

<style scoped lang="less">
    .not_found {
        height: 100%;
        background: rgba(255, 255, 255, 1);
        position: relative;
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 744px;
            height: 389px;
            margin: -194.5px 0 0 -372px;
        }
    }
</style>