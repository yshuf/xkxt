<template>
  <div class="container">
    <!-- logo 图 -->
    <img src="@/assets/logo.png" alt class="logo" />
    <span class="title">选课系统</span>
    <span class="welcome">欢迎进入系统，请先</span>
    <!-- 注册登录 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item @click="toRegister">注册</el-breadcrumb-item>
      <el-breadcrumb-item>登录</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 头像 -->
    <img src="@/assets/S.jpg" alt class="avatar" />
    <!-- 退出登录 -->
    <el-dropdown>
      <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item> 
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    toRegister(){
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
/* 容器 */
.container {
  color: #333;
  text-align: center;
  height: 60px;
  animation: changeColor 5s linear 3s infinite alternate;
  position: relative;
  min-width: 600px;
}
img {
  height: 60px;
  border-radius: 50%;
}
@keyframes changeColor {
  from {
    background-color: #6baefa;
  }
  to {
    background-color: #7991fc;
  }
}
/* logo图片 */
.logo {
  float: left;
}
/* 默认头像 */
.avatar {
  position: absolute;
  right: 50px;
  top: 0px;
}
/* 系统标题 */
.title {
  font-size: 30px;
  color: #fff;
  font-family: cursive;
  letter-spacing: 6px;
  font-style: italic;
  line-height: 60px;
  float: left;
}
.welcome {
  margin-right: -988px;
  line-height: 60px;
  color: #fff;
  font-size: 18px;
  font-style: italic;
  font-family: cursive;
}
/* 注册登录 */
.el-breadcrumb {
  line-height: 60px;
  float: right;
  margin-right: 120px;
  font-size: 20px;
  font-weight: 400;
  font-family: cursive;
  cursor: pointer;
}
.el-breadcrumb-item {
  cursor: pointer;
}
/* 下拉菜单 */
.el-dropdown {
  float: right;
  margin-right: -220px;
  line-height: 60px;
  font-size: 18px;
}
</style>
