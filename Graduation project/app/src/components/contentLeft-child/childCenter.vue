<template>
  <div>
    <div class="content_middle">
      <p class="redPoint"></p>
      <p class="suggest"><a href="">新碟上架</a></p>
      <p class="more">
        <a href="">更多</a>
        <em></em>
      </p>
    </div>
  <div class="content_slide">
    <p class="pre"></p>
      <div class="slide">
        <ul>
          <li v-for="item in arr">
            <a href="">
              <div class="ground">
                <div style="width: 100px;height: 100px;overflow:hidden;">
                  <img :src="item.albumUrl" width="100%">
                </div>
              </div>
              <p class="ground_top">
                <em title="播放" class="player"></em>
              </p>
              <p class="title" :title="item.albumTitle">{{item.albumTitle}}</p>
              <p class="name" :title="item.singerName">{{item.singerName}}</p>
            </a>
          </li>
        </ul>
      </div>
    <p class="next"></p>
  </div>
  </div>
</template>

<script>
  import slider from 'vue-concise-slider'//滑动组件
  export default{
    mounted: function () {
      this.getUrl();
    },
    data: function () {
      return {
        arr: ''

      }
    },
    methods: {
      getUrl: function () {
        let _this = this;
        _this.$axios.get('/api/getUrl',{
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            responseType: 'json'
        })
          .then(function (res) {
            _this.arr = res.data;
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .content_middle{
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
  }
  .content_middle .redPoint{
    margin-top: 2px;
    float: left;
    width: 15px;
    height: 15px;
    background: url("../../assets/imgicon/index.png") no-repeat -235px -164px;
  }
  .content_middle .suggest{
    float: left;
  }
  .suggest>a{
    margin-left: 8px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
  }
  .content_middle .more{
    float: right;
  }
  .content_middle .more a{
    color: #333;
    font-size: 12px;
  }
  .content_middle .more a:hover{
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
  .content_slide{
    display: flex;
    position: relative;
    margin: 20px 0 37px;
    height: 186px;
    border: 1px solid #d3d3d3;
    background: #f4f4f4;
  }
  .slide{
    position: relative;
    height: 180px;
    overflow: hidden;
    width: 700px;
    margin: 0 auto;
  }
  .slide ul{
    width: 2070px;
    margin-top: 25px;
    height: 100%;
  }
  .slide li{
    margin-left: 20px;
    float: left;
    width: 118px;
    height: 150px;
  }
  .slide li>a{
    font-size: 12px;
    text-decoration: none;
  }
  .slide .ground{
    width: 115px;
    height: 100px;
    background: url("../../assets/imgicon/coverall.png") no-repeat 0 -571px;
  }
  .slide .ground_top{
    position: relative;
    margin-top: -100px;
    width: 100px;
    height: 100px;
    background: url("../../assets/imgicon/coverall.png") no-repeat -240px -70px;
  }
  .slide .ground_top .player{
    position: absolute;
    display: inline-block;
    opacity: 0;
    bottom: 7px;
    left: 70px;
    width: 22px;
    height: 22px;
    background: url("../../assets/imgicon/iconall.png") no-repeat 0px -86px;
  }
  .slide .ground_top:hover .player{
    opacity: 1;
  }
  .slide .ground_top em:hover{
    background: url("../../assets/imgicon/iconall.png") no-repeat 0px -111px;
  }
  .slide .title{
    margin: 5px 0;
    color: #000;
    overflow: hidden;
    width: 100px;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .slide .title:hover{
    text-decoration: underline;
  }
  .slide .name{
    color: #666;
    width: 100px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .slide .name:hover{
    text-decoration: underline;
  }
  .content_slide .pre{
    cursor: pointer;
    position: relative;
    top: 73px;
    left: 33px;
    width: 7px;
    height: 14px;
    background: url("../../assets/imgicon/index.png") no-repeat -265px -77px;
  }
  .content_slide .pre:hover{
    background: url("../../assets/imgicon/index.png") no-repeat -285px -77px;
  }
  .next{
    cursor: pointer;
    position: relative;
    top: 73px;
    right: 33px;
    width: 7px;
    height: 14px;
    background: url("../../assets/imgicon/index.png") no-repeat -306px -77px;
  }
  .next:hover{
    background: url("../../assets/imgicon/index.png") no-repeat -326px -77px;
  }
</style>
