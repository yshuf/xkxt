<template>
  <div class="index">
    <!-- 登录框 左 -->
    <Login></Login>
    <!-- 轮播图 中-->
    <el-carousel :interval="3000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <img :src="item.url" alt />
      </el-carousel-item>
    </el-carousel>

    <!-- 日历 右-->
    <el-calendar v-model="value"></el-calendar>
    <!-- 分隔线 -->
    <div class="dash"></div>
    <!-- 选课公告 -->
    <div class="tip">
      <div class="nav">选课服务公告</div>
      <div class="container">
        <span class="title">友情提示:</span>
        <span class="contain">学生登录新的选课系统的初始账号为个人学号，初始密码为身份证号的后6位(若身份证号包含X请注意用大写，若系统中身份证号为空则密码为学号)</span>
        <p
          class="compatible"
        >为了更好的保证选课操作的流畅性，请使用IE8及以上版本、Chrome(谷歌)、Firefox(火狐)等浏览器，不建议使用IE6、IE7等老版本浏览器。</p>
      </div>
    </div>
    <!-- 选课功能 -->
    <div class="select-function">
      <p class="select">选课功能</p>
      <ul style="list-style: none">
        <li>
          <img src="http://xk.njxzc.edu.cn/xsxk/images/kb-tables.png" alt="我的课表" />
          <el-button type="text" @click="centerDialogVisible = true">我的课表</el-button>
        </li>
        <li>
          <img src="http://xk.njxzc.edu.cn/xsxk/images/review.png" alt="课程预览" />
          <a href>
            <el-button type="text">课程预览</el-button>
          </a>
        </li>
      </ul>
    </div>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>请先登录，再查看哦...</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Login from "@/components/Login";
export default {
  components: {
    Login
  },
  data() {
    return {
      // 时间值
      value: new Date(),
      // 轮播图
      list: [
        {
          url: require("@/assets/images/cc.jpg")
        },
        {
          url: require("@/assets/images/timg1.jpg")
        },
        {
          url: require("@/assets/images/shu.jpg")
        },
        {
          url: require("@/assets/images/timg3.jpg")
        },
        {
          url: require("@/assets/images/timg4.jpg")
        },
        {
          url: require("@/assets/images/timg5.jpg")
        }
      ],
      centerDialogVisible: false
    };
  }
};
</script>

<style>
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.index {
  width: 100%;
  height: 100%;
}
/* 轮播图样式 */
.el-carousel {
  width: 960px;
  margin: 0 auto;
  margin-left: 19%;
}
/* 日历 */
.el-calendar {
  width: 305px;
  height: 308px;
  font-size: 12px;
  position: absolute;
  top: 65px;
  right: 5px;
  box-shadow: 2px 2px 14px #666262;
}

.el-calendar-table .el-calendar-day {
  height: 32px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: black;
}
/* 分隔线及动画 */
.dash {
  width: 1200px;
  border: 1px dashed #ccc;
  margin: 0px auto;
  animation: sliceDash 3s linear 2s infinite alternate;
}
@keyframes sliceDash {
  from {
    color: #6baefa;
  }
  to {
    color: #7991fc;
  }
}
.tip {
  border: 1px solid #ccc;
  width: 250px;
  height: 250px;
  float: left;
  margin: 5px 0 0 15px;
  font-size: 16px;
  font-family: cursive;
}
.nav {
  background-color: rgb(240, 227, 227);
  font-style: italic;
  font-size: 18px;
  font-weight: 700;
}
.title {
  font-size: 18px;
  font-weight: 700;
  text-align: left;
}
.contain {
  color: red;
}
.compatible {
  color: rgb(143, 138, 138);
}
.select-function {
  margin-left: 355px;
}
.select {
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  font-family: cursive;
}
.select-function > img {
  text-align: left;
}
li {
  float: left;
  margin-right: 100px;
  position: relative;
}
li > .el-button {
  position: absolute;
  left: 25%;
  font-size: 18px;
}
a > .el-button {
   position: absolute;
  left: 25%;
  font-size: 18px;
}
li > img {
  width: 126px;
  height: 107px;
}
</style>