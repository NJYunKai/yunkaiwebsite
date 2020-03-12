<template>
  <div class="go-in">
    <banner img="../img/xlab-4.jpg" title="走进云开" />
    <div class="section" v-loading="loading">
      <div class="section-content">
        <div class="content-summary">
          <div class="summary-left">
            <p class="title">公司简介</p>
            <p class="eTitle">ABOUT US</p>
            <p class="content">
              南京云开数据科技有限公司是一家从事物联网、云计算、大数据、人工智能、电子商务软件、智能制造及各种教学仪器等产品研发、销售、服务为一体的专业公司。公司拥有一批高素质的专业技术服务工程师，本着团结、敬业、诚信、奋进的企业文化。长期为各界新老客户提供优质的产品和优良的售后服务。
            </p>
            <p class="content">
              经过几年的积累，云开数据形成了完善的电子信息、电气自动化等相关技术的产品线，充分引进和吸收国际最新技术，自主研发数款教学及行业产品，涵盖智能制造、物联网、嵌入式系统、通信虚拟仿真综合实验系统等通信核心技术领域，形成了智能制造、智能校园、智能家居、智能交通、智能农业、智能物流、食品溯源、智能图书馆、智能工厂等多个行业应用系统解决方案。展望未来，云开数据将携手各方合作伙伴，创建资源整合平台以统合科研智力、产业技术之需求，将先进成熟之通信虚拟仿真解决方案迅速推向市场，以成为国内最优秀的通信虚拟仿真设备及方案服务商而努力奋斗。
            </p>
            <p class="content">公司总部设在南京，在杭州、郑州、西安、长沙、合肥、等地设有办事处；并在全国范围内设有代理服务机构，公司营销体系网络遍及全国三十余个省市。</p>
          </div>
          <div class="summary-right">
            <img src="../img/xlab-4.jpg" alt />
          </div>
        </div>

        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        

        <!-- 公司荣誉 -->
        <div class="content-honor">
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
        </el-divider>

        <!-- 联系我们 -->
        <div class="content-partner">
            <div class="top">
                <h3>联系我们</h3>
                <p>CONTACT</p>
            </div>
                <!-- <el-table
                    :data="tableData"
                    border
                    style="width: 541px;margin-left: 350px;align: center">
                    <el-table-column
                    prop="site"
                    label="地点"
                    align="center"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    align="center"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="phone"
                    width="180"
                    align="center"
                    label="联系方式">
                    </el-table-column>
                </el-table> -->

              <!-- 联系方式 -->
              <div style="height:300px">
              <!-- 公司联系左列 -->
                <ul style="border: 3px solid red;width:40%;margin-left:80px;height:210px;float:left">
                  <p style="font-weight: bold;font-size:20px;margin:10px 0 20px 30px">南京云开数据科技有限公司</p>
                  <li class="leftli">联系人：李经理</li>
                  <li class="leftli">手机：18651837835</li>
                  <li class="leftli">suesu11@qq.com</li>
                </ul>
                <!-- 地区联系右列 -->
                <ul style="border: 3px solid red;width:40%;height:210px;float:left;margin-left:100px">
                  <ul class="rightul" style="margin-left:40px">
                    <li class="rightli">地区</li>
                    <li class="rightli">南京</li>
                    <li class="rightli">杭州</li>
                    <li class="rightli">长沙</li>
                    <li class="rightli">西安</li>
                  </ul>
                  <ul class="rightul" style="margin-left:120px">
                    <li class="rightli">联系人</li>
                    <li class="rightli">伍芳</li>
                    <li class="rightli">黄山</li>
                    <li class="rightli">张雷</li>
                    <li class="rightli">刘义扬</li>
                  </ul>
                  <ul class="rightul" style="margin-left:120px">
                    <li class="rightli" style="margin-left:15px">联系方式</li>
                    <li class="rightli">18507227150</li>
                    <li class="rightli">18268314670</li>
                    <li class="rightli">15574478482</li>
                    <li class="rightli">15515558657</li>
                  </ul>
                </ul>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // export default {
    //   data() {
    //     return {
    //       tableData: [{
    //         site: '南京',
    //         name: '李松林',
    //         phone: '18651837835'
    //       }, {
    //         site: '浙江',
    //         name: '黄山',
    //         phone: '111111'
    //       }, {
    //         site: '华北',
    //         name: '王小虎',
    //         phone: '22222'
    //       }, {
    //         site: '华西',
    //         name: '王小虎',
    //         phone: '333333'
    //       }]
    //     }
    //   }
    // }
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

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

      .content-summary {
        //height: 500px;
        display: flex;
        justify-content: space-around;
        padding: 100px 0;
        .summary-left {
          width: 600px;
          .title {
            font-size: 25px;
            color: #e13834;
          }
          .eTitle {
            font-size: 17px;
            color: #e13834;
            padding: 20px 0;
          }
          .content {
            color: #14679f;
            font-size: 14px;
            text-indent: 25px;
            line-height: 30px;
          }
        }

        .summary-right {
          width: 400px;
          height: 310px;
          border: 2px solid #1d42b9;
          //animation: imgboxkey 4s infinite;
          border-radius: 10px;
          margin-top: 80px;
          text-align: center;

          img {
            width: 360px;
            height: 270px;
            margin-top: 20px;
            //animation: imgbo 4s infinite;
          }
        }
      }

      //发展历程
      .content-course {
        padding: 50px 0;
        .course-time {
          width: 1000px;
          height: 400px;
          margin: 20px auto;
          .swiper-container {
            height: 100%;
          }
          .time-show {
            width: 700px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            .time-show-item {
              width: 350px;
              height: 100%;
              overflow: hidden;
              display: flex;
              flex-direction: column;

              .item-top,
              .item-bottom {
                height: 190px;
              }
              .item-bottom {
                // display: flex;
                // align-content: center;
                .item-bottom-content {
                  background-color: #1667a0;
                  margin: 20px 0;
                  p {
                    color: #fff;
                    text-align: center;
                    padding: 15px;
                  }
                }
              }
            }
          }
        }
      }

      //企业文化
      .content-culture {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        background-color: #c2daeb;
        h3 {
          color: #3c6088;
          font-size: 26px;
        }
        p {
          color: #3c6088;
          font-size: 26px;
          padding: 5px 0;
        }
        span {
          font-weight: 400;
          line-height: 36px;
          font-size: 18px;
          padding: 5px 0;
        }
      }

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
          color: #3c6088;
        }
      }

      //团队风采
      .content-team {
        padding: 50px 100px;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }

      //合作伙伴
      .content-partner {
        padding: 50px 0;
        .partner-img {
          width: 950px;
          margin: 20px auto;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            width: 107px;
            height: 107px;
            list-style: none;
            margin: 10px 25px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid rgb(194, 218, 235);
            }
          }
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
    color: #3c6088;
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
    color: #fff;
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
    color: #475669;
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
}

.rightul{
  float: left;
  margin-top: 15px;
  font-weight: bold;
}

.rightli{
  margin-bottom: 10px;
}
</style>