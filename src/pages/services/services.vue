<template>
  <div>
    <!-- <img class="r-img head_background_img" src="/static/img/test2.png" alt /> -->
    <div class="r-news">
      <div class="r-news-content">
        <div class="content-title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>业务服务</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(item,i) in breadList" :key="i">{{item}}</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>实验室解决方案</el-breadcrumb-item> -->
            <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
          </el-breadcrumb>
        </div>
        <div class="r-white r-width944">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isCollapse: false,
      breadList: ["专业服务"]
    };
  },
  //监听路由变化，更改菜单activeIndex值
  watch: {
    $route: "getPath"
  },
  created() {
    this.getPath();
  },
  methods: {
    //动态刷新面包屑
    getPath() {
      this.breadList = ["专业服务"];
      switch (this.$route.path) {
        //实验室解决方案
        case "/services/labsolutions_iot":
          this.breadList.push("实验室解决方案");
          this.breadList.push("物联网");
          break;
        case "/services/labsolutions_blockchain":
          this.breadList.push("实验室解决方案");
          this.breadList.push("区块链");
          break;
        case "/services/labsolutions_ai":
          this.breadList.push("实验室解决方案");
          this.breadList.push("物联人工智能网");
          break;
        case "/services/labsolutions_coldchain":
          this.breadList.push("实验室解决方案");
          this.breadList.push("冷链物流");
          break;
        //现代学徒制
        case "/services/apprenticeships":
          this.breadList.push("现代学徒制");
          break;
        //产品中心
        case "/services/product_intelligence_manufacture":
          this.breadList.push("产品中心");
          this.breadList.push("智能制造");
          break;
        case "/services/product_industrial_iot":
          this.breadList.push("产品中心");
          this.breadList.push("工业物联网");
          break;
        case "/services/product_iot_teaching":
          this.breadList.push("产品中心");
          this.breadList.push("物联网基础教学");
          break;
        case "/services/product_iot_innovative":
          this.breadList.push("产品中心");
          this.breadList.push("物联网创新应用套件");
          break;
        //专业教学资源库
        case "/services/teachingresource":
          this.breadList.push("专业教学资源库");
          break;
      }
      // console.log(this.$route.path, this.breadList);
    }
  }
};
</script>
<style lang="less" scoped>
.head_background_img {
  opacity: 0.7;
  filter: alpha(opacity=40);
}
.news {
  // width: 1000px;
  // margin: 0 auto;
  .top {
    position: relative;
    height: 30px;
    padding: 4px 15px;
    margin: 18px 0 28px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    background: rgb(179, 27, 36);
    .text {
      vertical-align: middle;
      font-size: 12px;
    }
  }
  .list {
    .list-left {
      float: left;
      width: 200px;
      color: #010101;
      text-align: left;
      .link.active {
        color: #b31b24;
      }
      li {
        color: 16px;
        span {
          padding-left: 27px;
        }
        .caret {
          position: absolute;
          right: 3rem;
          top: 1.5rem;
          border-top: 5px solid transparent;
          border-right: 5px solid;
          border-bottom: 5px solid transparent;
          border-left: 5px solid transparent;
        }
      }
      .line {
        border-bottom: 1px #e5e3e0 solid;
        padding-top: 16px;
        margin-bottom: 16px;
        width: 80%;
      }
    }
    .list-right {
      float: left;
      width: 80%;
      margin-bottom: 33px;
    }
  }
}
</style>