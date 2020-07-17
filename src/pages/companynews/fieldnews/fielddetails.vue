<template>
    <div class="news-right-demo">
        <div>                                    
            <!-- 内容主体 -->
            <div class="news">
                <div class="content-background-blue">
                    <div class="content-1" style="width:100%">
                        <div class="r-news">
                            <div class="r-news-content">

                                <div v-for="(item, index) in companynews" :key="index" :offset="0">
                                    <div style="display:block;font-family:Microsoft YaHei;font-size:30px;color:#000000;font-weight:bold;text-decoration:none;text-align: center;">
                                        {{item.Title}} <br><br>
                                    </div>
                                    <div style="margin:0 7%">
                                       <p v-html= "item.Content"></p>
                                       <!-- <img :src= "item.imgurl2"> -->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
    import json from "../../../../static/json/companynews.json";
    export default {
        data: function(){
            return{
                companynews:[],
                id: 0
            };
        },
        mounted(){
        console.log("==========", this.$route.params);
        // 获取到路径传入的参数id，通过filter过滤数据选取对应的id数组
        this.id = this.$route.params.id;
        // this.companynews = json.companynewslist.filter(values =>{
        //      return values.id == this.id;
        // });
        // console.log(json.companynewslist);
        this.$http
         .post("/Fieldnews/GetFieldnewsAll", {}, {})
         .then(response => {
         window.console.log(response.data);
         this.companynews = response.data.filter(values => {
             return values.Id == this.id;
         });
         console.log("详细新闻");
         console.log(response.data);
         console.log(this.companynews);
         this.loading = false;
        })
        .catch(e => {
         console.log("companynewslist加载错误")
        })
        }
    }
</script>

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

        .el-breadcrumb{
        font-size: 20px;
    }

    p{
        line-height: 2;
        /* color: black; */
    }

    a{
        color: red;
    }

</style>