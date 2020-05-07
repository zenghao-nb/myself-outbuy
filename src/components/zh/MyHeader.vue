<template>
    <div>
<!--        登录背景、登录按钮-->
        <div class="headerbg">

            <div class="login"></div>


            <div class="login" @click="login"></div>


            <div class="clicklogin" @click="login">点击登录/注册</div>
        </div>
<!--        代金券、红包、钱包-->
        <div class="mybag">


            <div>
                <img src="../../../public/img/zh/daijinquan.png" alt="">
                <div>代金券</div>
            </div>
            <div>
                <img src="../../../public/img/zh/redpack.png" alt="">
                <div>红包</div>
            </div>
            <div>


            <div @click="quan">
                <img src="../../../public/img/zh/daijinquan.png" alt="">
                <div>代金券</div>
            </div>
            <div @click="redpock">
                <img src="../../../public/img/zh/redpack.png" alt="">
                <div>红包</div>
            </div>
            <div @click="wallet">


                <img src="../../../public/img/zh/pockt.png" alt="">
                <div>钱包</div>
            </div>

        </div>
<!--        开会员广告-->
        <img src="../../../public/img/zh/member.png" alt="" class="member" @click="member">
    </div>
</template>

<script>
    export default {
        name: "MyHeader",


        methods:{
            // 登录
            login(){
                console.log(111)
            },
            // 充会员
            member(){
                console.log(222)
            },

        props:['isLogin'],
        data(){
            return{

            }
        },
        methods:{
            // 登录
            login(){
                this.$router.push('/Login')
            },
            // 充会员
            member(){
                console.log('冲会员')
            },
            //优惠券
            quan(){
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    this.$router.push('./cashcoupo')
                }
            },
            //红包
            redpock(){
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('红包')
                }
            },
            //钱包
            wallet(){
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('钱包')
                }
            },

        }
    }
</script>

<style scoped lang="less">
    /*圆角*/
    @br:4px;
    /*登录背景、按钮*/
    .headerbg{
        overflow: hidden;
        width: 100%;
        height: 262px;
        background-image: url('../../../public/img/zh/bgimg.png');
        background-size: cover;
        z-index: 5;
    }
    .login{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0px 0px 5px 5px rgba(235, 235, 235, 0.4);
        position: absolute;
        left: 148px;
        top: 60px;
    }
    .clicklogin{
        color: white;
        margin-top: 143px;
        margin-left: -10px;
        font-size: 16px;
    }
    /*代金券、红包、钱包*/
    .mybag{
        background-color: white;
        z-index: -1;
        width: 334px;
       margin: -5px auto;
        display: flex;
        justify-content: space-around;
        border-radius: @br;
        &>div{
            margin: 10px 0;
        }
    }
    /*开会员广告*/
    .member{
        margin: 14px 0;
    }
</style>