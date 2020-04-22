<template>
  <div class="r-news">
    <div class="r-news-content">
      <div class="content-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,i) in breadList" :key="i">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
   
      <div class="news">
        <banner img="../../../static/img/xlab-4.jpg" title="走进云开" />
        <div class="section" v-loading="loading">
          <div class="section-content">
            <div class="content-summary">
              <div class="summary-left" style="color:black">
                <p class="title">公司简介</p>
                <p class="eTitle">ABOUT US</p>
                <p class="content">
                  南京云开数据科技有限公司是一家从事物联网、云计算、大数据、人工智能、电子商务、智能制造等产品及各种教学设备研发、销售、服务为一体的专业公司。公司拥有一批高素质的专业技术服务工程师，本着团结、敬业、诚信、奋进的企业文化。长期为各界新老客户提供优质的产品和优良的售后服务。
                </p>
                <p class="content">
                 经过几年的积累，云开数据形成了完善的电子信息、电气自动化等相关技术的产品线，充分引进和吸收国际最新技术，自主研发数款教学及行业产品，涵盖智能制造、物联网、嵌入式系统、通信虚拟仿真综合实验系统等通信核心技术领域，形成了智能制造、智能校园、智能家居、智能交通、智能农业、智能物流、食品溯源、智能图书馆、智能工厂等多个行业应用系统解决方案。展望未来，云开数据将携手各方合作伙伴，创建资源整合平台以统合科研智力、产业技术之需求，将先进成熟之解决方案迅速推向市场，以成为国内最优秀的设备及方案服务商而努力奋斗。
                </p>
                <p class="content">公司总部设在南京，在杭州、郑州、西安、长沙、合肥、等地设有办事处；并在全国范围内设有代理服务机构，公司营销体系网络遍及全国三十余个省市。</p>
              </div>
              <div class="summary-right">
                <img src="../../../static/img/xlab-4.jpg" alt />
              </div>
            </div>

            <el-divider class="el-divider-active">
              <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
            </el-divider>
            

            <!-- 公司荣誉 -->
            <!-- <div class="content-honor">
              <div class="top">
                <h3>公司荣誉</h3>
                <p>HONOR</p>
              </div>
                <el-carousel :interval="4000" type="card" height="300px">
                    <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel> 
            </div>

            <el-divider class="el-divider-active">
              <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
            </el-divider> -->

            <!-- 联系我们 -->
            <div class="content-partner">
                <div class="top">
                    <h3>联系我们</h3>
                    <p>CONTACT</p>
                </div>

                  <!-- 联系方式 -->
                  <div style="height:300px;color:black">
                  <!-- 公司联系左列 -->
                    <ul style="border: 3px solid #005fff8c;width:40%;margin-left:7%;height:70%;float:left">
                      <p style="font-weight: bold;font-size:20px;margin:10px 0 20px 30px">南京云开数据科技有限公司</p>
                      <li class="leftli">联系人：伍芳</li>
                      <li class="leftli">手机：13357804061</li>
                      <li class="leftli">suesu11@qq.com</li>
                    </ul>
                    <!-- 地区联系右列 -->
                    <ul style="border: 3px solid #005fff8c;width:40%;height:70%;float:left;margin-left:6%">
                      <ul class="rightul" style="margin-left:40px">
                        <li class="rightli">地区</li>
                        <li class="rightli">南京总部</li>
                        <li class="rightli">华东、京津区域</li>
                        <li class="rightli">西南区域</li>
                        <li class="rightli">西北区域</li>
                        <li class="rightli">南北区域</li>
                      </ul>
                      <ul class="rightul" style="margin-left:120px">
                        <li class="rightli">联系人</li>
                        <li class="rightli">伍芳</li>
                        <li class="rightli">黄山</li>
                        <li class="rightli">刘义扬</li>
                        <li class="rightli">张雷</li>
                        <li class="rightli">裴帅帅</li>
                      </ul>
                      <ul class="rightul" style="margin-left:120px">
                        <li class="rightcontaction" style="margin-left:15px">联系方式</li>
                        <li class="rightcontaction">13357804061</li>
                        <li class="rightcontaction">18268314670</li>
                        <li class="rightcontaction">15574478482</li>
                        <li class="rightcontaction">15515558657</li>
                        <li class="rightcontaction">17826675267</li>
                      </ul>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isCollapse: false,
      breadList: ["关于我们"]
    };
  },
  //监听路由变化，更改菜单activeIndex值
  watch: {
    $route: "getPath"
  },
  created() {
    this.getPath();
  },
  methods: {
    //动态刷新面包屑
    getPath() {
      this.breadList = ["关于我们"];
      switch (this.$route.path) {
        //协同育人
        case "/aboutus/aboutus":
          this.breadList.push("关于我们");
          break;
      }
      console.log(this.$route.path, this.breadList);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}


.rightcontaction{
  margin-bottom: 13%;
}

.summary-right {
  width: 25%;
  height: 310px;
  border: 2px solid #1d42b9;
  border-radius: 10px;
  margin-top: 80px;
  text-align: center;
  img {
    width: 80%;
    height: 270px;
    margin-top: 20px;
  }
}

.content {
  font-size: 1.3em;
  text-indent: 25px;
  line-height: 30px;
}

  .content-summary {
      display: flex;
      justify-content: space-around;
      padding: 100px 0;
    .summary-left {
      width: 40%;

      .title {
        font-size: 25px;
        color: black;
      }

      .eTitle {
        font-size: 17px;
        color: black;
        padding: 20px 0;
      }
    }
  }



//备份CSS
.go-in {
  width: 100%;
  height: 100%;
  background-color: #14679f;
  position: relative;
  overflow: hidden;
  .section {
    width: 100%;
    &-content {
      width: 1240px;
      margin: 0 auto;
      background-color: #fff;



      //公司荣誉
      .content-honor {
        padding: 50px 0;
        .honor-show {
          width: 1000px;
          margin: 30px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;

          li {
            width: 220px;
            height: 320px;
            margin-left: 15px;
            list-style: none;
            border: 1px solid palegoldenrod;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          text-align: center;
          color: black;
        }
      }
    }
  }
}

@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}

@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
.el-divider--horizontal {
  margin: 1px 0;
}

.top {
  h3,
  p {
    text-align: center;
    color: black;
    font-weight: 400;
    padding: 10px 0;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  .border {
    border-bottom: 1px solid #3c6088;
    width: 15%;
    margin: 0 auto;
  }
}
// .swiper-button-disabled {
//   display: none;
// }
.order {
  order: -1;
}
.order-top {
  order: 1;
}
.el-divider {
  background-color: red;
  height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: black;
    border: 3px solid red;
  }
}
.el-divider-active {
  background-color: #3c6088;
}
.honor-big-img {
  width: 100%;
  height: 100%;
  z-index: 10;
  text-align: center;
  padding-bottom: 20px;
  padding: 5%;
  //background-color: #14679f;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

    .el-dialog__body {
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}

.el-carousel__item h3 {
    color: black;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

.leftli{
  margin-left: 30px;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.rightul{
  float: left;
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.3em;
}

.rightli{
  margin-bottom: 10px;
}
</style>