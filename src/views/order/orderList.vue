<template>
    <div class="user_list wrap">
        订单列表
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class UserList extends Vue {

    }
</script>

<style scoped lang="less">
    .user_list {
        height: auto;
        min-height: 100%;
        background-color: #fff;
    }
</style>