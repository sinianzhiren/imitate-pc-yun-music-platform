<template>
    <div>
      <!--头部-->
      <div class="app-header">
        <div class="header">
          <div class="header_one">
            <div class="logo">
            </div>
            <div class="lists">
              <ul>
                <li><a href="">发现音乐</a></li>
                <li><a href="">我的音乐</a></li>
                <li><a href="">朋友</a></li>
                <li><a href="https://music.163.com/store/product" target="_blank">商城</a></li>
                <li><a href="https://music.163.com/nmusician/web/index" target="_blank">音乐人</a></li>
                <li><a href="">下载客户端<i class="hot"></i></a></li>
              </ul>
            </div>
            <div class="right">
              <div class="search">
                <input type="text" class="input" placeholder="单曲/歌手/专辑/歌单/MV/用户">
              </div>
              <div class="login">
                <div class="p">
                  登陆
                  <em></em>
                  <div class="modelDown">
                    <div class="modelIn">
                      <i class="triangle"></i>
                      <ul>
                        <li>
                          <i></i>
                          <a @click="login">手机号登陆</a>
                        </li>
                        <li>
                          <i></i>
                          <a href="">微信登陆</a>
                        </li>
                        <li>
                          <i></i>
                          <a href="">QQ登陆</a>
                        </li>
                        <li>
                          <i></i>
                          <a href="">新浪微博登陆</a>
                        </li>
                        <li>
                          <i></i>
                          <a href="">网易邮箱账号登陆</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_two">
            <ul>
              <li @click="getTitle('推荐')" :class="{ground: text == '推荐'}">
                <em></em>
                <router-link to="/">推荐</router-link>
              </li>
              <li @click="getTitle('排行榜')" :class="{ground: text == '排行榜'}">
                <router-link to="/ranking">排行榜</router-link>
              </li>
              <li @click="getTitle('歌单')" :class="{ground: text == '歌单'}">
                <router-link to="/singList">歌单</router-link>
              </li>
              <li @click="getTitle('主播电台')" :class="{ground: text == '主播电台'}">
                <router-link to="/station">主播电台</router-link>
              </li>
              <li @click="getTitle('歌手')" :class="{ground: text == '歌手'}">
                <router-link to="/singer">歌手</router-link>
              </li>
              <li @click="getTitle('新碟上架')" :class="{ground: text == '新碟上架'}">
                <router-link to="/newsCd">新碟上架</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--中间部分-->
      <div class="app-content">
        <router-view @getData="getUrl"></router-view>
      </div>
      <!--底部-->
      <div class="app-footer">
        <div class="footer">
          <div class="footer-left">
            <p class="first-line">
              <a href="">关于网易</a>
              <span>|</span>
              <a href="">客户服务</a>
              <span>|</span>
              <a href="">服务条款</a>
              <span>|</span>
              <a href="">网站导航</a>
              <span>|</span>
              <a href="">意见反馈</a>
            </p>
            <p class="second-line">
              网易公司版权所有©1997-2017杭州乐读科技有限公司运营：浙网文[2015] 0415-135号
            </p>
          </div>
          <div class="footer-right">
            <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--播放器-->
      <div class="player">
        <div class="play_top" title="展开播放条"></div>
        <div class="player_content">
          <div class="play one">
            <span class="pre" title="上一曲"></span>
            <span class="pl" title="播放" v-if="isDisplay" @click="play"></span>
            <span class="changePlay" title="播放" v-if="!isDisplay" @click="stop"></span>
            <audio :src="src" autoplay id="audio"></audio>
            <span class="next" title="下一曲"></span>
            <span class="about">
                    <em></em>
                </span>
          </div>
          <div class="play two">
                <span class="play_line">
                      <em id="run"></em>
                </span>
            <span class="show_num">
                    <em>00:00</em>
                    /00:00
                </span>
          </div>
          <div class="play three" style="margin-left: 40px">
            <span class="collect" title="收藏"></span>
            <span class="share" title="分享"></span>
            <span class="volume"></span>
            <span class="loop" title="循环"></span>
            <span class="play_list" title="播放列表">
                    <a href="">0</a>
                </span>
          </div>
        </div>
        <div class="player-top">
          <em></em>
        </div>
      </div>
      <!--登陆地方-->
      <div class="phone" v-show="show">
        <div class="phone_login" v-if="boolen">
          <div class="login_top">
            <span>手机号登录</span>
            <em @click="switch_off"></em>
          </div>
          <div class="num_input">
            <input type="tel" placeholder="请输入手机号" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="word">
            <div class="no_password">
              <p><input type="checkbox" style="float:left;" checked>
                <span style="float:left;">记住密码</span>
                <span style="float:right;">忘记密码?</span></p>
            </div>
            <router-link :to="link" :target="blank">
              <div class="login_btn" @click.prevent="stage">登录<span></span></div>
            </router-link>
          </div>
          <div class="register">
            <span><&nbsp;其他方式登陆</span>
            <span @click="change">没有帐号？免费注册&nbsp;></span>
          </div>
        </div>

        <div class="phone_login" v-if="!boolen">
          <div class="login_top">
            <span>手机号注册</span>
            <em @click="switch_off"></em>
          </div>
          <div class="num_input_1" v-show="isShow">
            <p class="zhuce">手机号:</p>
            <input type="tel" placeholder="请输入手机号" style="margin-bottom: 10px;" v-model="phoneNumber">
            <p class="zhuce">密码:</p>
            <input type="password" placeholder="请输入密码" v-model="password">
            <div class="login_btn_1 login_btn" @click="register">注册<span></span></div>
          </div>
          <div class="success" v-show="!isShow">
            <p></p>
            <p>注册成功，点击<a href="javascript:void (0);" @click="back">&nbsp;返回登陆</a></p>
          </div>
          <div class="register">
            <span @click="back"><&nbsp;返回登陆</span>
          </div>
        </div>
        <div class="bgcolor">
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'//引入vue
  export default{
      created: function () {

      },
    data: function () {
      return{
        isShow: true,
        blank: '_blank',
        link: 'javascript:void(0);',
        boolen: true,
        show: false,
        text: '推荐',
        phoneNumber: '',
        password: '',
        username: '',
        word: '',
        src: '',
        isDisplay: true,
        time: null,
      }
    },
    watch: {
        src: function (val , oldVal) {

        }
    },
    methods: {
        play: function () {
          let audio = document.getElementById('audio');
          if (audio.paused){
              audio.play();
              this.isDisplay = !(this.isDisplay)
          }
        },
      stop: function () {
        let audio = document.getElementById('audio');
        if (audio.played){
          audio.pause();
          this.isDisplay = !(this.isDisplay)
        }
      },
      switch_off: function () {
        this.show = false;
      },
      login: function () {
        this.show = true;
      },
      back: function () {
        this.boolen = !(this.boolen);
      },
      change: function () {
        this.isShow = true;
        this.boolen = !(this.boolen);
      },
      stage: function (event) {
          if (this.username == ''){
            alert('用户名不能为空');
          }else if (this.word == ''){
            alert('密码不能为空');
          }
          else {
            let _this = this;
            _this.$axios.post('/api/login',{
              username: _this.username,
              password: _this.word
            },{
              headers: {'X-Requested-With': 'XMLHttpRequest'},
              responseType: 'json'
            })
              .then(function (res) {
                  console.log(res.data);
                 switch (res.data){
                   case 'wu':
                      _this.username = '';
                      _this.word = '';
                      alert('用户名不存在，请先注册');
                       break;
                   case 'success':
                     alert('登陆成功');
                     _this.username = '';
                     _this.word = '';
                     _this.switch_off();
                     break;
                   case 'errPassword':
                     alert('密码错误');
                     _this.username = '';
                     _this.word = '';
                       break;
                   case 'errUsername || errPassword':
                     alert('用户名或密码错误');
                     _this.username = '';
                     _this.word = '';
                       break;
                   default:
                     window.location.href = res.data;
                 }
              })
          }
      },
      getTitle: function (e) {
        this.text = e;
      },
      register: function () {
        let _this = this;
        _this.$axios.post('/api/register',{
            username: _this.phoneNumber,
            password: _this.password
        },{
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            responseType: 'json'
        })
          .then(function (res) {
            if (res){
                _this.isShow = !(_this.isShow);
               _this.phoneNumber = '';
               _this.password = ''
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getUrl: function (data) {
        this.src = data;
        this.isDisplay = false;
      }
    }
  }
</script>

<style scoped>
  .success{
    width: 100%;
    height: 130px;
    text-align: center;
    margin: 0 auto;
  }
  .success p:nth-child(1){
    margin: 50px auto 20px;
    width: 48px;
    height: 48px;
    background: url("../assets/imgicon/icon.png") no-repeat -37px -952px;
  }
  .success p:nth-child(2){
    font-size: 16px;
    color: #666;
  }
  .success p:nth-child(2) a{
    font-size: 16px;
    color: #666;
    text-decoration: underline;
  }
  .header_one {
    background: #333 url('../assets/imgicon/topbar.png');
    width: 100%;
    height: 70px;
    background-position: 0px -80px;
    background-repeat: repeat-x;
    background-size: 120px 622px; }
  .header_one .logo {
    width: 162px;
    height: 42px;
    margin-top: 14px;
    margin-left: 90px;
    float: left;
    background: #333 url("../assets/imgicon/topbar.png");
    background-position: 0px 0px;
    background-repeat: no-repeat; }
  .header_one .lists {
    float: left;
    margin-left: 20px; }
  .header_one .lists li {
    float: left;
    height: 70px; }
  .header_one .lists li:hover {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -470px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(1) {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -161px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(2) a {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -304px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(3) a {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -304px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(4) a {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -304px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(5) a {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -304px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(6) a {
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -304px;
    background-repeat: no-repeat; }
  .header_one .lists li:nth-child(6) a .hot {
    width: 30px;
    display: inline-block;
    height: 20px;
    background: url(../assets/imgicon/topbar.png);
    background-position: -189px 0px;
    background-repeat: no-repeat; }
  .header_one .lists li a {
    display: inline-block;
    line-height: 70px;
    padding: 0px 20px;
    color: #ccc;
    font-size: 14px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none; }
  .header_one .right {
    float: right;
    margin-right: 80px; }
  .header_one .right .search {
    margin-right: 10px;
    float: left;
    margin-top: 20px; }
  .header_one .right .search .input {
    font-size: 12px;
    border: 0;
    width: 175px;
    height: 30px;
    padding-left: 35px;
    background: url("../assets/imgicon/topbar.png");
    background-position: 0px -550px;
    background-repeat: no-repeat; }
  .header_one .right .search .input:focus {
    outline: none; }
  .header_one .right .login {
    float: left;
    margin-right: 35px;
    line-height: 70px; }
  .header_one .right .login .p {
    position: relative;
    cursor: pointer;
    line-height: 80px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 10px; }
  .header_one .right .login .p:hover .modelDown {
    display: block; }
  .header_one .right .login .p em {
    width: 12px;
    margin-left: 14px;
    position: relative;
    top: 3px;
    height: 10px;
    display: inline-block;
    background: url(../assets/imgicon/topbar.png);
    background-position: -228px -380px;
    background-repeat: no-repeat; }
  .header_one .right .login .p:hover em {
    top: 0;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg); }
  .header_one .right .login .p .modelDown {
    z-index: 1000;
    display: none;
    right: -48px;
    margin-top: -20px;
    position: absolute;
    width: 168px;
    border: 1px solid #000;
    border-radius: 4px; }
  .header_one .right .login .p .modelDown .modelIn {
    border-radius: 3px;
    border: 1px solid #404040;
    background-color: #2a2a2a; }
  .header_one .right .login .p .modelDown .modelIn .triangle {
    left: 72px;
    top: -8px;
    position: absolute;
    display: inline-block;
    background: url("../assets/imgicon/toplist.png");
    width: 16px;
    height: 10px;
    background-position: -20px 0px;
    background-repeat: no-repeat; }
  .header_one .right .login .p .modelDown .modelIn li {
    line-height: 30px;
    padding: 5px 15px; }
  .header_one .right .login .p .modelDown .modelIn li:hover {
    background-color: #353535; }
  .header_one .right .login .p .modelDown .modelIn li:hover a {
    color: #fff; }
  .header_one .right .login .p .modelDown .modelIn li a {
    margin-left: 10px;
    color: #ccc;
    font-size: 13px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none; }
  .header_one .right .login .p .modelDown .modelIn li:nth-child(1) i {
    display: inline-block;
    background: url("../assets/imgicon/toplist.png");
    width: 15px;
    height: 16px;
    background-position: 0px 0px;
    background-repeat: no-repeat; }
  .header_one .right .login .p .modelDown .modelIn li:nth-child(2) i {
    display: inline-block;
    background: url("../assets/imgicon/toplist.png");
    width: 17px;
    height: 16px;
    background-position: -21px -21px;
    background-repeat: no-repeat; }
  .header_one .right .login .p .modelDown .modelIn li:nth-child(3) i {
    display: inline-block;
    background: url("../assets/imgicon/toplist.png");
    width: 15px;
    height: 16px;
    background-position: -19px -42px;
    background-repeat: no-repeat; }
  .header_one .right .login .p .modelDown .modelIn li:nth-child(4) i {
    display: inline-block;
    background: url("../assets/imgicon/toplist.png");
    width: 15px;
    height: 16px;
    background-position: 0px -21px;
    background-repeat: no-repeat; }
  .header_one .right .login .p .modelDown .modelIn li:nth-child(5) i {
    display: inline-block;
    background: url("../assets/imgicon/toplist.png");
    width: 15px;
    height: 16px;
    background-position: 0px -40px;
    background-repeat: no-repeat; }

  .header_two {
    background: #ff0000 url("../assets/imgicon/topbar.png");
    width: 100%;
    height: 35px;
    background-position: 0px -231px;
    background-repeat: repeat-x;
    background-size: 120px 622px; }
  .header_two ul {
    position: relative;
    left: 20px;
    display: flex;
    justify-content: flex-end; }
  .header_two ul li {
    height: 35px;
    line-height: 35px;
    padding: 0 34px; }
  .ground {
    background: url("../assets/imgicon/topbar1.png");
    background-position: 19px 7px;
    background-repeat: no-repeat;
    background-size: 62%; }
  .header_two ul li:nth-child(1) em {
    position: absolute;
    margin-top: -8px;
    margin-left: 5px;
    display: inline-block;
    background: url("../assets/imgicon/topbar.png");
    width: 15px;
    height: 15px;
    background-position: -225px 0px;
    background-repeat: no-repeat; }
  .header_two ul li:hover {
    background: url("../assets/imgicon/topbar1.png");
    background-position: 19px 7px;
    background-repeat: no-repeat;
    background-size: 62%; }
  .header_two ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    display: inline-block;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif; }
  .footer {
    width: 100%;
    height: 140px;
    background-color: #f2f2f2;
    border-top: 1px solid #d3d3d3;
    position: relative;
    overflow: hidden; }
  .footer .footer-left {
    padding: 40px 0;
    float: left;
    width: 60%; }
  .footer .footer-left .first-line {
    margin-left: 125px; }
  .footer .footer-left .first-line a {
    text-decoration: none;
    color: #999;
    font-size: 12px; }
  .footer .footer-left .first-line a:hover {
    text-decoration: underline; }
  .footer .footer-left .first-line span {
    color: #999; }
  .footer .footer-left .second-line {
    color: #666;
    margin-left: 125px;
    margin-top: 10px;
    font-size: 13px; }
  .footer .footer-right {
    float: left;
    width: 40%; }
  .footer .footer-right li {
    margin-left: 40px;
    margin-top: 30px;
    float: left; }
  .footer .footer-right li:nth-child(1) a {
    display: inline-block;
    background: url("../assets/imgicon/foot_enter.png");
    width: 50px;
    height: 62px;
    background-position: -65px -80px;
    background-repeat: no-repeat; }
  .footer .footer-right li:nth-child(2) a {
    display: inline-block;
    background: url("../assets/imgicon/foot_enter.png");
    width: 50px;
    height: 62px;
    background-position: -9px -80px;
    background-repeat: no-repeat; }
  .footer .footer-right li:nth-child(3) a {
    display: inline-block;
    background: url("../assets/imgicon/foot_enter.png");
    width: 50px;
    height: 62px;
    background-position: -9px 0px;
    background-repeat: no-repeat; }
  .footer .footer-right li:nth-child(4) a {
    display: inline-block;
    background: url("../assets/imgicon/foot_enter.png");
    width: 50px;
    height: 62px;
    background-position: -65px 0px;
    background-repeat: no-repeat; }
  .player {
    transition: bottom .5s ease;
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: -43px;
    background: url("../assets/imgicon/playbar.png");
    width: 100%;
    height: 47px;
    background-position: 0px -7px;
    background-repeat: repeat-x; }
  .player:hover{
    bottom: 0px;
  }
  .player .play_top {
    width: 100%;
    height: 20px;
    top: -20px;
    position: absolute; }
  .player .player_content {
    padding: 0 120px; }
  .player .player_content .play {
    display: inline-block; }
  .player .player_content .play .pre {
    cursor: pointer;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    top: -3px;
    position: relative;
    width: 26px;
    height: 25px;
    background-position: -2px -132px;
    background-repeat: no-repeat; }
  .player .player_content .play .pre:hover {
    background-position: -32px -132px; }
  .player .player_content .play .pl {
    cursor: pointer;
    margin-top: 6px;
    margin-left: 5px;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 34px;
    height: 34px;
    background-position: -1px -205px;
    background-repeat: no-repeat; }
  .changePlay{
    cursor: pointer;
    margin-top: 6px;
    margin-left: 5px;
    display: inline-block;
    width: 34px;
    height: 34px;
    background-repeat: no-repeat;
    background: url("../assets/imgicon/playbar.png");
    background-position: -1px -166px;
  }
  .player .player_content .play .pl:hover {
    background-position: -41px -205px; }
  .changePlay:hover{
    background-position: -41px -166px;
  }
  .player .player_content .play .next {
    cursor: pointer;
    margin-left: 5px;
    top: -3px;
    position: relative;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 26px;
    height: 25px;
    background-position: -82px -132px;
    background-repeat: no-repeat; }
  .player .player_content .play .next:hover {
    background-position: -112px -132px; }
  .player .player_content .play .about {
    display: inline-block;
    margin-left: 30px;
    background: url("../assets/imgicon/default_album.jpg");
    width: 34px;
    height: 35px;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: 34px 35px; }
  .player .player_content .play .about em {
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 34px;
    height: 34px;
    background-position: 0px -81px;
    background-repeat: no-repeat; }
  .player .player_content .play .play_line {
    position: relative;
    left: 10px;
    display: inline-block;
    background: url("../assets/imgicon/statbar.png");
    width: 493px;
    height: 20px;
    background-position: 0px 0px;
    background-repeat: no-repeat; }
  .player .player_content .play .play_line em {
    cursor: pointer;
    display: inline-block;
    position: relative;
    top: -6px;
    left: -2px;
    background: url("../assets/imgicon/iconall.png");
    width: 19px;
    height: 20px;
    background-position: -1px -251px;
    background-repeat: no-repeat; }
  .player .player_content .play .play_line em:hover {
    background-position: -1px -281px; }
  .player .player_content .play .show_num {
    display: inline-block;
    position: relative;
    left: 14px;
    top: -11px;
    color: #797979;
    font-size: 12px; }
  .player .player_content .play .show_num em {
    color: #a1a1a1; }
  .player .player_content .play .collect {
    cursor: pointer;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 18px;
    height: 18px;
    background-position: -92px -166px;
    background-repeat: no-repeat; }
  .player .player_content .play .collect:hover {
    background-position: -92px -192px; }
  .player .player_content .play .share {
    cursor: pointer;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 18px;
    height: 18px;
    background-position: -118px -167px;
    background-repeat: no-repeat; }
  .player .player_content .play .share:hover {
    background-position: -118px -193px; }
  .player .player_content .play .volume {
    cursor: pointer;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 18px;
    height: 18px;
    background-position: -6px -251px;
    background-repeat: no-repeat; }
  .player .player_content .play .volume:hover {
    background-position: -35.2px -251px; }
  .player .player_content .play .loop {
    cursor: pointer;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 18px;
    height: 18px;
    background-position: -6px -347px;
    background-repeat: no-repeat; }
  .player .player_content .play .loop:hover {
    background-position: -36px -347px; }
  .player .player_content .play .play_list {
    cursor: pointer;
    top: -9px;
    display: inline-block;
    background: url("../assets/imgicon/playbar.png");
    width: 55px;
    height: 22px;
    background-position: -46px -71px;
    background-repeat: no-repeat; }
  .player .player_content .play .play_list a {
    color: #767474;
    font-size: 12px;
    left: 33px;
    position: relative;
    text-decoration: none; }
  .player .player_content .play .play_list:hover {
    width: 55px;
    height: 22px;
    background-position: -46px -101px;
    background-repeat: no-repeat; }
  .player .player_content .three span {
    margin-left: 15px;
    position: relative;
    top: -5px; }
  .player .player-top {
    position: absolute;
    right: 20px;
    top: -13px;
    background: url("../assets/imgicon/playbar.png");
    width: 51px;
    height: 62px;
    background-position: 0px -387px;
    background-repeat: no-repeat; }
  .player .player-top em {
    cursor: pointer;
    top: 2px;
    left: 18px;
    display: block;
    position: relative;
    background: url("../assets/imgicon/playbar.png");
    width: 15px;
    height: 15px;
    background-position: -82px -383px;
    background-repeat: no-repeat; }
  .player .player-top em:hover {
    background-position: -82px -403px; }
  .app-content{
    position: relative;
  }
  .app-content{
    background-color: #f4f4f4;
  }
  .app-footer{
    background-color: #f4f4f4;
  }
  .bgcolor{
    z-index: 1000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.5;
  }
  .phone .phone_login{
    position: absolute;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -150px;
    z-index: 1001;
    background: #FFFAFA;
    box-shadow: -2px 0 6px #e8e8e8,-2px 0 6px #e8e8e8,2px 0 6px #e8e8e8,2px 0 6px #e8e8e8;
    border: 1px solid #999;
    width: 500px;
    height: 300px;
  }
  .phone_login .login_top{
    line-height: 50px;
    height: 50px;
    background: url("../assets/imgicon/topbar.png") repeat-x 0 -80px;
  }
  .phone_login .login_top span{
    color: #f4f4f4;
    margin-left: 16px;
    font-size: 16px;
  }
  .login_top em{
    cursor: pointer;
    float: right;
    margin-top: 16px;
    margin-right: 16px;
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("../assets/imgicon/icon.png") no-repeat -24.5px -444px;
    background-size: 42.5px 553.5px;
  }
  .num_input{
    padding-top: 10px;
    width: 220px;
    margin: 0 auto;
  }
  .num_input_1{
    padding-top: 10px;
    width: 220px;
    margin: 0 auto;
  }
  .num_input input[type='text']{
    margin-top: 20px;
    box-sizing: border-box;
    height: 32px;
    padding-left: 5px;
    width: 220px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
  }
  .num_input input[type='tel']{
    margin-top: 20px;
    box-sizing: border-box;
    height: 32px;
    padding-left: 5px;
    width: 220px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
  }
  .num_input input[type='password']{
    margin-top: 20px;
    box-sizing: border-box;
    height: 32px;
    padding-left: 5px;
    width: 220px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
  }
  .num_input_1 input[type='text']{
     color: #555;
     margin-top: 10px;
     box-sizing: border-box;
     height: 32px;
     padding-left: 5px;
     width: 220px;
     border: 1px solid #e4e4e4;
     border-radius: 3px;
   }
  .num_input_1 input[type='password']{
    color: #555;
    margin-top: 10px;
    box-sizing: border-box;
    height: 32px;
    padding-left: 5px;
    width: 220px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
  }
  .num_input_1 input[type='tel']{
    color: #555;
    margin-top: 10px;
    box-sizing: border-box;
    height: 32px;
    padding-left: 5px;
    width: 220px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
  }
  .num_input_1 .zhuce{
    color: #999;
    font-size: 14px;
  }
  .num_input input:focus{
    outline: none;
  }
  .num_input_1 input:focus{
    outline: none;
  }
  .num_input .no_password span{
    color: #333;
    margin-top: 4px;
    font-size: 12px;
  }
  .num_input_1 .no_password span{
    color: #333;
    margin-top: 4px;
    font-size: 12px;
  }
  .login_btn{
    margin-top: 35px;
    cursor: pointer;
    letter-spacing: 10px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    height: 31px;
    width: 219px;
    font-size: 12px;
    background: url("../assets/imgicon/button2.png") no-repeat 0 -387px;
    clear: both;
  }
  .login_btn_1 {
    margin-top: 17px;
  }
  .login_btn span{
    display: inline-block;
    float: right;
    position: relative;
    z-index: 2;
    width: 5px;
    height: 31px;
    background: url("../assets/imgicon/button2.png") no-repeat -245px -428px;
  }
  .register{
    line-height: 40px;
    width: 100%;
    margin-top: 28px;
    height: 40px;
    border-top: 1px solid #ccc;
    background: #e8e8e8;
  }
  .register span{
    cursor: pointer;
    font-size: 12px;
  }
  .register span:nth-child(1){
    margin-left: 20px;
    float: left;
    color: #0c72c3;
  }
  .register span:nth-child(2){
    margin-right: 20px;
    float: right;
    color: #999;
  }
</style>
