<template>
  <div
    class="xm-homepage page _ZzC2"
    style="background-color: rgb(255, 255, 255); overflow: hidden;"
  >
    <div class="xm-top _J8x">
      <Mheader/>
      <Mmenu/>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mheader from "@/components/Mheader.vue";
import Mmenu from "@/components/Mmenu.vue";
@Component({
  components: {
    Mheader,
    Mmenu
  }
})
export default class Home extends Vue {}
</script>



<style lang="scss" scoped>
@import "./assets/xmly.css";
</style>

