
<template>
  <div class="NotFind">
    <div class="title">
      <span class="one">4</span>
      <span class="two">0</span>
      <span class="three">4</span>
    </div>
    <div class="error">咦？网页出错了？！☆</div>
    <el-button type="warning" plain round @click="goBackHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
    methods: {
       goBackHome() {
           this.$router.push('/index');
       }
    }
};
</script>

<style>
.NotFind {
  width: 100%;
  height: 100%;
  background-color: #5abaf1;
  position: fixed;
  background: url('../assets/images/timg.gif') no-repeat;
  background-size: 100%;
}
.title {
  color: #fff;
  font-size: 120px;
  font-family: cursive;
  letter-spacing: 40px;
  margin-top: 12%;
}
span {
  display: inline-block;
  animation: fromLeft 2s linear;
}
.one {
  transform: skew(10deg, 10deg);
  animation: fromLeft 2s linear;
}
.two {
  transform: skewX(20deg);
}
.three {
  transform: skew(10deg, 20deg);
}
.error {
  font-size: 22px;
  color: #f7f3d3;
  letter-spacing: 14px;
}
.el-button {
    margin-top: 1%;
}
</style>
