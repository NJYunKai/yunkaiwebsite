<template>
  <div>
    <!-- 侧边导航栏 -->
    <sidemenu></sidemenu>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <img src="/static/img/labsolutions_blockchain_title.png" />
          <img src="/static/img/labsolutions_blockchain1.png" />
          <!-- <img src="/static/img/labsolution_iot2.png" />
          <img src="/static/img/labsolution_iot3.png" />-->
        </div>
      </div>
      <div class="content-background-white">
        <div class="content-1">
          <!-- <img src="/static/img/labsolution_iot_title.png" />
          <img src="/static/img/labsolution_iot1.png" />-->
          <img src="/static/img/labsolutions_blockchain2.png" />
          <!-- <img src="/static/img/labsolution_iot3.png" /> -->
        </div>
      </div>
      <div class="content-background-blue">
        <div class="content-1">
          <!-- <img src="/static/img/labsolution_iot_title.png" />
          <img src="/static/img/labsolution_iot1.png" />-->
          <!-- <img src="/static/img/labsolution_iot2.png" /> -->
          <img src="/static/img/labsolutions_blockchain3.png" />
        </div>
      </div>
      <div class="content-background-green">
        <div class="content-1">
          <!-- <img src="/static/img/labsolution_iot_title.png" />
          <img src="/static/img/labsolution_iot1.png" />-->
          <!-- <img src="/static/img/labsolution_iot2.png" /> -->
          <img src="/static/img/labsolutions_blockchain4.png" />
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