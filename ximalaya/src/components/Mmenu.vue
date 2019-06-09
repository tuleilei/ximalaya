<template>
  <div v-if="isShowMenu" class="homepage-fixed show-fixed-tab _J8x" :class="{'hide-fixed-tab _J8x':bool}">
    <div class="xm-tabbar _U6">
      <ul class="tab-list _U6">
        <a
          v-for="(a,index) in menu"
          :key="index"
          @click="toggle(index)"
          :class="{ active: tab === index }"
          class="tab-item _U6"
          v-text="a.title"
        ></a>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/xmly.css";
</style>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      bool: 0,
      menu: [
        { title: "推荐", url: "tuijian" },
        { title: "有声书", url: "youshengshu" },
        { title: "相声", url: "xiangsheng" },
        { title: "音乐", url: "yinyue" },
        { title: "儿童", url: "ertong" },
        { title: "人文", url: "renwen" },
        { title: "情感", url: "qinggan" },
        { title: "历史", url: "lishi" },
        { title: "科技", url: "keji" }
      ],
      tab: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll, true);
  },
  methods: {
    toggle(index) {
      // console.log(this);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      this.$router.push({
        // path
        name: this.menu[index].url
      });
      //   记录位置
      this.tab = index;
      // index 你点击的当前所在位置
      // console.log(index);
    },
    scroll() {
      if (window.scrollY >= 95) {
        this.bool = !0;
        console.log(!this.bool)
      } else {
        this.bool = 0;
        
      }
      console.log(window.scrollY);
    },
    destroyed() {
      window.onscroll = null;
      window.removeEventListener("scroll", this.scroll, false);
    },

  },
  computed: {
    // 从仓库获取值
    isShowMenu() {
      return this.$store.state.isShowMenu;
    },
  },
});
</script>

