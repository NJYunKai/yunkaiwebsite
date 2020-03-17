<template>
  <div id="app">
    <el-backtop></el-backtop>
    <el-container class="container">
      <el-header>
        <h-header :imgHeight="imgHeight" :activeName="num"></h-header>
      </el-header>
      <el-main>
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
import header from "./components/header/header";
import footer from "./components/footer/footer";
import "../static/css/index.css";
import "../static/css/style.css";
import "../static/css/yunkai.css";
export default {
  name: "app",
  data: function() {
    return {
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
li.el-submenu__title {
  font-size: 0.3rem;
}

.el-menu-item {
  font-size: 0.3rem;
}
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
.el-carousel__container {
  height: 600px;
}
</style>
