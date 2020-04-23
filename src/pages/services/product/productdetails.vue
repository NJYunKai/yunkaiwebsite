<template>
  <div>
    <!-- 侧边导航栏 -->
    <div class="r-side">
      <router-link to="/services/product/1">
        <div class="focuses">
          <div class="">
            <div
              class="single-focus1 white-bg diffuse-shadow green-line-bottom"
              style="
                visibility: visible;
                animation-duration: 1.5s;
                animation-delay: 0.15s;
                animation-name: fadeInLeftBig;
              "
            >
              基础教学类
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/services/product/2">
        <div class="focuses">
          <div class="">
            <div
              class="single-focus1 white-bg diffuse-shadow green-line-bottom"
              style="
                visibility: visible;
                animation-duration: 1.5s;
                animation-delay: 0.25s;
                animation-name: fadeInLeftBig;
              "
            >
              综合实训类
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/services/product/3">
        <div class="focuses">
          <div class="">
            <div
              class="single-focus1 white-bg diffuse-shadow green-line-bottom"
              style="
                visibility: visible;
                animation-duration: 1.5s;
                animation-delay: 0.35s;
                animation-name: fadeInLeftBig;
              "
            >
              行业应用类
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/services/product/4">
        <div class="focuses">
          <div class="">
            <div
              class="single-focus1 white-bg diffuse-shadow green-line-bottom"
              style="
                visibility: visible;
                animation-duration: 1.5s;
                animation-delay: 0.45s;
                animation-name: fadeInLeftBig;
              "
            >
              智能控制类
            </div>
          </div>
        </div>
      </router-link>
      <!-- <router-link to="/services/product/5">
        <div class="focuses">
          <div class="">
            <div
              class="single-focus1 white-bg diffuse-shadow green-line-bottom"
              style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
            >无人机类</div>
          </div>
        </div>
      </router-link>
            <router-link to="/services/product/6">
        <div class="focuses">
          <div class="">
            <div
              class="single-focus1 white-bg diffuse-shadow green-line-bottom"
              style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
            >智慧生活环境体验馆</div>
          </div>
        </div>
      </router-link> -->
    </div>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <!-- <el-row>
            <el-col :span="8" v-for="(item, index) in productlist" :key="index" :offset="0">
              <el-card shadow="hover">
                <img :src="item.imgurl" class="image" />
                <div style="padding: 14px;">
                  <span>{{item.name}}</span>
                  <div class="bottom clearfix">
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>-->
          <div v-if="productlist[0].id != 23">
            <p class="product_title">{{ productlist[0].title }}</p>
            <img
              v-if="
                (productlist[0].id != 2) &
                (productlist[0].id != 3) &
                (productlist[0].id != 17)
              "
              :src="productlist[0].imgurl"
              class="pd_img"
            />
            <img :src="productlist[0].detailcontent" />
          </div>
          <div v-if="productlist[0].id == 23">
            <p class="product_title">{{ productlist[0].title }}</p>
            <img :src="productlist[0].detailcontent" />
            <img :src="productlist[0].detailcontent1" />
            <img :src="productlist[0].detailcontent2" />
            <img :src="productlist[0].detailcontent3" />
            <img :src="productlist[0].detailcontent4" />
            <img :src="productlist[0].detailcontent5" />
            <p class="lab_title3">
              系统支撑实验：
            </p>
            <img class="left20" :src="productlist[0].detailcontent6" />
          </div>
          <!-- <div v-if="productlist[0].id == 24">
            <p class="product_title">{{ productlist[0].title }}</p>
            <img :src="productlist[0].imgurl" class="pd_img" />
            <img :src="productlist[0].detailcontent" />
          </div> -->
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
      productlist: [],
      type: 0,
      id: 0,
    };
  },
  created() {
    console.log(this.id, "=====id====");
    this.id = this.$route.params.id;
    // this.productlist = json.productlist.filter(values => {
    //   return values.type == 1;
    // });
    console.log(this.id, "=====id====");
    this.changeproduct(this.id);
  },
  methods: {
    changeproduct(values) {
      // console.log("==========", values);
      this.productlist = json.productlist.filter((val) => {
        return val.id == values;
      });
    },
  },
};
</script>

<style>
.pd_img {
  margin: 5% 25%;
  width: 50%;
}
.product_content {
  color: white; /*文字颜色*/
  font-family: 宋体, sans-serif; /*文字字体*/
  font-size: 30pt; /*文字大小*/
  letter-spacing: 1pt; /*字间距离*/
  text-indent: 2em;
  line-height: 200%; /*设置行高*/
  font-weight: bold; /*文字粗体*/
  text-transform: capitalize; /*首字大写*/
  text-align: left; /*文字左对齐*/
}
.product_title {
  color: #999999; /*文字颜色*/
  font-family: 宋体, sans-serif; /*文字字体*/
  font-size: 0.65rem; /*文字大小*/
  letter-spacing: 1pt; /*字间距离*/
  line-height: 200%; /*设置行高*/
  font-weight: bold; /*文字粗体*/
  text-align: center; /*文字居中对齐*/
  vertical-align: middle; /*垂直居中对齐*/
}
</style>
