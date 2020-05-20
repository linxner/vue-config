<template>
  <div class="content">
    <Home :homeShow="homeShow" />
    <transition name="easeInOut">
      <div class="loading" v-show="loadingShow">
        <div class="loading_car updown-center"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
// import { Howl, Howler } from "howler";
import Home from "./Home.vue";

export default {
  data() {
    return {
      percent: 0,
      loadingShow: true,
      homeShow: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var imgArray = [];
      var _this = this;
      axios.get("assete-manifest.json").then(res => {
        // console.log(res);
        let t = res.data;
        for (var i in t) {
          var path = t[i];
          imgArray.push({
            id: i,
            src: path
          });
        }
        var queue = new createjs.LoadQueue();
        queue.maintainScriptOrder = true;
        // console.log(imgArray);
        let a = imgArray.splice(6);
        // console.log(a);
        queue.installPlugin(createjs.Sound);
        queue.on("progress", handleFileProgress);
        queue.on("complete", handleComplete, this);
        queue.loadManifest(a);
      });

      function handleFileProgress(e) {
        // _this.percent = Math.ceil(e.progress * 100) || 0;
        _this.loadingwidth = 60 + e.progress * 290;
        console.log(e.progress);
      }

      function handleComplete() {
        _this.clickTipsShow = true;
        console.log("completed");
      }
    },
    startHome() {
      this.loadingShow = false;
      this.homeShow = true;
      let UserAgent = navigator.userAgent.toLowerCase();

      if (/android/.test(UserAgent)) {
      } else {
      }
    }
  },
  components: {
    Home
  }
};
</script>

<style lang='less'>
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #856194;
}
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .loading_car {
    width: 1276px;
    height: 742px;
    left: -674px;
    background: url("../assets/images/loading_car.png") no-repeat;
  }
}
</style>
