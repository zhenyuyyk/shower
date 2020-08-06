<template>
    <div class="bread_crumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in crumbs" :key="item">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    import {Vue, Component, Watch} from 'vue-property-decorator';

    @Component
    export default class Breadcrumb extends Vue {
        crumbs = []

        @Watch('$route')
        onChangeValue() {
            this.crumbs = this.$route.meta.crumbs || []
        }

        created() {
            this.onChangeValue()
        }
    }
</script>

<style scoped lang="less">
    .bread_crumb {
        width: 100%;
        height: 54px;
        background: rgba(255, 255, 255, 1);
        display: flex;
        align-items: center;
        padding: 0 24px;
    }
</style>