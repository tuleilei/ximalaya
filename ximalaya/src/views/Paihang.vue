<template>
  <div class="top page _35Tv">
    <header class="xm-header__search _wLB">
      <a class="logo-icon _wLB" href="/">
        <svg width="70" height="15" style="margin-left:5px" class="icon">
          <use xlink:href="#icon-logo"></use>
        </svg>
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
    <header  class="tabsWrapper _35Tv">
      <div v-if="isShowPaiHang" class="tabs _z8X" style="height:50px;line-height:50px">
        <div class="scrollWrapper _z8X" style="display:flex;align-items:center">
          <router-link
            v-for="(c,index) in toplist"
            :key="index"
            data-index="0"
            @click="togglee(index)"
            :class="{ 'item select_z8X': tac === index }"
            class="item _z8X"
            v-text="c.title"
          ></router-link>
          <!-- <a href="#" data-index="1" class="item _z8X"></a>
          <a href="#" data-index="2" class="item _z8X"></a>
          <a href="#" data-index="3" class="item _z8X"></a>
          <a href="#" data-index="4" class="item _z8X"></a>
          <a href="#" data-index="5" class="item _z8X" style="margin-right:20px"></a>-->
          <p class="underline _z8X" style="width: 18px; display: block; left: 32px;"></p>
        </div>
      </div>
    </header>
    <section class="menuList _35Tv">
      <ul class="menu _VWEW">
        <a
          v-for="(b,index) in leftlist"
          :key="index"
          data-index="0"
          @click="toggle(index)"
          :class="{ 'item select _VWEW': tab === index }"
          class="item _VWEW"
          v-text="b"
        ></a>
      </ul>
      <div class="scrollWrapper" style="height:100%;width:100%">
        <div class="content _X3" style="width:100%;height:100%;box-sizing:border-box">
          <header class="header _X3">
            <div
              style="line-height:40px;text-align:center;height:40px;padding-left:90px"
              class="_35Tv"
            >
              <img
                width="30"
                height="30"
                src="//s1.xmcdn.com/sr012018/ximalaya-mobile/last/dist/images/refresh_f8b272d.gif"
                class="_35Tv"
              >
            </div>
          </header>
          <section class="listView _X3" style="overflow-x:hidden;overflow-y:auto;background:#fff">
            <ul class="_X3">
              <li v-for="(f,index) in paiList" :key="index" class="listItem _35Tv">
                <span class="ranking _35Tv" v-text="index+1"></span>
                <div class="albumWrapper _35Tv">
                  <a href="/xiangsheng/9723091/">
                    <div class="xm-album clearfix _Lsf">
                      <div
                        style="width:70px;height:70px"
                        class="xm-album-cover rel cover cover _Lsf _Ju8"
                      >
                        <img class="cover-image _Lsf" :alt="f.title" :src="f.imgurl">
                        <div class="xm-album-cover__wrap _Ju8">
                          <div class="mask _Ju8"></div>
                          <div class="play-btn _Ju8"></div>
                        </div>
                      </div>
                      <div class="content _Lsf">
                        <h3
                          class="xm-album__title txt-1 ellipsis-2 _Lsf"
                          style="color:#40404c;font-family:PingFangSC-Medium;font-weight:500"
                          v-text="f.title"
                        ></h3>
                        <p
                          class="xm-album__subtitle c9 ellipsis _Lsf"
                          style="margin-bottom:10px"
                          v-text="f.content"
                        ></p>
                        <div class="xm-album__info c9 _Lsf">
                          <span class="count _Lsf" v-text="f.num2">
                            <i class="xm-icon icon-ic_play"></i>
                            &nbsp;
                          </span>
                          <span class="count _Lsf" v-text="f.num1">
                            <i class="xm-icon icon-sound"></i>&nbsp;
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/about.css";
</style>
<script>
export default {
  data() {
    return {
      paiList: [],
      leftlist: [
        "热门",
        "有声书",
        "相声评书",
        "儿童",
        "人文",
        "历史",
        "音乐",
        "教育培训",
        "外语",
        "娱乐",
        "情感生活",
        "商业财经",
        "头条",
        "健康养生",
        "广播剧",
        "戏曲",
        "IT科技",
        "旅游",
        "影视",
        "时尚生活",
        "汽车",
        "二次元",
        "电台"
      ],
      toplist: [
        { title: "免费榜", url: "free" },
        { title: "飙升榜", url: "free" },
        { title: "付费榜", url: "#" },
        { title: "订阅榜", url: "#" },
        { title: "主播榜", url: "#" },
        { title: "好评榜", url: "#" }
      ],
      tab: 0,
      tac: 0
    };
  },

  created() {
    this.$store.state.isShowMenu = false;
    this.getPaiList(() => {});
  },

  methods: {
    async getPaiList(callback) {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf63bcd1296740a2fa34104/example/plist"
      );
      console.log(data);
      this.paiList = [...this.paiList, ...data.data.data.paiList];
    },
    toggle(index) {
      // console.log(this);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      //   this.$router.push({
      //     // path
      //     name: this.leftlist[index]
      //   });
      //   记录位置
      this.tab = index;
      // index 你点击的当前所在位置
      //   console.log(index);
    },
    togglee(index) {
      
    //   this.$router.push({
    //     // path
    //     name: this.toplist[index].url
    //   });
      this.tac = index;
    }
  },
  computed: {
    // 从仓库获取值
    isShowPaiHang() {
      return this.$store.state.isShowPaiHang;
      console.log(this.$store.state.isShowPaiHang)
    }
  }
};
</script>
