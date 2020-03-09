<template>
  <!-- <div class="main">
		<div class="main-list">
			<router-link to="/about/introduce" class="link">
				<div class="top">
					<span class="text">关于惠国
					<small>About us</small>
				</span>
					<span class="fa fa-angle-right"></span>
				</div>
			</router-link>
			<router-link to="/about/introduce" class="about">
				<img class="logo" :src="logo_jpg" alt="惠国Logo">
				<div class="content">
					<p class="title">{{about.title}}</p>
					<div class="describe">
						<p class="text-indent">{{about.summary}}</p>
						<p class="detail text-indent">{{about.detail}}</p>
					</div>
				</div>
			</router-link>
		</div>
		<div class="main-list">
			<router-link to="/news/index" class="link">
				<div class="top">
					<span class="text">公司动态
					<small>Company news</small>
				</span>
					<span class="fa fa-angle-right"></span>
				</div>
			</router-link>
			<div class="news">
				<ul>
					<li class="news-item" v-for="(item,index) in news" :key="index" @click="showNews(index)">
						<div class="title">{{item.title}}</div>
						<p class="text-indent detail">{{item.content}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="main-list">
			<router-link to="/financial/credit" class="link">
				<div class="top">
					<span class="text">征信服务
					<small>Credit information service</small>
				</span>
					<span class="fa fa-angle-right"></span>
				</div>
			</router-link>
			<div class="service">
				<ul>
					<li class="service-item" v-for="(item,index) in service" :key="index">
						<div class="avatar">
							<img :src="item.imgUrl">
						</div>
						<div class="content">
							<router-link :to="item.url">
								<div class="title">{{item.title}}</div>
								<p class="text-indent detail">{{item.content}}</p>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
  </div>-->

  <!-- <div class="banner">
    <div class="banner-pic1">
      <a
        href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=32"
        class="banner-title"
        style="display: none;"
      >
        <img src="http://www.creditstate.cn/uploadfile/2019/0319/20190319020146182.png" alt="金融服务" />
      </a>
      <a
        href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=33"
        class="banner-title"
        style="display: none;"
      >
        <img src="http://www.creditstate.cn/uploadfile/2019/0319/20190319020206414.png" alt="信用价值" />
      </a>
      <a
        href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=33"
        class="banner-title"
        style="display: none;"
      >
        <img src="http://www.creditstate.cn/uploadfile/2019/0319/20190319020125758.jpg" alt="信用城市" />
      </a>
      <a
        href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=28"
        class="banner-title"
        style="display: block;"
      >
        <img
          src="http://www.creditstate.cn/uploadfile/2019/1209/20191209122852857.jpg"
          alt="综合金融服务平台"
        />
      </a>
      <div class="banner-pick">
        <ul class="banner-dot-ground">
          <li class="banner-dot"></li>
          <li class="banner-dot"></li>
          <li class="banner-dot"></li>
          <li class="banner-dot addstyle"></li>
        </ul>
      </div>
    </div>
  </div>-->

  <div>

    <!-- 轮播图   -->
    <div class="banner">
      <!-- <div class="banner-pic1">
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=32"
          class="banner-title"
          style="display: block;"
        >
          <img
            src="http://www.creditstate.cn/uploadfile/2019/0319/20190319020146182.png"
            alt="金融服务"
          />
        </a>
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=33"
          class="banner-title"
          style="display: none;"
        >
          <img
            src="http://www.creditstate.cn/uploadfile/2019/0319/20190319020206414.png"
            alt="信用价值"
          />
        </a>
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=33"
          class="banner-title"
          style="display: none;"
        >
          <img
            src="http://www.creditstate.cn/uploadfile/2019/0319/20190319020125758.jpg"
            alt="信用城市"
          />
        </a>
        <a
          href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=28"
          class="banner-title"
          style="display: none;"
        >
          <img
            src="http://www.creditstate.cn/uploadfile/2019/1209/20191209122852857.jpg"
            alt="综合金融服务平台"
          />
        </a>
        <div class="banner-pick">
          <ul class="banner-dot-ground">
            <li class="banner-dot addstyle"></li>
            <li class="banner-dot"></li>
            <li class="banner-dot"></li>
            <li class="banner-dot"></li>
          </ul>
        </div>
      </div> -->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item" >
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>  
    </div>

    <!-- 产品中心模块 -->
    <!-- <div class="product">
      <div class="product-demo">
        <h3 class="product-header">产品中心</h3>
        <p class="product-header-text">Produce&nbsp;center</p>
        <p class="product-pic"></p>
        <p style="clear: both;"></p>
        <div>
          <p class="product-header-slogan">社会信用服务、中小企业金融服务、金融科技产品研发</p>
          <a
            href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=14"
          >
            <span class="product-more">更多</span>
          </a>
        </div>
        <div class="operation">
          <img src="http://www.creditstate.cn/assets/img/detail/default_1.png" class="prodlast" />
          <img src="http://www.creditstate.cn/assets/img/detail/default_1.png" class="prodnextOne" />
          <div class="operation-content">
            <ul class="operation-farme" style="left: -301px;">
              <li class="farme-content">
                <div class="farme-pic">
                  <div class="farme-photo">
                    <img src="http://www.creditstate.cn/uploadfile/2019/0409/20190409014720386.png" />
                  </div>
                  <hr class="farme-hr" />
                  <div class="farme-text">
                    <div class="farme-text-cont">
                      <p class="farme-headline">社会信用体系建设及运营</p>
                      <p
                        class="farme-content-text"
                      >可为各地级市提供顶层规划设计 机制构建咨询 基础平台建设 应用体系规划 平台系统开发 运营模式设计 信易+场景设计开发及运营等全方位的服务。</p>
                    </div>
                    <a
                      class="farme-bottom"
                      href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=33"
                    >查看详情</a>
                  </div>
                </div>
              </li>
              <li class="farme-content">
                <div class="farme-pic">
                  <div class="farme-photo">
                    <img src="http://www.creditstate.cn/uploadfile/2019/0409/20190409122335798.png" />
                  </div>
                  <hr class="farme-hr" />
                  <div class="farme-text">
                    <div class="farme-text-cont">
                      <p class="farme-headline">综合金融服务平台</p>
                      <p
                        class="farme-content-text"
                      >构建完善数据和评价体系，推动各类金融和服务机构共同参与，全面满足企业各类需求（含金融服务），减少平台运营服务对政府财政投入的依赖。</p>
                    </div>
                    <a
                      class="farme-bottom"
                      href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=28"
                    >查看详情</a>
                  </div>
                </div>
              </li>
              <li class="farme-content">
                <div class="farme-pic">
                  <div class="farme-photo">
                    <img src="http://www.creditstate.cn/uploadfile/2019/0409/20190409013234216.png" />
                  </div>
                  <hr class="farme-hr" />
                  <div class="farme-text">
                    <div class="farme-text-cont">
                      <p class="farme-headline">中小企业融资服务</p>
                      <p
                        class="farme-content-text"
                      >“征信机构+银行+担保”的中小企业大数据信用贷融资模式，纯信用无抵押担保贷款，最高额度2000万，已累计发放贷款超20亿，不良率低于3‰。</p>
                    </div>
                    <a
                      class="farme-bottom"
                      href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=32"
                    >查看详情</a>
                  </div>
                </div>
              </li>
              <li class="farme-content">
                <div class="farme-pic">
                  <div class="farme-photo">
                    <img src="http://www.creditstate.cn/uploadfile/2019/0409/20190409123846251.png" />
                  </div>
                  <hr class="farme-hr" />
                  <div class="farme-text">
                    <div class="farme-text-cont">
                      <p class="farme-headline">企业信用评级服务</p>
                      <p
                        class="farme-content-text"
                      >面向中小企业做基于投行思维的大数据企业价值评估 其核心基础是行业分析+经营分析+财务分析 注重的是行业发展空间 企业成长能力和资源配置效率</p>
                    </div>
                    <a
                      class="farme-bottom"
                      href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=29"
                    >查看详情</a>
                  </div>
                </div>
              </li>
              <li class="farme-content">
                <div class="farme-pic">
                  <div class="farme-photo">
                    <img src="http://www.creditstate.cn/uploadfile/2019/0409/20190409013519730.png" />
                  </div>
                  <hr class="farme-hr" />
                  <div class="farme-text">
                    <div class="farme-text-cont">
                      <p class="farme-headline">物联网智能风控系统</p>
                      <p
                        class="farme-content-text"
                      >物联网智能风控系统是基于物联网、互联网、人工智能技术，实现金融机构远程监管企业贷（融、投）后风险的云服务平台，功能丰富。</p>
                    </div>
                    <a
                      class="farme-bottom"
                      href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=14&amp;id=31"
                    >查看详情</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 产品方案修改模块 -->
    <div class="case">
      <div class="case-demo" name="productcenter">
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
               <h3 class="case-title" ><router-link to="/productcenter/xx" class="sub-link">1+x实验室</router-link></h3>
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
            <!-- <div class="vessel" style="left: -5985px;">
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
            </a> -->
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item class="newscompany" v-for="itemn in 6" :key="itemn">
                <h3 class="medium">{{ itemn }}</h3>
              </el-carousel-item>
            </el-carousel>
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
          <!-- 媒体报道模块 -->
          <!-- <div class="ne-box">
            <div class="ne-cont-header">
              <span class="ne-cont-bigfat">媒体报道</span>
              <span class="ne-cont-twofat">Media&nbsp;coverage</span>
              <span class="ne-cont-threefat ne-cont-threefat-style">
                <a
                  class="ne-cont-threefat-color"
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=17"
                  title
                >更多 &gt;</a>
              </span>
            </div>
            <ul class="ne-cont-ground">
              <li class="ne-cont-text">
                <a href="https://mp.weixin.qq.com/s/oBqiUkmup_4Tm0d28LvOIw" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;《江淮晨报》：创新“芜湖模式”助力守信企业优质发展</span>
                </a>
                <span class="ne-cont-text-other">2019-12-23</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/npvR_PwnnvqJc6SZTgm9jA" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;芜湖市及惠国征信创新的信易贷模式再获国家发改委推介</span>
                </a>
                <span class="ne-cont-text-other">2019-05-10</span>
              </li>
              <li class="ne-cont-text">
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=17&amp;id=45"
                  title
                >
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;芜湖日报专题报道惠国征信助推信用芜湖建设</span>
                </a>
                <span class="ne-cont-text-other">2019-08-20</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/W_uoLBU6xrIHq8QYVUcrbw" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;芜湖新闻频道对乐惠分应用场景报道：信用让生活更便利</span>
                </a>
                <span class="ne-cont-text-other">2018-09-03</span>
              </li>
              <li class="ne-cont-text">
                <a
                  href="http://www.creditstate.cn/index.php?m=content&amp;c=index&amp;a=show&amp;catid=17&amp;id=44"
                  title
                >
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;芜湖新闻联播：惠国征信助力社会信用体系建设</span>
                </a>
                <span class="ne-cont-text-other">2019-08-20</span>
              </li>
              <li class="ne-cont-text ne-cont-text-right">
                <a href="https://mp.weixin.qq.com/s/DSBVK26Nb7-tbDSfnZvuHQ" title>
                  <span class="ne-cont-text-style">·&nbsp;&nbsp;芜湖电视台《生活传真》栏目专题报道乐惠分</span>
                </a>
                <span class="ne-cont-text-other">2018-04-12</span>
              </li>
            </ul>
          </div> -->
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
      // about: {
      //   title: "",
      //   summary: `惠国征信服务股份有限公司（以下简称“惠国征信”）是由芜湖市政府主导推动，
			// 	芜湖市信息办、金融办、信用办联合引领的以征信平台为载体、致力于政务信用、
			// 	中小企业征信以及农业征信等多元化征信产品服务，以金融大数据和商业物联网大数据为基础的综合性高端征信业服务机构。`,
      //   detail: `惠国征信于2016年7月20日在国家工商管理总局正式注册，注册资本5000万元，主要股东是惠国投资管理合伙企业、
			// 	芜湖市民强融资担保（集团）有限公司、安徽讯飞智能科技有限...`
      // },
      // news: [
      //   {
      //     title: "芜湖新闻频道“丹丹面对面”栏目邀请惠国征信徐博士谈征信",
      //     id: 1,
      //     content: `为更好地了解芜湖市社会信用体系建设现状，2017年9月5日上午，
		  // 芜湖新闻频道“丹丹面对面”栏目特邀惠国征信服务股份有限公司...`
      //   },
      //   {
      //     title: "惠国征信举办《建模方法论SEMMA建模路径》培训",
      //     id: 2,
      //     content: `为更好的实现信用贷项目的落地和执行，提高团队整体专业技能，拓宽学习和工作思路，2017年8月4日下午，
		  // 惠国征信开展了《建模...`
      //   },
      //   {
      //     title: "惠国征信董事长兼总裁徐慧囝博士应邀参加台州市第三期大数据论坛",
      //     id: 3,
      //     content: `2017年7月6日晚，台州市“大数据”第3期论坛《信用大数据》会议在台州市应急指挥中心大楼三楼大厅举办，本次活动是台州市应急指...`
      //   }
      // ],
      // service: [
      //   {
      //     url: "/financial/credit",
      //     title: "金融征信",
      //     imgUrl: avatar_index_01,
      //     content: `围绕进一步深化金融改革，提升金融服务实体经济发展能力，有效化解中小企业融资难、 融资贵问题，
		  // 惠国征信以中小企业...`
      //   },
      //   {
      //     url: "/government/benevolent",
      //     title: "政务征信",
      //     imgUrl: avatar_index_02,
      //     content: `惠政平台旨在建立失信联合惩戒专题库，实现失信信息互通共享。
		  // 汇集在市场行为中违背市场竞争准则和诚实信用原则，被...`
      //   }
      // ]
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    //background-color: #99a9bf;
    background-image: url(img/lunbotu-1.jpg);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

   .news-carousel .el-carousel__item  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
   .news-carousel .el-carousel__item :nth-child(2n) {
    background-color: #99a9bf;
  }
  
   .news-carousel .el-carousel__item :nth-child(2n+1) {
    background-color: #d3dce6;
  }


// .main {
//   display: flex;
//   width: 1000px;
//   margin: 0 auto;
//   padding: 35px 0 44px;
//   justify-content: space-between;
//   .main-list {
//     width: 320px;
//     .top {
//       position: relative;
//       padding: 8px 15px;
//       border-radius: 5px;
//       color: rgb(255, 255, 255);
//       background: rgb(179, 27, 36);
//       .text {
//         vertical-align: middle;
//         font-size: 16px;
//         small {
//           margin-left: 10px;
//         }
//       }
//       .fa-angle-right {
//         position: absolute;
//         right: 10px;
//         font-size: 21px;
//       }
//     }
//     .about,
//     .news,
//     .service {
//       height: 364px;
//       overflow: hidden;
//     }
//     .about {
//       overflow: hidden;
//       display: block;
//       .logo {
//         margin: 9px 5px;
//       }
//       .content {
//         padding: 0 5px;
//         .title {
//           font-size: 16px;
//         }
//         .describe {
//           font-size: 14px;
//           line-height: 1.75;
//           &:hover {
//             color: #b31b24;
//           }
//           .detail {
//             overflow: hidden;
//             text-overflow: ellipsis;
//             display: -webkit-box;
//             -webkit-line-clamp: 4;
//             -webkit-box-orient: vertical;
//           }
//         }
//       }
//     }
//     .news {
//       .news-item {
//         position: relative;
//         max-height: 92px;
//         overflow: hidden;
//         margin: 25px 0 30px;
//         padding: 0 5px;
//         cursor: pointer;
//         &:hover {
//           color: #b31b24;
//         }
//         &:last-child {
//           margin-bottom: 0;
//         }
//         &::after {
//           content: "";
//           position: absolute;
//           bottom: -15px;
//           border-bottom: 2px dashed #e2e2e2;
//           width: 100%;
//         }
//         .title {
//           font-weight: bold;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .detail {
//           overflow: hidden;
//           line-height: 1.75;
//           font-size: 14px;
//           text-overflow: ellipsis;
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//         }
//       }
//     }
//     .service {
//       .service-item {
//         display: flex;
//         margin: 15px 0;
//         padding: 0 5px;
//         &:last-child {
//           margin-bottom: 0;
//         }
//         .avatar {
//           display: flex;
//           flex: 1;
//           align-items: center;
//         }
//         .content {
//           flex: 1;
//           margin-left: 10px;
//           .title {
//             font-weight: bold;
//           }
//           .detail {
//             overflow: hidden;
//             max-height: 141px;
//             line-height: 1.75;
//             font-size: 14px;
//             text-overflow: ellipsis;
//             display: -webkit-box;
//             -webkit-line-clamp: 6;
//             -webkit-box-orient: vertical;
//             &:hover {
//               color: #b31b24;
//             }
//           }
//         }
//       }
//     }
//   }
// }
</style>