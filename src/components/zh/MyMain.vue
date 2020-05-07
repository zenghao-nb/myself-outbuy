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
            </div>
            <div class="other">
                <div @click="invitation">
                    <img src="../../../public/img/zh/邀请有礼.png" alt="">
                    <div>邀请有礼</div>
                </div>
            </div>
        </div>
        <div class="service">
            lalalala
        </div>
    </div>

</template>

<script>
    export default {
        name: "MyMain",
        methods: {
            // 我的地址
            address() {
                console.log('我的地址')
            },
            // 我的会员
            member() {
                console.log('我的会员')
            },
            // 我的评价
            evaluate() {
                console.log('我的评价')
            },
            // 我的收藏
            collection() {
                console.log('我的收藏')
            },
            // 邀请有礼
            invitation() {
                console.log('邀请有礼')
            }
        }
    }
</script>

<style scoped lang="less">
    /*圆角*/
    @br: 4px;
    /*常用功能*/
    .title {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        margin: 19px 0 25px 13px;
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
            justify-content: space-around;
            font-size: 14px;

            & > div > img {
                height: 26px;
            }
        ;

            & > div > div {
                margin-top: 4px;
            }
        }
    }
    .other {
        margin-top: 20px;
        margin-left: 14px;
        display: flex;
        justify-content: flex-start;
        font-size: 14px;

        & > div > div {
            margin-top: 4px;
        }
    }
    /*服务*/
</style>