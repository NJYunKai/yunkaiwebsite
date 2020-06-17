<template>
  <div>
    <!-- 内容主体 -->
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <el-collapse v-model="activeName"  @change="changeclassify" accordion>
            <el-collapse-item title="编程基础教学" name="1">
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, index) in classifylist"
                  :key="index"
                  :offset="0"
                >
                  <router-link
                    :to="{ name: 'video', params: { id: item.id } }"
                  >
                    <el-card shadow="hover">
                      <img :src="item.imgurl" class="image" />
                      <div class="title">
                        <span>{{ item.title }}</span>
                      </div>
                    </el-card>
                  </router-link>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="编程进阶教学" name="2">
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, index) in classifylist"
                  :key="index"
                  :offset="0"
                >
                  <router-link
                    :to="{ name: 'video', params: { id: item.id } }"
                  >
                    <el-card shadow="hover">
                      <img :src="item.imgurl" class="image" />
                      <div class="title">
                        <span>{{ item.title }}</span>
                      </div>
                    </el-card>
                  </router-link>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="产品介绍视频" name="3">
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, index) in classifylist"
                  :key="index"
                  :offset="0"
                >
                  <router-link
                    :to="{ name: 'video', params: { id: item.id } }"
                  >
                    <el-card shadow="hover">
                      <img :src="item.imgurl" class="image" />
                      <div class="title">
                        <span>{{ item.title }}</span>
                      </div>
                    </el-card>
                  </router-link>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="实验指导手册视频" name="4">
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, index) in classifylist"
                  :key="index"
                  :offset="0"
                >
                  <router-link
                    :to="{ name: 'video', params: { id: item.id } }"
                  >
                    <el-card shadow="hover">
                      <img :src="item.imgurl" class="image" />
                      <div class="title">
                        <span>{{ item.title }}</span>
                      </div>
                    </el-card>
                  </router-link>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../../static/json/product.json";
import videojson from "../../../static/json/video.json";
export default {
  data: () => {
    return {
      // currentDate: new Date()
      productlist: [],
      classifylist: [],
      type: 0,
      activeName: "1",
    };
  },
  mounted() {
    console.log("==========", this.$route.params);
    this.type = 1;
    this.productlist = json.productlist;
    this.classifylist = videojson.classifylist;
    // .filter((values) => {
    //   return values.type == this.type;
    // });
    // console.log(this.type,"mounted", this.productlist);
  },
  methods: {
    changeclassify() {
      // console.log("=====changeproduct=====", values);
      this.classifylist = videojson.classifylist.filter((val) => {
        return val.type == this.activeName;
      });
    },
    getproduct() {
      // console.log("=====getproduct=====", this.$route.params.type);
      this.changeproduct(this.$route.params.type);
    },
  },
  watch: {
    $route: "getproduct",
  },
};
</script>

<style>
.el-card {
  border: 1px solid #c3d9e89e;
  background-color: #fff0;
  height: 22.5em;
}
.el-col-8 {
  width: 30%;
}
.el-card__body {
  height: 20em;
}
.el-col-offset-0 {
  margin-left: 3%;
  margin-top: 3%;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  -webkit-box-shadow: 9px 8px 12px 3px rgba(238, 229, 229, 0.38);
  box-shadow: 1 12px 20px 0 rgba(0, 0, 0, 0.1);
}
.image {
  width: 100%;
  display: block;
  height: 13em;
}
.title {
  /* color: white; */
  text-align: center;
  padding: 10px;
  font-size: 1.5em;
}
</style>
