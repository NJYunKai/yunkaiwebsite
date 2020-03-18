<template>
  <div>
    <!-- 侧边导航栏 -->
    <div class="r-side">
      <div class="focuses" @click="changeproduct(1)">
        <div class>
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.15s; animation-name: fadeInLeftBig;"
          >基础教学类</div>
        </div>
      </div>
      <div class="focuses" @click="changeproduct(2)">
        <div class>
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.25s; animation-name: fadeInLeftBig;"
          >综合实训类</div>
        </div>
      </div>
      <div class="focuses" @click="changeproduct(3)">
        <div class>
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.35s; animation-name: fadeInLeftBig;"
          >行业应用类</div>
        </div>
      </div>
      <div class="focuses" @click="changeproduct(4)">
        <div class>
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
          >智能控制类</div>
        </div>
      </div>
      <div class="focuses" @click="changeproduct(5)">
        <div class>
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
          >无人机类</div>
        </div>
      </div>
      <div class="focuses" @click="changeproduct(6)">
        <div class>
          <div
            class="single-focus1 white-bg diffuse-shadow green-line-bottom"
            style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
          >智慧生活环境体验馆</div>
        </div>
      </div>
    </div>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <el-row>
            <el-col :span="8" v-for="(item, index) in productlist" :key="index" :offset="0">
              <router-link :to="{ name: 'productdetails', params: { id: item.id }}">
                <el-card shadow="hover">
                  <img :src="item.imgurl" class="image" />
                  <div class="title">
                    <span>{{item.name}}</span>
                  </div>
                </el-card>
              </router-link>
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
      productlist: [],
      type: 0
    };
  },
  mounted() {
    console.log("==========", this.$route.params);
    this.type = this.$route.params.type;
    this.productlist = json.productlist.filter(values => {
      return values.type == this.type;
    });
    // console.log(this.type,"mounted", this.productlist);
  },
  methods: {
    changeproduct(values) {
      // console.log("=====changeproduct=====", values);
      this.productlist = json.productlist.filter(val => {
        return val.type == values;
      });
    },
    getproduct() {
      // console.log("=====getproduct=====", this.$route.params.type);
      this.changeproduct(this.$route.params.type);
    }
  },
  watch: {
    $route: "getproduct"
  }
};
</script>

<style>
.el-card {
  border: 1px solid #c3d9e89e;
  background-color: #fff0;
}
.el-col-8 {
    width: 30%;
}
.el-card__body {
  height: 20em;
}
.el-col-offset-0 {
    margin-left: 3%;
    margin-top: 3%;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  -webkit-box-shadow: 9px 8px 12px 3px rgba(238, 229, 229, 0.38);
  box-shadow: 1 12px 20px 0 rgba(0, 0, 0, 0.1);
}
.image {
  width: 100%;
  display: block;
  height: 13em;
}
.title{
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 1.5em;
}
</style>