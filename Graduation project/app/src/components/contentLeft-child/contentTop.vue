<template>
  <div class="content_top">
    <div class="top_one">
      <p class="redPoint"></p>
      <p class="suggest"><a href="">热门推荐</a></p>
      <ul>
        <li><a href="">华语</a><span>|</span></li>
        <li><a href="">流行</a><span>|</span></li>
        <li><a href="">摇滚</a><span>|</span></li>
        <li><a href="">民谣</a><span>|</span></li>
        <li><a href="">电子</a></li>
      </ul>
      <p class="more">
        <a href="">更多</a>
        <em></em>
      </p>
    </div>
    <ul class="lists">
      <li v-for="item in arr">
        <a href="">
          <div class="bground">
            <img :src="item.coverUrl">
            <a href="" class="bground_on" :title="item.name"></a>
          </div>
          <div class="bottom">
              <p><em></em><span>{{item.listenNum}}</span></p>
              <p title="播放"></p>
          </div>
        </a>
        <p class="important">
          <a href="" class="title"><em></em>{{item.name}}</a>
        </p>
      </li>
      <li style="float:none; clear:left; margin: 0; width: 0;"></li>
    </ul>
  </div>
</template>

<script>
  export default{
      mounted: function () {
        this.getSingers();
      },
    data: function () {
      return{
          arr: ''
      }
    },
    methods: {
      getSingers: function () {
        let _this = this;
        _this.$axios.get('./api/getSingers',{
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.arr = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .content_top{
    padding-bottom: 30px;
  }
  .top_one{
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
  }
  .top_one .redPoint{
    margin-top: 2px;
    float: left;
    width: 15px;
    height: 15px;
    background: url("../../assets/imgicon/index.png") no-repeat -235px -164px;
  }
  .top_one .suggest{
    float: left;
  }
  .suggest>a{
    margin-left: 8px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
  }
  .top_one ul{
    margin-left: 10px;
    float: left;
  }
  .top_one ul li{
    margin-left: 20px;
    float: left;
  }
  .top_one ul li a{
    color: #999;
    font-size: 12px;
  }
  .top_one ul li a:hover{
    text-decoration: underline;
  }
  .top_one ul li span{
    color: #e4e4e4;
    font-size: 12px;
    margin-left: 15px;
  }
  .top_one .more{
    float: right;
  }
  .top_one .more a{
    color: #333;
    font-size: 12px;
  }
  .top_one .more a:hover{
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
  .lists li{
    width: 140px;
    overflow: hidden;
    float: left;
    margin: 20px 10px 5px 10px;
  }
  .lists .bground{
    width: 140px;
    height: 140px;
  }
  .lists .bground .bground_on{
    display: inline-block;
    position: relative;
    top: -140px;
    width: 140px;
    height: 140px;
    background: url("../../assets/imgicon/coverall.png") no-repeat 0 0;
  }
  .bottom{
    margin-bottom: 5px;
    margin-top: -27px;
    position: relative;
    width: 140px;
    height: 27px;
    background: url("../../assets/imgicon/coverall.png") no-repeat 0 -537px;
  }
  .title em{
    display: inline-block;
    width: 35px;
    height: 15px;
    background: url("../../assets/imgicon/icon.png") no-repeat -31px -658px;
  }
  .bottom p:nth-child(1){
    padding-left: 10px;
    float: left;
    margin-top: 5px;
  }
  .bottom p:nth-child(1) span{
    color: #ccc;
    font-size: 12px;
    margin-left: 5px;
  }
  .bottom p:nth-child(1) em{
    display: inline-block;
    width: 15px;
    height: 11px;
    background: url("../../assets/imgicon/iconall.png") no-repeat 0px -24px;
  }
  .bottom p:nth-child(2){
    margin-top: 5px;
    margin-right: 10px;
    float: right;
    width: 16px;
    height: 16px;
    background: url("../../assets/imgicon/iconall.png") no-repeat 0 0;
  }
  .bottom p:nth-child(2):hover{
    background: url("../../assets/imgicon/iconall.png") no-repeat 0 -60px;
  }
  .title{
    line-height: 1.4;
    font-size: 14px;
    color: #333;
    font-weight: normal;
  }
  .title:hover{
    text-decoration: underline;
  }
  .important{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 140px;
  }
</style>
