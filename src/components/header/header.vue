<template>
  <div class="header" :style="{background:headerBg}">
    <div class="nav clearfix">
      <div class="logo-wrapper">
        <img :src="logourl" alt="公司logo" />
      </div>
      <div class="menu">
        <!-- <Menu mode="horizontal" :active-name="activeName">
          <MenuItem name="1">
            <router-link to="/" class="link">首页</router-link>
          </MenuItem>
          <MenuItem name="2">
            <router-link to="/contact" class="link">关于我们</router-link>
          </MenuItem>-->
        <!-- <Submenu name="4">
            <template slot="title">专业建设</template>
            <MenuItem name="4-1">
              <router-link to="/about/introduce" class="sub-link">计算机类</router-link>
            </MenuItem>
            <MenuItem name="4-2">
              <router-link to="/about/honor" class="sub-link">机电类</router-link>
            </MenuItem>
            <MenuItem name="4-3">
              <router-link to="/about/culture" class="sub-link">物流电商类</router-link>
            </MenuItem>
            <MenuItem name="4-4">
              <router-link to="/about/partner" class="sub-link">电子信息</router-link>
            </MenuItem>
        </Submenu>-->
        <!-- <Submenu name="4">
            <template slot="title">
              专业建设
            </template>
            <Menu-group title="计算机类">
              <Menu-item name="4-1">
                <router-link to="/about/culture" class="sub-link">物联网</router-link>
              </Menu-item>
              <Menu-item name="4-2">
                <router-link to="/about/culture" class="sub-link">大数据</router-link>
              </Menu-item>
              <Menu-item name="4-3">
                <router-link to="/about/culture" class="sub-link">云计算</router-link>
              </Menu-item>
              <Menu-item name="4-4">
                <router-link to="/about/culture" class="sub-link">人工智能</router-link>
              </Menu-item>
              <Menu-item name="4-5">
                <router-link to="/about/culture" class="sub-link">通信工程</router-link>
              </Menu-item>
              <Menu-item name="4-6">
                <router-link to="/about/culture" class="sub-link">区块链</router-link>
              </Menu-item>
            </Menu-group>
            <Menu-group title="机电类">
              <Menu-item name="4-7">
                <router-link to="/about/culture" class="sub-link">用户留存</router-link>
              </Menu-item>
              <Menu-item name="4-8">
                <router-link to="/about/culture" class="sub-link">流失用户</router-link>
              </Menu-item>
              <Menu-item name="4-9">
                <router-link to="/about/culture" class="sub-link">流失用户</router-link>
              </Menu-item>
            </Menu-group>
            <Menu-group title="其他类">
              <MenuItem name="4-10">
                <router-link to="/about/culture" class="sub-link">物流电商类</router-link>
              </MenuItem>
              <MenuItem name="4-11">
                <router-link to="/about/partner" class="sub-link">电子信息</router-link>
              </MenuItem>
            </Menu-group>
        </Submenu>-->
        <!-- <MenuItem name="5">
            <router-link to="/offers" class="link">协同育人</router-link>
        </MenuItem>-->
        <!-- <MenuItem name="6">
            <router-link to="/contact" class="link">一带一路</router-link>
        </MenuItem>-->
        <!-- <Submenu name="2">
						<template slot="title">
							关于惠国
						</template>
						<MenuItem name="2-1">
						<router-link to="/about/introduce" class="sub-link">惠国简介</router-link>
						</MenuItem>
						<MenuItem name="2-2">
						<router-link to="/about/honor" class="sub-link">荣誉资质</router-link>
						</MenuItem>
						<MenuItem name="2-3">
						<router-link to="/about/culture" class="sub-link">企业文化</router-link>
						</MenuItem>
						<MenuItem name="2-4">
						<router-link to="/about/partner" class="sub-link">合作伙伴</router-link>
						</MenuItem>
        </Submenu>-->
        <!-- <Submenu name="3">
            <template slot="title">新闻中心</template>
            <MenuItem name="3-1">
              <router-link to="/news/index" class="sub-link">公司动态</router-link>
            </MenuItem>
            <MenuItem name="3-2">
              <router-link to="/news/media" class="sub-link">媒体报道</router-link>
            </MenuItem>
            <MenuItem name="3-3">
              <router-link to="/news/topic" class="sub-link">征信专题</router-link>
            </MenuItem>
            <MenuItem name="3-4">
              <router-link to="/news/industry" class="sub-link">行业新闻</router-link>
            </MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">金融征信</template>
            <MenuItem name="4-1">
              <router-link to="/financial/credit" class="sub-link">中小企业信用贷</router-link>
            </MenuItem>
            <MenuItem name="4-2">
              <router-link to="/financial/iot" class="sub-link">IoT贷后监管平台</router-link>
            </MenuItem>
            <MenuItem name="4-3">
              <router-link to="/financial/banking" class="sub-link">金融行业经验</router-link>
            </MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">政务征信</template>
            <MenuItem name="5-1">
              <router-link to="/government/benevolent" class="link">惠政信用服务平台</router-link>
            </MenuItem>
            <MenuItem name="5-2">
              <router-link to="/government/supervise" class="link">互联网金融监管平台</router-link>
            </MenuItem>
            <MenuItem name="5-3">
              <router-link to="/government/system" class="link">社会信用体系建设</router-link>
            </MenuItem>
        </Submenu>-->
        <!-- <MenuItem name="6">
            <router-link to="/offers" class="link">招贤纳士</router-link>
          </MenuItem>
          <MenuItem name="7">
            <router-link to="/contact" class="link">联系我们</router-link>
        </MenuItem>-->
        <!-- </Menu> -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#f5f5f5"
          router
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于我们</el-menu-item>

          <el-submenu index="/services">
            <template slot="title">业务服务</template>
            <el-menu-item index="/services/labsolutions_iot">实验室解决方案</el-menu-item>
            <el-menu-item index="/services/apprenticeships">现代学徒制</el-menu-item>
            <el-menu-item index="/services/product">产品中心</el-menu-item>
            <el-menu-item index="/services/teachingresource">专业教学资源库</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">协同育人</el-menu-item>
          <el-menu-item index="5">一带一路</el-menu-item>

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
      headerBg: "rgba(255, 255, 255, .3)",
      activeIndex: "1",
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
    },

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
  .nav {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .logo-wrapper {
      float: left;
      margin-top: 10px;
    }
    .menu {
      float: left;
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


