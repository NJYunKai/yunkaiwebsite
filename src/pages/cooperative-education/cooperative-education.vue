<template>
  <div class="r-news">
    <div class="r-news-content" style="background:white">
      <div class="content-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,i) in breadList" :key="i">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="news" style="margin: 0 15em;">
        <div  class="artdetail_title" style="display:block;font-family:Microsoft YaHei;font-size:1.4em;color:#000000;font-weight:bold;text-decoration:none;margin: 1em 3em;text-align: center">
          <p>
            2019年第二批南京云开数据科技有限公司·教育部产学合作协同育人项目申报指南发布
          </p>
        </div>


        <div class="artview_content" style="display:block;font-family:Microsoft YaHei;font-size:16px;color:black;font-weight:normal;text-decoration:none;">
          <div class="artview_detail" setsid="article250">
            <div style="text-align: center;margin-bottom:0.5em">
              <strong>教育部高等教育司关于公布</strong>
            </div>

            <strong><div style="text-align: center;margin-bottom:0.5em">
              <strong>有关企业支持的产学合作协同育人项目</strong>
            </div></strong>

            <strong><div style="text-align: center;margin-bottom:1em">
              <strong>申报指南（2019年第二批）的通知<br></strong></div>
            </strong>

            <p style="text-indent:2em;">为深入贯彻全国教育大会精神，认真落实《国务院办公厅关于深化高等学校创新创业教育改革的实施意见》（国办发〔2015〕36号）和《国务院办公厅关于深化产教融合的若干意见》（国办发〔2017〕95号）要求，深化产教融合、产学合作、协同育人，经企业申报、产学合作协同育人项目专家组审议通过，形成了2019年第二批产学合作协同育人项目申报指南。本批次申报指南中，共有346家企业支持项目12350项，现予以公布（项目简介见附件）。</p><br> &nbsp;<br> 
                  
            <div style="text-align: center;">
              <img src="../../../static/img/departmentinform.jpg" width="800" height="1053" alt="">
            </div> <br>
                  
            <p style="text-indent:2em;">在教育部指导下，南京云开数据科技有限公司拟在“人工智能”、“物联网”、“嵌入式”、“微电子”、“云计算”、“电子通信”、“自动化”、“大数据”、“机器人”、“移动商务”等几个方向上，开展产学合作协同育人项目，支持包含新工科建设、教学内容和课程体系改革、师资培训、实践条件和实践基地建设、创新创业教育改革五大类。各大院校可在“教育部产学合作协同育人项目平台”（项目平台网址：<a href="http://cxhz.hep.com.cn">http://cxhz.hep.com.cn</a>）注册申报，欢迎各院校申报南京云开数据科技有限公司2019产学合作协同育人项目。</p><br> &nbsp;<br>
                  
            <div style="text-align: center;">
              <img src="../../../static/img/companyedu2.png" width="800" height="283" alt="" style="padding-right: 0px;">
            </div> <br>

            <div style="text-align: center;">
              <img src="../../../static/img/companyedu1.png" width="800" height="283" alt="" style="padding-right: 0px;">
            </div> <br> <br> <br>
                  
            <div>
              <p>点击查看协同育人申报指南链接：<a href="http://cxhz.hep.com.cn" style="color:red">http://cxhz.hep.com.cn</a></p>
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
      breadList: ["协同育人"]
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
      this.breadList = ["协同育人"];
      switch (this.$route.path) {
        //协同育人
        case "/cooperative-education/cooperative-education":
          this.breadList.push("协同育人");
          break;
      }
      console.log(this.$route.path, this.breadList);
    }
  }
};
</script>

<style>
    .el-breadcrumb{
        font-size: 20px;
    }

    p{
        line-height: 2;
    }

    a{
        color: red;
    }


</style>
