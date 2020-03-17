<template>
  <div class="header">
    <div class="nav clearfix">
      <div class="logo-wrapper">
        <img :src="logourl" alt="公司logo" />
      </div>
      <div class="menu">
        <el-menu class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/homepage">首页</el-menu-item>
          <el-submenu index="/services">
            <template slot="title">业务服务</template>

              <el-submenu index="/services/apprenticeships">
                <template slot="title">实验室解决方案</template>
                  <el-menu-item index="/services/labsolutions_iot">物联网</el-menu-item>
                  <el-menu-item index="/services/labsolutions_blockchain">区块链</el-menu-item>
                  <el-menu-item index="/services/labsolutions_ai">人工智能</el-menu-item>
                  <el-menu-item index="/services/labsolutions_coldchain">冷链物流</el-menu-item>
              </el-submenu>
            <!-- <el-menu-item index="/services/labsolutions_iot">实验室解决方案</el-menu-item> -->

            <el-menu-item index="/services/apprenticeships">现代学徒制</el-menu-item>

              <el-submenu index="/services/product/:type">
                <template slot="title">产品中心</template>
                <el-menu-item index="/services/product/1">基础教学类</el-menu-item>
                <el-menu-item index="/services/product/2">综合实训类</el-menu-item>
                <el-menu-item index="/services/product/3">行业应用类</el-menu-item>
                <el-menu-item index="/services/product/4">智能控制类</el-menu-item>
                <el-menu-item index="/services/product/5">无人机类</el-menu-item>
                <el-menu-item index="/services/product/6">智慧生活环境体验馆</el-menu-item>
              </el-submenu>
            <!-- <el-menu-item index="/services/product/1">产品中心</el-menu-item> -->

            <el-menu-item index="/services/teachingresource">专业教学资源库</el-menu-item>
          </el-submenu>
          <el-submenu index="/construction">
            <template slot="title">专业建设</template>

            <el-submenu index="/construction/construction_iot">
              <template slot="title">计算机类</template>
              <el-menu-item index="/construction/construction_iot">物联网</el-menu-item>
              <el-menu-item index="/construction/construction_bd">大数据</el-menu-item>
              <el-menu-item index="/construction/construction_cc">云计算</el-menu-item>
              <el-menu-item index="/construction/construction_ai">人工智能</el-menu-item>
              <el-menu-item index="/construction/construction_ce">通信工程</el-menu-item>
              <el-menu-item index="/construction/construction_bc">区块链</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="/construction/construction_iot">计算机类</el-menu-item> -->

            <el-submenu index="/construction/mechanical_ei">
              <template slot="title">机电类</template>
              <el-menu-item index="/construction/mechanical_ei">电子信息</el-menu-item>
              <el-menu-item index="/construction/mechanical_ir">工业机器人</el-menu-item>
              <el-menu-item index="/construction/mechanical_ict">智能控制技术</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="/construction/mechanical_ei">机电类</el-menu-item> -->

            <el-menu-item index="/construction/other_de">物流+电商</el-menu-item>
            <el-menu-item index="/construction/electronic_de">电子信息</el-menu-item>
          </el-submenu>
          <el-menu-item index="/cooperative-education">协同育人</el-menu-item>
          <el-menu-item index="/beltroad">一带一路</el-menu-item>
          <el-menu-item index="/aboutus">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../static/img/logo.png";

export default {
  name: "header",
  props: {
    imgHeight: {
      type: Number
    },
    activeName: {
      type: String
    }
  },
  data() {
    return {
      theme1: "light",
      logourl: logo,
      headerBg: "rgba(255, 255, 255, 0.3)"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > this.imgHeight - 60) {
        this.headerBg = "rgba(245,245,245,1)";
      } else {
        this.headerBg = "rgba(255, 255, 255, 0.1)";
      }
    }

    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  background-color: #fff0;
}
.header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  .nav {
    width: 80%;
    height: 100%;
    margin-left: 180px;
    margin-right: 80px;
    overflow: hidden;
    .logo-wrapper {
      float: left;
      margin-top: 10px;
    }
    .menu {
      float: right;
      height: 100%;
      margin-left: 30px;
      .ivu-menu {
        .ivu-menu-item {
          font-size: 16px;
          border-bottom: none;
          .link {
            display: block;
          }
        }
      }
      .ivu-menu-light {
        background: transparent;
        &.ivu-menu-horizontal {
          .ivu-menu-item {
            border-bottom: none;
          }
          .ivu-menu-submenu {
            font-size: 16px;
            border-bottom: none;
            .sub-link {
              display: block;
            }
          }
        }
      }
      .ivu-menu-horizontal.ivu-menu-light:after {
        display: none;
      }
    }
  }
}
</style>


