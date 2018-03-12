<template>
    <div class="content">
      <div class="content_text">
        <p class="title">
          <span>热门新碟</span>
        </p>
        <div class="slide">
          <ul>
            <li v-for="item in message">
              <a href="" :title="item.albumTitle">
                <div class="ground">
                  <img :src="item.albumUrl">
                </div>
                <p class="ground_top">
                  <em title="播放" class="player"></em>
                </p>
                <a href="" class="text">
                  <p class="titling" :title="item.albumTitle">{{item.albumTitle}}</p>
                </a>
                <a href="">
                  <p class="name" :title="item.singerName">{{item.singerName}}</p>
                </a>
              </a>
            </li>
            <li style="margin-bottom: 0;padding: 0;clear:left;float:none;"></li>
          </ul>
        </div>
        <p class="title">
          <span>全部新碟</span>
          <a href="">全部</a>
          <em>|</em>
          <a href="">华语</a>
          <em>|</em>
          <a href="">欧美</a>
          <em>|</em>
          <a href="">日本</a>
          <em>|</em>
          <a href="">韩国</a>
        </p>
        <div class="slide">
          <ul>
            <li v-for="item in arr">
              <a href="" :title="item.albumTitle">
                <div class="ground">
                  <img :src="item.albumUrl">
                </div>
                <p class="ground_top">
                  <em title="播放" class="player"></em>
                </p>
                <a href="">
                  <p class="titling" :title="item.albumTitle">{{item.albumTitle}}</p>
                </a>
                <a href="">
                  <p class="name" :title="item.singerName">{{item.singerName}}</p>
                </a>
              </a>
            </li>
            <li style="margin-bottom: 0;padding: 0;clear:left;float:none;"></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
      mounted: function () {
        this.getMessage();
        this.getNews();
      },
      data: function () {
        return{
            message: '',
            arr: ''

        }
      },
    methods: {
          getMessage: function () {
            let _this = this;
            _this.$axios.get('/api/getCd',{
                headers: {'X-Requested-With':'XMLHttpRequest'},
                responseType: 'json'
            })
              .then(function (res) {
                _this.message = res.data
              })
              .catch(function (err) {
                console.log(err)
              })
          },
      getNews: function () {
        let _this = this;
        _this.$axios.get('/api/getOtherCd',{
          headers: {'X-Requested-With':'XMLHttpRequest'},
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
  .content{
    position: relative;
    width: 940px;
    min-width: 700px;
    background: #fff;
    margin: 0 auto;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    border-bottom-width: 0;
    border-top-width: 0;
    padding-right: 40px;
  }
  .content .title{
    padding-top: 50px;
    padding-bottom: 15px;
    border-bottom: 2px solid #b80b0b;
  }
  .content .title span{
    font-size: 24px;
    font-weight: normal;
    color: #000;
  }
  .content_text{
    padding-left: 40px;
  }

  .slide li{
    margin-top: 20px;
    position: relative;
    float: left;
    margin-left: 30px;
  }
  .slide li:nth-child(5n-4){
    margin-left: 0;
  }
  .slide li>a{
    font-size: 12px;
    text-decoration: none;
  }
  .slide .ground{
    width: 151px;
    height: 130px;
    background: url("../../assets/imgicon/coverall.png") no-repeat 0 -845px;
  }
  .slide .ground_top{
    position: absolute;
    margin-top: -130px;
    z-index: 2;
    width: 130px;
    height: 130px;
    background: url("../../assets/imgicon/coverall.png") no-repeat 0px -680px;
  }
  .slide .ground_top .player{
    position: absolute;
    display: inline-block;
    opacity: 0;
    bottom: 7px;
    left: 95px;
    width: 24px;
    height: 24px;
    background: url("../../assets/imgicon/iconall.png") no-repeat -43px -23px;
  }
  .slide .ground_top:hover .player{
    opacity: 1;
  }
  .slide .ground_top em:hover{
    background: url("../../assets/imgicon/iconall.png") no-repeat -43px -53px;
  }
  .slide .titling{
    font-size: 14px;
    margin: 8px 0;
    color: #000;
    overflow: hidden;
    width: 150px;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .slide .titling:hover{
    text-decoration: underline;
  }
  .slide .name{
    color: #666;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .slide .name:hover{
    text-decoration: underline;
  }
  .title a{
    margin-left: 8px;
    font-size: 12px;
    color: #666;
  }
  .title a:hover{
    text-decoration: underline;
  }
  .title em{
    margin-left: 8px;
    font-size: 12px;
    color: #c7c7c7;
  }

</style>
