<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts" >
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
