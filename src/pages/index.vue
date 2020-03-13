<template>
  <div>
    <!-- 轮播图   -->
    <div class="banner">
      <el-carousel height="400px">
        <el-carousel-item>
          <img src="../../static/img/homecarousel-1.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../static/img/homecarousel-2.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../static/img/homecarousel-3.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../static/img/homecarousel-4.png" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 产品方案修改模块 -->
    <div class="case" router>
      <div class="case-demo">
        <h3 class="product-header">经典案例</h3>
        <p class="product-header-text">Curstem&nbsp;case</p>
        <p class="product-pic"></p>
        <p style="clear: both;"></p>
        <p class="product-header-slogan">助力学校实验建设，促进学生实体发展</p>
        <div class="case-frame">
          <router-link to="/productcase/xlab" class="sub-link">
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img src="../../static/img/xlab-1.jpg" alt />
              </div>
              <h3 class="case-title">江苏经贸职院</h3>
              <p class="case-content">其中包括智能制造实训室、物流管理专业1+X考点实训室环境及智能化实训室、“人工智能冷链物流”实训室等</p>
            </div>
          </router-link>

          <router-link to="/productcase/gongshang" class="sub-link">
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img src="../../static/img/gongshang-1.jpg" alt />
              </div>
              <h3 class="case-title">浙江工商大学</h3>
              <p class="case-content">浙江工商大学物联网实践与智能体验实验室</p>
            </div>
          </router-link>

          <a
            href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=37"
            title
          >
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img src="http://www.creditstate.cn/uploadfile/2019/1206/20191206032855390.png" alt />
              </div>
              <h3 class="case-title">企业</h3>
              <p class="case-content">创新企业信用评级和风控管理模式，以各地市产业园内中小企业为主体，开展中小企业大数据信用贷评级服务和风险管理服务。</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 新闻中心修改模块 -->
    <div class="new">
      <div class="new-demo">
        <h3 class="product-header">新闻中心</h3>
        <p class="product-header-text">News&nbsp;center</p>
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
                <img src="../../static/img/companynews-5.png" class="newsimg" />
                <h2 class="medium" style="margin:10px 0 0 200px">协同育人申报指南发布</h2>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <img src="../../static/img/companynews-2.png" class="newsimg" />
                <h2 class="medium" style="margin:10px 0 0 200px">物联网大会成功召开</h2>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <img src="../../static/img/companynews-3.png" class="newsimg" />
                <h2 class="medium" style="margin:10px 0 0 200px">一带一路电商谷剪彩</h2>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <img src="../../static/img/companynews-4.png" class="newsimg" />
                <h2 class="medium" style="margin:10px 0 0 200px">智能制造实训室顺利验收</h2>
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
    <div class="customer">
      <div class="new-demo">
        <h3 class="product-header">合作院校</h3>
        <p class="product-header-text">Cooperative&nbsp;partner</p>
        <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan">凝聚八方之力，共建云开未来</p>
        <div class="product-box" style="background:white">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">
            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-1.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-2.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-5.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-4.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-10.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-6.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-7.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-8.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-9.png" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:170px">
              <img src="../../static/img/cooperationschool-14.png" style="width:170px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-11.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-12.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationschool-13.png" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:200px;margin-left:0px">
              <img src="../../static/img/cooperationschool-3.png" style="width:200px" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作企业 -->
    <div class="customer">
      <div class="new-demo">
        <h3 class="product-header">合作企业</h3>
        <p class="product-header-text">Cooperative&nbsp;partner</p>
        <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan">凝聚八方之力，共建云开未来</p>
        <div class="product-box" style="background:white">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">
            <a
              href="javascript:;"
              style="display: inline-block;float: left;width: 300px;margin: 5px 23px;text-align: center;"
            >
              <img src="../../static/img/cooperationcompany-1.png" style="height:150px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationcompany-2.png" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:200px">
              <img src="../../static/img/cooperationcompany-3.png" style="width:200px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="../../static/img/cooperationcompany-4.png" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:250px">
              <img src="../../static/img/cooperationcompany-5.png" style="width:250px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo_jpg from "../../static/img/logo2.jpg";
export default {
  data: function() {
    return {
      logo_jpg: logo_jpg
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

.news {
  background: url();
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
    background: url(../../static/img/home-centerbackground.png)no-repeat center top fixed;
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
</style>