<template>
        <div>
                <Login v-if="telcode" @changRigsterState="changRigsterState" @changePasswordLoginState="changePasswordLoginState"></Login>
                <Register v-else-if="register" @changeLoginCodeState="changeLoginCodeState" @changeLoginPasswordState="changePasswordLoginState"></Register>
                <LoginPassword v-else-if="login" @changeRegisterSate="changRigsterState" @changeLoginCodeState="changeLoginCodeState"></LoginPassword>
        </div>

</template>

<script>
    import Login from '../../components/zh/Login.vue'
    import Register from '../../components/zh/Register.vue'
    import LoginPassword from '../../components/zh/LoginPassword.vue'
    export default {
            name: "login",
            data(){
              return{
                      telcode:true,//手机号、验证码登录界面
                      register:false,//注册界面
                      login:false,//手机号、密码登录
              }
            },
            components: {
                    Login,//手机号验证码登录组件
                    Register,//注册组件
                    LoginPassword//手机号密码登录组件
            },
            methods:{
                    //显示注册界面界面
                    changRigsterState(){
                            this.timer=setTimeout(()=>{
                                    this.telcode=false;
                                    this.register=true;
                                    this.login=false
                            },500)

                    },
                    //显示手机号、密码登录界面
                    changePasswordLoginState(){
                            this.timer=setTimeout(()=>{
                            this.telcode=false;
                            this.register=false;
                            this.login=true
                            },500)
                    },
                    //显示手机号、验证码登陆界面
                    changeLoginCodeState(){
                            this.timer=setTimeout(()=>{
                            this.telcode=true;
                            this.register=false;
                            this.login=false
                            },500)
                    }

            }

    }
</script>

<style scoped lang="less">
    /*关闭登录窗口*/

</style>