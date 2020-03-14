<template>
  <div>
    <!-- 侧边导航栏 -->
    <sidemenu></sidemenu>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <img src="/static/img/labsolutions_bigdata_title.png" />
          <img src="/static/img/labsolutions_bigdata1.png" />
        </div>
      </div>
      <div class="content-background-grey">
        <div class="content-1">
          <img src="/static/img/labsolutions_bigdata2.png" />
        </div>
      </div>
      <div class="content-background-blue">
        <div class="content-1">
          <img src="/static/img/labsolutions_bigdata3.png" />
        </div>
      </div>
            <div class="content-background-green">
        <div class="content-1">
          <img src="/static/img/labsolutions_bigdata4.png" />
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