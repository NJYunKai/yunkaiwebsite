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
        <div class="artdetail_title" style="display:block;font-family:Microsoft YaHei;font-size:2em;color:#000000;font-weight:bold;text-decoration:none;text-align: center">
          <p>
            一带一路 ———— 柬埔寨金边基地
          </p>
        </div>

        <div class="artview_content" style="display:block;font-family:Microsoft YaHei;font-size:16px;color:black;font-weight:normal;text-decoration:none;">
          <div class="artview_detail" setsid="article250" style="margin:0 5em">
            <p style="text-indent:2em;">“一带一路”电商谷（金边）基地（简称“金边基地”）落地在柬埔寨工业技术学院，教学由电商谷南京分中心（江苏经贸职业技术学院）对口支撑，海外建设部分由南京云开数据科技有限公司投入。</p><br> &nbsp;<br> 
            <p style="text-indent:2em;">金边基地于2017年12月16日达成合作，2019年4月26日建成并投入使用。金边基地根据柬埔寨的实际情况，第一阶段以信息技术应用普及为重点，成功举办了国家职业教育移动商务专业教学资源库在海外的应用推广活动。</p><br> &nbsp;<br> 
            <p style="text-indent:2em;">2019年11月17日，金边基地相关建设方在金边召开了二期建设工作会议，确定了2020年工作规划，并与柬埔寨泰州商会组织的本地企业达成了开发本地电商平台的合作意向。</p><br> &nbsp;<br>                  
            <div style="text-align: center;">
              <img src="../../../static/img/cooperation.png" width="534" height="273" alt="">
            </div> <br>
            <p style="text-indent:2em;text-align: center">2017年12月16日，江苏经贸职业技术学院与柬埔寨工业技术学院达成金边基地共建合作协议。中方薛茂云院长与柬方MOAN SAM OEURN院长共同签署了合作协议。</p><br> &nbsp;<br><br>                 
            <div style="text-align: center;">
              <img src="../../../static/img/active.png" width="534" height="273" alt="">
            </div> <br>
            <p style="text-indent:2em;text-align: center">2019年4月26日，江苏经贸职业技术学院在金边基地举办国家职业教育移动商务专业教学资源库在海外的应用推广活动。</p><br> &nbsp;<br><br>
            <div style="text-align: center;">
              <img src="../../../static/img/meeting.png" width="546" height="298" alt="" style="padding-right: 0px;">
            </div> <br>
            <p style="text-indent:2em;text-align: center">2019年11月17日，金边基地召开二期建设工作会议。</p><br> &nbsp;<br><br>     
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
      breadList: ["一带一路"]
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
      this.breadList = ["一带一路"];
      switch (this.$route.path) {
        //协同育人
        case "/beltroad/beltroad":
          this.breadList.push("一带一路");
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
