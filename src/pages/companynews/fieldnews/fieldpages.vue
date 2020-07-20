<template>
    <div class="news-right-demo" >    
        <!-- 侧边导航栏 -->                                  
        <!-- <div class="r-side">
            <router-link to="/companynews/dynamicnews">
                <div class="school">
                <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div
                    class="single-focus1 white-bg diffuse-shadow green-line-bottom"
                    style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.15s; animation-name: fadeInLeftBig;"
                    >公司动态</div>
                </div>
                </div>
            </router-link>
            <router-link to="/companynews/fieldnews">
                <div class="school">
                <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div
                    class="single-focus1 white-bg diffuse-shadow green-line-bottom"
                    style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.25s; animation-name: fadeInLeftBig;"
                    >行业新闻分页显示</div>
                </div>
                </div>
            </router-link>
        </div>                                                           -->
        <!-- 内容主体 -->
        <div class="news">
            <div class="content-background-blue">
                <div class="content-1" style="width:100%">
                    <div v-for="(item, index) in companynews.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" :offset="0" 
                    class="lime-content  lime-finance "
                    >
                        <div class="lime-content-right" style="width:90%;margin:0 5%">
                            <router-link :to="{ name: 'fielddetails', params: { id: item.Id }}">
                                <p class="lime-style-one lime-style-margin news-title">
                                    <span class="lime-text-head">{{item.Title}}</span>
                                </p>
                                <p class="lime-style-one-two" style="color:black;width:90%;font-size:1.3em">{{item.Marks}}</p>
                                <span class="lime-style-three">查看详情&gt;&gt;</span>
                            </router-link>
                        </div>
                        <el-divider></el-divider>
                    </div>
                </div>
            </div>
            <div style="margin:2% 25%">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]" 
                :page-size="pagesize"         
                layout="total, sizes, prev, pager, next, jumper"
                :total="companynews.length"
                style="color:black;font-size:24px">    
            </el-pagination>
            </div>
        </div>                          


    </div>
</template>

<script>
import json from "../../../../static/json/userList.json";

export default {
    data: function(){
        return{
            companynews:[],
            id: 0,
            currentPage:1, //初始页
            pagesize:5,    //    每页的数据
            userList: []
        };
    },
    created() {
        this.handleUserList()
    },
    methods: {
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log("每页下拉显示数据") 
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log("点击第几页") 
                console.log(this.currentPage)  //点击第几页
        },
        handleUserList() {
            // this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
            //     this.userList = res.body
            // })
            this.userList = json.userList;
            
            this.$http
                .post("/Fieldpages/GetFieldpagesAll", {}, {})
                .then(response => {
                window.console.log(response.data);
                this.companynews = response.data;
                // console.log("新闻列表");
                // console.log(response.data);
                // console.log(this.companynews);+
                this.loading = false;
                })
                .catch(e => {
                console.log("companynewslist加载错误")
                }) 
        }
    },
    mounted(){
        // console.log("==========", this.$route.params);
        // // 获取到路径传入的参数id，通过filter过滤数据选取对应的id数组
        // this.id = this.$route.params.id;
        // // this.companynews = json.companynewslist;
        // // console.log(json.companynewslist);
        // this.$http
        //  .post("/Fieldnews/GetFieldnewsAll", {}, {})
        //  .then(response => {
        //  window.console.log(response.data);
        //  this.companynews = response.data;
        //  console.log("新闻列表");
        //  console.log(response.data);
        //  console.log(this.companynews);
        //  this.loading = false;
        // })
        // .catch(e => {
        //  console.log("companynewslist加载错误")
        // }) 
        
    }
}
</script>

<style>

    .el-pagination__total{
        color: black;
        font-size: 0.5rem;
    }

    .el-pagination__jump{
         color: black;
         font-size: 0.3rem;
    }

    .lime-content{
        margin: 0 5%;
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
        width: 90%;
        height: 146px;
        margin-top: 2.4% 5%;
        padding-bottom: 1.2%;
        /* background-color: red; */
        /* background: url(../img/detail/line.png) no-repeat 91px 154px; */
    }
    
    .news-right-demo{
        margin: 0 20%;
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
        width: 60%;
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

    .comnews .single-focus1{
        width: 100px;
        height: 100px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 26px;
        margin-top: 50px;
        border-radius: 50%;
        margin: 0px;
        background: rgba(1, 1, 2, 0.54);
    }
    
    .lime-style-one-two {
        height: 1.3rem;
    }

    .news-title {
        line-height: 1;
    }

    .school .single-focus1{
        width: 1.5rem;
        height: 1.5rem;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 15px;
        margin-top: 50px;
        border-radius: 50%;
        margin: 0px;
        background: rgba(1, 1, 2, 0.54);
    }

</style>