<template>
    <div class="login">
        <div class="login-content">
            <div class="login-img">

            </div>
            <div class="login-form">
                <div class="login-form-title">
                    外包用工效能管理平台
                </div>
                <div class="login-form-tips">
                    用户登录
                </div>
                <el-input
                        class="login-input"
                        v-model="username"
                        prefix-icon="el-icon-s-custom"
                        placeholder="请输入用户账户"
                        clearable
                ></el-input>
                <el-input
                        type="password"
                        class="login-input"
                        v-model="password"
                        prefix-icon="el-icon-unlock"
                        placeholder="请输入登录密码"
                        :show-password="true"
                        clearable
                ></el-input>
                <el-button :loading="loading" @click="handleLogin" type="primary" class="login-button">登 录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                loading: false,
            }
        },
        methods: {
            handleLogin() {
                if(!this.username) {
                    this.$message.warning('请输入用户账号！');
                    return ;
                }
                if(!this.password) {
                    this.$message.warning('请输入登录密码！');
                    return ;
                }
                console.log(this.username, this.password)

                this.$router.push({path: '/home'})
            }
        }
    }

</script>

<style lang="less">
    .login {
        width: 100vw;
        height: 100vh;
        background-color: #84b7ae;

        .login-content {
            width: 1000px;
            height: 600px;
            border-radius: 30px;
            background-color: #fff;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            display: flex;

            .login-img {
                width: 50%;
                height: 100%;
                background-color: deepskyblue;
            }

            .login-form {
                width: 50%;
                padding: 110px 0 0 60px;

                .login-form-title {
                    font-size: 28px;
                    font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
                    font-weight: 600;
                }

                .login-form-tips {
                    font-size: 20px;
                    font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
                    font-weight: 600;
                    margin: 35px 0;
                }

                .login-input {
                    width: 340px;
                    height: 45px;
                    margin-bottom: 25px;
                    font-size: 16px;
                }

                .el-input__inner {
                    height: 50px;
                    line-height: 50px;
                }

                .el-input__icon {
                    line-height: 50px;
                }

                .el-input--prefix .el-input__inner {
                    padding-left: 36px;
                }

                .login-button {
                    width: 340px;
                    height: 45px;
                    font-size: 17px;
                }
            }
        }
    }
</style>