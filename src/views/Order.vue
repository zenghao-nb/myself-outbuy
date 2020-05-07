<template>
    <div>
       <category></category>
        <TableBar></TableBar>
    </div>
</template>

<script>
    import TableBar from '../components/TableBar.vue'
    import category from '../components/mxm/category.vue'

    export default {
        name: "Order",
        components:{
            TableBar,
            category
        }
        
    }
</script>

<style scoped>

</style>