<template>
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
              <li class="listItem _35Tv">
                <span class="ranking _35Tv">1</span>
                <div class="albumWrapper _35Tv">
                  <a href="/xiangsheng/9723091/">
                    <div class="xm-album clearfix _Lsf">
                      <div
                        style="width:70px;height:70px"
                        class="xm-album-cover rel cover cover _Lsf _Ju8"
                      >
                        <img
                          class="cover-image _Lsf"
                          alt="郭德纲21年相声精选"
                          src="//imagev2.xmcdn.com/group31/M07/0E/5B/wKgJX1mAQgyi9-IfAAAw0CICWi8961.jpg!op_type=3&amp;columns=140&amp;rows=140&amp;magick=webp"
                        >
                        <div class="xm-album-cover__wrap _Ju8">
                          <div class="mask _Ju8"></div>
                          <div class="play-btn _Ju8"></div>
                        </div>
                      </div>
                      <div class="content _Lsf">
                        <h3
                          class="xm-album__title txt-1 ellipsis-2 _Lsf"
                          style="color:#40404c;font-family:PingFangSC-Medium;font-weight:500"
                        >郭德纲21年相声精选</h3>
                        <p
                          class="xm-album__subtitle c9 ellipsis _Lsf"
                          style="margin-bottom:10px"
                        >爆料不断的历年经典相声</p>
                        <div class="xm-album__info c9 _Lsf">
                          <span class="count _Lsf">
                            <i class="xm-icon icon-ic_play"></i>&nbsp;
                            6.77亿
                          </span>
                          <span class="count _Lsf">
                            <i class="xm-icon icon-sound"></i>&nbsp;
                            153
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
</template>
