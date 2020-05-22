<template>
  <transition name="fade">
    <div class="home"></div>
  </transition>
</template>

<script lang='ts'>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  background-color: #856194;
}
</style>
