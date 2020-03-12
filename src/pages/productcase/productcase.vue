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
            <span slot="title">1+x实验室</span>
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
      breadList: ["产品案例"]
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
      this.breadList = ["产品案例"];
      switch (this.$route.path) {
        //1+x实验室
        case "/productcenter/xlab":
          this.breadList.push("1+x实验室");
          break;
      }
      console.log(this.$route.path, this.breadList);
    }
  }
};
</script>