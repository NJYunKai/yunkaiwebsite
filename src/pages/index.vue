<template>
  <div>
    <!-- 轮播图   -->
    <div class="banner">
      <el-carousel height="400px">
        <el-carousel-item>
          <router-link to="/companynews/iotmeeting">
            <img v-lazy="img1" />
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/companynews/jingmao-lab">
            <img v-lazy="img2" />
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/beltroad">
            <img v-lazy="img3" />
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/cooperative-education">
            <img v-lazy="img4" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 产品方案修改模块 -->
    <div class="case" router style="background-color:rgba(237, 243, 242, 0.76)">
      <div class="case-demo">
        <h3 class="product-header">经典案例</h3>
        <p class="product-header-text index-p">Curstem&nbsp;case</p>
        <p class="product-pic"></p>
        <p style="clear: both;"></p>
        <p class="product-header-slogan">助力学校实验建设，促进学生实体发展</p>
        <div class="case-frame">
          <router-link to="/productcase/xlab" class="sub-link">
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img v-lazy="img5" alt />
              </div>
              <h3 class="case-title">江苏经贸职院</h3>
              <p class="case-content">其中包括智能制造实训室、物流管理专业1+X考点实训室环境及智能化实训室、“人工智能冷链物流”实训室等</p>
            </div>
          </router-link>

          <router-link to="/productcase/gongshang" class="sub-link">
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img v-lazy="img6" alt />
              </div>
              <h3 class="case-title">浙江工商大学</h3>
              <p class="case-content">浙江工商大学物联网实践与智能体验实验室</p>
            </div>
          </router-link>

          <router-link to="/productcase/dianji" class="sub-link">
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img v-lazy="img7" alt />
              </div>
              <h3 class="case-title">上海电机学院</h3>
              <p class="case-content">上海电机学院物联网综合创新实验室</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 新闻中心修改模块 -->
    <div class="new" style="background-color:#faf9f991">
      <div class="new-demo">
        <h3 class="product-header">新闻中心</h3>
        <p class="product-header-text index-p">News&nbsp;center</p>
        <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan">多角度展现企业动态，全方位呈现云开风貌</p>
        <div class="news-content">
          <!-- 新闻头部 -->
          <div class="ne-cont-header">
            <span class="ne-cont-bigfat">公司动态</span>
            <span class="ne-cont-twofat">Company&nbsp;dynamics</span>
            <span class="ne-cont-threefat">
              <router-link to="/companynews/dynamicnews" class="link">更多</router-link>
            </span>
          </div>
          <!-- 新闻图片文字叙述 -->
          <div class="news-carousel">
            <el-carousel :interval="4000" type="card" height="300px">
              <el-carousel-item class="newscompany">
                <router-link to="/companynews/1+x">
                  <img v-lazy="img8" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 200px">协同育人申报指南发布</h2>
                </router-link>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <router-link to="/companynews/iotmeeting">
                  <img v-lazy="img9" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 200px">物联网大会成功召开</h2>
                </router-link>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <router-link to="/companynews/belt-road">
                  <img v-lazy="img10" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 200px">一带一路电商谷剪彩</h2>
                </router-link>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <router-link to="/companynews/jingmao-lab">
                  <img v-lazy="img11" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 200px">智能制造实训室顺利验收</h2>
                </router-link>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 行业新闻模块 -->
          <div class="ne-box">
            <div class="ne-cont-header">
              <span class="ne-cont-bigfat">行业新闻</span>
              <span class="ne-cont-twofat">Industry&nbsp;news</span>
              <span class="ne-cont-threefat ne-cont-threefat-style">
                <!-- <router-link to="/companynews/fieldnews" class="link">更多</router-link> -->
              </span>
            </div>
            <!-- 左列 -->
            <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/ttyZQhSQAQyUqZ8FeX06bA" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;应用型本科高校和职业教育本科高校提前招生</span>
                </a>
                <span class="ne-cont-text-other">2020-03-12</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/tQn7KNV2QRzFe1RhGFMK4w" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;重磅！科技部发文：支持再建四个人工智能国家试验区！</span>
                </a>
                <span class="ne-cont-text-other">2020-03-10</span>
              </li>
            </ul>
            <!-- 右列 -->
            <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/6RPeOMBn9PgHk-gWxts7NA" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;1+X职业技能等级证书编码规则及样式发布！</span>
                </a>
                <span class="ne-cont-text-other">2020-03-11</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/FvD7UmkdX30tulx5kRBgwQ" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;里程碑：国内5G NB-IoT连接数突破1亿，大连接加速到来</span>
                </a>
                <span class="ne-cont-text-other">2019-03-11</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作院校 -->
    <div class="customer" style="background: rgba(194, 221, 212, 0.65)">
      <div class="new-demo">
        <h3 class="product-header">合作院校</h3>
        <p class="product-header-text index-p">Cooperative&nbsp;school</p>
        <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan" style="margin-bottom:30px">云上开花，数据结果</p>
        <div class="product-box" style="background:white">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">
            <a href="javascript:;" class="product-roll">
              <img v-lazy="img12" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img13" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img14" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img15" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img16" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img17" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img18" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img19" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img20" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:170px">
              <img v-lazy="img21" style="width:170px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img22" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img23" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img24" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:200px;margin-left:0px">
              <img v-lazy="img25" style="width:200px" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作企业 -->
    <div class="customer" style="background-color:rgba(169, 208, 182, 0.7)">
      <div class="new-demo">
        <h3 class="product-header">合作企业</h3>
        <p class="product-header-text index-p">Cooperative&nbsp;partner</p>
        <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan" style="margin-bottom:30px">凝聚八方之力，共建云开未来</p>
        <div class="product-box" style="background:white">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">
            <a
              href="javascript:;"
              style="display: inline-block;float: left;width: 300px;margin: 5px 23px;text-align: center;"
            >
              <img v-lazy="img26" style="height:150px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img27" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:200px">
              <img v-lazy="img28" style="width:200px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img v-lazy="img29" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:250px">
              <img v-lazy="img30" style="width:250px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo_jpg from "../../static/img/logo2.jpg";
import img1 from "../../static/img/homecarousel-1.jpg";
import img2 from "../../static/img/homecarousel-3.jpg";
import img3 from "../../static/img/homecarousel-2.png";
import img4 from "../../static/img/homecarousel-4.png";
import img5 from "../../static/img/xlab-1.jpg";
import img6 from "../../static/img/gongshang-1.jpg";
import img7 from "../../static/img/dianji-1.png";
import img8 from "../../static/img/companynews-5.png";
import img9 from "../../static/img/companynews-2.png";
import img10 from "../../static/img/companynews-3.png";
import img11 from "../../static/img/companynews-4.png";
import img12 from "../../static/img/cooperationschool-1.png";
import img13 from "../../static/img/cooperationschool-2.png";
import img14 from "../../static/img/cooperationschool-5.png";
import img15 from "../../static/img/cooperationschool-4.png";
import img16 from "../../static/img/cooperationschool-10.png";
import img17 from "../../static/img/cooperationschool-6.png";
import img18 from "../../static/img/cooperationschool-7.png";
import img19 from "../../static/img/cooperationschool-8.png";
import img20 from "../../static/img/cooperationschool-9.png";
import img21 from "../../static/img/cooperationschool-14.png";
import img22 from "../../static/img/cooperationschool-11.png";
import img23 from "../../static/img/cooperationschool-12.png";
import img24 from "../../static/img/cooperationschool-13.png";
import img25 from "../../static/img/cooperationschool-3.png";
import img26 from "../../static/img/cooperationcompany-1.png";
import img27 from "../../static/img/cooperationcompany-2.png";
import img28 from "../../static/img/cooperationcompany-3.png";
import img29 from "../../static/img/cooperationcompany-4.png";
import img30 from "../../static/img/cooperationcompany-5.png";
export default {
  data: function() {
    return {
      logo_jpg,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img22,
      img23,
      img24,
      img25,
      img26,
      img27,
      img28,
      img29,
      img30
    };
  },
  methods: {
    showNews: function(index) {
      this.$router.push("/news/index/" + "detail_" + index);
    }
  }
};
</script>

<style lang="less" scoped>
.news-carousel {
  height: 246px;
}

.newsimg {
  margin-left: 50px;
}

.new {
  background: rgb(250, 249, 249);
}
.news-carousel .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.product-box {
  height: 530px;
}

.product-vessel {
  height: 510px;
}

.product-roll {
  width: 150px;
}

.product-roll img {
  width: 150px;
  height: 150px;
}
.customer {
  height: 700px;
}

.r-news {
  background-color: rgba(255, 255, 255, 0.9);
  padding-bottom: 120px;
}

.content_bg {
  // background: url(../../static/img/home-centerbackground.png) no-repeat center top fixed;
  /* background: url(http://csssecrets.io/images/tiger.jpg) no-repeat; */
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.r-news-content {
  /* opacity: 1; */
  margin: 0px auto;
  max-width: 1200px;
  padding: 2px;
  overflow: hidden;
}

.r-white {
  /* background: #e7edf2; */
  background: rgba(116, 177, 157, 0);
}

.ne-cont-ground {
  width: 50%;
  float: left;
  margin-left: 0px;
}

.index-p{
  color:black;
}
</style>