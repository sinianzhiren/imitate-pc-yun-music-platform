<template>
  <div class="ranking">
    <div class="left_rank">
      <p>云音乐特色榜单</p>
      <ul class="firstUl">
        <li v-for="item in arr" @click="getVal(item.title,item.imgUrl)" :class="{a1: activeTitle == item.title }">
          <router-link :to="{path: '/ranking/get' , query: { val: item.title }}">
            <div class="img">
              <img :src="item.imgUrl" style="width: 100%;">
            </div>
            <div class="text">
              <p>{{item.title}}</p>
              <p>{{item.update}}</p>
            </div>
            <div style="clear:both;"></div>
          </router-link>
        </li>
      </ul>
      <p class="secondP">全球媒体榜</p>
      <ul>
        <li v-for="item in option" @click="getVal(item.title,item.imgUrl)" :class="{a1: activeTitle == item.title }">
          <router-link :to="{path: '/ranking/get' , query: { val: item.title }}">
            <div class="img">
              <img style="width: 100%;" :src="item.imgUrl">
            </div>
            <div class="text">
              <p>{{item.title}}</p>
              <p>{{item.update}}</p>
            </div>
            <div style="clear:both;"></div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right_rank">
      <router-view :message="title" :url="imgUrl"></router-view>
    </div>
  </div>
</template>

<script>
  export default{
      data: function () {
        return{
            activeTitle: '云音乐飙升榜',
            title: '云音乐飙升榜',
            imgUrl: '../../../../static/imgicon/bot1.jpg',
          arr: [
            {title: '云音乐飙升榜',imgUrl: '../../../../static/imgicon/bot1.jpg', update: '每天更新'},
            {title: '云音乐新歌榜', imgUrl: '../../../../static/imgicon/bot2.jpg', update: '每天更新'},
            {title: '网易原创歌曲榜', imgUrl: '../../../../static/imgicon/bot3.jpg', update: '每周四更新'},
            {title: '云音乐热歌榜', imgUrl: '../../../../static/imgicon/yun.jpg', update: '每周四更新'}
          ],
          option: [
            {title: '云音乐ACG音乐榜',imgUrl: '../../../../static/imgicon/acg.jpg', update: '每周四更新'},
            {title: '云音乐古典音乐榜', imgUrl: '../../../../static/imgicon/classic.jpg', update: '每周四更新'},
            {title: '云音乐电音榜', imgUrl: '../../../../static/imgicon/station.jpg', update: '每周五更新'},
            {title: 'UK排行榜周榜', imgUrl: '../../../../static/imgicon/uk.jpg', update: '每周一更新'},
            {title: '美国Billboard周榜', imgUrl: '../../../../static/imgicon/Bill.jpg', update: '每周三更新'},
            {title: 'Beatport全球电子舞曲榜', imgUrl: '../../../../static/imgicon/beat.jpg', update: '每周四更新'},
            {title: '法国 NRJ Vos Hits 周榜', imgUrl: '../../../../static/imgicon/Nrj.jpg', update: '每周五更新'},
            {title: 'KTV唛榜', imgUrl: '../../../../static/imgicon/ktv.jpg', update: '每周五更新'},
            {title: 'iTunes榜', imgUrl: '../../../../static/imgicon/itunes.jpg', update: '每周一更新'},
            {title: '日本Oricon周榜', imgUrl: '../../../../static/imgicon/oricon.jpg', update: '每周三更新'},
            {title: 'Hit FM Top榜', imgUrl: '../../../../static/imgicon/hit.jpg', update: '每周一更新'},
            {title: '台湾Hito排行榜', imgUrl: '../../../../static/imgicon/hito.jpg', update: '每周一更新'},
            {title: '中国TOP排行榜(港台榜)', imgUrl: '../../../../static/imgicon/hongkong.jpg', update: '每周一更新'},
            {title: '中国TOP排行榜（内地榜）', imgUrl: '../../../../static/imgicon/china.jpg', update: '每周一更新'},
            {title: '香港电台中文歌曲龙虎榜', imgUrl: '../../../../static/imgicon/hongkongchina.jpg', update: '每周五更新'},
            {title: '中国嘻哈榜', imgUrl: '../../../../static/imgicon/haxi.jpg', update: '每周五更新'}
            ]
        }
      },
    methods: {
      getVal: function (value,url) {
        this.title = value;
        this.imgUrl = url;
        this.activeTitle = value;
      }
    }
  }
</script>

<style scoped>
  .a1{
    background: #e6e6e6;
  }
  .right_rank{
    min-height: 1353px;
  }
  .ranking{
    display: flex;
    width: 80%;
    margin: 0 auto;
    border-top-width: 0;
    border-bottom-width: 0;
  }
  .ranking .left_rank{
    width: 300px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    height: 100%;
    background: #f9f9f9;
  }
  .ranking .right_rank{
    width: 100%;
    border-right: 1px solid #ccc;
    background: #fff;
  }
  .left_rank ul{
    width: 100%;
    margin: 15px auto;
  }
  .left_rank ul li{
    padding-left: 20px;
  }
  .left_rank ul li .img{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40px;
    float: left;
    height: 40px;
    overflow: hidden;
  }
  .left_rank ul  li .text{
    margin-top: 10px;
    margin-bottom: 10px;
    float: left;
  }
  .left_rank ul  li .text p:nth-child(1){
    margin: 5px auto 5px 10px;
    font-size: 13px;
    color: #333;
  }
  .left_rank ul  li .text p:nth-child(2){
    font-size: 12px;
    margin: 5px auto 5px 10px;
    color: #999;
  }
  .left_rank>p:nth-child(1){
    font-family: simsun,\5b8b\4f53;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    margin-top: 50px;
    margin-left: 10px;
  }
  .left_rank .secondP{
    font-family: simsun,\5b8b\4f53;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    margin-top: 30px;
    margin-left: 10px;
  }
  .left_rank ul li:hover{
    background: #f4f2f2;
  }
</style>


