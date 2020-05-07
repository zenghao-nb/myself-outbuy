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
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
    }
</style>