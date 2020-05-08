<template>
    <div class="myMain">
        <!--        常用功能-->
        <div class="function">
            <div class="title">常用功能</div>
            <div class="functions">
                <div @click="address">
                    <img src="../../../public/img/zh/地址.png" alt="">
                    <div>我的地址</div>
                </div>
                <div @click="member">
                    <img src="../../../public/img/zh/会员.png" alt="">
                    <div>我的会员</div>
                </div>
                <div @click="evaluate">
                    <img src="../../../public/img/zh/评论.png" alt="">
                    <div>我的评价</div>
                </div>
                <div @click="collection">
                    <img src="../../../public/img/zh/收藏.png" alt="">
                    <div>我的收藏</div>
                </div>
                <div @click="invitation">
                    <img src="../../../public/img/zh/邀请有礼.png" alt="">
                    <div>邀请有礼</div>
                </div>
                <div @click="invitation">
                    <img src="../../../public/img/zh/商家注入.png" alt="">
                    <div>商家住入</div>
                </div>
            </div>
            <div class="other">

            </div>
        </div>
        <div class="service">
            <div class="title">服务功能</div>
            <div class="service-item">
                <div @click="call">
                    <img src="../../../public/img/zh/联系我们.png" alt="">
                    <div>联系我们</div>
                </div>
                <div @click="answer">
                    <img src="../../../public/img/zh/帮助.png" alt="">
                    <div>反馈帮助</div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    // import { createNamespacedHelpers } from 'vuex'
    // const { mapState, mapActions } = createNamespacedHelpers('moduleA')
    export default {
        name: "MyMain",
        props:['isLogin'],
        data(){
            return{

            }
        },
        methods: {
            // 我的地址
            address() {
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('进入我的地址')
                }
            },
            // 我的会员
            member() {
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('我的会员')
                }

            },
            // 我的评价
            evaluate() {
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('我的评价')
                }
            },
            // 我的收藏
            collection() {
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('我的收藏')
                }
            },
            // 邀请有礼
            invitation() {
                if (this.isLogin==false){
                    this.$router.push('./login')
                } else {
                    console.log('邀请有礼')
                }
            },

            call() {
                if (this.isLogin == false) {
                    this.$router.push('./login')
                } else {
                    console.log('联系我们')
                }
            },
            answer() {
                if (this.isLogin == false) {
                    this.$router.push('./login')
                } else {
                    console.log('联系我们')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    /*圆角*/
    @br: 4px;
    /*常用功能*/
    .myMain{


    }
    .title {
        font-size: 18px;
        /*font-weight: 600;*/
        text-align: left;
        margin: 19px 0 25px 13px
    }
    .function {
        overflow: hidden;
        width: 334px;
        height: 200px;
        background-color: white;
        margin: 14px auto;
        border-radius: @br;
        & > .functions {
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            &>div{
                margin-right: 20px;
                margin-top: 10px;
                margin-left: 5px;
            }
            & > div > img {
                height: 26px;
            }
            & > div > div {
                margin-top: 4px;
            }
        }
    }
    .other {
        margin-top: 20px;

        display: flex;
        justify-content: flex-start;
        font-size: 14px;
        & > div > div {
            margin-top: 4px;
            margin-left: 14px;
        }
    }
    /*服务*/
    .service{
        overflow: hidden;
        width: 334px;
        /*height: 100px;*/
        background-color: white;
        border-radius: @br;
        margin: 14px auto;
        margin-bottom: 50px;
        /*clear: both;*/
        &>.title{
            margin-top: 19px;
        }
        &>.service-item{
            display: flex;
            justify-content: flex-start;
            &>div{
                margin-left: 14px;
                margin-right: 15px;
                margin-bottom: 10px;
            }
        }
    }
</style>