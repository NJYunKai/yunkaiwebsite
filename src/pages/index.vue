<template>
  <div>
    <!-- 轮播图   -->
<!--     
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item" >
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>  
    </div> -->

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
                  <img src="./img/xlab-1.jpg" alt />
                </div>
                <h3 class="case-title">江苏经贸职院</h3>
                <p class="case-content">其中包括智能制造实训室、物流管理专业1+X考点实训室环境及智能化实训室、“人工智能冷链物流”实训室等</p>
              </div>
            </router-link>
          
          <a
            href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=36"
            title
          >
            <div class="case-frame-list">
              <div class="case-frame-img">
                <img src="http://www.creditstate.cn/uploadfile/2019/1206/20191206032635548.png" alt />
              </div>
              <h3 class="case-title">金融机构</h3>
              <p class="case-content">创新研发金融科技产品，为金融机构（非银和中介机构）提供专业精准的贷前、贷后服务，提升机构金融防范风险能力和业务效率</p>
            </div>
          </a>
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
                <img src="/static/img/homecarousel-2.png" />
                <h2 class="medium" style="margin:10px 0 0 200px">一带一路顺利裁剪</h2>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <img src="/static/img/homecarousel-1.png" />
                <h2 class="medium" style="margin:10px 0 0 200px">物联网大会成功召开</h2>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <img src="/static/img/homecarousel-3.png" />
                <h2 class="medium" style="margin:10px 0 0 200px">智能智造实验室验收</h2>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <img src="/static/img/homecarousel-4.png" />
                <h2 class="medium" style="margin:10px 0 0 200px">协同育人申报指南发布</h2>
              </el-carousel-item>
            </el-carousel>

          </div>
          <!-- 行业新闻模块 -->
          <div class="ne-box">
            <div class="ne-cont-header">
              <span class="ne-cont-bigfat">行业新闻</span>
              <span class="ne-cont-twofat">Industry&nbsp;news</span>
              <span class="ne-cont-threefat ne-cont-threefat-style">
                <router-link to="/companynews/fieldnews" class="link">更多</router-link>
              </span>
            </div>
            <!-- 左列 -->
            <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/ZYPa44QJd8GZA4AzTPsiyQ" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;黄奇帆：中国央行会是全球第一个推出数字货币的央行</span>
                </a>
                <span class="ne-cont-text-other">2019-11-21</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/WaGwljsJ-GVW3mWOgBAiSw" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;重磅！ETC欠费超30日将上报个人征信</span>
                </a>
                <span class="ne-cont-text-other">2019-11-21</span>
              </li>
            </ul>
            <!-- 右列 -->
            <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/ZYPa44QJd8GZA4AzTPsiyQ" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;黄奇帆：中国央行会是全球第一个推出数字货币的央行</span>
                </a>
                <span class="ne-cont-text-other">2019-11-21</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/WaGwljsJ-GVW3mWOgBAiSw" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;重磅！ETC欠费超30日将上报个人征信</span>
                </a>
                <span class="ne-cont-text-other">2019-11-21</span>
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
        <div class="product-box">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-1.png"  />     
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-2.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-3.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-4.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-5.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-6.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-7.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-8.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-9.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-10.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-11.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-12.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-13.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationschool-14.png"  />
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
        <div class="product-box">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">

            <a href="javascript:;" style="display: inline-block;float: left;width: 300px;margin: 5px 23px;text-align: center;">
              <img src="./img/cooperationcompany-1.png" style="height:150px" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationcompany-2.png" />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationcompany-3.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationcompany-4.png"  />
            </a>

            <a href="javascript:;" class="product-roll">
              <img src="./img/cooperationcompany-5.png"  />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import avatar_index_01 from "./img/avatar_index_01.jpg";
import avatar_index_02 from "./img/avatar_index_02.jpg";
import logo_jpg from "./img/logo.jpg";
export default {
  data: function() {
    return {
      logo_jpg: logo_jpg,
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


   .news-carousel .el-carousel__item  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  //  .news-carousel .el-carousel__item:nth-child(2n+1) {
  //   // background-image: url(img/1+x展示.jpg);
  //   background-color: red;
  // }

  //   .news-carousel .el-carousel__item:nth-child(2n) {
  //   //background-image: url(img/1+x实验室.jpg);
  //   background-color: blue;
  // }

</style>