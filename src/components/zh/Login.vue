<template>
    <div>
        <div>
            <i class="el-icon-close" @click="back"></i>
            <div class="title">
                欢迎登录APP
            </div>
        </div>
        <input type="tel" placeholder="+86" class="tel">
        <div class="input-code">
            <input type="number" placeholder="请输入验证码" class=" code">
            <button type="primary" round class="sendmessage">获取验证码</button>
        </div>

        <button type="primary" round class="login">登录</button>
        <div class="register">
            <span @click="register">注册</span>
            <span @click="phonePassword">密码登录</span>
            <span>忘记密码</span>
        </div>
        <div class="other-login">
            <div>第三方登录</div>
            <div class="qq-weichat">
                <img src="../../../public/img/zh/weichat.png" alt="">
                <img src="../../../public/img/zh/QQ.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            back(){
                this.$router.go(-1)
            },
            //修改父组件登录界面显示
            register(){
                this.$emit('changRigsterState')
            },
            //修改父组件手机号密码登录
            phonePassword(){
                this.$emit('changePasswordLoginState')
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        text-align: left;
    }
    /*关闭按钮*/
    .el-icon-close{
        font-size: 20px;
        margin-top: 42px;
        margin-left: 20px;
    }
    .title{
        width: 278px;
        font-size: 23px;
        margin: 20px auto;
    }
    //手机号码框
    .tel{
        display: block;
        outline:none;
        border:none;
        border-bottom: 1px solid #e3e3e3;
        width: 278px;
        height: 40px;
        margin: 36px auto;
        text-indent: 10px;
    }
    input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
        color: #91b8ff;
        font-size:16px;
    }
    //获取短信验证
    .code{
        display: block;
        outline:none;
        border:none;
        border-bottom: 1px solid #e3e3e3;
        width: 278px;
        height: 40px;
        margin: 36px auto;
        text-indent: 10px;
    }
    .input-code{
        position: relative;
    }
    .sendmessage{
        outline:none;
        border:none;
        background-color: #91b8ff;
        border-radius: 80px;
        color: white;
        /*display: block;*/
        font-size: 12px;
        width: 87px;
        height: 23px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 60px;
    }
    //登录
    .login{
        outline:none;
        border:none;
        border-radius: 80px;
        display: block;
        width: 278px;
        height: 50px;
        text-align: center;
        margin:34px  auto;
        background-color: #91b8ff;
        color: white;
        font-size: 16px;
    }

    //注册、密码登录
    .register{
        width:278px;
        height: 13px;
        margin: 19px auto;
        position: relative;
        color: #7791fe;
        &>span:first-child{
            margin-right: 20px;
        }
        &>span:last-child{
            display: inline-block;
            position: absolute;
            right: 0;
        }
    }
    //第三方登录
    .other-login{
        width: 278px;
        display: flex;
        justify-content: space-between;
        margin: 210px auto 0 auto;
        font-size: 12px;
        color: gray;
    }
    .qq-weichat{
        &>img{
            margin-left: 27px;
        }
    }
</style>