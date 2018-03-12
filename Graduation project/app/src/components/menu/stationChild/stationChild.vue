<template>
  <div class="show">
    <div class="show_top">
      <div class="show_left">
        <p><a href="">推荐节目</a><a href="">更多&nbsp;></a></p>
        <ul>
          <li v-for="item in message">
            <div class="img">
              <a href="">
                <img :src="item.coverUrl" style="width: 100%;">
                <i title="播放"></i>
              </a>
            </div>
            <div class="title">
              <a href="" :title="item.programNames[0]">
                <p>
                  {{item.programNames[0]}}
                </p>
              </a>
              <a href="" :title="item.title">
                <p>
                  {{item.title}}
                </p>
              </a>
            </div>
            <div class="text">
              <span>{{item.type}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="show_right">
        <p><a href="">节目排行榜</a><a href="">更多></a></p>
        <ul>
          <li v-for="(item,index) in news">
            <div class="num">{{index+1}}</div>
            <div class="img">
              <a href="">
                <img :src="item.coverUrl" style="width: 100%;">
                <i title="播放"></i>
              </a>
            </div>
            <div class="title">
              <a href="" :title="item.programNames[0]">
                <p>
                  {{item.programNames[0]}}
                </p>
              </a>
              <a href="" :title="item.title">
                <p>
                  {{item.title}}
                </p>
              </a>
            </div>
            <div class="text">
              <span></span>
              <em><i></i></em>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="show_center">
      <div class="music_story">
        <p>
          <a href="">音乐故事</a>
          <em>.</em>
          <span>电台</span>
          <a href="" class="more">更多&nbsp;></a>
        </p>
        <ul>
          <li v-for="item in story">
            <a href="">
              <div class="photo">
                <img :src="item.coverUrl" alt="" width="100%">
              </div>
            </a>
            <div class="text_title">
              <p><a href="">{{item.title}}</a></p>
              <p>{{item.coverIntroduce}}</p>
            </div>
          </li>
          <li style="clear:left; float:none; padding: 0;"></li>
        </ul>
        <p>
          <a href="">美文读物</a>
          <em>.</em>
          <span>电台</span>
          <a href="" class="more">更多&nbsp;></a>
        </p>
        <ul>
          <li v-for="item in beautiful_text">
            <a href="">
              <div class="photo">
                <img :src="item.coverUrl" alt="" width="100%">
              </div>
            </a>
            <div class="text_title">
              <p><a href="">{{item.title}}</a></p>
              <p>{{item.coverIntroduce}}</p>
            </div>
          </li>
          <li style="clear:left; float:none; padding: 0;"></li>
        </ul>
        <p>
          <a href="">脱口秀</a>
          <em>.</em>
          <span>电台</span>
          <a href="" class="more">更多&nbsp;></a>
        </p>
        <ul>
          <li v-for="item in tuokouxiu">
            <a href="">
              <div class="photo">
                <img :src="item.coverUrl" alt="" width="100%">
              </div>
            </a>
            <div class="text_title">
              <p><a href="">{{item.title}}</a></p>
              <p>{{item.coverIntroduce}}</p>
            </div>
          </li>
          <li style="clear:left; float:none; padding: 0;"></li>
        </ul>
        <p>
          <a href="">情感调频</a>
          <em>.</em>
          <span>电台</span>
          <a href="" class="more">更多&nbsp;></a>
        </p>
        <ul>
          <li v-for="item in emotion">
            <a href="">
              <div class="photo">
                <img :src="item.coverUrl" alt="" width="100%">
              </div>
            </a>
            <div class="text_title">
              <p><a href="">{{item.title}}</a></p>
              <p>{{item.coverIntroduce}}</p>
            </div>
          </li>
          <li style="clear:left; float:none; padding: 0;"></li>
        </ul>
        <p>
          <a href="">创作|翻唱</a>
          <em>.</em>
          <span>电台</span>
          <a href="" class="more">更多&nbsp;></a>
        </p>
        <ul>
          <li v-for="item in createSing">
            <a href="">
              <div class="photo">
                <img :src="item.coverUrl" alt="" width="100%">
              </div>
            </a>
            <div class="text_title">
              <p><a href="">{{item.title}}</a></p>
              <p>{{item.coverIntroduce}}</p>
            </div>
          </li>
          <li style="clear:left; float:none; padding: 0;"></li>
        </ul>
        <p>
          <a href="">人文历史</a>
          <em>.</em>
          <span>电台</span>
          <a href="" class="more">更多&nbsp;></a>
        </p>
        <ul>
          <li v-for="item in history">
            <a href="">
              <div class="photo">
                <img :src="item.coverUrl" alt="" width="100%">
              </div>
            </a>
            <div class="text_title">
              <p><a href="">{{item.title}}</a></p>
              <p>{{item.coverIntroduce}}</p>
            </div>
          </li>
          <li style="clear:left; float:none; padding: 0;"></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    mounted: function () {
      this.getVal();
      this.getNews();
      this.getMusicStory();
      this.getBeautiful_text();
      this.gettuokouxiu();
      this.getEmotion();
      this.getcreateSing();
      this.getHistory();
    },
    data: function () {
      return {
          message: '',
          news: '',
          story: '',
          beautiful_text: '',
          tuokouxiu: '',
          emotion: '',
        createSing: '',
          history: ''

      }
    },
    methods: {
      getVal: function () {
        let _this = this;
        _this.$axios.get('/api/getStation',
          {
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
      getNews: function () {
          let _this = this;
          _this.$axios.get('/api/getNews',{
              headers: {'x-Requested-With': 'XMLHttpRequest'},
              responseType: 'json'
          })
            .then(function (res) {
              _this.news = res.data
            })
            .catch(function (err) {
              console.info(err)
            })
      },
      getMusicStory: function () {
        let _this= this;
        _this.$axios.get('/api/musicStory',{
          headers: {'x-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.story = res.data
          })
          .catch(function (err) {
            console.info(err)
          })
      },
      getBeautiful_text:function () {
        let _this= this;
        _this.$axios.get('/api/beautiful',{
          headers: {'x-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.beautiful_text = res.data
          })
          .catch(function (err) {
            console.info(err)
          })
      },
      gettuokouxiu:function () {
        let _this= this;
        _this.$axios.get('/api/tuokouxiu',{
          headers: {'x-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.tuokouxiu = res.data
          })
          .catch(function (err) {
            console.info(err)
          })
      },
      getEmotion: function () {
        let _this= this;
        _this.$axios.get('/api/getemotion',{
          headers: {'x-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.emotion = res.data
          })
          .catch(function (err) {
            console.info(err)
          })
      },
      getcreateSing: function () {
        let _this= this;
        _this.$axios.get('/api/createSing',{
          headers: {'x-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.createSing = res.data
          })
          .catch(function (err) {
            console.info(err)
          })
      },
      getHistory: function () {
        let _this= this;
        _this.$axios.get('/api/gethistory',{
          headers: {'x-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
            _this.history = res.data
          })
          .catch(function (err) {
            console.info(err)
          })
      }
    }
  }
</script>

<style scoped>
  .show {
    width: 100%;
  }

  .show_top {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .show_left {
    width: 424px;
    margin-right: 30px;
  }

  .show_left > p {
    border-bottom: 2px solid #b80b0b;
    height: 40px;
    line-height: 40px;
  }

  .show_right > p {
    border-bottom: 2px solid #b80b0b;
    height: 40px;
    line-height: 40px;
  }

  .show_left > p a:nth-child(1) {
    font-size: 24px;
    text-decoration: none;
    color: #000;
  }

  .show_right > p a:nth-child(1) {
    font-size: 24px;
    text-decoration: none;
    color: #000;
  }

  .show_left > p a:nth-child(1):hover {
    text-decoration: underline;
  }

  .show_right > p a:nth-child(1):hover {
    text-decoration: underline;
  }

  .show_left > p a:nth-child(2) {
    float: right;
    position: relative;
    top: 6px;
    font-size: 12px;
    color: #333;
  }

  .show_right > p a:nth-child(2) {
    float: right;
    position: relative;
    top: 6px;
    font-size: 12px;
    color: #333;
  }

  .show_left > p a:nth-child(2):hover {
    text-decoration: underline;
  }

  .show_right > p a:nth-child(2):hover {
    text-decoration: underline;
  }

  .show_right {
    margin-left: 30px;
    width: 424px;
  }

  .show_left ul {
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    border-top-width: 0;
    width: 100%;
  }
  .show_right ul {
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    border-top-width: 0;
    width: 100%;
  }

  .show_left ul li {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
    width: 100%;
    height: 40px;
  }
  .show_right ul li {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
    width: 100%;
    height: 40px;
  }

  .show_left ul li:hover {
    background: #eee;
  }
  .show_right ul li:hover {
    background: #eee;
  }

  .show_left ul li:hover .img i {
    opacity: 1;
  }
  .show_right ul li:hover .img i {
    opacity: 1;
  }
  .show_left ul li:nth-child(even) {
    background: #f7f7f7;
  }
  .show_right ul li:nth-child(even) {
    background: #f7f7f7;
  }
  .show_left ul li .img {
    margin-left: 15px;
    position: relative;
    width: 40px;
    height: 40px;
  }
  .show_right ul li .img {
    margin-left: 18px;
    position: relative;
    width: 40px;
    height: 40px;
  }

  .img i {
    opacity: 0;
    position: absolute;
    width: 25px;
    top: 10px;
    left: 10px;
    height: 25px;
    display: inline-block;
    background: url("../.././../assets/imgicon/iconall.png") no-repeat -43px -53px;
  }

  .show_left .title {
    padding-left: 10px;
    width: 270px;
  }
  .show_right .title {
    padding-left: 10px;
    width: 220px;
  }

  .show_left .title p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .show_right .title p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .show_left .title a:nth-child(1) p {
    margin: 7px 0;
    color: #333;
    font-size: 12px;
  }
  .show_right .title a:nth-child(1) p {
    margin: 7px 0;
    color: #333;
    font-size: 12px;
  }

  .show_left .title a:nth-child(1) p:hover {
    text-decoration: underline;
  }
  .show_right .title a:nth-child(1) p:hover {
    text-decoration: underline;
  }

  .show_left .title a:nth-child(2) p {
    color: #999;
    font-size: 12px;
  }
  .show_right .title a:nth-child(2) p {
    color: #999;
    font-size: 12px;
  }

  .show_left .title a:nth-child(2) p:hover {
    text-decoration: underline;
  }
  .show_right .title a:nth-child(2) p:hover {
    text-decoration: underline;
  }

  .show_left .text {
    line-height: 40px;
    margin-left: 5px;
  }
  .show_right .text {
    position: relative;
    line-height: 40px;
    margin-left: 5px;
  }

  .show_left .text span {
    cursor: pointer;
    color: #999;
    padding: 1px 5px;
    border: 1px solid #999;
    font-size: 12px;
  }

  .show_right .text span {
    display: inline-block;
    width: 100px;
    height: 8px;
    background: url("../../../assets/imgicon/table.png") no-repeat 0 -240px;
  }
  .show_right .text em {
    top: 18px;
    position: absolute;
    display: inline-block;
    width: 96px;
    height: 8px;
    background: url("../../../assets/imgicon/table.png") no-repeat 0 -304px;
  }
  .show_right .text i {
    top: 0;
    right: -4px;
    position: absolute;
    display: inline-block;
    width: 4px;
    height: 8px;
    background: url("../../../assets/imgicon/table.png") no-repeat -116px -318px;
  }

  .show_left .text span:hover {
    border-color: #666;
    color: #666;
  }
  .show_right li div:nth-child(1){
    font-size: 14px;
    margin-left: 10px;
    height: 40px;
    line-height: 40px;
  }
  .show_right li div:nth-child(1){
    color: #999;
  }
  .show_right li:nth-child(1) .num{
    color: #b80b0b;
  }
  .show_right li:nth-child(2) .num{
    color: #b80b0b;
  }
  .show_right li:nth-child(3) .num{
    color: #b80b0b;
  }
  .show_right li:nth-child(2) .text em{
     width: 26px;
   }
  .show_right li:nth-child(3) .text em{
    width: 24px;
  }
  .show_right li:nth-child(4) .text em{
    width: 22px;
  }
  .show_right li:nth-child(5) .text em{
    width: 20px;
  }
  .show_right li:nth-child(6) .text em{
    width: 18px;
  }
  .show_right li:nth-child(7) .text em{
    width: 16px;
  }
  .show_right li:nth-child(8) .text em{
    width: 14px;
  }
  .show_right li:nth-child(9) .text em{
    width: 12px;
  }
  .show_right li:nth-child(10) .text em{
    width: 10px;
  }
  .music_story{
    padding-top: 10px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .music_story >p{
    position: relative;
    padding-bottom: 5px;
    line-height: 40px;
    height: 40px;
    margin-top: 20px;
    border-bottom: 2px solid #b80b0b;
  }
  .music_story >p a:nth-child(1){
    font-size: 24px;
    font-weight: normal;
    color: #000;
  }
  .music_story >p a:nth-child(1):hover{
    text-decoration: underline;
  }
  .music_story >p em{
    position: relative;
    top: -6px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
  .music_story >p span{
    font-size: 24px;
    color: #000;
  }
  .music_story >p .more{
    top: 8px;
    font-size: 12px;
    position: absolute;
    right: 0;
    font-weight: normal;
    color: #333;
  }
  .music_story ul{
    width: 100%;
  }
  .music_story ul li .photo{
    width: 120px;
    height: 120px;
  }
  .music_story ul li{
    width: 48%;
    float: left;
    padding-bottom: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
  .music_story ul li:nth-child(1){
    border-bottom: 1px solid #e4e4e4;
  }
  .music_story ul li:nth-child(even){
    margin-left: 30px;
  }
  .music_story ul li:nth-child(2){
    border-bottom: 1px solid #e4e4e4;
  }
  .music_story .text_title a{
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }
  .music_story .text_title a:hover{
    text-decoration: underline;
  }
  .music_story .text_title{
    padding-left: 20px;
  }
  .music_story .text_title p:nth-child(1){
     margin: 20px 0;
   }
  .music_story .text_title p:nth-child(2){
    margin-top: 30px;
    font-size: 12px;
    color: #777;
  }
  .show_right ul li:last-child .img{
    margin-left: 10px;
  }
</style>
