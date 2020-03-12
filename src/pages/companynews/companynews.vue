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
          <el-menu-item index="/companynews/dynamicnews">
            <i class="el-icon-menu"></i>
            <span slot="title">公司动态</span>
          </el-menu-item>

          <!-- <el-menu-item index="/companynews/fieldnews">
            <i class="el-icon-setting"></i>
            <span slot="title">行业新闻</span>
          </el-menu-item> -->
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
      breadList: ["新闻中心"]
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
      this.breadList = ["新闻中心"];
      switch (this.$route.path) {
        //公司动态
        case "/companynews/dynamicnews":
          this.breadList.push("公司动态");
          break;
        //行业新闻
        // case "/companynews/fieldnews":
        //   this.breadList.push("行业新闻");
        //   break;
      }
      console.log(this.$route.path, this.breadList);
    }
  }
};
</script>

<style lang="less" scoped>
.news {
  width: 1000px;
  margin: 0 auto;
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