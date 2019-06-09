<template>
  <div class="home-content _zW1">
    <div class="xm-tomatoes _JstA">
      <div class="cate-wrap _JstA">
        <router-link v-for="(a,index) in nav" :key="index" :to="a.rou" class="cate-box _JstA" >
          <div class="cate-pic _JstA">
            <img
              :src='a.url'
              alt="糖葫芦"
              class="_JstA"
            >
          </div>
          <p class="cate-txt _JstA" v-text="a.title"></p>
        </router-link>
        <!-- <a class="cate-box _JstA" href="/top/free/all">
          <div class="cate-pic _JstA">
            <img
              src="http://fdfs.xmcdn.com/group56/M09/3B/BD/wKgLgFyQujLCAVYRAAAuwA7DZMg198.png"
              alt="糖葫芦"
              class="_JstA"
            >
          </div>
          <p class="cate-txt _JstA">排行榜</p>
        </a>
        <a class="cate-box _JstA" href="http://m.ximalaya.com/ting/remen">
          <div class="cate-pic _JstA">
            <img
              src="http://fdfs.xmcdn.com/group57/M0A/3B/D0/wKgLgVyQuqWRZsJtAAAnr8tg4rs307.png"
              alt="糖葫芦"
              class="_JstA"
            >
          </div>
          <p class="cate-txt _JstA">听单</p>
        </a>
        <a class="cate-box _JstA" href="http://liveroom.ximalaya.com/live">
          <div class="cate-pic _JstA">
            <img
              src="http://fdfs.xmcdn.com/group55/M02/74/56/wKgLf1yTMFaR9K9mAAAqjJZfJvA183.png"
              alt="糖葫芦"
              class="_JstA"
            >
          </div>
          <p class="cate-txt _JstA">直播</p>
        </a>
        <a class="cate-box _JstA" href="http://m.ximalaya.com/category/">
          <div class="cate-pic _JstA">
            <img
              src="http://fdfs.xmcdn.com/group60/M02/18/F4/wKgLeVziZxHRlc-lAAAO9ZkPU-I489.png"
              alt="糖葫芦"
              class="_JstA"
            >
          </div>
          <p class="cate-txt _JstA">分类</p>
        </a> -->
      </div>
    </div>
    <div style="padding:15px" class="xm-list list-view _urj">
      <div class="list-view__header _urj">
        <h2 class="list-view__title _urj" style="font-size:18px">最新专辑</h2>
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
          <a href="/yule/22196454/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="杨湃奇谈：悬疑惊悚的一千零一夜"
                  src="//imagev2.xmcdn.com/group60/M0A/A4/C0/wKgLeVzOzK7SLCRdAATaVN3Olbs552.jpg!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">杨湃奇谈：悬疑惊悚的一千零一夜</h3>
                <p
                  class="xm-album__subtitle c9 ellipsis _Lsf"
                >有声的紫襟、张震联合推荐 1、听过瘾 | 全网首部全类型恐怖悬疑作品 ▲历时1年，倾力打造全网首档全类型悬疑有声作品，精良制作震撼发布 ▲集结6大模块，精选300期</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    DJ杨湃
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    22
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    375.35万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/ertong/23228489/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="三十六计故事"
                  src="//imagev2.xmcdn.com/group59/M04/57/8E/wKgLeFzKTPOhSOTrAABx81k1dIg858.jpg!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">三十六计故事</h3>
                <p
                  class="xm-album__subtitle c9 ellipsis _Lsf"
                >《三十六计》或称三十六策，是指中国古代三十六个兵法策略，语源于南北朝，成书于...</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    相声评书小品精选集
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    36
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2.95万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/lishi/23387446/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="趣说历史【三分钟历史小课堂】"
                  src="//imagev2.xmcdn.com/group60/M05/82/F0/wKgLb1znqnCCijDYAAZZwORRkL0191.jpg!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">趣说历史【三分钟历史小课堂】</h3>
                <p
                  class="xm-album__subtitle c9 ellipsis _Lsf"
                >&nbsp; &nbsp; &nbsp;历史趣闻、人物谜团、历史悬案、古代奇人等，主播用轻松幽默的语言给您说...</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    大凯文化传媒
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    44
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    8.68万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/jiankang/23332585/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="快速解决脾虚湿气重"
                  src="//imagev2.xmcdn.com/group58/M07/B9/F6/wKgLc1zP1hKzxMflAAIHGf8Hxys576.jpg!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">快速解决脾虚湿气重</h3>
                <p
                  class="xm-album__subtitle c9 ellipsis _Lsf"
                >《快速解决脾虚湿气重》由姜老师荣誉出品，通常引起湿气重的原因有多种，当体内湿...</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    姜老师谈健康
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    14
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2.36万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/shangye/23161360/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="开盘半小时判全天走势"
                  src="//imagev2.xmcdn.com/group59/M04/16/08/wKgLeFzGaU2QXfCFAAQh8sZJy-E300.jpg!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">开盘半小时判全天走势</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">多年经验，预判全天走势，给粉丝提供价值！</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    范博论股
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    13
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2136
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
                    <!-- -->
                    有声的紫襟
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    1133
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    32.29亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/youshengshu/19383749/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="王的女人谁敢动｜爆笑古言穿越（免费双播精品）"
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
                >王的女人谁敢动｜爆笑古言穿越（免费双播精品）</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">北慕国战神的一夜奇遇，她从此无处可逃</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    一刀苏苏
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    600
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2.72亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/youshengshu/12642314/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="《阴间神探》紫襟故事"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">《阴间神探》紫襟故事</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">连环杀，吸血症等诡异案件大解密</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    有声的紫襟
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    537
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    8.71亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/youshengshu/4256765/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="中国灵异恐怖鬼故事"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">中国灵异恐怖鬼故事</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">真实体验 | 有节奏有感觉的鬼故事</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    霄旭讲故事
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    553
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2.88亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/youshengshu/19092426/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="仙君重生丨呆小鱼播讲"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">仙君重生丨呆小鱼播讲</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">家族弃子因一枚戒指修仙法逆袭崛起</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    演播呆小鱼
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    1337
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.93亿
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
                    <!-- -->
                    郭德纲相声
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    153
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6.75亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/xiangsheng/19366477/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="郭德纲·于谦 每周见"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">郭德纲·于谦 每周见</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">老郭谦儿大爷的最新包袱每周报到！</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    郭德纲相声
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    101
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.23亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/xiangsheng/11219576/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="岳云鹏孙越相声集"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">岳云鹏孙越相声集</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">相声界人称“面儿赵”精品珍藏相声</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    岳云鹏相声
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    22
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6362.49万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/xiangsheng/11219907/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="岳云鹏孙越爆笑相声合辑"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">岳云鹏孙越爆笑相声合辑</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">小岳岳精品珍藏系列，爆笑连连！</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    岳云鹏相声
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    79
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.67亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/xiangsheng/20337620/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="相声新势力作品精选"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">相声新势力作品精选</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">天雷滚滚！这是个遭雷劈的相声~</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    相声新势力
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    60
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1202.83万
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
                    <!-- -->
                    夜色钢琴曲赵海洋
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    303
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    5.10亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/yinyue/3595841/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="总有这样的歌只想一个人听"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">总有这样的歌只想一个人听</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">治愈|播放量最高的怀旧好歌推荐</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    灰姑娘音乐
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    250
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2.83亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/yinyue/20380455/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="哄你入睡的流行钢琴曲"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">哄你入睡的流行钢琴曲</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">催眠向 写作业 冥想放松必备钢琴曲</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    昼夜
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    47
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2373.48万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/yinyue/19349717/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="华语经典老歌集（日更怀旧，车载高质）"
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
                >华语经典老歌集（日更怀旧，车载高质）</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">老歌如酒，岁月沉香</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    yamapig
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    19
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    3507.06万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/yinyue/261506/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="一段话 一首歌"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">一段话 一首歌</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">治愈 | 总有一首歌，唱的是你自己</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    DJ梓杨
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    739
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    7290.25万
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
                    <!-- -->
                    米小圈
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    257
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    12.23亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/ertong/12891461/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="宝宝巴士·睡前故事|4-7岁儿童"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">宝宝巴士·睡前故事|4-7岁儿童</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">放飞想象，让宝贝感受大千世界的神奇</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    宝宝巴士
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    671
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    2.02亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/ertong/260744/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="晚安妈妈睡前故事"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">晚安妈妈睡前故事</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">晚安故事集|陪伴是最长情的告白</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    晚安妈妈
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    1203
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    10.63亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/ertong/11106118/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="宝宝巴士·国学儿歌 | 唐诗三百首"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">宝宝巴士·国学儿歌 | 唐诗三百首</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">宝宝在国学儿歌中磨耳朵，对国学经典产生兴趣</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    宝宝巴士
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    251
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.41亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/ertong/257813/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="睡前故事：一千零一夜"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">睡前故事：一千零一夜</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">晚安宝贝，温暖你的每个夜晚</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    喜猫儿和它的小伙伴们
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    1429
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    8.39亿
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
                    <!-- -->
                    读者
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    1778
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    4.21亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/renwen/15273276/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="晓说2018"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">晓说2018</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">高晓松说历史人物、聊八卦文化</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    超级制作
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    54
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    38.57亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/renwen/4626644/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="鬼谷子 中国智慧第一书"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">鬼谷子 中国智慧第一书</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">中国智慧第一书，一生必看</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    斜月轩轩主
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    61
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    3642.45万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/renwen/6234075/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="一星期一本书"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">一星期一本书</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">再忙也不忘记充电</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    一星期一本书
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    2432
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    3983.18万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/renwen/3037236/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="枕边经典"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">枕边经典</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">睡前 | 今晚9：30陪你重温经典</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    枕边经典
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    653
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6341.49万
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
                    <!-- -->
                    蕊希Erin
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    464
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6.56亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/qinggan/3062741/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="夜听"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">夜听</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">【晚安】爱一直在，陪伴一直在</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    夜听频道
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    857
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.86亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/qinggan/292190/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="失眠小姐"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">失眠小姐</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">孤独夜晚，用温暖的声音讲感人的故事</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    夏雨嫣
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    551
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6261.75万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/qinggan/258244/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="默默道来"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">默默道来</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">【故事】这世界还是公平的</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    小默127127
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    311
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6.48亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/qinggan/11037095/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="晚上十点"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">晚上十点</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">最好的入眠伙伴 | 分享故事，分享音乐</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    晚上十点
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    583
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    9094.96万
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
                    <!-- -->
                    大力丸儿
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    508
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.96亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/lishi/9765576/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="中国历史未解之谜（第一季）"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">中国历史未解之谜（第一季）</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">扑朔迷离的历史真相和不为人知的尘封往事</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    苏鹏有态度
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    91
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    6285.61万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/lishi/301774/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="皇上不是你想当想当就能当"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">皇上不是你想当想当就能当</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">当皇帝并没有你想的那么简单</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    詩展
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    74
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    535.31万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/lishi/3703879/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="听谢涛·三国 (一直在继续)"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">听谢涛·三国 (一直在继续)</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">年度评选历史人文类第一名</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    谢涛听世界
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    552
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    5.03亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/lishi/3316049/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="历史趣谈"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">历史趣谈</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">换个角度，历史依然新鲜</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    历史趣谈
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    486
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    8845.69万
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
                    <!-- -->
                    科技美学中国
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    1142
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    474.61万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/keji/8125936/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="36氪·8点1氪"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">36氪·8点1氪</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">8点1氪：听互联网圈的新鲜事儿</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    36氪音频氪星电台
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    589
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.20亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/keji/360977/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="雷科技"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">雷科技</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">关注智能生活和前沿科技</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    雷科技
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    2573
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1889.12万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/keji/364485/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="PMCAFF产品社区"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">PMCAFF产品社区</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">激情四射，干货横行，热情分享！</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    PMCAFF
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    542
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1538.82万
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="list-view__item border _urj">
          <a href="/keji/246622/">
            <div class="xm-album clearfix _Lsf">
              <div style="width:70px;height:70px" class="xm-album-cover rel cover cover _Lsf _Ju8">
                <img
                  class="cover-image _Lsf"
                  alt="原来是这样？！"
                  src="//s1.xmcdn.com/wap/css/img/common/sound.png"
                >
                <div class="xm-album-cover__wrap _Ju8">
                  <div class="mask _Ju8"></div>
                  <div class="play-btn _Ju8"></div>
                </div>
              </div>
              <div class="content _Lsf">
                <h3 class="xm-album__title txt-1 ellipsis _Lsf" style="color:#333">原来是这样？！</h3>
                <p class="xm-album__subtitle c9 ellipsis _Lsf">串联各科知识的经纬线！</p>
                <div class="xm-album__info c9 _Lsf">
                  <span class="user-channel ellipsis-1 _Lsf">
                    <i class="xm-icon icon-user"></i>&nbsp;
                    <!-- -->
                    旭岽叨科学
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-sound"></i>&nbsp;
                    <!-- -->
                    296
                  </span>
                  <span class="count _Lsf">
                    <i class="xm-icon icon-data"></i>&nbsp;
                    <!-- -->
                    1.32亿
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="list-view__footer _urj"></div>
    </div>
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
import Vue from 'vue'
export default Vue.extend({
  data(){
    return{
      nav:[
        { title: "排行榜",rou:"/paihang", url: "http://fdfs.xmcdn.com/group56/M09/3B/BD/wKgLgFyQujLCAVYRAAAuwA7DZMg198.png" },
        { title: "听单",rou:"/tingdan", url: "http://fdfs.xmcdn.com/group57/M0A/3B/D0/wKgLgVyQuqWRZsJtAAAnr8tg4rs307.png" },
        { title: "直播",rou:"/zhibo", url: "http://fdfs.xmcdn.com/group55/M02/74/56/wKgLf1yTMFaR9K9mAAAqjJZfJvA183.png" },
        { title: "分类", rou:"/fenlei",url: "http://fdfs.xmcdn.com/group60/M02/18/F4/wKgLeVziZxHRlc-lAAAO9ZkPU-I489.png" }
      ]
    }
  },
  created(){
        this.$store.state.isShowMenu = true;
        this.$store.state.isShowHeader = true;
    }
})
</script>

