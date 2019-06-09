<template>
  <div v-if="isShowHeader" class="homepage-header-fixed _J8x">
    <header  class="xm-header__search _wLB">
      <a class="logo-icon _wLB" href="/">
        <img width="70" height="15" class="icon" style="margin-left: 5px;" src="../assets/logo.png">
      </a>
      <a href="/search" class="searchInput _wLB">
        <header class="searchWrapper _JfK4">
          <div class="formWrapper _JfK4">
            <form action="javascript:void(0)" class="inputWrapper _JfK4">
              <i class="xm-icon icon-searchlight _JfK4"></i>
              <p class="placeholder ellipsis _JfK4">搜索</p>
            </form>
          </div>
          <p class="_JfK4"></p>
        </header>
      </a>
      <a class="eG0ta _wLB" to="iting://open">打开APP</a>
    </header>
  </div>

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/xmly.css";
</style>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  
  computed: {
    // 从仓库获取值
    isShowHeader() {
      return this.$store.state.isShowHeader;
    },
  }
});
</script>

