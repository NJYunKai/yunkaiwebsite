//区块链
<template>
<div class="bc">

	<!-- 侧边导航栏 -->
	<div class="r-side">
	  <router-link to="/construction/construction_iot">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.15s; animation-name: fadeInLeftBig;"
			>物联网</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/construction_bd">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.25s; animation-name: fadeInLeftBig;"
			>大数据</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/construction_cc">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.35s; animation-name: fadeInLeftBig;"
			>云计算</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/construction_ai">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
			>人工智能</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/construction_ce">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.55s; animation-name: fadeInLeftBig;"
			>通信工程</div>
		  </div>
		</div>
	  </router-link>
	  <router-link to="/construction/construction_bc">
		<div class="focuses">
		  <div class="col-lg-3 col-sm-6 col-xs-12">
			<div
			  class="single-focus1 white-bg diffuse-shadow green-line-bottom"
			  style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.65s; animation-name: fadeInLeftBig;"
			>区块链</div>
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
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业用人需求探讨制定出更加符合市场需求的区块链人才培养组织行业专家、企业工程技术人员和高校教研人员共同组建区块链人才培养方案指导委员会，依托院校实际教学资源，结合区块链领域相关解决方案。
        </p>
            <p style="text-align:center;">
		    <img src="../../../../static/img/q1.png">
		</p>
        </div>
	 </div>

       <div class="content-background-shallow-black">
		<div class="content-1">
        <h2>
            <strong><strong>二、学科队伍建设</strong></strong>
        </h2>
        <p style="text-align:center;">
            <img src="../../../../static/img/q2.png">
        </p>
        </div>
      </div>

        <div class="content-background-white">
        <div class="content-1">
        <h2>
            <strong><strong>三、学科基地建设</strong></strong>
        </h2>
        <p style="text-align:center;">
            <img src="../../../../static/img/q3.png">
        </p>
        </div>
        </div>

        <div class="content-background-blue">
		<div class="content-1">
        <h2>
            <strong><strong>四、教学课程资源建设</strong></strong>
        </h2>
        <p style="text-align:center;">
            <img src="../../../../static/img/q4.png">
        </p>
       </div>
        </div>

        <div class="content-background-bright-green">
            <div class="content-1">
        <h2>
            <strong><strong>五、学生实习实训</strong></strong>
        </h2>
        <p style="text-align:center;">
            <img src="../../../../static/img/q5.png">
        </p>
        </div>
        </div>

        <div class="content-background-green">
            <div class="content-1">
        <h2>
            <strong><strong>六、学生就业</strong></strong>
        </h2>
        <p style="text-align:center;">
            <img src="../../../../static/img/q6.png">
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
	transform: scale(0.8);
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