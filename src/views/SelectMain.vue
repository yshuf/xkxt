<template style="overflow:hidden;">
  <div class="select-main">
    <el-menu :default-active="this.$route.path" router mode="horizontal">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <i :class="item.className"></i>
        <span class="itemSelect">{{item.navItem}}</span>
      </el-menu-item>
    </el-menu>
    <div class="wrapper">
      <div class="item">
        <img src="../assets/images/myself.jpg" alt="接触有惊喜" />
        <span class="information">
          <img src="../assets/images/personal.jpg" />你可以对你选择的课程进行更改
        </span>
      </div>
    </div>
    <router-view class="selectionItem"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navList: [
        {
          name: "/selectMain/courseSelection",
          navItem: "课程选择",
          className: "el-icon-check"
        },
        {
          name: "/selectMain/myCourse",
          navItem: "已选课程",
          className: "el-icon-document"
        },
        {
          name: "/selectMain/personalInfo",
          navItem: "个人信息录入",
          className: "el-icon-user"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.el-menu-item　i {
  font-weight: 700;
}
.select-main {
  width: 80%;
  margin: 0 auto;
  height: 100%;
}
.el-menu {
  background-color: #7091ec;
}
.itemSelect {
  color: #000;
  font-size: 18px;
  font-family: cursive;
  font-weight: 700;
}
.selectionItem {
  box-shadow: 2px 2px 14px #ccc;
  /* overflow: auto; */
}
/* 提示信息 */
.wrapper {
  display: inline-block;
  width: 186px;
  height: 186px;
  margin: 1em auto;
  cursor: pointer;
  position: absolute;
  left: 10px;
}
/* 定义旋转元素样式，0.6s */
.item {
  width: 186px;
  height: 186px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
/* 鼠标经过时触发动画，并定义旋转形式 */
.item:hover {
  transform: translateZ(-50px) rotateX(95deg);
}
.item:hover img {
  box-shadow: none;
  border-radius: 15px;
}
.item:hover .information {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
/* 图的动画样式 */
.item > img {
  width: 186px;
  height: 186px;
  display: block;
  position: absolute;
  top: 0;
  border-radius: 3px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
  transition: all 0.6s;
}
.item .information {
  position: absolute;
  top: 0;
  height: 186px;
  width: 186px;
  border-radius: 15px;
  transform: rotateX(-90deg) translateZ(50px);
  transition: all 0.6s;
}
.information img {
  width: 186px;
  height: 186px;
}
</style>