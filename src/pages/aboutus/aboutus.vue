<template>
  <div class="go-in">
    <banner img="../img/1+x实验室.jpg" title="走进科建" />
    <div class="section" v-loading="loading">
      <div class="section-content">
        <div class="content-summary">
          <div class="summary-left">
            <p class="title">公司简介</p>
            <p class="eTitle">ABOUT US</p>
            <p class="content">
              上海科建工程管理股份有限公司成立于2012年9月，注册资金500万。公司前身上海科建工程管理有限公司，
              是一家从事专业工程技术服务及工程项目管理的企业。公司于2017年11月通过国家高新技术企业认定，
              目前工程管理软件研发团队10人，包括硕士和研究生在内，平均年龄在35岁。公司自主研发工程项目管理
              标准化+互联网协同工作系统平台，此软件广泛应用于工程项目管理过程，实现全覆盖检查、全过程控制、全方位协调的目标。
              目前公司业务范围涉及上海、广东等多地，合作的单位有上海同济工程项目管理咨询有限公司、
              上海华银日用品有限公司、中科建设开发总公司、广东怡轩房地产开发有限公司等多家知名企业。 立人立己、达人达己！公司一直秉承“
              帮助施工单位解决技术问题、帮助业主解决协调问题 ”的管理理念，上海科建工程管理股份有限公司不断在工程项目管理领域开拓创新，
              通过不断完善工程项目管理标准化+互联网协同工作系统平台，实现每项工程“无重大安全事故、无重大返工、工程施工材料无伪劣产品、
              工程管理留下痕迹、施工过程可追溯”五大管理目标。
            </p>
          </div>
          <div class="summary-right">
            <img src="../img/1+x实验室.jpg" alt />
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
            <el-carousel :interval="4000" type="card" height="200px">
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
                <el-table
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
                </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            site: '南京',
            name: '李松林',
            phone: '18651837835'
          }, {
            site: '浙江',
            name: '黄山',
            phone: '111111'
          }, {
            site: '华北',
            name: '王小虎',
            phone: '22222'
          }, {
            site: '华西',
            name: '王小虎',
            phone: '333333'
          }]
        }
      }
    }
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


</style>