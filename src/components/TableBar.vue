<template>
    <div class="tablebar">
        <router-link to="/">首页</router-link> |
        <router-link to="/about">订单</router-link>|
        <router-link to="/my">我的</router-link>
    </div>
</template>

<script>

    export default {
        name: "TableBar"
    }
</script>

<style scoped >
    .tablebar{
        width: 100%;
        height: 47px;
        display: flex;
        justify-content: space-around;
        background-color: #ffdc42;
        /*background-color: white;*/
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        line-height: 47px;
        text-decoration: none;
    }
</style>