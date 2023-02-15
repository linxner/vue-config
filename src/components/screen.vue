<template>
  <div class="screen">
    <div class="content">
      <span style="font-size:30px;color:#fff;">请竖屏体验</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.screen {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  //   background-image: url("../../public/images/screen.png");
  //   background-size: cover;
  color: #fff;
  background-color: #000;
  z-index: 9999;
  display: none;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (orientation: landscape) {
  .screen {
    display: block;
  }
}
</style>