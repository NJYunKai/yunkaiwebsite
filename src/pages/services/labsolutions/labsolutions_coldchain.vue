<template>
  <div>
    <!-- 侧边导航栏 -->
    <sidemenu></sidemenu>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <img src="/static/img/labsolutions_coldchain_title.png"  class="labimg_title" />
          <img src="/static/img/labsolutions_coldchain1.png" />
        </div>
      </div>
      <div class="content-background-white">
        <div class="content-1">
          <img src="/static/img/labsolutions_coldchain2.png" />
        </div>
      </div>
      <div class="content-background-blue">
        <div class="content-1">
          <img src="/static/img/labsolutions_coldchain3.png" />
          <img src="/static/img/labsolutions_coldchain4.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidemenu from "./components/labsolution_sidemenu";
export default {
  data: function() {
    return {};
  },
  components: {
    sidemenu
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>