<template>
  <div class="content">
    <ul>
      <li>
        <a href="javascript:void(0);" @click="sendVal('有声书')">
          <div class="ground"></div>
          <p>有声书</p>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click="sendVal('知识技能')">
          <div class="ground1"></div>
          <p style="margin-top: 9px;">知识技能</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground2"></div>
          <p>商业财经</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground3"></div>
          <p>人文历史</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground4"></div>
          <p>外语世界</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground5"></div>
          <p>亲子宝贝</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground6"></div>
          <p>创作|翻唱</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground7"></div>
          <p>音乐故事</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground8"></div>
          <p>3D|电子</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground9"></div>
          <p>旅途|城市</p>
        </a>
      </li>
      <li style="clear:left; float:none;padding: 0; margin: 0;background: transparent;"></li>
      <li>
        <a href="">
          <div class="ground10"></div>
          <p>相声曲艺</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground11"></div>
          <p>情感调频</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground12"></div>
          <p>美文读物</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground13"></div>
          <p>脱口秀</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground14"></div>
          <p style="margin-top: 5px;">广播剧</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground15"></div>
          <p style="margin-top: 5px;">二次元</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground16"></div>
          <p>明星做主播</p>
        </a>
      </li>
      <li>
        <a href="">
          <div class="ground17"></div>
          <p>娱乐|影视</p>
        </a>
      </li>
      <li>
        <a href="">
        <div class="ground18"></div>
        <p>科技科学</p>
      </a>
      </li>
      <li>
        <a href="">
          <div class="ground19"></div>
          <p>校园|教育</p>
        </a>
      </li>
      <li style="clear:left; float:none;padding: 0; margin: 0;background: transparent;"></li>
    </ul>
    <router-view :message="news"></router-view>
  </div>
</template>

<script>
  export default{
      data: function () {
        return{
            news: '全部'

        }
      },
    methods: {
          sendVal: function (e) {
            this.news = e;
          }
    }
  }
</script>

<style scoped>
  .content{
    width: 80%;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 auto;
  }
  .content ul{
    width: 100%;
    padding-top: 20px;
  }
  .content ul li{
    margin-top: 30px;
    margin-left: 13px;
    padding: 8px 20px;
    float: left;
  }
  .content ul li:hover{
    background: #F6F7F7;
  }
  .content ul li .ground{
    margin-left: 5px;
    width: 28px;
    height: 32px;
    background: url("../../../static/imgicon/book.png") no-repeat -10px -8px;
  }
  .content ul li .ground1{
    margin-left: 11px;
    width: 26px;
    height: 35px;
    background: url("../../../static/imgicon/knowlage.png") no-repeat -11px -7px;
  }
  .content ul li .ground2{
    margin-left: 11px;
    width: 32px;
    height: 32px;
    background: url("../../../static/imgicon/caijin.png") no-repeat -8px -8px;
  }
  .content ul li .ground3{
      margin-left: 11px;
      width: 34px;
      height: 30px;
      background: url("../../../static/imgicon/history.png") no-repeat -7px -9px;
    }
  .content ul li .ground4{
    margin-left: 11px;
    width: 30px;
    height: 30px;
    background: url("../../../static/imgicon/language.png") no-repeat -9px -9px;
  }
  .content ul li .ground5{
    margin-left: 11px;
    width: 24px;
    height: 31px;
    background: url("../../../static/imgicon/qinzi.png") no-repeat -12px -9px;
  }
  .content ul li .ground6{
    margin-left: 11px;
    width: 30px;
    height: 33px;
    background: url("../../../static/imgicon/mai.png") no-repeat -8px -9px;
  }
  .content ul li .ground7{
    margin-left: 11px;
    width: 30px;
    height: 30px;
    background: url("../../../static/imgicon/music.png") no-repeat -9px -9px;
  }
  .content ul li .ground8{
     margin-left: 3px;
     width: 34px;
     height: 27px;
     background: url("../../../static/imgicon/errPhone.png") no-repeat -7px -10px;
   }
  .content ul li .ground9{
    margin-left: 11px;
    width: 30px;
    height: 30px;
    background: url("../../../static/imgicon/airPlan.png") no-repeat -9px -9px;
  }
  .content ul li .ground10{
    margin-left: 11px;
    width: 38px;
    height: 28px;
    background: url("../../../static/imgicon/xiangsheng.png") no-repeat -5px -10px;
  }
  .content ul li .ground11{
    margin-left: 11px;
    width: 30px;
    height: 30px;
    background: url("../../../static/imgicon/emotion.png") no-repeat -9px -9px;
  }
  .content ul li .ground12{
    margin-left: 11px;
    width: 32px;
    height: 30px;
    background: url("../../../static/imgicon/beatfulText.png") no-repeat -8px -11px;
  }
  .content ul li .ground13{
    margin-left: 6px;
    width: 26px;
    height: 30px;
    background: url("../../../static/imgicon/toukouxiu.png") no-repeat -11px -9px;
  }
  .content ul li .ground14{
    margin-left: 3px;
    width: 34px;
    height: 35px;
    background: url("../../../static/imgicon/boredCast.png") no-repeat -7px -7px;
  }
  .content ul li .ground15{
    margin-left: 3px;
    width: 32px;
    height: 32px;
    background: url("../../../static/imgicon/secondYuan.png") no-repeat -8px -8px;
  }
  .content ul li .ground16{
    margin-left: 21px;
    width: 25px;
    height: 30px;
    background: url("../../../static/imgicon/starting.png") no-repeat -12px -6px;
  }
  .content ul li .ground17{
    margin-left: 11px;
    width: 30px;
    height: 30px;
    background: url("../../../static/imgicon/fun.png") no-repeat -9px -9px;
  }
  .content ul li .ground18{
    margin-left: 11px;
    width: 36px;
    height: 26px;
    background: url("../../../static/imgicon/keji.png") no-repeat -6px -11px;
  }
  .content ul li .ground19{
    margin-left: 11px;
    width: 38px;
    height: 31px;
    background: url("../../../static/imgicon/schoolTeach.png") no-repeat -5px -9px;
  }

  .content ul li p{
    text-align: left;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  }

</style>


