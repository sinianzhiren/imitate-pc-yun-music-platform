<template>
  <div>
    <div class="content_bottom">
      <p class="redPoint"></p>
      <p class="suggest"><a href="">榜单</a></p>
      <p class="more">
        <a href="">更多</a>
        <em></em>
      </p>
    </div>
    <div class="song">
      <div class="left">
        <div class="left_top">
          <a href="">
          <div class="photo" title="云音乐飙升榜">
            <img src="../../assets/img/bot1.jpg" title="云音乐飙升榜">
            <p></p>
          </div>
          </a>
          <div class="title">
            <h1 title="云音乐飙升榜"><a href="">云音乐飙升榜</a></h1>
            <p>
              <a href=""><em title="播放"></em></a><a href=""><i title="收藏"></i></a>
            </p>
          </div>
        </div>
        <ol>
          <li v-for="(item,index) in news">
            <div class="num" style=" font-size: 14px;" v-text="index+1"></div>
            <div class="all">
              <p><a href="" :title="item.title" v-text="item.title"></a></p>
              <p class="icon">
                <span title="播放" @click="sendMessage( item.singUrl )"></span>
                <em title="添加到播放列表"></em>
                <i title="收藏"></i>
              </p>
            </div>
          </li>
        </ol>
        <div class="show_more"><a href="">查看全部></a></div>
      </div>
      <div class="middle">
        <div class="left_top">
          <a href="">
            <div class="photo" title="云音乐新歌榜">
              <img src="../../assets/img/bot2.jpg" title="云音乐新歌榜">
              <p></p>
            </div>
          </a>
          <div class="title">
            <h1 title="云音乐新歌榜"><a href="">云音乐新歌榜</a></h1>
            <p>
              <a href=""><em title="播放"></em></a><a href=""><i title="收藏"></i></a>
            </p>
          </div>
        </div>
        <ol>
          <li v-for="(item,index) in message">
            <div class="num" style=" font-size: 14px;" v-text="index+1"></div>
            <div class="all">
              <p><a href="" :title="item.title" v-text="item.title"></a></p>
              <p class="icon">
                <span title="播放"></span>
                <em title="添加到播放列表"></em>
                <i title="收藏"></i>
              </p>
            </div>
          </li>
        </ol>
        <div class="show_more"><a href="">查看全部></a></div>
      </div>
      <div class="right">
        <div class="left_top">
          <a href="">
            <div class="photo" title="网易原创歌曲榜">
              <img src="../../assets/img/bot3.jpg" title="网易原创歌曲榜">
              <p></p>
            </div>
          </a>
          <div class="title">
            <h1 title="网易原创歌曲榜"><a href="">网易原创歌曲榜</a></h1>
            <p>
              <a href=""><em title="播放"></em></a><a href=""><i title="收藏"></i></a>
            </p>
          </div>
        </div>
        <ol>
          <li v-for="(item,index) in createSong">
            <div class="num" style=" font-size: 14px;" v-text="index+1"></div>
            <div class="all">
              <p><a href="" :title="item.title" v-text="item.title"></a></p>
              <p class="icon">
                <span title="播放"></span>
                <em title="添加到播放列表"></em>
                <i title="收藏"></i>
              </p>
            </div>
          </li>
        </ol>
        <div class="show_more"><a href="">查看全部></a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default{
      created: function () {
          this.getMessage();
          this.getNews();
          this.getCreateSong();

      },
    data: function () {
      return {
          message: '',
          news: '',
          createSong: ''
      }
    },
    methods: {
        getMessage: function () {
            let _this = this;
          this.$axios.get('/api/music',{
            // 请求头信息
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            //返回数据类型
            responseType: 'json', // default
          })
            .then(function (res) {
              _this.message = res.data;
          })
            .catch(function (err) {
            console.log(err);
          })
        },
      getNews: function () {
        let _this = this;
        this.$axios.get('/api/music1',{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json', // default
        })
          .then(function (res) {
            _this.news = res.data;
          })
          .catch(function (err) {
            console.log(err);
          })
      },
      getCreateSong: function () {
        let _this = this;
        this.$axios.get('/api/music2',{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json', // default
        })
          .then(function (res) {
            _this.createSong = res.data;
          })
          .catch(function (err) {
            console.log(err);
          })
      },
      sendMessage: function (news) {
        this.$emit('acceptChild',news)
      }
    }
  }
</script>

<style scoped>
  .content_bottom{
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
  }
  .content_bottom .redPoint{
    margin-top: 2px;
    float: left;
    width: 15px;
    height: 15px;
    background: url("../../assets/imgicon/index.png") no-repeat -235px -164px;
  }
  .content_bottom .suggest{
    float: left;
  }
  .suggest>a{
    margin-left: 8px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
  }
  .content_bottom .more{
    float: right;
  }
  .content_bottom .more a{
    color: #333;
    font-size: 12px;
  }
  .content_bottom .more a:hover{
    text-decoration: underline;
  }
  .more em{
    top: 3px;
    position: relative;
    display: inline-block;
    width: 13px;
    height: 12px;
    background: url("../../assets/imgicon/index.png") no-repeat 0 -240px;
  }
  .song{
    display: flex;
    background: #F4F4F4;
    height: 495px;
    margin-top: 20px;
    border: 1px solid #ccc;
  }
  .song .all{
    cursor: pointer;
    width: 100%;
    margin-left: 10px;
  }
  .song .all:hover .icon{
    opacity: 1;
  }
  .song .all p:nth-child(1){
    float: left;
  }
  .song .all p:nth-child(2){
    float: right;
  }
  .song ol{
    margin-top: 20px;
  }
  .song ol li{
    position: relative;
    padding-left: 25px;
    height: 32px;
    line-height: 32px;
    display: flex;
  }
  .song ol li:nth-child(10) .num{
    margin-left: -7px;
  }
  .song ol li a{
    font-size: 12px;
    color: #333;
  }
  .song ol li:nth-child(1) .num{
    color: #c10d0c;
  }
  .song ol li:nth-child(2) .num{
    color: #c10d0c;
  }
  .song ol li:nth-child(3) .num{
    color: #c10d0c;
  }
  .song ol li a:hover{
    text-decoration: underline;
  }
  .song ol li:nth-child(odd){
    background: #e8e8e8;
  }
  .left_top{
    height: 102px;
  }
  .photo{
    margin-left: 20px;
    float: left;
  }
  .photo p{
    position: relative;
    margin-top: -100px;
    width: 100px;
    height: 100px;
    background: url("../../assets/imgicon/coverall.png") no-repeat -240px -70px;
  }
  .title{
    margin-left: 10px;
    float: left;
  }
  .title h1{
    margin: 10px 0;
  }
  .title a{
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  .title em{
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("../../assets/imgicon/index.png") no-repeat -267px -205px;
  }
  .title em:hover{
    background: url("../../assets/imgicon/index.png") no-repeat -267px -235px;
  }
  .title i{
    display: inline-block;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    background: url("../../assets/imgicon/index.png") no-repeat -300px -207px;
  }
  .icon{
    opacity: 0;
    position: absolute;
    right: 10px;
  }
  .title i:hover{
    background: url("../../assets/imgicon/index.png") no-repeat -300px -237px;
  }
  .song{

  }
   .song .icon span{
     position: relative;
     top:2px;
     display: inline-block;
     margin-left: 5px;
     width: 18px;
     height: 17px;
     background: url("../../assets/imgicon/index.png") no-repeat -267px -268px;
   }
   .song .icon span:hover{
     background: url("../../assets/imgicon/index.png") no-repeat -267px -288px;
   }
  .song .icon em{
    display: inline-block;
    margin-left: 5px;
    width: 13px;
    height: 13px;
    background: url("../../assets/imgicon/icon.png") no-repeat 0 -700px;
  }
  .song .icon em:hover{
    background: url("../../assets/imgicon/icon.png") no-repeat -22px -700px;
  }
  .song .icon i{
    display: inline-block;
    margin-left: 5px;
    width: 16px;
    height: 14px;
    background: url("../../assets/imgicon/index.png") no-repeat -297px -270px;
  }
  .song .icon i:hover{
    background: url("../../assets/imgicon/index.png") no-repeat -297px -290px;
  }
  .left{
    overflow: hidden;
    width: 265px;
    padding-top: 20px;
    border-right: 1px solid #ccc;
  }
  .show_more{
    height: 32px;
    text-align: right;
    line-height: 32px;
    background: #e8e8e8;
    padding-right: 15px;
  }
  .show_more a{
    color: #000;
    font-size: 12px;
  }
  .show_more a:hover{
    text-decoration: underline;
  }
  .middle{
    overflow: hidden;
    width: 265px;
    padding-top: 20px;
    border-right: 1px solid #ccc;
  }
  .right{
    overflow: hidden;
    width: 265px;
    padding-top: 20px;

  }
  .all p:nth-child(1){
    width: 143px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
