<template>
  <div class="app">
    <Home :homeShow="homeShow" :deltaX="deltaX" :scaleY="scaleY" />
    <transition name="easeInOut">
      <div class="loading" v-show="loadingShow">
        <transition name="easeInOut">
          <div class="loading_bottom" v-show="!clickTipsShow">
            <img src="../../public/images/loading_bottom.png" alt />
            <div class="loading_progress" :style="{width:loadingwidth+'px'}">
              <div class="star">
                <img src="../../public/images/star.png" alt />
              </div>
            </div>
          </div>
        </transition>
        <transition name="easeInOut">
          <div class="clickTips" v-show="clickTipsShow" @click="startHome">点击开始体验</div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { Howl, Howler } from "howler";
import Home from "./Home.vue";

export default {
  data() {
    return {
      percent: 0,
      loadingwidth: 60,
      clickTipsShow: false,
      loadingShow: true,
      myAudio: {},
      homeShow: false,
      deltaX: 0,
      scaleY: 2.1
    };
  },
  mounted() {
    this.init();
    this.myAudio.play = new Howl({
      src: [require("../../public/media/play.mp3")]
    });
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

        // document.getElementById("bgm").play();
      }
    },
    startHome() {
      //   alert("aa");

      //   this.myAudio.play.play();
      //   document.querySelector(".audio-tips").play();
      //   return;
      // alert(Laya.Browser.window.DeviceMotionEvent);

      // this.$emit("startHome");
      this.loadingShow = false;
      this.homeShow = true;
      let UserAgent = navigator.userAgent.toLowerCase();
      let video = document.getElementById("video");
      let audio_tips = document.querySelector(".audio-tips");
      video.src = require("../../public/media/v01.mp4");
      audio_tips.src = require("../../public/media/play.mp3");
      if (/android/.test(UserAgent)) {
        // audio_tips.play();
        // setTimeout(() => {
        //   audio_tips.pause();
        // }, 50);
        video.src = require("../../public/media/v01_a.mp4");
        // video.setAttribute("x5-video-player-type", "h5-page");
        // $('.android').hide()
        // $('.loading').hide()
        // init()
        this.onDeviceorientation();
      } else {
        if (
          typeof window.DeviceMotionEvent !== "undefined" &&
          typeof window.DeviceMotionEvent.requestPermission === "function"
        ) {
          // (optional) Do something before API request prompt.
          window.DeviceMotionEvent.requestPermission()
            .then(response => {
              // (optional) Do something after API prompt dismissed.
              if (response == "granted") {
                this.onDeviceorientation();
              }
            })
            .catch(console.error);
        } else {
          alert("DeviceMotionEvent is not defined");
        }
      }
      video.play();
      setTimeout(() => {
        video.pause();
      }, 50);
    },
    onDeviceorientation(rotationInfo) {
      let _this = this;
      var o = new Orienter();
      o.onOrient = function(obj) {
        var a, b;

        a = obj.lon < 180 ? obj.lon : obj.lon - 360;
        b = obj.lat;

        a = a > 0 ? (a > 50 ? 50 : a) : a < -50 ? -50 : a;
        b = b > 0 ? (b > 50 ? 50 : b) : b < -50 ? -50 : b;
        console.log(a, b);
        _this.deltaX = a * 9;
        _this.scaleY = 2.1 + b / 150;
      };
      o.on();
    }
  },
  components: {
    Home
  }
};
</script>

<style lang='less'>
.app {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../../public/images/loading_bg.png");
  background-size: cover;
  .loading_bottom {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .loading_progress {
    width: 60px;
    height: 52px;
    background: url("../../public/images/loading_progress.png") no-repeat;
    background-size: cover;
    position: absolute;
    left: 49px;
    top: 83px;
    border-radius: 26px;
    /* transform: scaleX(.1); */
  }

  .star {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .clickTips {
    width: 100px;
    height: 60px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
  }
}
</style>
