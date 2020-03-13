<template>
  <div>
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
            >冷链物流</div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <el-row>
            <el-col :span="8" v-for="(item, index) in productList" :key="index" :offset="0">
              <el-card shadow="hover">
                <img :src="item.imgurl" class="image" />
                <div style="padding: 14px;">
                  <span>{{item.name}}</span>
                  <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../../../static/json/product.json";
export default {
  data: () => {
    return {
      // currentDate: new Date()
      productList: json.productlist,
      type:1
    };
  },
  created() {
      this.type =this.$route.params.type
      console.log('type:',this.type)
      console.log(this.productList)
  },
};
</script>

<style>
.el-card {
  border: 1px solid #c3d9e89e;
  background-color: #fff0;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  -webkit-box-shadow: 9px 8px 12px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 1 12px 20px 0 rgba(0, 0, 0, 0.1);
}
.el-col-offset-0 {
  /* margin-left: 4.16667%; */
  /* margin-top: 4.16667%; */
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>