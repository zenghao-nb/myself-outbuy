<template>
    <div class="main">
        <MyHeader :isLogin="isLogin"></MyHeader>
        <MyMain :isLogin="isLogin"></MyMain>
        <TableBar class="bar"></TableBar>
    </div>
</template>

<script>
    import TableBar from '../components/TableBar.vue'
    import MyHeader from '../components/zh/MyHeader.vue'
    import MyMain from '../components/zh/MyMain.vue'
    export default {
        name: "My",
        data(){
            return{
                isLogin: this.$store.state.isLogin
            }
        },
        components:{
            TableBar,
            MyHeader,
            MyMain
        }
    }
</script>

<style scoped lang="less">
    .main{
        background-color: #f8f8f8;
        /*background-color: #f8b627;*/
    }
    .bar{
        z-index: 10;
        position: fixed;
        bottom: 0;
        left: 0;
    }

</style>