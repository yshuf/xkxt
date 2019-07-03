<template>
  <div>
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
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  components:{
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
      ]
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

/* 轮播图样式 */
.el-carousel {
  width: 960px;
  margin: 0 auto;
}
/* 日历 */
.el-calendar {
  width: 300px;
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
.el-calendar__body {
  height: 340px;
}
</style>