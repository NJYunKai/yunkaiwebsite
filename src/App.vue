<template>
  <div id="app">
    <el-container>
      <el-header>
        <h-header :imgHeight="imgHeight" :activeName="num"></h-header>
      </el-header>
      <el-main>
        <router-view v-on:setNav="setNavigationNum" />
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
//import banner_03 from "./public/img/banner_02.jpg";
import header from "./components/header/header";
import footer from "./components/footer/footer";
// import "swiper/dist/css/swiper.css";
import "../static/css/index.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "app",
  data: function() {
    return {
      // swiperOption: {
      //   notNextTick: true,
      //   pagination: ".swiper-pagination",
      //   paginationClickable: true,
      //   autoplay: 4000,
      //   width: window.innerWidth
      // },
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header {
  padding: 0 ;
}
.el-footer {
    padding: 0;
}
.el-main{
  padding: 0;
}
</style>
