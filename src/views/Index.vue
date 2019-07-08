<template>
  <div class="container">
    <!-- 头部导航栏 -->
    <HeaderNav></HeaderNav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from "@/views/Layout/HeaderNav";
export default {
  components: {
    HeaderNav
  }
};
</script>

<style scoped>
</style>
