<template>
  <div class="footer">
    <div class="footer-all">
      <div class="footer-left">
        <p>南京云开数据科技有限公司</p>
      </div>
      <div class="footer-right">
        <!-- 第一列 -->
        <ul class="list">
          <li>
            <a href="javascript:;">关于云开</a>
          </li>
          <li>
            <router-link to="/aboutus">云开简介</router-link>
          </li>
          <li>
            <router-link to="">合作伙伴</router-link>
          </li>
        </ul>
        <!-- 第二列 -->
        <ul class="list">
          <li>
            <a href="javascript:;">新闻中心</a>
          </li>
          <li>
            <router-link to="/companynews/dynamicnews" class="sub-link">公司动态</router-link>
          </li>
          <li>
            <router-link to="" class="sub-link">行业新闻</router-link>
          </li>
        </ul>
        <!-- 第六列 -->
        <ul class="list">
          <li>
            <router-link to="/aboutus" class="link">联系我们</router-link>
          </li>
        </ul>
      </div>
      <div class="footer-below">
        <div class="public_security">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34020202000335">
            <img :src="publicurl" style="float:left;" />&nbsp;
            <span>苏ICP备  20011685号</span>
          </a>
        </div>
        <div class="line"></div>
        <div class="message">
          <p class="message-left">联系电话&nbsp;&nbsp;13357804061</p>
          <p
            class="message-right"
          >Copyright&nbsp;&nbsp;©&nbsp;&nbsp;南京云开数据科技有限公司&nbsp;&nbsp;南京市栖霞区尧化街道甘家边东108号01幢401室</p>
        </div>
      </div>
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
  background-color: rgba(53, 87, 115, 0.9);
  overflow: hidden;
  .footer-all {
    height: 100%;
    width: 1000px;
    margin: 0 auto;
    .footer-left {
      padding-top: 15px;
      height: 70%;
      width: 39%;
      padding-top: 25px;
      color: #d8d5d0;
      font-size: 18px;
      float: left;
      text-align: left;
    }
    .footer-right {
      height: 70%;
      width: 61%;
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
        font-size: 12px;
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
</style>