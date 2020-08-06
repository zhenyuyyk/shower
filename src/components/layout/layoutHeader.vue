<template>
    <div class="header" >
        <img src="@/assets/images/logo.png" alt="">
        <span>admin</span>
        <el-button type="text" @click="layOut">退出</el-button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class LayoutHeader extends Vue {
        userInfo={}

        created(){
            this.getUserInfo()
        }
        getUserInfo(){
            this.userInfo=this.$store.getters.getUserInfo
        }
        layOut(){
            sessionStorage.setItem("token","")
            this.$axios.defaults.headers.common['Authorization'] = ""
            this.$store.dispatch("setUserInfoFun", "")
            this.$router.push({
                path: '/login'
            })
        }
    }
</script>

<style scoped lang="less">
    .header{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width:100%;
        height:64px;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 4px 0px rgba(0,21,41,0.12);
        padding: 0 24px;
        z-index: 10;
        position: relative;
        img{
            width:24px;
            height:24px;
            border-radius: 50%;
        }
        span{
            font-size:14.000000000000002px;
            color:rgba(0,0,0,0.65);
            margin-left: 8px;
        }
        button{
            margin-left: 33px;
        }
    }
</style>