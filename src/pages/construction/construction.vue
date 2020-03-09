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
          <el-submenu index="/construction/computer">
            <template slot="title">
              <span class="iconfont">&#xe60a;</span>
              <span slot="title">计算机类</span>
            </template>
            <el-menu-item index="/construction/construction_iot">物联网</el-menu-item>
            <el-menu-item index="/construction/construction_bd">大数据</el-menu-item>
            <el-menu-item index="/construction/construction_cc">云计算</el-menu-item>
            <el-menu-item index="/construction/construction_ai">人工智能</el-menu-item>
            <el-menu-item index="/construction/construction_ce">通信工程</el-menu-item>
            <el-menu-item index="/construction/construction_bc">区块链</el-menu-item>
          </el-submenu>

         <el-submenu index="/construction/mechanical">
            <template slot="title">
             <span class="iconfont">&#xe60d;</span>
              <span slot="title">机电类</span>
            </template>
            <el-menu-item index="/construction/mechanical_ei">电子信息</el-menu-item>
            <el-menu-item index="/construction/mechanical_ir">工业机器人</el-menu-item>
            <el-menu-item index="/construction/mechanical_ict">智能控制技术</el-menu-item>
          </el-submenu>

          <el-menu-item index="/construction/other_de">
            <span class="iconfont">&#xe6eb;</span>
            <span slot="title">物流+电商</span>
          </el-menu-item>

          <el-menu-item index="/construction/electronic_de">
           <span class="iconfont">&#xe611;</span>
            <span slot="title">电子信息</span>
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
      breadList: ["专业建设"]
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
      this.breadList = ["专业建设"];
      switch (this.$route.path) {
        //计算机类
        case "/construction/construction_iot":
          this.breadList.push("计算机类");
          this.breadList.push("物联网");
          break;
        case "/construction/construction_bd":
          this.breadList.push("计算机类");
          this.breadList.push("大数据");
          break;
        case "/construction/construction_cc":
          this.breadList.push("计算机类");
          this.breadList.push("云计算");
          break;
        case "/construction/construction_ai":
          this.breadList.push("计算机类");
          this.breadList.push("人工智能");
          break;
        case "/construction/construction_ce":
          this.breadList.push("计算机类");
          this.breadList.push("通信工程");
          break;
        case "/construction/construction_bc":
          this.breadList.push("计算机类");
          this.breadList.push("区块链");
          break;
        //机电类
        case "/construction/mechanical_ei":
          this.breadList.push("机电类");
          this.breadList.push("电子信息");
          break;
        case "/construction/mechanical_ir":
          this.breadList.push("机电类");
          this.breadList.push("工业机器人");
          break;
        case "/construction/mechanical_ict":
          this.breadList.push("机电类");
          this.breadList.push("智能控制技术");
          break;
        //物流+电商
        case "/construction/other_de":
          this.breadList.push("物流+电商");
          break;
        //电子信息
        case "/construction/electronic_de":
          this.breadList.push("电子信息");
          break;
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