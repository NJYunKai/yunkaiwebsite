<template>
  <div>
    <!-- 轮播图   -->
    <!-- <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item" >
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>  
    </div> -->

    <!-- 产品方案修改模块 -->
    <div class="case" router>
      <div class="case-demo">
        <h3 class="product-header">产品方案</h3>
        <p class="product-header-text">Curstem&nbsp;case</p>
        <p class="product-pic"></p>
        <p style="clear: both;"></p>
        <p class="product-header-slogan">助力学校实验建设，促进学生实体发展</p>
        <div class="case-frame">

            <div class="case-frame-list">
              <div class="case-frame-img">
                <img src="http://www.creditstate.cn/uploadfile/2019/1206/20191206032503770.png" alt />
              </div>
               <router-link to="/productcenter/1+x" class="sub-link"><h3 class="case-title">1+x实验室</h3></router-link>
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
              <a
                class="ne-cont-threefat-color"
                href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=16"
                title
              >更多&gt;</a>
            </span>
          </div>
          <!-- 新闻图片文字叙述 -->
          <div class="news-carousel">
            <div class="vessel" style="left: -5985px;">
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2020/0229/20200229125016758.jpg"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s/LDb0mCpGeHMNwvi1t7aWVQ"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信与繁昌县金繁担保签订信用贷业务合作协议</h4>
                  <p class="carsoural-text">2020-02-29</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2020/0229/20200229124735563.jpg"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s/33bid3KnYGqwzZOk81ykQA"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">国务院办公厅发文，将在全国推广芜湖“信易贷”模式</h4>
                  <p class="carsoural-text">2020-02-29</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2020/0226/20200226075353512.jpg"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s/hO23w0WOMdeySb9Gjc9T7A"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">安庆惠国信用服务有限公司正式成立</h4>
                  <p class="carsoural-text">2020-02-26</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2020/0210/20200210083823409.png"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s?__biz=MzI0MjgzMzAyMA==&amp;mid=2247483992&amp;idx=1&amp;sn=edec0defb2a4b4df5c5b35186c"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信开启线上办公模式</h4>
                  <p class="carsoural-text">2020-02-10</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2020/0203/20200203062432686.jpg"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s?__biz=MzI0MjgzMzAyMA==&amp;mid=2247483978&amp;idx=1&amp;sn=5ef3a300528ac6f2459809d623"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信举办2019年工作总结表彰暨2020年新春欢庆会</h4>
                  <p class="carsoural-text">2020-02-03</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/1122/20191122084544252.jpg"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s/Lk-ruzws1e2jH_uL4q05Pw"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信顺利通过ISO管理体系评审并获得三项认证证书</h4>
                  <p class="carsoural-text">2019-11-22</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/1121/20191121081540403.jpg"
                  title
                />
                <a
                  href="https://mp.weixin.qq.com/s/LR5ohZLMPImm52vIyb0V-w"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">无锡市发改委和市信息中心等领导莅临惠国征信调研考察</h4>
                  <p class="carsoural-text">2019-11-21</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0912/20190912045505193.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=135"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">长三角G60科创走廊联席会议办公室领导莅临惠国征信调研考</h4>
                  <p class="carsoural-text">2019-09-12</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0820/20190820032517954.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=133"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">市委书记潘朝晖莅临惠国征信调研考察</h4>
                  <p class="carsoural-text">2019-08-20</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0706/20190706085953639.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=132"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">国家双创示范基地评估组领导莅临惠国征信调研考察</h4>
                  <p class="carsoural-text">2019-07-06</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0706/20190706085716664.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=131"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信与繁昌县金繁担保举行重要会谈</h4>
                  <p class="carsoural-text">2019-07-06</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0525/20190525084353674.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=130"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信与繁昌县金繁担保签订合作协议</h4>
                  <p class="carsoural-text">2019-05-25</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0525/20190525084109860.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=129"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信金融科技产品获天翼物联开发者大赛融合创新奖</h4>
                  <p class="carsoural-text">2019-05-25</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0507/20190507102707788.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=128"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信举办股权投资尽职调查业务培训会</h4>
                  <p class="carsoural-text">2019-05-07</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0428/20190428021409472.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=127"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">中国进出口银行领导莅临惠国征信调研考察</h4>
                  <p class="carsoural-text">2019-04-28</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0417/20190417084558723.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=126"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信领导一行赴苏州银行调研考察</h4>
                  <p class="carsoural-text">2019-04-17</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0410/20190410014124431.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=120"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">省科技融资担保公司莅临惠国征信服务的“科创”企业调研</h4>
                  <p class="carsoural-text">2019-04-10</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0403/20190403083900749.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=103"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">鸠江区党政代表团莅临惠国征信调研考察</h4>
                  <p class="carsoural-text">2019-04-03</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0329/20190329035650335.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=102"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信应邀参加芜湖数谷揭牌暨大数据产业对接会</h4>
                  <p class="carsoural-text">2019-03-29</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0326/20190326102420751.png"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=101"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信助力芜湖市举办社会信用体系建设信用宣传月活动</h4>
                  <p class="carsoural-text">2019-03-26</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://www.creditstate.cn/uploadfile/2019/0308/20190308042439181.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=100"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">构建学习型企业，惠国征信举办财务尽职调查业务培训会</h4>
                  <p class="carsoural-text">2019-03-08</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0304/20190304100911776.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=99"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">信易贷模式大放异彩，惠国征信金融服务走向大舞台</h4>
                  <p class="carsoural-text">2019-03-04</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201112734730.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=88"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信2019年终总结表彰暨新春欢庆会成功举办</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201114024842.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=87"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">金融服务再升级，惠国征信助力区域经济蓄势腾飞</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201114200888.png"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=86"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信参加2019中国（芜湖）经济高峰论坛</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201114424237.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=85"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">惠国征信与省科技融资担保企业展开合作交流</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201114648711.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=84"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">安徽万诺金融与惠国征信签订征信服务合作协议</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201114849525.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=83"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">上瑞控股与惠国征信签订战略合作协议</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201115250719.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=82"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">芜湖市高新担保与惠国征信签订合作协议</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
              <div class="new-carousel-content">
                <img
                  class="carousel-photo"
                  src="http://huiguo.b.yayuanzi.net/uploadfile/2019/0201/20190201115407165.jpg"
                  title
                />
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=81"
                  title
                  class="new-carousel-content-title"
                >
                  <h4 class="carousel-title">宣城市发改委、信息办领导来惠国征信调研考察</h4>
                  <p class="carsoural-text">2019-02-01</p>
                </a>
              </div>
            </div>
            <a href="javascript:;" class="prev" title>
              <img src="http://www.creditstate.cn/assets/img/index/new.png" />
            </a>
            <a href="javascript:;" class="next" title>
              <img src="http://www.creditstate.cn/assets/img/index/new_1.png" />
            </a>
          </div>
          <!-- 行业新闻模块 -->
          <div class="ne-box">
            <div class="ne-cont-header">
              <span class="ne-cont-bigfat">行业新闻</span>
              <span class="ne-cont-twofat">Industry&nbsp;news</span>
              <span class="ne-cont-threefat ne-cont-threefat-style">
                <a
                  class="ne-cont-threefat-color"
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=18"
                  title
                >更多 &gt;</a>
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
  
   .news-carousel .el-carousel__item :nth-child(2n) {
    background-color: red;
  }
  
   .news-carousel .el-carousel__item :nth-child(2n+1) {
    background-color: red;
  }

</style>