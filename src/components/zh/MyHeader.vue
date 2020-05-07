<template>
    <div>
<!--        登录背景、登录按钮-->
        <div class="headerbg">
            <div class="login"></div>
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
            }
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