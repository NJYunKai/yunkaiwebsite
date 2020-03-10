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

            <div class="case-frame-list">
              <div class="case-frame-img">
                <img src="http://www.creditstate.cn/uploadfile/2019/1206/20191206032503770.png" alt />
              </div>
               <router-link to="/productcase/xlab" class="sub-link"><h3 class="case-title">1+x实验室</h3></router-link>
              <p class="case-content">1+x实验室提供学生进行相关实训，并且提供相关证书</p>
            </div>
          
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
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item class="newscompany" v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 行业新闻模块 -->
          <div class="ne-box">
            <div class="ne-cont-header">
              <span class="ne-cont-bigfat">行业新闻</span>
              <span class="ne-cont-twofat">Industry&nbsp;news</span>
              <span class="ne-cont-threefat ne-cont-threefat-style">
                <!-- <a
                  class="ne-cont-threefat-color"
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=18"
                  title
                >更多 &gt;</a> -->
                <router-link to="/companynews/fieldnews" class="link">更多</router-link>
              </span>
            </div>
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
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/1nXzRJ28YedwBJjHaMhOsw" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;重磅：央行征信中心发文，二代征信系统即将上线</span>
                </a>
                <span class="ne-cont-text-other">2019-10-25</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/ELvtq-BP9cGsfkCMbqgc3g" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;发改委：信易贷工作专项评价结果纳入城市信用状况监测</span>
                </a>
                <span class="ne-cont-text-other">2019-10-22</span>
              </li>
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/6ggLNTWv-IgeQuDvUHG-gQ" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;万存知：我国征信对替代数据的使用已走在国际前列</span>
                </a>
                <span class="ne-cont-text-other">2019-10-12</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/PuY8w9pzRjAfzmNkwSOUGw" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;发改委下文：鼓励第三方信用服务机构开展市场化信用评价</span>
                </a>
                <span class="ne-cont-text-other">2019-09-20</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作伙伴模块 -->
    <div class="customer">
      <div class="new-demo">
        <h3 class="product-header">合作伙伴</h3>
        <p class="product-header-text">Cooperative&nbsp;partner</p>
        <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan">凝聚八方之力，共建云开未来</p>
        <div class="product-box">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">
            <a href="javascript:;" title="中国人民银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220050728252.jpg"
                title="中国人民银行"
                alt="中国人民银行"
              />
            </a>
            <a href="javascript:;" title="中国工商银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220050917241.jpg"
                title="中国工商银行"
                alt="中国工商银行"
              />
            </a>
            <a href="javascript:;" title="中国建设银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220051159651.jpg"
                title="中国建设银行"
                alt="中国建设银行"
              />
            </a>
            <a href="javascript:;" title="中国农业银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220051431981.jpg"
                title="中国农业银行"
                alt="中国农业银行"
              />
            </a>
            <a href="javascript:;" title="中国邮政储蓄银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220051656672.jpg"
                title="中国邮政储蓄银行"
                alt="中国邮政储蓄银行"
              />
            </a>
            <a href="javascript:;" title="中国银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220051820729.jpg"
                title="中国银行"
                alt="中国银行"
              />
            </a>
            <a href="javascript:;" title="交通银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220052328130.jpg"
                title="交通银行"
                alt="交通银行"
              />
            </a>
            <a href="javascript:;" title="招商银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220052651992.jpg"
                title="招商银行"
                alt="招商银行"
              />
            </a>
            <a href="javascript:;" title="徽商银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220052949492.jpg"
                title="徽商银行"
                alt="徽商银行"
              />
            </a>
            <a href="javascript:;" title="中国光大银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220053120740.jpg"
                title="中国光大银行"
                alt="中国光大银行"
              />
            </a>
            <a href="javascript:;" title="广发银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220053314978.jpg"
                title="广发银行"
                alt="广发银行"
              />
            </a>
            <a href="javascript:;" title="兴业银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220053614180.jpg"
                title="兴业银行"
                alt="兴业银行"
              />
            </a>
            <a href="javascript:;" title="中国民生银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220053905325.jpg"
                title="中国民生银行"
                alt="中国民生银行"
              />
            </a>
            <a href="javascript:;" title="浦发银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220054141127.jpg"
                title="浦发银行"
                alt="浦发银行"
              />
            </a>
            <a href="javascript:;" title="芜湖扬子银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220054624819.png"
                title="芜湖扬子银行"
                alt="芜湖扬子银行"
              />
            </a>
            <a href="javascript:;" title="中信银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220054856689.jpg"
                title="中信银行"
                alt="中信银行"
              />
            </a>
            <a href="javascript:;" title="芜湖津盛农商银行" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220055002938.jpg"
                title="芜湖津盛农商银行"
                alt="芜湖津盛农商银行"
              />
            </a>
            <a href="javascript:;" title="民强担保（集团）" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220055155109.png"
                title="民强担保（集团）"
                alt="民强担保（集团）"
              />
            </a>
            <a href="javascript:;" title="上瑞控股" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220055324824.png"
                title="上瑞控股"
                alt="上瑞控股"
              />
            </a>
            <a href="javascript:;" title="科大讯飞" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220055514981.png"
                title="科大讯飞"
                alt="科大讯飞"
              />
            </a>
            <a href="javascript:;" title="中信证券" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220055653376.png"
                title="中信证券"
                alt="中信证券"
              />
            </a>
            <a href="javascript:;" title="国厚资产" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220055831423.png"
                title="国厚资产"
                alt="国厚资产"
              />
            </a>
            <a href="javascript:;" title="申万宏源证券" class="product-roll">
              <img
                src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0220/20190220060002127.png"
                title="申万宏源证券"
                alt="申万宏源证券"
              />
            </a>
          </div>
          <!-- 轮滑插件 -->
          <!-- <a href="javascript:;" class="product-prev" title>
            <img src="http://www.creditstate.cn/assets/img/index/left.png" title />
          </a>
          <a href="javascript:;" class="product-next" title>
            <img src="http://www.creditstate.cn/assets/img/index/right.png" title />
          </a> -->
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
   .news-carousel .el-carousel__item:nth-child(2n+1) {
    // background-image: url(img/1+x展示.jpg);
    background-color: red;
  }

    .news-carousel .el-carousel__item:nth-child(2n) {
    //background-image: url(img/1+x实验室.jpg);
    background-color: blue;
  }

</style>