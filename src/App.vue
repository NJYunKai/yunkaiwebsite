<template>
  <div id="app">
    <el-container>
      <el-header>
        <h-header :imgHeight="imgHeight" :activeName="num"></h-header>
      </el-header>
      <el-main>
        <!-- 轮播图   -->

        <div class="content_bg">
        <router-view v-on:setNav="setNavigationNum" />
        </div>
      </el-main>
      <el-footer>
        <h-footer></h-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import banner_01 from "./public/img/banner_01.jpg";
import banner_02 from "./public/img/banner_02.jpg";
import header from "./components/header/header";
import footer from "./components/footer/footer";
import "../static/css/index.css";
import "../static/css/style.css";
import "../static/css/yunkai.css"
export default {
  name: "app",
  data: function() {
    return {
      banners: [banner_01, banner_02],
      imgHeight: 0,
      num: "1"
    };
  },
  components: {
    "h-header": header,
    "h-footer": footer
    // swiper,
    // swiperSlide
  },
  methods: {
    setNavigationNum: function(val) {
      this.num = val;
    }
  },
  mounted() {
    // setTimeout(() => {
    //   // this.imgHeight = this.$refs.mySwiper.swiper.height;
    // }, 1000);
  }
};
</script>

<style lang="less" scoped>
.banner .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

// .banner .el-carousel__item:nth-child(2n) {
//   background-image: url(/static/img/header.png);
// }

// .banner .el-carousel__item:nth-child(2n + 1) {
//     background-image: url(/static/img/bg-topbackground.png);
// }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header {
  padding: 0;
}
.el-footer {
  padding: 0;
}
.el-main {
  padding: 0;
}
.el-carousel__container{
  height: 600px;
}
</style>
