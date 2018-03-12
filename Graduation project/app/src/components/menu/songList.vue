<template>
  <div class="content">
    <div class="header">
      <p class="left">
        <span>{{news}}</span>
        <span @click="isShow">选择分类<em></em></span>
      </p>
      <p class="right">
        <span>热门</span>
        <span>最新</span>
      </p>
      <p style="clear:both;"></p>
      <div class="menu" v-if="show">
        <div class="triangle"></div>
        <h3 class="top_bar">
          <a href="javascript:void(0);" @click="getVal('全部风格')"><span>全部风格</span></a>
        </h3>
        <dl class="dl1">
          <dt>
            <em></em>
            <span>语种</span>
          </dt>
          <dd v-for="item in Arr[0]">
            <a href="javascript:void(0);" @click="getVal(item)"><span>{{item}}</span><em>|</em></a>
          </dd>
          <dd style="clear:both;"></dd>
        </dl>
        <dl class="dl2" style="padding-right: 5px;">
          <dt>
            <em></em>
            <span>风格</span>
          </dt>
          <dd v-for="item in Arr[1]">
            <a href="javascript:void(0);" @click="getVal(item)"><span>{{item}}</span><em>|</em></a>
          </dd>
          <dd style="clear:both;"></dd>
        </dl>
        <dl class="dl3">
          <dt>
            <em></em>
            <span>场景</span>
          </dt>
          <dd v-for="item in Arr[2]">
            <a href="javascript:void(0);" @click="getVal(item)"><span>{{item}}</span><em>|</em></a>
          </dd>
          <dd style="clear:both;"></dd>
        </dl>
        <dl class="dl4" style="padding-right: 10px;">
          <dt>
            <em></em>
            <span>情感</span>
          </dt>
          <dd v-for="item in Arr[3]">
            <a href="javascript:void(0);" @click="getVal(item)"><span>{{item}}</span><em>|</em></a>
          </dd>
          <dd style="clear:both;"></dd>
        </dl>
        <dl class="dl5">
          <dt>
            <em></em>
            <span>主题</span>
          </dt>
          <dd v-for="item in Arr[4]">
            <a href="javascript:void(0);" @click="getVal(item)"><span>{{item}}</span><em>|</em></a>
          </dd>
          <dd style="clear:both;margin-top: 0;"></dd>
        </dl>

      </div>
    </div>
    <router-view :mdate="news"></router-view>
  </div>
</template>

<script>
  export default{
      data: function () {
        return{
          news: '全部',
          Arr: [
            ['华语','欧美','日语','韩语','粤语','小语种'],
            ['流行','摇滚','民谣','电子','舞曲','说唱','轻音乐',
              '爵士','乡村','R&B/Soul','古典','民族','英伦','金属','朋克','蓝调',
              '雷鬼','世界音乐','拉丁','另类/独立','New Age','古风','后摇','Bossa Nova'],
            ['清晨','夜晚','学习','工作','午休','下午茶','地铁','驾车','运动','旅行','散步','酒吧'],
            ['怀旧','清新','浪漫','性感','伤感','治愈','放松','孤独','感动','兴奋','快乐','安静','思念'],
            ['影视原声','ACG','校园','游戏','70后','80后','90后','网络歌曲','KTV','经典','翻唱','吉他','钢琴','器乐','儿童','榜单','00后']
          ],
          show: false
        }

      },
    methods: {
          isShow: function () {
            this.show = !this.show;
          },
      getVal: function (e) {
        this.isShow();
        if (e =='全部风格'){
            e = '全部';
        }
        this.news = e;
      }
    }
  }
</script>

<style scoped>
  .content{
    width: 80%;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #ccc;
    border-bottom-width: 0;
    border-top-width: 0;
  }
  .header{
    padding: 50px 40px 10px 40px;
  }
  .header .menu{
    margin-top: 15px;
    position: absolute;
    width: 700px;
    border-radius: 5px;
    box-shadow: -2px 0 5px #e4e4e4,0 -2px 5px #e4e4e4,0 2px 5px #e4e4e4,2px 0 5px #e4e4e4;
    z-index: 20;
    background: #fff;
    border: 1px solid #ccc;
  }
  .menu .triangle{
    position: relative;
    width: 15px;
    border-radius: 3px;
    top: -8px;
    height: 15px;
    transform: rotate(45deg);
    transform-origin: center;
    left: 100px;
    background: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }
  .menu .top_bar{
    margin-top: 5px;
    height: 37px;
    line-height: 37px;
    border-bottom: 1px solid #ccc;
  }
  .menu .top_bar span{
    margin-left: 30px;
    color: #333;
    text-align: center;
    font-size: 12px;
    width: 75px;
    line-height: 26px;
    display: block;
    height: 26px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: url("../../assets/imgicon/button2.png") no-repeat -10px -60px;
  }
  .menu .top_bar span:hover{
    text-decoration: underline;
  }
  .menu .dl1 dt{
    float: left;
    border-right: 1px solid #ccc;
    padding-right: 15px;
    padding-left: 26px;
  }
  .menu .dl2 dt{
    float: left;
    border-right: 1px solid #ccc;
    padding-left: 26px;
    height: 80px;
    padding-right: 19px;
  }
  .menu .dl3 dt{
    height: 62px;
    float: left;
    border-right: 1px solid #ccc;
    padding-right: 14px;
    padding-left: 26px;
  }
  .menu .dl4 dt{
    height: 62px;
    float: left;
    border-right: 1px solid #ccc;
    padding-right: 16px;
    padding-left: 26px;
  }
  .menu .dl5 dt{
    height: 95px;
    float: left;
    border-right: 1px solid #ccc;
    padding-right: 20px;
    padding-left: 26px;
  }
  .menu .dl1 dt em {
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 23px;
    height: 23px;
    display: inline-block;
    background: url("../../assets/imgicon/icon.png") no-repeat -20px -735px;
  }
  .menu .dl2 dt  em {
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 19px;
    height: 19px;
    display: inline-block;
    background: url("../../assets/imgicon/icon.png") no-repeat -2px -64px;
  }
  .menu .dl3 dt  em {
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url("../../assets/imgicon/icon.png") no-repeat 0 -89px;
  }
  .menu .dl4 dt  em {
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 22px;
    height: 22px;
    display: inline-block;
    background: url("../../assets/imgicon/icon.png") no-repeat 0 -118px;
  }
  .menu .dl5 dt em {
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 18px;
    height: 16px;
    display: inline-block;
    background: url("../../assets/imgicon/icon.png") no-repeat 0 -145px;
  }
  .menu dl dt span{
    bottom: 14px;
    position: relative;
    font-size: 13px;
    margin-top: -10px;
    margin-left: 5px;
    color: #000;
    font-weight: bold;
  }
  .menu .dl1 dd{
    float: left;
    margin-top: 15px;
  }
  .menu .dl2 dd{
    float: left;
    margin-top: 10px;
  }
  .menu .dl3 dd{
    float: left;
    margin-top: 15px;
  }
  .menu .dl4 dd{
     float: left;
     margin-top: 15px;
   }
  .menu .dl5 dd{
    float: left;
    margin-top: 15px;
  }
  .menu dl dd span{
    margin-left: 10px;
    font-size: 13px;
    color: #555;
  }
  .menu dl dd span:hover{
    text-decoration: underline;
  }
  .menu dl dd em{
    font-size: 12px;
    margin-left: 10px;
    color: #ccc;
  }





  .header p:nth-child(1){
    float: left;
  }
  .header p:nth-child(2){
    float: right;
  }
  .header .left span:nth-child(1){
    color: #333;
    font-size: 24px;
    font-weight: normal;
  }
  .header .left span:nth-child(2){
    cursor: pointer;
    margin-left: 10px;
    position: relative;
    top: -2px;
    font-size: 12px;
    box-sizing: content-box;
    height: 30px;
    width: 86px;
    line-height: 30px;
    border: 1px solid #ccc;
    color: #0c73c2;
    border-radius: 5px;
    background: url("../../assets/imgicon/button2.png") no-repeat -10px -59px;
    padding: 7px 15px;
  }
  .header .left span:nth-child(2):hover{
    background: url("../../assets/imgicon/button2.png") no-repeat -10px -141px;

  }
  .header .left span em{
    width: 8px;
    height: 5px;
    margin-left: 5px;
    display: inline-block;
    background: url("../../assets/imgicon/icon.png") no-repeat -70px -543px;
  }
  .header .right span{
    cursor: pointer;
    height: 30px;
    border: 1px solid #ccc;
    line-height: 30px;
    font-size: 12px;
    padding: 5px 10px;
  }
  .header .right span:hover{
    text-decoration: underline;
  }
  .header .right span:nth-child(1){
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    margin-right: -5px;
    color: #fff;
    background: #b80b0b;
    background: url("../../assets/imgicon/button2.png") no-repeat -10px -2855px;
    border-right-width: 0;
  }
  .header .right span:nth-child(2){
    height: 29px;
    line-height: 29px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    color: #555;
    background: url("../../assets/imgicon/button2.png") no-repeat -10px -305px;
    border-left-width: 0;
  }
</style>
