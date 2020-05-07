<template>
    <div class="main">
        <MyHeader></MyHeader>
        <MyMain></MyMain>
        <TableBar></TableBar>
    </div>
</template>

<script>
    import TableBar from '../components/TableBar.vue'
    import MyHeader from '../components/zh/MyHeader.vue'
    import MyMain from '../components/zh/MyMain.vue'
    export default {
        name: "My",
        components:{
            TableBar,
            MyHeader,
            MyMain
        }
    }
</script>

<style scoped lang="less">

    .main{
        background-color: #f8c745;
    }

</style>