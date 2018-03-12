<template>
  <div>
    <div class="slide">
      <span class="previty" @click="slidePre"></span>
      <slider :pages="pages" :sliderinit="sliderinit"></slider>
      <span class="next_one" @click="slideNext"></span>
      <div class="download">
        <a href="https://music.163.com/#/download">
          <div class="downloadbtn"></div>
        </a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
    <!--中间内容部分-->
    <div class="content_text">
      <!--左边内容部分-->
      <div class="content_left">
        <text-left @getChildMessage="getMessage"></text-left>
      </div>
      <!--右边内容部分-->
      <div class="content_right">
        <text-right></text-right>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'//引入vue
  import slider from 'vue-concise-slider'//滑动组件
  import text_left from '../contentLeft.vue'
  import text_right from '../contentRight.vue'
  export default{
    components: {
      slider: slider,
      textLeft: text_left,
      textRight: text_right
    },
    data:function () {
      return{
        pages: [
          //图片列表
          {
            title: '',
            style: {
              background: 'url(http://p1.music.126.net/07rQ-KQyhj7FNR68LEHMfg==/18685100604419747.jpg)'
            }
          },
          {
            title: '',
            style: {
              background: 'url(http://p1.music.126.net/YMxg-RzDoEwfdx_Z1_lCEQ==/18829136627649373.jpg)'
            }
          },
          {
            title: '',
            style: {
              background: 'url(http://p1.music.126.net/AuiCpcdz97hvTATAIe9wGg==/19213965695644157.jpg)'
            }
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 1000,//滑动判定距离
          thresholdTime: 8000,//滑动判定时间
          autoplay:5000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        },
        childComponents: ''
      }
    },
    methods: {
      slidePre: function () {
        this.$children[0].$emit('slideNext');
      },
      slideNext: function () {
        this.$children[0].$emit('slidePre');
      },
      getMessage: function (data) {
        this.$emit('getData',data)
      }
    }
  }
</script>

<style scoped>
  .slide{
    margin-left: -120px;
  }
  .slider-container{
    cursor: pointer;
    z-index: 1;
    position: relative;
    width: 982px;
    height: 336px;
    margin: 0 auto;
  }
  .previty{
    cursor: pointer;
    position: absolute;
    width: 37px;
    height: 63px;
    display: inline-block;
    left: 19px;
    top: 143px;
    background: url("../../assets/imgicon/banner.png") no-repeat 0 -431px;
  }
  .next_one{
    cursor: pointer;
    position: absolute;
    width: 37px;
    height: 63px;
    display: inline-block;
    right: 60px;
    top: 143px;
    background: url("../../assets/imgicon/banner.png") no-repeat 0 -578px;
  }
  .download{
    width: 254px;
    height: 336px;
    position: absolute;
    z-index: 50;
    right: 122px;
    top: 0;
    background: url("../../assets/imgicon/download.png") no-repeat 0px 0px;

  }
  .download>p{
    position: relative;
    font-size: 12px;
    color: #8d8d8d;
    top: 229px;
    left: 13px;
  }
  .downloadbtn{
    width: 215px;
    height: 55px;
    position: relative;
    top: 212px;
    left: 20px;
    background: url("../../assets/imgicon/download.png") no-repeat 0px -341px;
  }
  .content_text{
    margin: 0 auto;
    border-left: 1px solid #d3d3d3;
    border-right:1px solid #d3d3d3;
  }
  .content_left{
    margin-left: 45px;
    float: left;
  }
  .content_right{
    float: left;
  }
</style>
