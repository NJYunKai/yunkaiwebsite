<template>
  <div>
    <div class="news">
      <div class="content-background-dark">
        <div class="content-1">
          <div class="content">
            <!-- 课程章节 -->
            <div class="course-chapters" v-for="(item, index) in videolist" :key="index">
              <div class="chapter course-wrap">
                <!-- 章节标题 -->
                <h3>{{item.title}}</h3>
                <div class="chapter-description">{{item.detailcontent}}</div>

                <!-- 章节标题 end -->
                <!-- 章节小节 -->
                <ul class="video">
                  <li data-media-id="20543">
                    <a href="javascript:void(0);" @click="videochange(index)">
                      <i class="imv2-play_circle type"></i>
                      {{item.sub_title+item.duration}}
                    </a>
                  </li>
                </ul>
                <!-- 章节小节 end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="videoVisible" @close="closePlay">
      <video-player
        class="video-player vjs-custom-skin"
        ref="VideoPlayer"
        :playsinline="false"
        :options="playerOptions"
      ></video-player>
    </el-dialog>

    <el-dialog :visible.sync="loginVisible">
      <el-dialog width="30%" title="注册弹窗" :visible.sync="registerVisible" append-to-body>
        <el-form
          :model="registerForm"
          status-icon
          :rules="registerRules"
          ref="registerForm"
          label-width="100px"
          class="demo-registerForm"
        >
          <el-select
            v-model="registerForm.province_name"
            filterable
            placeholder="请选择高校省份"
            @change="((val)=>{getprovince(val)})"
          >
            <el-option
              v-for="item in province_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="registerForm.city_name"
            filterable
            placeholder="请选择高校市区"
            @change="((val)=>{getcity(val)})"
          >
            <el-option
              v-for="item in city_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="registerForm.university" filterable placeholder="请选择高校名称">
            <el-option
              v-for="item in university_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-form-item label="学院" prop="college">
            <el-input v-model="registerForm.college" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="department">
            <el-input v-model="registerForm.department" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="registerForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-input v-model="registerForm.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户名（用于登录）" prop="username">
            <el-input v-model="registerForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkpassword">
            <el-input type="password" v-model="registerForm.checkpassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-form
        :model="loginForm"
        status-icon
        :rules="loginRules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="registerVisible = true">注册新用户</el-button>
        <el-button @click="resetForm('loginForm')">重 置</el-button>
        <el-button type="primary" @click="getuserinfo('loginForm')">登 录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "../../../node_modules/video.js/dist/video-js.css";
import "../../../node_modules/vue-video-player/src/custom-theme.css";
import videojson from "../../../static/json/video.json";
import universityjson from "../../../static/json/universities.json";
import "../../../static/css/base.css";
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      //后台校验用户名
      setTimeout(() => {
        // if (!Number.isInteger(value)) {
        //   callback(new Error("请输入数字值"));
        // } else {
        //   if (value < 18) {
        //     callback(new Error("必须年满18岁"));
        //   } else {
        //     callback();
        //   }
        // }
      }, 1000);
    };
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        console.log("1111", this.loginForm);
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
      } else {
        if (this.registerForm.checkpassword !== "") {
          this.$refs.registerForm.validateField("checkpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // currentDate: new Date()
      videolist: [],
      province_options: [],
      city_options: [],
      university_options: [],
      citylist: [],
      universitieslist: [],
      type: 0,
      id: 0,
      videoUrl: "",
      state: false,
      videoVisible: false,
      loginVisible: true,
      registerVisible: true,
      activeName: "second",
      loginForm: {
        password: "",
        // verifyPassWord: "",
        username: ""
      },
      registerForm: {
        username: "shiyaoyaoya",
        password: "123",
        checkpassword: "111",
        province_name: "江苏省",
        city_name: "南京市",
        university: "江苏经贸学院",
        college: "物贸学院",
        department: "物流专业",
        name: "夏株奕",
        tel: "12345678987",
        email: "9689@16.com"
      },
      loginRules: {
        password: [{ validator: checkPassWord, trigger: "blur" }],
        username: [{ validator: checkUserName, trigger: "blur" }]
      },
      registerRules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkpassword: [{ validator: validatePass2, trigger: "blur" }]
      },
      formLabelWidth: "120px",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: this.videoUrl // 你的m3u8地址（必填）
          }
        ],
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    };
  },
  components: {
    videoPlayer
  },
  watch: {
    //更改视频源 videoUrl从弹出框组件传值
    videoUrl: function(val) {
      if (val !== "") {
        this.$refs.VideoPlayer.player.src(val);
        console.log("更换视频播放源");
      }
    },
    //弹出框关闭后暂停 否则一直在播放 state从弹出框组件传值
    state: function(val) {
      if (val) {
        this.$refs.VideoPlayer.player.pause();
        console.log("播放暂停");
      }
    }
  },
  created() {
    console.log(this.id, "=====id====");
    this.id = this.$route.params.id;
    console.log(this.id, "=====id====");
    this.changeproduct(this.id);
    this.initoptions();
  },
  methods: {
    changeproduct(values) {
      // console.log("==========", values);
      this.videolist = videojson.videolist;
      // .filter(val => {
      //   return val.id == values;
      // });
    },
    initoptions() {
      this.province_options = universityjson.universities_list.map(values => {
        return {
          value: values.province_name,
          label: values.province_name
        };
      });
    },
    getprovince(val) {
      console.log(val, "级联 省份");
      this.registerForm.city_name = "";
      this.registerForm.university = "";
      this.city_options = [];
      this.university_options = [];
      this.citylist = universityjson.universities_list.filter(value => {
        return value.province_name == val;
      })[0].cities;
      this.city_options = this.citylist.map(values => {
        return {
          value: values.city_name,
          label: values.city_name
        };
      });
      console.log(this.city_options, "市区");
    },
    getcity(val) {
      console.log(val, this.citylist, "级联 市区");
      this.registerForm.university = "";
      this.university_options = [];
      this.universitieslist = this.citylist.filter(value => {
        return value.city_name == val;
      })[0].universities;
      console.log(this.universitieslist, "高校");
      this.university_options = this.universitieslist.map(values => {
        return {
          value: values,
          label: values
        };
      });
      console.log(this.university_options, "高校");
    },
    closePlay() {
      this.state = true;
      console.log(this.state);
    },
    videochange(index) {
      if (sessionStorage.getItem("userInfo")) {
        (this.videoVisible = true),
          (this.state = false),
          (this.videoUrl = this.videolist[index].videourl),
          (this.playerOptions.sources[0].src = this.videoUrl);
      } else {
        this.loginVisible = true;
        console.log("打开登录弹窗");
      }
    },
    judgeuser() {
      let myName = JSON.parse(sessionStorage.getItem("userInfo"));
      console.log(myName, "用户信息session");
      return myName;
    },
    getuserinfo(formName) {
      let userInfo = JSON.stringify(this.form);
      sessionStorage.setItem("userInfo", userInfo);
      console.log("测试setsession");
      this.loginVisible = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$http({
            method: "get",
            url: "/user",
            data: {
              name: "virus"
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.loginVisible = false;
    }
  },
  computed: {
    player() {
      return this.$refs.VideoPlayer.player;
    }
  }
};
</script>

<style>
.pd_img {
  margin: 5% 25%;
  width: 50%;
}
.product_content {
  color: white; /*文字颜色*/
  font-family: 宋体, sans-serif; /*文字字体*/
  font-size: 30pt; /*文字大小*/
  letter-spacing: 1pt; /*字间距离*/
  text-indent: 2em;
  line-height: 200%; /*设置行高*/
  font-weight: bold; /*文字粗体*/
  text-transform: capitalize; /*首字大写*/
  text-align: left; /*文字左对齐*/
}
.product_title {
  color: #999999; /*文字颜色*/
  font-family: 宋体, sans-serif; /*文字字体*/
  font-size: 0.65rem; /*文字大小*/
  letter-spacing: 1pt; /*字间距离*/
  line-height: 200%; /*设置行高*/
  font-weight: bold; /*文字粗体*/
  text-align: center; /*文字居中对齐*/
  vertical-align: middle; /*垂直居中对齐*/
}
</style>
