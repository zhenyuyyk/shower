<template>
    <div class="layout_left">
        <div class="title">
            <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="menuChange"></i>
            <span>阵雨管理后台</span>
        </div>
        <el-menu class="el-menu-vertical-demo" :default-active="active" :collapse="isCollapse" router unique-opened>
            <el-submenu index="1">
                <template slot="title">
                    <span slot="title">用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/user/userList">用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <span slot="title">订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/order/orderList">订单列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator';

    @Component
    export default class LayoutLeft extends Vue {
        isCollapse = false
        active = ""

        @Watch('$route')
        onChangeValue() {
            this.active = this.$route.path
        }

        created() {
            this.onChangeValue()
        }

        menuChange() {
            this.isCollapse = !this.isCollapse
        }
    }
</script>

<style scoped lang="less">
    .layout_left {
        overflow-y: scroll;
        background: rgba(255, 255, 255, 1);
        box-shadow: 1px 0px 4px 0px rgba(0, 21, 41, 0.08);
        position: relative;
        z-index: 11;
        .el-menu-item.is-active {
            background-color: #1890FFFF !important;
            color: #fff !important;
        }
        .title {
            position: fixed;
            z-index: 11;
            top: 0;
            left: 0;
            width: 256px;
            height: 63px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            i {
                font-size: 20px;
                margin-left: 15px;
                cursor: pointer;
                color: #2490EF;
            }
            span {
                font-size: 16px;
                color: rgba(0, 0, 0, 0.85);
                margin-left: 16px;
                line-height: 24px;
            }
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 256px;
            position: relative;
            z-index: 9;
        }
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
</style>