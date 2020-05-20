<template>
  <div id="app">
    <Loading />
    <Screen />
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Screen from "./components/screen";
export default {
  name: "App",
  components: {
    Screen,
    Loading
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
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.middle-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.updown-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
