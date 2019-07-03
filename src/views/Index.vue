<template>
  <div class="container">
    <HeaderNav></HeaderNav>
    <Main></Main>
  </div>
</template>

<script>
import HeaderNav from "@/views/Layout/HeaderNav";
import Main from '@/views/Layout/Main'
export default {
  components: {
    HeaderNav,
    Main
  }
};
</script>

<style scoped>
</style>
