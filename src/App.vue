<template>
  <div id="app">
    <Loading @loaded="onLoaded" />
    <Home :loadDone="loadDone" />
    <Screen />
  </div>
</template>

<script>
import Screen from "./components/screen";
import Loading from "./components/Loading";
export default {
  name: "App",
  components: {
    Screen,
    Loading,
  },
  data() {
    return {
      loadDone: false,
    };
  },
  methods: {
    onLoaded() {
      this.loadDone = true;
    },
  },
};
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
img {
  display: block;
  pointer-events: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.common {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
