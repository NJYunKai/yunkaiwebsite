<template>
  <div class="footer" style="height:6rem">
      

    <div class="footer-all" style="float:left">
      <div class="footer-left">
        <p>南京云开数据科技有限公司</p>&nbsp;
        <p class="mess" style="line-height:1;">联系电话&nbsp;&nbsp;13357804061</p>&nbsp;
        <p class="mess" style="line-height:1;">邮箱&nbsp;&nbsp;suesu11@qq.com</p>&nbsp;
        <p class="mess" style="line-height:1;">地址：南京市栖霞区尧化街道甘家边东108号01幢401室</p>&nbsp;
        <p class="mess" style="line-height:1;">办公地址：南京市雨花台区赛虹桥街道凤台南路138号305室</p>
      </div>
      <div class="footer-right">
        <!-- 第一列 -->
        <ul class="list">
          <li>
            <a href="javascript:;">业务服务</a>
          </li>
          <li>
            <router-link to="/services/labsolutions_iot">实验室解决方案</router-link>
          </li>
          <li>
            <router-link to="/services/apprenticeships">现代学徒制</router-link>
          </li>
          <li>
            <router-link to="/services/product/1">产品中心</router-link>
          </li>
          <li>
            <router-link to="/services/teachingresource">专业教学资源库</router-link>
          </li>
        </ul>
        <!-- 第二列 -->
        <ul class="list">
          <li>
            <a href="javascript:;">专业建设</a>
          </li>
          <li>
            <router-link to="/construction/construction_iot" class="sub-link">计算机类</router-link>
          </li>
          <li>
            <router-link to="/construction/mechanical_ir" class="sub-link">机电类</router-link>
          </li>
          <li>
            <router-link to="/construction/elcommerce" class="sub-link">电子商务</router-link>
          </li>
          <li>
            <router-link to="/construction/other_de" class="sub-link">物流管理</router-link>
          </li>
            <li>
            <router-link to="/construction/electronic_de" class="sub-link">电子信息</router-link>
          </li>
        </ul>
        <!-- 新闻 -->
        <ul class="list">
          <li>
            <a href="javascript:;">新闻中心</a>
          </li>
          <li>
            <router-link to="/companynews/dynamicnews" class="sub-link">公司新闻</router-link>
          </li>
            <li>
          </li>
        </ul>
        <!-- 第三列 -->
        <ul class="list">
          <li>
            <router-link to="/cooperative-education" class="sub-link">协同育人</router-link>
          </li>
        </ul>
        <!-- 第四列 -->
        <ul class="list">
          <li>
            <router-link to="/beltroad" class="sub-link">一带一路</router-link>
          </li>
        </ul>
        <!-- 第五列 -->
        <ul class="list">
          <li>
            <router-link to="/aboutus" class="sub-link">关于我们</router-link>
          </li>
        </ul>
      </div>
      <div class="footer-below">
        <div class="public_security" >
          <a href="http://beian.miit.gov.cn/" style="margin:0.5rem 0" >
            <span >苏ICP备  20011685号</span>
          </a>
          <span  style="margin:0 30% 0 36%">
            <span style="font-size:1.3em;color:rgba(242, 242, 242, 0.69)">友情链接：</span>
            <a href="http://www.moe.gov.cn/" target="blank" style="font-size:1.3em" >教育部</a>
            <a href="https://www.tech.net.cn/" target="blank" style="font-size:1.3em;margin-left:0.2rem" >高职高专教育网</a>
          </span>
        </div>
      </div>
    </div>
    <!-- 二维码图片 -->
    <div style="float:left;margin:40px -40px">
      <img src="../../../static/img/qrcode.jpg" style="width:4rem" >
    </div>
  </div>
</template>

<script>
import url from "./img/gaba.png";
export default {
  data: function() {
    return {
      publicurl: url
    };
  }
};
</script>

<style lang="less" scoped>
html,
body {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  color: #d8d5d0;
}

.footer {
  height: 300px;
  width: 100%;
  // position: absolute;
  // bottom: 0px;
  background-color: rgba(53, 115, 85, 0.9);
  overflow: hidden;
  .footer-all {
    height: 100%;
    width: 70%;
    margin: 0 0 0 16%;
    .footer-left {
      padding-top: 15px;
      height: 70%;
      width: 40%;
      padding-top: 25px;
      color: #d8d5d0;
      font-size: 18px;
      float: left;
      text-align: left;
    }
    .footer-right {
      margin: 0 5%;
      height: 70%;
      width: 50%;
      float: left;
      /*text-align: left;*/
      .list {
        float: left;
        font-size: 12px;
        margin-right: 30px;
        li {
          padding-top: 10px;
        }
        li:first-child {
          padding-top: 26px;
          font-size: 14px;
        }
      }
    }
    .footer-below {
      clear: both;
      height: 30%;
      .public_security {
        a {
          display: inline-block;
          text-decoration: none;
          height: 20px;
          line-height: 20px;
        }
        span {
          font-size: 12px;
        }
      }
      .line {
        margin-top: 10px;
        margin-bottom: 15px;
        border-top: 1px #5a5954 solid;
      }
      .message {
        color: #d8d5d0;
        font-size: 10px;
        .message-left {
          float: left;
        }
        .message-right {
          float: right;
        }
      }
    }
  }
}

.mess{
  font-size: 0.9em;
}
</style>