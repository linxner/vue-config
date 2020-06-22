<template>
  <transition name="fade">
    <div class="loading" v-show="loadingShow">
      <div class="car_trans" :style="{transform:'translate3d('+ percent * 6.64 +'px,0, 0)'}">
        <div class="loading_car updown-center"></div>
      </div>
      <div class="loading_progress_bg center">
        <div class="loading_progress" :style="{'transform':'translate3d('+(percent-100)+'%,0,0)'}"></div>
      </div>
      <div class="progress_txt center">
        <span>{{percent+'%'}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import AsyncPreloader from "async-preloader";

export default {
  data() {
    return {
      percent: 0,
      loadingShow: true
    };
  },

  mounted() {
    this.loadingInit();
  },
  methods: {
    loadingInit() {
      axios.get("assete-manifest.json").then(res => {
        let items = res.data;
        let assets = [];
        for (let i in items) {
          assets.push({
            id: i,
            src: items[i]
          });
        }
        let loadedCount = 0;

        assets.map(async item => {
          const data = await AsyncPreloader.loadItem(item);
          loadedCount++;
          this.percent = (100 * loadedCount) / assets.length;
          console.log(`Progress: ${(100 * loadedCount) / assets.length}%`);
          if (this.percent >= 100) {
            // do something...
          }
        });
      });
      // return true;
    },
  }
};
</script>

<style lang='less'>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #856194;
  left: 0;
  .car_trans {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease;
    .loading_car {
      width: 1276px;
      height: 742px;
      left: -874px;
      background: url("../assets/images/loading_car.png") no-repeat;
    }
  }

  .loading_progress_bg {
    width: 408px;
    height: 12px;
    border: 1px solid #fff;
    border-radius: 7px;
    bottom: 50px;
    margin-top: 420px;
    overflow: hidden;
    .loading_progress {
      width: 408px;
      height: 12px;
      position: absolute;
      left: 0px;
      top: 0px;
      border-radius: 7px;
      background-color: #fff;
    }
  }
  .progress_txt {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    margin-top: 460px;
  }
}
</style>
