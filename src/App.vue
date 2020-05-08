<template>
  <div id="app">

      <tablebar></tablebar>

    <router-view/>
  </div>
</template>
<script>
    import  tablebar from './components/TableBar'
    export default {
        name: "App",
        components:{
            tablebar
        }
    }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  *{
    margin: 0;
    padding: 0;
  }
</style>
