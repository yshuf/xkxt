<template style="overflow:hidden;">
  <div class="select-main">
    <el-menu :default-active="this.$route.path" router mode="horizontal">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <span class="itemSelect">{{item.navItem}}</span>
      </el-menu-item>
    </el-menu>
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
        { name: "/selectMain/courseSelection", navItem: "课程选择" },
        {
          name: "/selectMain/myCourse",
          navItem: "已选课程"
        },
        {
          name: "/selectMain/personalInfo",
          navItem: "个人信息录入"
        },
        
      ]
    };
  },
  methods: {}
};
</script>

<style>
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
</style>