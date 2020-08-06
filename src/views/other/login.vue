<template>
    <div class="login">
        <div class="login_box">
            <p class="box_logo">
                <img src="@/assets/images/logo.png" alt="">
            </p>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" class="demo-ruleForm">
                <el-form-item label="" prop="userName">
                    <el-input class="name" placeholder="User Name" prefix-icon="el-icon-user"
                              v-model="ruleForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="" prop="encryptedPassword">
                    <el-input class="pwd" placeholder="Password" prefix-icon="el-icon-lock"
                              v-model="ruleForm.encryptedPassword"
                              show-password></el-input>
                </el-form-item>
                <el-button class="submit" type="primary" @click="login">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Login extends Vue {
        ruleForm = {
            userName: "",
            encryptedPassword: ""
        }
        rules = {
            userName: [
                {required: true, message: 'Please enter user name', trigger: 'blur'},
            ],
            encryptedPassword: [
                {required: true, message: 'Please enter password', trigger: 'blur'}
            ],
        }

        created() {
            console.log("login")
        }

        login() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    // sessionStorage.setItem("token",res.data.jwtToken)
                    // this.$axios.defaults.headers.common['Authorization'] = res.data.jwtToken
                    // this.$store.dispatch("setUserInfoFun", res.data)
                    this.$router.push({
                        path: '/'
                    })
                }
            });
        }
    }
</script>

<style scoped lang="less">
    .login {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 1212px;
        height: 539px;
        margin-top: -270px;
        margin-left: -606px;
        background: url("../../assets/images/login_bg.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-end;
        .login_box {
            width: 368px;
            margin-top: 94px;
            margin-right: 85px;
            .box_logo {
                text-align: center;
                img {
                    width: 54px;
                    height: 54px;
                }
            }
            .name {
                margin-top: 46px;
            }
            .pwd {
                margin-top: 24px;
            }
            .submit {
                margin-top: 40px;
                width: 100%;
            }
            .el-form-item {
                margin-bottom: 0;
            }
        }
    }
</style>