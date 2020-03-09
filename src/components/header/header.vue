<template>
  <div class="header" :style="{background:headerBg}">
    <div class="nav clearfix">
      <div class="logo-wrapper">
        <img :src="logourl" alt="公司logo" />
      </div>
      <div class="menu">
        <el-menu class="el-menu-demo" mode="horizontal" background-color="#f5f5f5" router>
          <el-menu-item index="/homepage">首页</el-menu-item>
          <el-menu-item index="2">关于我们</el-menu-item>

          <el-submenu index="/services">
            <template slot="title">业务服务</template>
            <el-menu-item index="/services/labsolutions_iot">实验室解决方案</el-menu-item>
            <el-menu-item index="/services/apprenticeships">现代学徒制</el-menu-item>
            <el-menu-item index="/services/product_intelligence_manufacture">产品中心</el-menu-item>
            <el-menu-item index="/services/teachingresource">专业教学资源库</el-menu-item>
          </el-submenu>
          <el-menu-item index="/cooperative-education">协同育人</el-menu-item>
          <el-menu-item index="/beltroad">一带一路</el-menu-item>

          <el-submenu index="6">
            <template slot="title">专业建设</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
            <el-submenu index="6-4">
              <template slot="title">选项4</template>
              <el-menu-item index="6-4-1">选项1</el-menu-item>
              <el-menu-item index="6-4-2">选项2</el-menu-item>
              <el-menu-item index="6-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "./img/logo.png";

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
      headerBg: "rgba(255, 255, 255, .3)"
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
        this.headerBg = "rgba(255, 255, 255, .3)";
      }
    }

    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<style lang="less" scoped>
.header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  opacity:0.7;
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


