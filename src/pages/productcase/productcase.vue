<template>
  <div class="r-news">
    <div class="r-news-content">
      <div class="content-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,i) in breadList" :key="i">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-side r-white">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          router
        >
          <el-menu-item index="/productcase/xlab">
            <i class="el-icon-menu"></i>
            <span slot="title">江苏经贸职业技术学院</span>
          </el-menu-item>

          <el-menu-item index="/productcase/gongshang">
            <i class="el-icon-menu"></i>
            <span slot="title">浙江工商大学</span>
          </el-menu-item>

        </el-menu>
      </div>
      <div class="r-white r-width944">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isCollapse: false,
      breadList: ["项目案例"]
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
      this.breadList = ["项目案例"];
      switch (this.$route.path) {
        //实验室解决方案
        case "/productcenter/xlab":
          this.breadList.push("江苏经贸职业技术学院");
          break;
        case "/productcenter/gongshang":
          this.breadList.push("浙江工商大学");
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