<template>
  <div class="right">
    <!--用户登录-->
    <div class="right_top">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="" class="login_text">
        <div class="login">会员登录</div>
      </a>
    </div>
    <!--入住歌手-->
    <div class="right_middle">
      <p class="middle_top">
        <span>入驻歌手</span>
        <a href="">查看全部></a>
      </p>
      <div class="line"></div>
      <div class="singer">
        <a href="">
          <ul>
            <li><img src="../assets/img/right1.jpg"></li>
            <li>
              <h2>张惠妹aMEI</h2>
              <p>台湾歌手张惠妹</p>
            </li>
          </ul>
        </a>
        <a href="">
          <ul>
            <li><img src="../assets/img/right2.jpg"></li>
            <li>
              <h2>张惠妹aMEI</h2>
              <p>台湾歌手张惠妹</p>
            </li>
          </ul>
        </a>
        <a href="">
          <ul>
            <li><img src="../assets/img/right3.jpg"></li>
            <li>
              <h2>张惠妹aMEI</h2>
              <p>台湾歌手张惠妹</p>
            </li>
          </ul>
        </a>
        <a href="">
          <ul>
            <li><img src="../assets/img/right4.jpg"></li>
            <li>
              <h2>Panta点打不出来Q</h2>
              <p>台湾歌手张惠妹</p>
            </li>
          </ul>
        </a>
        <a href="">
          <ul>
            <li><img src="../assets/img/right5.jpg"></li>
            <li>
              <h2>张惠妹aMEI</h2>
              <p>台湾歌手张惠妹</p>
            </li>
          </ul>
        </a>
      </div>
      <a href="">
        <div class="apply">
          <em>申请成为网易音乐人</em>
        </div>
      </a>
    </div>
    <!--热门DJ-->
    <div class="right_bottom">
      <p>热门DJ</p>
      <div class="line"></div>
      <ul class="hotDj">
        <li>
          <p class="photo"><a href=""><img src="../assets/img/hot1.jpg" alt=""></a></p>
          <div class="author">
            <p><a href="" class="name">陈立</a><i></i></p>
            <p class="edition">美食家陈立教授</p>
          </div>
        </li>
      </ul>
      <ul class="hotDj">
        <li>
          <p class="photo"><a href=""><img src="../assets/img/hot2.jpg" alt=""></a></p>
          <div class="author">
            <p><a href="" class="name">DJ艳秋</a><i></i></p>
            <p class="edition">著名音乐节目主持人</p>
          </div>
        </li>
      </ul>
      <ul class="hotDj">
        <li>
          <p class="photo"><a href=""><img src="../assets/img/hot3.jpg" alt=""></a></p>
          <div class="author">
            <p class="a_name"><a href="" class="name">古典音乐频道</a><i></i></p>
            <p class="edition">国家大剧院古典音乐官方</p>
          </div>
        </li>
      </ul>
      <ul class="hotDj">
        <li>
          <p class="photo"><a href=""><img src="../assets/img/hot4.jpg" alt=""></a></p>
          <div class="author">
            <p><a href="" class="name">陈立</a><i></i></p>
            <p class="edition">美食家陈立教授</p>
          </div>
        </li>
      </ul>
      <ul class="hotDj">
        <li>
          <p class="photo"><a href=""><img src="../assets/img/hot5.jpg" alt=""></a></p>
          <div class="author">
            <p><a href="" class="name">陈立</a><i></i></p>
            <p class="edition">独立DJ，CRI环球旅游广播特邀DJ</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>

<style scoped>
  .right {
    background-color: #fff;
    padding-bottom: 420px;
    width: 254px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  .right_top {
    width: 249px;
    margin-left: 2px;
    height: 124px;
    background: url("../assets/imgicon/index.png") no-repeat 0 0;
  }

  .right_top p {
    font-size: 12px;
    padding: 16px 18px;
    line-height: 2;
    color: #666;
  }

  .right_top .login {
    width: 84px;
    height: 31px;
    position: relative;
    padding: 5px 10px;
    margin: -5px auto 5px auto;
    background: url("../assets/imgicon/index.png") no-repeat 0 -195px;
  }

  .login_text {
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 18px;
  }

  .login_text:hover .login {
    background: url("../assets/imgicon/index.png") no-repeat -110px -195px;
  }

  .middle_top {
    padding: 15px 15px 5px 15px;
  }

  .middle_top span {
    color: #000;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
  }

  .middle_top a {
    display: inline-block;
    font-size: 12px;
    color: #666;
    margin-top: 3px;
    float: right;
  }

  .middle_top a:hover {
    text-decoration: underline;
  }

  .line {
    height: 1px;
    background-color: #ccc;
    width: 221px;
    margin: 5px auto;
  }

  .right_middle .singer {

  }

  .right_middle .singer ul {
    margin: 20px auto;
    width: 210px;
    height: 62px;
    background-color: #f4f4f4;
  }

  .right_middle .singer ul:hover {
    background-color: #e9e9e9;
  }

  .right_middle .singer li {
    display: inline-block;
  }

  .right_middle .singer li:nth-child(2) {
    border: 1px solid #e9e9e9;
    border-left-width: 0;
    width: 137px;
    height: 62px;
    position: relative;
    top: -12px;
    padding-left: 5px;
  }

  .right_middle .singer li h2 {
    color: #000;
    margin: 10px auto 15px auto;
    font-size: 14px;
    font-weight: bold;
  }

  .right_middle .singer li p {
    color: #555;
    font-weight: normal;
    font-size: 12px;
    margin-top: 5px;
  }

  .apply {
    text-align: center;
    width: 210px;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    margin: 10px auto;
    padding-top: 7px;
    padding-bottom: 7px;
    background-color: #f5f5f5;
  }

  .apply:hover {
    background-color: #fff;
  }

  .apply em {
    color: #333;
    font-weight: bold;
    font-size: 13px;
  }

  .right_bottom {
    margin-top: 40px;
  }

  .right_bottom p {
    color: #000;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    margin-left: 17px;
    margin-bottom: 5px;
  }
  .hotDj{
    margin-top: 10px;
  }
  .hotDj li{
    overflow: hidden;
    margin: 20px auto 0 auto;
    height: 40px;
    width: 210px;
  }
  .hotDj li .author i{
    width: 12px;
    height: 12px;
    display: inline-block;
    background: url("../assets/imgicon/icon.png") no-repeat 0 0;
  }
  .hotDj li .photo{
    float: left;
  }
  .hotDj li .author{
    float: left;
  }
  .hotDj li .author .edition{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 135px;
    font-size: 12px;
    color: #888;
    display: block;
    font-weight: normal;
  }
  .hotDj li .author .name{
    font-weight: 500;
    color: #000;
  }
  .hotDj li .author .name:hover{
    text-decoration: underline;
  }
  .hotDj li .a_name{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 135px;
  }
</style>
