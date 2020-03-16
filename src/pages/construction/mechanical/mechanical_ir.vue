//工业机器人
<template>
 <div class="ir">

     	<!-- 侧边导航栏 -->
	<div class="r-side">
	  <router-link to="/construction/mechanical_ei">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.15s; animation-name: fadeInLeftBig;"
			>电子信息</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/mechanical_ir">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.25s; animation-name: fadeInLeftBig;"
			>工业机器人</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/mechanical_ict">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.35s; animation-name: fadeInLeftBig;"
			>智能控制技术</div>
		  </div>
		</div>
	  </router-link>
	</div>

    <div class="news">
        <div class="content-background-dark">
		<div class="content-1">
        <p>&nbsp;</p>
        <h2>
            <strong>一、学科定位（人才培养方案）</strong>
        </h2>
            <p style="text-align:center;">
		    <img src="../../../../static/img/g1.png">
		</p>
        </div>
        </div>
        <hr>

        <div class="content-background-shallow-black">
		<div class="content-1">
        <h2>
            <strong><strong>二、学科队伍建设</strong></strong>
        </h2>
        <p style="text-align:center;">
		    <img src="../../../../static/img/g2.png">
		</p>
        </div>
        </div>

        <div class="content-background-white">
        <div class="content-1">
        <h2>
            <strong><strong>三、学科基地建设</strong></strong>
        </h2>
        <p style="text-align:center;">
		    <img src="../../../../static/img/g3.png">
		</p>
        </div>
        </div>

        <div class="content-background-blue">
		<div class="content-1">
        <h2>
            <strong><strong>四、教学课程资源建设</strong></strong>
        </h2>
        <!-- <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对物联网专业学科覆盖面广，涉及知识技术互补的专业方面，我们公司根据行业实际和企业用人需求，结合多年的教育领域工作经验，组织企业高级技术工程师配合高校骨干教师制作出了突出专业核心课，兼顾公共课及基础课的课程资源，大致包括：《传感器与检测技术》、《 RFID识别技术》、《 Java程序设计》、《无线传感网络技术与应用》、《嵌入式Linux系统》 、《物联网综合应用系统开发》、《 Android应用程序开发》、《单片机原理及应用》、《 Zigbee技术及应用》。
        </p> -->
        <p style="text-align:center;">
		    <img src="../../../../static/img/g4.png">
		</p>
        </div>
        </div>

        <div class="content-background-bright-green">
        <div class="content-1">
        <h2>
            <strong><strong>五、学生实习实训</strong></strong>
        </h2>
        <p style="text-align:center;">
		    <img src="../../../../static/img/g5.png">
		</p>
        </div>
        </div>

        <div class="content-background-green">
        <div class="content-1">
        <h2>
            <strong><strong>六、学生就业</strong></strong>
        </h2>
         <p style="text-align:center;">
		    <img src="../../../../static/img/g6.png">
		</p>
        </div>
        </div>

    </div>
 </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.focuses .single-focus1{
    width: 60px;
	height: 60px;
	padding-left: 5px;
    padding-right: 5px;
    padding-top: 15px;
    margin-top: 50px;
	border-radius: 50%;
    margin: 0px;
    background: rgba(1, 1, 2, 0.54);
}
img {
	display: inline-block;
	height: auto;
	max-width: 100%;
	transform: scale(1.0);
	}
p{
	font-size: x-large;
    color: aliceblue;
	word-wrap: break-word;
	word-break: break-all;
	overflow: hidden;
}
div{
	margin-top:0px;
	}
strong{
	margin: 0;
    padding: 0;
    border: 0;
    font-style: inherit;
    font-variant-ligatures: inherit;
    font-variant-caps: inherit;
    font-variant-numeric: inherit;
    font-stretch: inherit;
    font-size: x-large;
    color: aqua;
    line-height: inherit;
    font-family: inherit;
    vertical-align: baseline;
}
</style>