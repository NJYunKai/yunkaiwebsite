<template>
  <!-- 侧边导航栏 -->
  <div class="r-side">
    <router-link to="/services/labsolutions_iot">
      <div class="focuses">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.15s; animation-name: fadeInLeftBig;"
          >物联网</div>
        </div>
      </div>
    </router-link>
    <router-link to="/services/labsolutions_blockchain">
      <div class="focuses">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.25s; animation-name: fadeInLeftBig;"
          >区块链</div>
        </div>
      </div>
    </router-link>
    <router-link to="/services/labsolutions_ai">
      <div class="focuses">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.35s; animation-name: fadeInLeftBig;"
          >人工智能</div>
        </div>
      </div>
    </router-link>
    <router-link to="/services/labsolutions_coldchain">
      <div class="focuses">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
          >物流实训室</div>
        </div>
      </div>
    </router-link>
    <router-link to="/services/labsolutions_bigdata">
      <div class="focuses">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.55s; animation-name: fadeInLeftBig;"
          >大数据</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>