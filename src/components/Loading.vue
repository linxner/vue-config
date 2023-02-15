<template>
  <transition name="fade">
    <div class="loading" v-show="loadingShow">
      <div class="progress_txt center">
        <span>{{ percent + "%" }}</span>
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
      loadingShow: true,
    };
  },

  mounted() {
    this.loadingInit();
  },
  methods: {
    loadingInit() {
      axios.get("assete-manifest.json").then((res) => {
        let items = res.data;
        let assets = [];
        for (let i in items) {
          assets.push({
            id: i,
            src: items[i],
          });
        }
        let loadedCount = 0;

        assets.map(async (item) => {
          const data = await AsyncPreloader.loadItem(item);
          loadedCount++;
          this.percent = Math.round((100 * loadedCount) / assets.length);
          console.log(`Progress: ${(100 * loadedCount) / assets.length}%`);
          if (this.percent >= 100) {
            this.loadingShow = false;
            this.$emit('loaded')
          }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #856194;
  left: 0;
}
</style>
