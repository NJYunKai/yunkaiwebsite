<template>
  <div>
    <!-- 轮播图   -->
    <div class="banner">
      <el-carousel height="10rem">
        <el-carousel-item>
          <router-link to="/cooperative-education">
            <img v-lazy="img4" class="indeximg" />
          </router-link>
        </el-carousel-item>
        <!-- <el-carousel-item>
          <router-link to="/companynews/jingmao-lab">
            <img v-lazy="img2" class="indeximg" />
          </router-link>
        </el-carousel-item> -->
        <el-carousel-item>
          <router-link to="/companynews/belt-road">
            <img v-lazy="img3" class="indeximg"/>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/companynews/iotmeeting">
            <img v-lazy="img1" class="indeximg" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>

        <!-- 新闻中心修改模块 -->
    <div class="new" style="background-color:#faf9f991">
      <div class="new-demo">
        <h3 class="product-header">新闻中心</h3>
        <p class="product-header-text index-p">News&nbsp;center</p>
        <div class="news-content" style="margin-top:1%;background:#ffffff75">
          <!-- 新闻头部 -->
          <div class="ne-cont-header">
            <span class="ne-cont-bigfat">公司动态</span>
            <span class="ne-cont-twofat">Company&nbsp;dynamics</span>
            <span class="ne-cont-threefat">
              <router-link to="/companynews/dynamicnews" class="link">更多</router-link>
            </span>
          </div>
          <!-- 新闻图片文字叙述 -->
          <div class="news-carousel" style="height:4.8rem">

            <!-- <el-carousel :interval="4000" type="card" height="300px" style="background-color:#faf9f991">
              <el-carousel-item class="newscompany">
                <router-link to="/companynews/1+x">
                  <img v-lazy="img8" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 220px">协同育人申报指南发布</h2>
                </router-link>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <router-link to="/companynews/iotmeeting">
                  <img v-lazy="img9" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 220px">物联网大会成功召开</h2>
                </router-link>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <router-link to="/companynews/belt-road">
                  <img v-lazy="img10" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 220px">一带一路电商谷剪彩</h2>
                </router-link>
              </el-carousel-item>

              <el-carousel-item class="newscompany">
                <router-link to="/companynews/jingmao-lab">
                  <img v-lazy="img11" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 220px">智能制造实训室顺利验收</h2>
                </router-link>
              </el-carousel-item>
            </el-carousel> -->

            <!-- 循环改写 -->
            <el-carousel :interval="4000" type="card" height="300px" style="background-color:#faf9f991">
              <el-carousel-item v-for="(item, index) in companynewslist" :key="index" :offset="0" class="newscompany">
                <router-link :to="{ name: 'newsdetails', params: { id: item.id }}">
                  <img :src="item.notable" class="newsimg" />
                  <h2 class="medium" style="margin:10px 0 0 220px">{{item.sub_title}}</h2>
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
            <!-- <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/kNux1VJUnDIokv4m7voZGA" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;中等职业教育的发展历程、特征及未来走向</span>
                </a>
                <span class="ne-cont-text-other">2020-05-01</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/eEYK5a5ggP4udROd12Pr_w" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;关于公布首批全国职业院校“双师型”教师队伍建设典型案例的通知</span>
                </a>
                <span class="ne-cont-text-other">2020-04-30</span>
              </li>
            </ul> -->
            <!-- 右列 -->
            <!-- <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/U1VwsRLfeKV4xYFRmC3LIQ" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;如何有效推进1+X证书制度试点工作</span>
                </a>
                <span class="ne-cont-text-other">2020-05-06</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/cm6oWYr1rLpVLna-hQHC_Q" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;教育部教师工作司关于公布首批全国职业院校“双师型”教师队伍建设典型案例的通知</span>
                </a>
                <span class="ne-cont-text-other">2019-05-04</span>
              </li>
            </ul> -->

            <!-- 改写 -->
            <!-- <ul class="ne-cont-ground" style="width:1200px">
              <li class="ne-cont-text" style="width:40%;float:left;display:block">
                <a href="https://mp.weixin.qq.com/s/U1VwsRLfeKV4xYFRmC3LIQ" title>
                  <span class="ne-cont-text-style" style="width:60%">·&nbsp;&nbsp;如何有效推进1+X证书制度试点工作</span>
                </a>
                <span class="ne-cont-text-other">2020-05-06</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right" style="width:40%;float:left;display:block">
                <a href="https://mp.weixin.qq.com/s/cm6oWYr1rLpVLna-hQHC_Q" title>
                  <span class="ne-cont-text-style" style="width:60%">·&nbsp;&nbsp;教育部教师工作司关于公布首批全国职业院校“双师型”教师队伍建设典型案例的通知</span>
                </a>
                <span class="ne-cont-text-other">2019-05-04</span>
              </li>
              <li class="ne-cont-text" style="width:40%;float:left;display:block">
                <a href="https://mp.weixin.qq.com/s/kNux1VJUnDIokv4m7voZGA" title>
                  <span class="ne-cont-text-style" style="width:60%">·&nbsp;&nbsp;中等职业教育的发展历程、特征及未来走向</span>
                </a>
                <span class="ne-cont-text-other">2020-05-01</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right" style="width:40%;float:left;display:block">
                <a href="https://mp.weixin.qq.com/s/eEYK5a5ggP4udROd12Pr_w" title>
                  <span class="ne-cont-text-style" style="width:60%">·&nbsp;&nbsp;关于公布首批全国职业院校“双师型”教师队伍建设典型案例的通知</span>
                </a>
                <span class="ne-cont-text-other">2020-04-30</span>
              </li>
            </ul> -->

            <!-- 循环改写 -->
            <ul class="ne-cont-ground" style="width:1200px">
              <li v-for="(item, index) in fieldnews" :key="index" :offset="0" class="ne-cont-text" style="width:40%;float:left;display:block">
                <a :href= "item.herf">
                  <span class="ne-cont-text-style" style="width:60%">·&nbsp;&nbsp;{{item.title}}</span>
                </a>
                <span class="ne-cont-text-other">{{item.publish_time}}</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

    <!-- 产品方案修改模块 -->
    <div class="case" router style="background-color:rgba(237, 243, 242, 0.76)">
      <div class="case-demo">
        <h3 class="product-header">经典案例</h3>
        <p class="product-header-text index-p">Curstem&nbsp;case</p>
        <div class="news-content" style="margin-top:1%;background:#ffffff75;height:10rem">
          <div class="case-frame">
            <router-link to="/productcase/xlab" class="sub-link">
              <div class="case-frame-list">
                <div class="case-frame-img">
                  <img v-lazy="img5" alt />
                </div>
                <h3 class="case-title">江苏经贸职业技术学院</h3>
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
    </div>

    <!-- 合作院校 -->
    <div class="customer" style="background: #faf9f991;height:16rem">
      <div class="new-demo" style="height:95%">
        <h3 class="product-header">合作院校</h3>
        <p class="product-header-text index-p">Cooperative&nbsp;school</p>
        <p class="product-pic new-pic"></p>
        <!-- <p class="product-pic new-pic"></p>
        <p class="product-header-slogan new-header-slogan" style="margin-bottom:30px">云上开花，数据结果</p> -->
        <div class="product-box" style="background:#faf9f991;height:13.2rem">
          <!-- <div class="product-vessel product-vessel-vive" style="left: -2112.95px;">
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
          </div> -->
          <!-- 本科院校 -->
          <div>
            <div style="margin:0.5rem 0 0 0"><span class="ne-cont-bigfat">本科院校</span></div>
            <div style="margin:0 5%">
              <el-carousel :interval="4000" type="card" height="270px">
                <el-carousel-item v-for="item in rcschoolbox" :key="item.id" style="background-color:rgba(250, 249, 249, 0)">
                  <img :src="item.idView" class="rcschoolimage" style="margin:1rem 3rem;">
                </el-carousel-item>
              </el-carousel>
            </div>

          </div>

          <!-- 高职院校 -->
          <div>
            <div style="margin:0.5rem 0 0 0"><span class="ne-cont-bigfat">高职院校</span></div>
            <div style="margin:0 5%">
              <el-carousel :interval="9000" type="card" height="270px" >
                <el-carousel-item v-for="item in hvschoolbox" :key="item.id" style="background-color:rgba(250, 249, 249, 0)">
                  <img :src="item.idView" class="rcschoolimage" style="margin:1rem 3rem">
                </el-carousel-item>
              </el-carousel>
            </div>
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
        <!-- <p class="product-header-slogan new-header-slogan" style="margin-bottom:30px">凝聚八方之力，共建云开未来</p> -->
        <div class="product-box" style="background:#ffffff8c;height:8rem">
          <div class="product-vessel product-vessel-vive" style="left: -2112.95px;height:7rem">

            <a href="javascript:;" class="product-roll" style="margin:0 2rem">
              <img v-lazy="img27" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:4rem">
              <img v-lazy="img28" style="width:5rem;height:2rem;margin:0.5rem" />
            </a>

            <a href="javascript:;" class="product-roll" style="margin:0 2rem">
              <img v-lazy="img26" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:5rem">
              <img v-lazy="img30"  style="width:4rem;height:2rem;margin:1rem 1.5rem 1rem 1.5rem"/>
            </a>

            <a href="javascript:;" class="product-roll" style="width:5rem">
              <img v-lazy="img29" style="width:4rem;height:2rem;margin: 0 0 1.2rem 1.5rem;" />
            </a>

            <a href="javascript:;" class="product-roll" style="width:5rem">
              <img src="../../static/img/cooperationcompany-6.png" style="width:4rem;height:1.5rem;margin: 0 0 1.2rem 1.5rem;" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../static/json/fieldnews.json";
import companynewsjson from "../../static/json/companynews.json";
import logo_jpg from "../../static/img/logo.png";
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
      fieldnews: [
        // {        
        // id: 1,
        // type: 1,
        // name: "应用型本科高校和职业教育本科高校提前招生",
        // title: "应用型本科高校和职业教育本科高校提前招生",
        // href: "https://mp.weixin.qq.com/s/ttyZQhSQAQyUqZ8FeX06bA",
        // detailcontent: "应用型本科高校和职业教育本科高校提前招生",
        // updatetime: "2020-05-09"},
        // {id: 2,
        // type: 1,
        // name: "重磅！科技部发文：支持再建四个人工智能国家试验区！",
        // title: "重磅！科技部发文：支持再建四个人工智能国家试验区！",
        // href: "https://mp.weixin.qq.com/s/tQn7KNV2QRzFe1RhGFMK4w",
        // detailcontent: "重磅！科技部发文：支持再建四个人工智能国家试验区！",
        // updatetime:"2020-05-09"
        // }
      ],
      companynewslist: [],
      rcschoolbox:[
        {id:0,idView:require("../../static/img/rcschool-1")},
        {id:1,idView:require("../../static/img/rcschool-2")},
        {id:2,idView:require("../../static/img/rcschool-3")},
        {id:3,idView:require("../../static/img/rcschool-4")},
        {id:4,idView:require("../../static/img/rcschool-5")},
        {id:5,idView:require("../../static/img/rcschool-6")},
        {id:6,idView:require("../../static/img/rcschool-7")},
        {id:7,idView:require("../../static/img/rcschool-8")},
        {id:8,idView:require("../../static/img/rcschool-9")},
        {id:9,idView:require("../../static/img/rcschool-10")},
        {id:10,idView:require("../../static/img/rcschool-11")},
        {id:11,idView:require("../../static/img/rcschool-12")},
        {id:12,idView:require("../../static/img/rcschool-13")},
        {id:13,idView:require("../../static/img/rcschool-14")},
        {id:14,idView:require("../../static/img/rcschool-15")},
        {id:15,idView:require("../../static/img/rcschool-16")},
        {id:16,idView:require("../../static/img/rcschool-17")},
        {id:17,idView:require("../../static/img/rcschool-18")},
        {id:18,idView:require("../../static/img/rcschool-19")},
        {id:19,idView:require("../../static/img/rcschool-20")},
        {id:20,idView:require("../../static/img/rcschool-21")},
        {id:21,idView:require("../../static/img/rcschool-22")},
        {id:22,idView:require("../../static/img/rcschool-23")}
      ],
      hvschoolbox:[
        {id:0,idView:require("../../static/img/hvschool-1")},
        {id:1,idView:require("../../static/img/hvschool-2")},
        {id:2,idView:require("../../static/img/hvschool-3")},
        {id:3,idView:require("../../static/img/hvschool-4")},
        {id:4,idView:require("../../static/img/hvschool-5")},
        {id:5,idView:require("../../static/img/hvschool-6")},
        {id:6,idView:require("../../static/img/hvschool-7")},
        {id:7,idView:require("../../static/img/hvschool-8")}
      ],
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
  mounted(){
    this.fieldnews = json.fieldnewslist;
    this.companynewslist = companynewsjson.companynewslist;
     console.log(json.fieldnewslist);
     console.log(companynewsjson.companynewslist);
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
  margin-left: 1.5rem;
  margin-top: 0.2rem;
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

.indeximg{
  height: 100%;
}

.rcschoolimage{
  height: 200px;
  width: 200px;
}
</style>