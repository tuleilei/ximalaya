<template>
  <div class="home-content _zW1">
    <div class="xm-tomatoes _JstA">
      <div class="cate-wrap _JstA">
        <router-link v-for="(a,index) in nav" :key="index" :to="a.rou" class="cate-box _JstA">
          <div class="cate-pic _JstA">
            <img :src="a.url" alt="糖葫芦" class="_JstA">
          </div>
          <p class="cate-txt _JstA" v-text="a.title"></p>
        </router-link>
      </div>
    </div>
    <div v-for="(s,index) in tuiList" :key="index" style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px" v-text="s.title"></h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li v-for="(d, index) in s.dataLi" :key="index" class="list-view__item border _urj">
          <a href="/yule/22196454/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  :alt="d.ltitle"
                  :src="d.imgurl"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333" v-text="d.ltitle"></h3>
                <p
                  class="xm-album__subtitle c9 ellipsis _Lsf" v-text="d.content"
                ></p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf" v-text="d.name">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                  </span>
                  <span class="count _Lsf" v-text="d.num1">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                  </span>
                  <span class="count _Lsf" v-text="d.num2">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <!-- <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">有声书</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/youshengshu/4756811/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="摸金天师【紫襟演播】| 原《活人回避》"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3
                  class="xm-album__title txt-1 ellipsis _Lsf"
                  style="color:#333"
                >摸金天师【紫襟演播】| 原《活人回避》</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">一个和阴人行尸打交道的走阴人。三年寻龙，十年点穴。</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    有声的紫襟
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    1133
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    32.29亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">相声</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/xiangsheng/9723091/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="郭德纲21年相声精选"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">郭德纲21年相声精选</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">爆料不断的历年经典相声</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    郭德纲相声
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    153
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    6.75亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">音乐</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/yinyue/291718/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="《夜色钢琴曲》"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">《夜色钢琴曲》</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">治愈|全站最高播放量钢琴曲</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    夜色钢琴曲赵海洋
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    303
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    5.10亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">儿童</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/ertong/6233693/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="米小圈上学记：一二三年级"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">米小圈上学记：一二三年级</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">上学趣事一箩筐，轻松搞定写日记！</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    米小圈
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    257
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    12.23亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">人文</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/renwen/5088879/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="读者"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">读者</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">发掘人性中的真善美，每日分享一篇美文</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    读者
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    1778
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    4.21亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">情感生活</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/qinggan/321787/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="蕊希电台"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">蕊希电台</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">治愈情感|最暖心主播陪你入睡</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    蕊希Erin
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    464
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    6.56亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">历史</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/lishi/3144025/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="大力史"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">大力史</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">仰望历史，在历史中探寻有趣真相</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    大力丸儿
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    508
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    1.96亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">IT科技</h2>
        <a
          class="more _zW1"
          style="position:absolute;right:14px;font-size:12px;height:25px;line-height:25px;color:#72727b;top:0"
        >
          <i
            class="arrow _zW1"
            style="position:absolute;top:8px;left:30px;width:6px;height:6px;border-top:2px solid #72727b;border-right:2px solid #72727b;transform:rotate(45deg)"
          ></i>更多
        </a>
      </div>
      <ul class="list-view__body _urj">
        <li class="list-view__item border _urj">
          <a href="/keji/3660775/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="科技美学|每日资讯 2019"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">科技美学|每日资讯 2019</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">有用有趣的科技资讯</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    
                    科技美学中国
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    
                    1142
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    
                    474.61万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div> -->
    <div class="xm-footer _VUD">
      <a class="b3BlA _VUD" to="iting://open">打开APP，发现更多精彩</a>
      <div class="fo-txt _VUD">
        <a class="b2BlF _VUD" to="iting://open">客户端</a>
        <a class="_VUD">电脑端</a>
        <a href="http://m.ximalaya.com/help/contact_us" class="_VUD">联系我们</a>
      </div>
      <div class="copyright-txt _VUD">
        <p class="_VUD">Copyright © 2014-2019 www.ximalaya.com</p>
        <p class="_VUD">lnc.ALL Rights Reserved</p>
      </div>
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
      tuiList: [],
      dataLi:[],
      nav: [
        {
          title: "排行榜",
          rou: "/paihang",
          url:
            "http://fdfs.xmcdn.com/group56/M09/3B/BD/wKgLgFyQujLCAVYRAAAuwA7DZMg198.png"
        },
        {
          title: "听单",
          rou: "/tingdan",
          url:
            "http://fdfs.xmcdn.com/group57/M0A/3B/D0/wKgLgVyQuqWRZsJtAAAnr8tg4rs307.png"
        },
        {
          title: "直播",
          rou: "/zhibo",
          url:
            "http://fdfs.xmcdn.com/group55/M02/74/56/wKgLf1yTMFaR9K9mAAAqjJZfJvA183.png"
        },
        {
          title: "分类",
          rou: "/fenlei",
          url:
            "http://fdfs.xmcdn.com/group60/M02/18/F4/wKgLeVziZxHRlc-lAAAO9ZkPU-I489.png"
        }
      ]
    };
  },
  created() {
    this.$store.state.isShowMenu = true;
    this.$store.state.isShowHeader = true;
    this.getTuiList(()=>{

    });
   
  },

  methods:{
    async getTuiList(callback){
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf63bcd1296740a2fa34104/example/ximalaya'
      );
      console.log(data);
      this.tuiList = [...this.tuiList, ...data.data.data.tuiList];

    }
  
  }
});
</script>

