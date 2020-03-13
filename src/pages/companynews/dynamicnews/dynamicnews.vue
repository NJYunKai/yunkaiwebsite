<template>
    <div class="lime-right-demo">                                      
                                                                  
        <div>
        <!-- 侧边导航栏 -->
        <div class="r-side">
        <router-link to="/companynews/dynamicnews">
            <div class="focuses">
            <div class="col-lg-3 col-sm-6 col-xs-12">
                <div
                class="single-focus1 white-bg diffuse-shadow green-line-bottom"
                style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.15s; animation-name: fadeInLeftBig;"
                >1+x”试验</div>
            </div>
            </div>
        </router-link>
        <router-link to="/services/labsolutions_blockchain">
            <div class="focuses">
            <div class="col-lg-3 col-sm-6 col-xs-12">
                <div
                class="single-focus1 white-bg diffuse-shadow green-line-bottom"
                style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.25s; animation-name: fadeInLeftBig;"
                >协同育人</div>
            </div>
            </div>
        </router-link>
        <router-link to="/services/labsolutions_ai">
            <div class="focuses">
            <div class="col-lg-3 col-sm-6 col-xs-12">
                <div
                class="single-focus1 white-bg diffuse-shadow green-line-bottom"
                style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.35s; animation-name: fadeInLeftBig;"
                >一带一路</div>
            </div>
            </div>
        </router-link>
        <router-link to="/services/labsolutions_coldchain">
            <div class="focuses">
            <div class="col-lg-3 col-sm-6 col-xs-12">
                <div
                class="single-focus1 white-bg diffuse-shadow green-line-bottom"
                style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.45s; animation-name: fadeInLeftBig;"
                >物联大会</div>
            </div>
            </div>
        </router-link>
        </div>
        <!-- 内容主体 -->
        <div class="news">
            
        <div class="content-background-blue">
            <div class="content-1" style="width:800px">
                <div class="lime-content  lime-finance ">
                    <div class="lime-content-left">
                        <p class="lime-dete-month">1月</p>
                        <p class="lime-date-day">3日</p>
                    </div>
                    <div class="lime-content-right">
                        <p class="lime-style-one lime-style-margin">
                            <span class="lime-text-head">"1+x"实验室：创新实验室，带领学生实现创新</span>
                        </p>
                        <p class="lime-style-one-two">1月3号实现江苏经贸“1+x”的试验基地建设</p>
                        <router-link to="/companynews/1+x"><span class="lime-style-three">查看详情&gt;&gt;</span></router-link>
                    </div>
                </div>
                <el-divider></el-divider>

                <div class="lime-content  lime-finance ">
                    <div class="lime-content-left">
                        <p class="lime-dete-month">1月</p>
                        <p class="lime-date-day">3日</p>
                    </div>
                    <div class="lime-content-right">
                        <p class="lime-style-one lime-style-margin">
                            <span class="lime-text-head">"1+x"实验室：创新实验室，带领学生实现创新</span>
                        </p>
                        <p class="lime-style-one-two">1月3号实现江苏经贸“1+x”的试验基地建设</p>
                        <router-link to="/companynews/1+x"><span class="lime-style-three">查看详情&gt;&gt;</span></router-link>
                    </div>
                </div>
                <el-divider></el-divider>

                <div class="lime-content  lime-finance ">
                    <div class="lime-content-left">
                        <p class="lime-dete-month">1月</p>
                        <p class="lime-date-day">3日</p>
                    </div>
                    <div class="lime-content-right">
                        <p class="lime-style-one lime-style-margin">
                            <span class="lime-text-head">"1+x"实验室：创新实验室，带领学生实现创新</span>
                        </p>
                        <p class="lime-style-one-two">1月3号实现江苏经贸“1+x”的试验基地建设</p>
                        <router-link to="/companynews/1+x"><span class="lime-style-three">查看详情&gt;&gt;</span></router-link>
                    </div>
                </div>
                <el-divider></el-divider>

            </div>
        </div>

        

        </div>
    </div>        
                                     
    </div>
</template>



<style>

    .lime-content  .lime-content{
        margin: 0;
        padding: 0;
        border: 0;
        font-style: inherit;
        font-variant-ligatures: inherit;
        font-variant-caps: inherit;
        font-variant-numeric: inherit;
        font-stretch: inherit;
        font-size: 100%;
        line-height: inherit;
        font-family: inherit;
        vertical-align: baseline;
        width: 100%;
        height: 146px;
        margin-top: 4.8%;
        padding-bottom: 1.2%;
        background-color: red;
        /* background: url(../img/detail/line.png) no-repeat 91px 154px; */
    }
    
    .lime-right-demo{
        margin: 0 0 0 450px;
        padding: 0;
        border: 0;
        font-style: inherit;
        font-variant-ligatures: inherit;
        font-variant-caps: inherit;
        font-variant-numeric: inherit;
        font-stretch: inherit;
        font-size: 100%;
        line-height: inherit;
        font-family: inherit;
        vertical-align: baseline;
        float: left;
        width: 944px;
        margin-bottom: 18px;
        padding-bottom: 30px;
        margin-top: 3.3%;
        background: #36612e00;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
        border-radius: 6px;
    }

    .lime-content-left{
        margin: 0;
        padding: 0;
        border: 0;
        font-style: inherit;
        font-variant-ligatures: inherit;
        font-variant-caps: inherit;
        font-variant-numeric: inherit;
        font-stretch: inherit;
        font-size: 100%;
        line-height: inherit;
        font-family: inherit;
        vertical-align: baseline;
        float: left;
        width: 164px;
        height: 68px;
    }

    .lime-dete-month{
        margin: 0;
        padding: 0;
        border: 0;
        font-style: inherit;
        font-variant-ligatures: inherit;
        font-variant-caps: inherit;
        font-variant-numeric: inherit;
        font-stretch: inherit;
        font-family: inherit;
        vertical-align: baseline;
        width: 48px;
        line-height: 22px;
        margin-left: 54%;
        text-align: center;
        letter-spacing: 0;
        display: inline-block;
        margin-top: 12%;
        font-size: 14px;
        background-color:#EF686D;
        /* color: red; */
    }

    .lime-date-day{
        display: block;
        line-height: 24px;
        font-size: 24px;
        color: #EF686D;
        font-size: 14px;
    }

</style>