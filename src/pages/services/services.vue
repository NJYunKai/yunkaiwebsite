<template>
  <div class="r-news">
    <div class="r-news-content">
      <div class="content-title">
        <!-- <span class="limb-head-list"></span>
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=9"
        >关于惠国</a> &gt;
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=10"
        >公司介绍</a> &gt;
        <span class="limb-head-text limb-head-one">正文</span>-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>业务服务</el-breadcrumb-item>
          <el-breadcrumb-item>实验室解决方案</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
      </div>
      <div class="r-side r-white">
        <!-- <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=10"
          class="orange"
        >
          公司介绍
          <span class="r-icon4"></span>
        </a>
        <hr />
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=11"
        >荣誉资质</a>
        <hr />
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=12"
        >企业文化</a>
        <hr />
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=13"
        >合作伙伴</a>
        <hr />-->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" router>
          <el-submenu index="/services/labsolutions">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">实验室解决方案</span>
            </template>
            <el-menu-item index="/services/labsolutions_iot">物联网</el-menu-item>
            <el-menu-item index="/services/labsolutions_blockchain">区块链</el-menu-item>
            <el-menu-item index="/services/labsolutions_ai">人工智能</el-menu-item>
            <el-menu-item index="/services/labsolutions_coldchain">冷链物流</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">现代学徒制</span>
          </el-menu-item>
          <el-submenu index="/services/labsolutions">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">产品中心</span>
            </template>
            <el-menu-item index="/services/product_intelligence_manufacture">智能制造</el-menu-item>
            <el-menu-item index="/services/product_industrial_iot">工业物联网</el-menu-item>
            <el-menu-item index="/services/product_iot_teaching">物联网基础教学</el-menu-item>
            <el-menu-item index="/services/product_iot_innovative">物联网创新应用套件</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">专业教学资源库</span>
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
      isCollapse: false
    };
  },
  methods: {}
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