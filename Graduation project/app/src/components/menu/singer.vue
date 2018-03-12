<template>
  <div class="content">
    <div class="content_left">
      <div class="top">
        <p class="suggest">推荐</p>
        <a href=""><p class="sug_singer"><em></em>推荐歌手</p></a>
        <p class="save"><a href="">入驻歌手</a></p>
        <div></div>
      </div>
      <div class="middle">
      <div v-for="item in news">
        <p class="suggest">{{item[0]}}</p>
        <p class="save"><a href="">{{item[1]}}</a></p>
        <p class="save"><a href="">{{item[2]}}</a></p>
        <p class="save"><a href="">{{item[3]}}</a></p>
        <div class="line"></div>
      </div>
    </div>
    </div>
    <div class="content_right">
      <p class="title">
        <span>入驻歌手</span>
        <a href="">更多&nbsp;></a>
      </p>
          <ul class="save_singer">
            <li v-for="item in message">
              <a href="">
                <div class="photo" :title="item.name">
                  <img :src="item.singerPhoto">
                  <span></span>
                </div>
              </a>
              <p>
                <a href="" :title="item.name">{{item.name}}</a>
                <a href="" :title="item.name"></a>
              </p>
            </li>
            <li style="float:none;clear:left; margin: 0;padding: 0;"></li>
          </ul>
      <p class="title">
        <span>热门歌手</span>
      </p>
      <ul class="save_singer ul2">
        <li v-for="item in arr">
          <a href="">
            <div class="photo" :title="item.name">
              <img :src="item.singerPhoto">
              <span></span>
            </div>
          </a>
          <p>
            <a href="" :title="item.name">{{item.name}}</a>
          </p>
        </li>
        <li style="float:none;clear:left; margin: 0;padding: 0;"></li>
      </ul>
      <ul class="singer_name">
        <li v-for="item in names"><a href="">{{item.name}}</a></li>
        <li style="float:none; clear: left;margin: 0;padding: 0;width: 0;height: 0;line-height: 0;"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
      mounted: function () {
        this.getNews();
        this.getHot();
        this.getsingerName();
      },
      data: function () {
        return{
          news: [
            ['华语','华语男歌手','华语女歌手','华语组合/乐队'],
            ['欧美','欧美男歌手','欧美女歌手','欧美组合/乐队'],
            ['日本','日本男歌手','日本女歌手','日本组合/乐队'],
            ['韩国','韩国男歌手','韩国女歌手','韩国组合/乐队'],
            ['其他','其他男歌手','其他女歌手','其他组合/乐队']
          ],
          message: '',
          arr: '',
          names: ''

        }
      },
    methods: {
          getNews: function () {
            let _this = this;
            _this.$axios.get('/api/singerNews',{
                headers: {'X-Requested-With': 'XMLHttpRequest'},
                responseType: 'json'
            })
              .then(function (res) {
                _this.message = res.data
              })
              .catch(function (err) {
                console.log(err)
              })
          },
      getHot:function () {
        let _this = this;
        _this.$axios.get('/api/hot',{
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.arr = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getsingerName: function () {
        let _this = this;
        _this.$axios.get('/api/singerName',{
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.names = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .content{
    width: 80%;
    background: #fff;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-bottom-width: 0;
    border-top-width: 0;
    display: flex;
    justify-content: flex-start;
  }
  .content_left{
    width: 280px;
    background: #f9f9f9;
    border-right: 1px solid #ccc;
  }
  .content_left .top{
    padding-left: 20px;
    margin-top: 50px;
  }
  .content_left .top .suggest{
    padding-left: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  .sug_singer{
    line-height: 18px;
    height: 29px;
    background: url("../../assets/imgicon/singer.png") no-repeat 0 2px;
    font-size: 12px;
    color: #b80b0b;
    margin-top: 10px;
    padding: 8px 40px 1px 30px;
  }
  .top .save{
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    padding-left: 28px;
    background: url("../../assets/imgicon/singer.png") no-repeat 0 -30px;
  }
  .top .save a{
    color: #000;
  }
  .top .save a:hover{
    text-decoration: underline;
  }
  .top div{
    margin-top: 10px;
    height: 0;
    border-bottom: 1px solid #ccc;
  }
  .top{
    padding-left: 10px;
    padding-right: 10px;
  }
  .middle{
    padding-left: 10px;
    padding-right: 10px;
  }
  .middle .line{
    margin-top: 10px;
    height: 0;
    border-bottom: 1px solid #ccc;
  }
  .content_left .middle{
    padding-left: 20px;
  }
  .content_left .middle .suggest{
    margin-bottom: 5px;
    margin-top: 20px;
    padding-left: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  .middle .save a{
    color: #000;
  }
  .middle .save a:hover{
    text-decoration: underline;
  }
  .middle .save{
    font-size: 12px;
    height: 28px;
    line-height: 27px;
    padding-left: 28px;
    background: url("../../assets/imgicon/singer.png") no-repeat 0 -30px;
  }
  .middle div:last-child div{
    border: 0;
  }
.content_right {
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
}
  .content_right .title{
    position: relative;
    width: 100%;
    margin-top: 40px;
    padding-bottom: 10px;
    border-bottom: 2px solid #b80b0b;
  }
  .content_right .title span{
    font-size: 24px;
    font-weight: normal;
    color: #000;
  }
  .content_right .title a{
    font-size: 12px;
    color: #333;
    position: absolute;
    right: 0;
    top: 10px;
  }
  .save_singer{
    margin-top: 5px;
  }
  .photo{
    position: relative;
  }
  .photo span{
    z-index: 10;
    display: block;
    position: absolute;
    top: 0px;
    width: 130px;
    height: 130px;
    background: url("../../assets/imgicon/coverall.png") no-repeat 0 -680px;
  }
  .save_singer li{
    float: left;
    margin-left: 18px;
    margin-top: 20px;
  }
  .save_singer li:nth-child(5n-4){
    margin-left: 0;
  }
  .save_singer li p a:nth-child(1){
    font-size: 12px;
    color: #333;
  }
  .save_singer li p a:nth-child(1):hover{
    text-decoration: underline;
  }
  .save_singer li p{
    position: relative;
    margin-top: 5px;
  }
  .save_singer li p a:nth-child(2){
    width: 16px;
    display: inline-block;
    position: absolute;
    right: 0;
    height: 16px;
    background: url("../../assets/imgicon/icon.png") no-repeat 0 -740px;
  }
  .content_right .ul2{
    padding-bottom: 40px;
    border-bottom: 1px dotted #666;
  }
  .singer_name{
    padding-top: 10px;
  }
  .singer_name li{
    float: left;
    margin-left: 10px;
     width: 130px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .singer_name li a{
    font-size: 12px;
    color: #333;
  }
  .singer_name li a:hover{
    text-decoration: underline;
  }



</style>
