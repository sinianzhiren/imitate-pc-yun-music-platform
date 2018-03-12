<template>
  <div>
    <div class="container">
      <!--头部-->
    <div class="header">
      <ul>
        <li class="bgcolor">
        </li>
        <li><p>后台管理</p></li>
        <li><router-link to="/admin">歌曲</router-link></li>
        <li><router-link to="/admin/list">歌单</router-link></li>
        <li><router-link to="/admin/station">主播电台</router-link></li>
        <li><router-link to="/admin/singer">歌手</router-link></li>
        <li><router-link to="/admin/mv">MV</router-link></li>
        <li><router-link to="/admin/album">专辑</router-link></li>
      </ul>
    </div>
      <div class="content">
      <!--左侧的导航栏-->
      <div class="menu_left" :class="{position: marginLeft}" @mouseenter="enter" @mouseleave="leave">
            <div class="menu_ground click" @click="down"><em>排行榜</em><span :class="{two:!down_show}"></span><span :class="{change:down_show}"></span></div>
            <div v-if="down_show" class="down_menu">
            <div class="down1">
              <em>云音乐特色榜</em><span></span>
              <div class="hover_menu">
                <p v-for="item in option[0]" @click="getVal(item)">
                  <router-link :to="{ path: '/find', query: { val: item }}">{{item}}</router-link>
                </p>
              </div>
            </div>
            <div class="down2">
              <em>全球媒体榜</em><span></span>
              <div class="hover_menu1">
                <p v-for="value in option[1]">{{value}}</p>
              </div>
            </div>
            </div>
            <div class="menu_ground singList">
              <em>歌单</em><span class="icon"></span>
              <div class="hover_menu2">
                  <div class="language">
                    <p>语种&nbsp;:</p>
                    <ul>
                      <li v-for="(value,index) in lastArr[0]" @click="getVal(value)">{{value}}</li>
                    </ul>
                  </div>
                <div class="style">
                  <p>风格&nbsp;:</p>
                  <ul>
                    <li v-for="value in lastArr[1]" @click="getVal(value)">{{value}}</li>
                  </ul>
                </div>
                <div class="place">
                  <p>场景&nbsp;:</p>
                  <ul>
                    <li v-for="value in lastArr[2]" @click="getVal(value)">{{value}}</li>
                  </ul>
                </div>
                <div class="emotion">
                  <p>情感&nbsp;:</p>
                  <ul>
                    <li v-for="value in lastArr[3]" @click="getVal(value)">{{value}}</li>
                  </ul>
                </div>
                <div class="theme">
                  <p>主题&nbsp;:</p>
                  <ul>
                    <li v-for="value in lastArr[4]" @click="getVal(value)">{{value}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="menu_ground station">
              <em>主播电台</em><span class="icon"></span>
              <div class="hover_menu3">
                <p v-for="item in secondArr" @click="getVal(item)">{{item}}</p>
              </div>
            </div>
            <div class="menu_ground singer">
              <em>歌手</em><span class="icon"></span>
              <div class="hover_menu4">
                <div class="china">
                  <p>华语&nbsp;:</p>
                  <ul style="width: 100%;">
                    <li v-for="item in threeArr[0]" @click="getVal(item)">{{item}}</li>
                  </ul>
                </div>
                <div class="china">
                  <p>欧美&nbsp;:</p>
                  <ul style="width: 100%;">
                    <li v-for="item in threeArr[1]" @click="getVal(item)">{{item}}</li>
                  </ul>
                </div>
                <div class="china">
                  <p>日本&nbsp;:</p>
                  <ul style="width: 100%;">
                    <li v-for="item in threeArr[2]" @click="getVal(item)">{{item}}</li>
                  </ul>
                </div>
                <div class="china">
                  <p>韩国&nbsp;:</p>
                  <ul style="width: 100%;">
                    <li v-for="item in threeArr[3]" @click="getVal(item)">{{item}}</li>
                  </ul>
                </div>
                <div class="china">
                  <p>其他&nbsp;:</p>
                  <ul style="width: 100%;">
                    <li v-for="item in threeArr[4]" @click="getVal(item)">{{item}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="menu_ground mv" @click="getMv('MV')"><em>MV</em></div>
            <div class="menu_ground album">
              <em>专辑</em><span class="icon"></span>
              <div class="hover_menu5">
                <ul>
                  <li v-for="item in fourArr" @click="getVal(item)">{{item}}</li>
                </ul>
              </div>
            </div>
      </div>
        <div class="content_right">
          <router-view :mes="btn" :dataing="marginLeft"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      data: function () {
        return{
            btn: '',
            value: '',
          down_show: false,
          marginLeft: false,
          option: [
            ['云音乐飙升榜','云音乐新歌榜','网易原创歌曲榜','云音乐热歌榜'],
            ['云音乐ACG音乐榜','云音乐古典音乐榜','云音乐电音榜','UK排行榜周榜',
              '美国Billboard周榜','Beatport全球电子舞曲榜','法国 NRJ Vos Hits 周榜',
              'KTV唛榜','iTunes榜','日本Oricon周榜','Hit FM Top榜','台湾Hito排行榜','中国TOP排行榜（港台榜）','中国TOP排行榜（内地榜）',
              '香港电台中文歌曲龙虎榜','中国嘻哈榜']
          ],
          lastArr: [
            ['华语','欧美','日语','韩语','粤语','小语种'],
            ['流行','摇滚','民谣','电子','舞曲','说唱','轻音乐',
              '爵士','乡村','R&B/Soul','古典','民族','英伦','金属','朋克','蓝调',
              '雷鬼','世界音乐','拉丁','另类/独立','New Age','古风','后摇','Bossa Nova'],
            ['清晨','夜晚','学习','工作','午休','下午茶','地铁','驾车','运动','旅行','散步','酒吧'],
            ['怀旧','清新','浪漫','性感','伤感','治愈','放松','孤独','感动','兴奋','快乐','安静','思念'],
            ['影视原声','ACG','校园','游戏','70后','80后','90后','网络歌曲','KTV','经典','翻唱','吉他','钢琴','器乐','儿童','榜单','00后']
          ],
          secondArr: [
            '有声书','知识技能','商业财经','人文历史','外语世界','亲子宝贝','创作|翻唱','音乐故事','3D|电子','相声曲艺','情感频道',
            '美文读物','脱口秀','广播剧','二次元','明星做主播','娱乐|影视','科技科学','校园|教育','旅途|城市'
          ],
          threeArr: [
              ['华语男歌手','华语女歌手','华语组合/乐队'],
              ['欧美男歌手','欧美女歌手','欧美组合/乐队'],
              ['日本男歌手','日本女歌手','日本组合/乐队'],
              ['韩国男歌手','韩国女歌手','韩国组合/乐队'],
              ['其他男歌手','其他女歌手','其他组合/乐队']
          ],
          fourArr: [
              '全部','华语','欧美','日本','韩国','其他'
          ]
        }
      },
    methods: {
      enter: function () {
            this.marginLeft = false;
          },
        leave: function () {
          this.marginLeft = true;
        },
       down: function () {
         this.down_show = !this.down_show;
       },
      getVal: function (e) {
           this.btn = e;
           this.marginLeft = true;
      },
      getMv: function (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .position{
    margin-left: -90px !important;
  }
  .mv:hover{
    text-decoration: underline;
  }
  .menu_ground{
    position: relative;
  }
  .menu_ground .hover_menu2{
    padding: 10px 10px;
    width: 300px;
    box-shadow: 0 0 0 #eee, 2px 0 5px #eee, 0 2px 6px #eee, 2px 0 5px #eee;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-radius: 6px;
    display: none;
    z-index: 10;
    left: 158px;
    top: 0px;
    position: absolute;
    background: #bc0b0b;;
  }
  .menu_ground .hover_menu3{
    padding: 10px 10px;
    width: 300px;
    box-shadow: 0 0 0 #eee, 2px 0 5px #eee, 0 2px 6px #eee, 2px 0 5px #eee;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-radius: 6px;
    display: none;
    z-index: 10;
    left: 158px;
    top: 0px;
    position: absolute;
    background: #bc0b0b;;
  }
  .menu_ground .hover_menu4{
    padding: 10px 10px;
    width: 300px;
    box-shadow: 0 0 0 #eee, 2px 0 5px #eee, 0 2px 6px #eee, 2px 0 5px #eee;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-radius: 6px;
    display: none;
    z-index: 10;
    left: 158px;
    top: 0px;
    position: absolute;
    background: #bc0b0b;;
  }
  .menu_ground .hover_menu5{
    padding: 10px 10px;
    width: 50px;
    box-shadow: 0 0 0 #eee, 2px 0 5px #eee, 0 2px 6px #eee, 2px 0 5px #eee;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-radius: 6px;
    display: none;
    z-index: 10;
    left: 158px;
    top: 0px;
    position: absolute;
    background: #bc0b0b;;
  }
  .hover_menu5 ul li{
    text-align: center;
    margin: 5px auto;
    font-size: 14px;
    color: #ccc;
    height: 20px;
    line-height: 20px;
  }
  .hover_menu5 ul li:hover{
    text-decoration: underline;
  }
  .hover_menu4 ul li{
    float: left;
    color: #FFFAFA;
    margin-left: 10px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
  .hover_menu4 ul li:hover{
    text-decoration: underline;
  }
  .hover_menu4 .china{
    margin-top: 10px;
    height: 46px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f4f4f4;
  }
  .hover_menu4 .china p{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    font-weight: bold;
    color: #ccc;
  }
  .hover_menu3 p{
    margin-left: 10px;
    color: #ccc;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    float: left;
  }
  .hover_menu3 p:hover{
    text-decoration: underline;
  }
  .singList:hover .hover_menu2{
    display: block;
  }
  .station:hover .hover_menu3{
    display: block;
  }
  .singer:hover .hover_menu4{
    display: block;
  }
  .album:hover .hover_menu5{
    display: block;
  }
  .language{
    background: #bc0b0b;
    position: relative;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding-left: 5px;
  }
  .style{
    margin: 5px auto;
    background: #bc0b0b;
    position: relative;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding-left: 5px;
  }
  .place{
    margin: 5px auto;
    background: #bc0b0b;
    position: relative;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding-left: 5px;
  }
  .emotion{
    margin: 5px auto;
    background: #bc0b0b;
    position: relative;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding-left: 5px;
  }
  .theme{
    margin: 5px auto;
    background: #bc0b0b;
    position: relative;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding-left: 5px;
  }
  .language p{
    height: 32px;
    line-height: 32px;
    font-size: 15px;
    color: #ccc;
    vertical-align: middle;
    float: left;
  }
  .style p{
    font-size: 15px;
    color: #ccc;
    vertical-align: middle;
  }
  .place p{
    height: 32px;
    line-height: 32px;
    font-size: 15px;
    color: #ccc;
    vertical-align: middle;
  }
  .emotion p{
    height: 32px;
    line-height: 32px;
    font-size: 15px;
    color: #ccc;
    vertical-align: middle;
  }
  .theme p{
    font-size: 15px;
    color: #ccc;
    vertical-align: middle;
  }
  .language ul{
    float: left;
  }
  .language>ul li{
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    float: left;
    margin-left: 10px;
  }
  .style>ul li{
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    margin-left: 10px;
  }
  .place >ul li{
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    margin-left: 10px;
  }
  .emotion >ul li{
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    margin-left: 10px;
  }
  .theme >ul li{
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    margin-left: 10px;
  }
  .language>ul li:hover{
    text-decoration: underline;
  }
  .style>ul li:hover{
    text-decoration: underline;
  }
  .place>ul li:hover{
    text-decoration: underline;
  }
  .emotion>ul li:hover{
    text-decoration: underline;
  }
  .theme>ul li:hover{
    text-decoration: underline;
  }
  .container{
    width: 100%;
    height: 100%;
  }
  .header{
    width: 100%;
    background: url("../assets/imgicon/topbar.png") repeat-x 0 -80px;
    height: 50px;
    line-height: 50px;
  }
  .header ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .header ul li p{
    color: #bc0b0b;
    font-size: 20px;
    font-weight: bold;
  }
  .header ul li a{
    height: 100%;
    color: #f4f4f4;
    font-size: 14px;
    font-weight: normal;
  }
  .header ul li a:hover{
    text-decoration: underline;
  }
  .header ul li{
    margin-left: 50px;
  }
  .header ul li:nth-child(2){
    margin-left: 10px;
  }
  .bgcolor{
    height: 42px;
    width: 162px;
    background: url("../assets/imgicon/topbar2.png") no-repeat 0 0;
  }
  .content{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .menu_left{
    width: 180px;
    background: #bc0b0b;
  }
  .menu_left .click:hover{
    text-decoration: underline;
  }
  .menu_left .menu_ground{
    padding-left: 40px;
    cursor: pointer;
    color: #FFFAFA;
    font-size: 16px;
    height: 52px;
    line-height: 52px;
  }
  .menu_left .menu_ground .two{
    display: inline-block;
    margin-top: 22px;
    width: 11px;
    height: 8px;
    background: url("../assets/imgicon/icon.png") no-repeat -65px -520px;
  }
  .change{
    display: inline-block;
    margin-top: 22px;
    width: 11px;
    height: 8px;
    background: url("../assets/imgicon/icon.png") no-repeat -45px -520px;
  }
  .menu_left .menu_ground:hover{
    background: url("../assets/imgicon/topbar.png") no-repeat 0 -80px;
  }
  .menu_left .menu_ground span{
    color: #FFFAFA;
    font-weight: bold;
    font-size: 16px;
    float: right;
    margin-right: 20px;
  }
  .down_menu span{
    transform-origin: center;
    transform: rotate(-90deg);
    display: inline-block;
    margin-top: 16px;
    width: 11px;
    height: 8px;
    background: url("../assets/imgicon/icon.png") no-repeat -65px -520px;
  }
  .down_menu .down1{
    position: relative;
    cursor: pointer;
    padding-left: 30px;
    font-size: 14px;
    color: #FFFAFA;
    height: 40px;
    line-height: 40px;
  }
  .down_menu .down2{
    position: relative;
    cursor: pointer;
    padding-left: 30px;
    font-size: 14px;
    color: #FFFAFA;
    height: 40px;
    line-height: 40px;
  }
  .down1 .hover_menu{
    padding: 10px 10px;
    width: 100px;
    box-shadow: 0 0 0 #eee, 2px 0 5px #eee, 0 2px 6px #eee, 2px 0 5px #eee;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-radius: 4px;
    display: none;
    z-index: 10;
    left: 158px;
    top: 0px;
    position: absolute;
    background: #bc0b0b;;
  }
  .hover_menu a{
    color: #ccc;
  }
  .hover_menu p:hover{
    text-decoration: underline;
  }
  .hover_menu1 p:hover{
    text-decoration: underline;
  }
  .hover_menu1 p{
    margin-left: 10px;
    float: left;
  }
  .down2 .hover_menu1{
    padding: 10px 10px 5px 10px;
    width: 300px;
    box-shadow: 0 0 0 #eee, 2px 0 5px #eee, 0 2px 6px #eee, 2px 0 5px #eee;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-radius: 4px;
    display: none;
    z-index: 10;
    left: 158px;
    top: 0px;
    position: absolute;
    background: #bc0b0b;
  }
  .down1:hover .hover_menu{
    display: block;
  }
  .down2:hover .hover_menu1{
    display: block;
  }
  .down_menu .down1:hover{
    background: url("../assets/imgicon/topbar.png") no-repeat 0 -80px;
  }
  .down_menu .down2:hover{
    background: url("../assets/imgicon/topbar.png") no-repeat 0 -80px;
  }
  .down_menu span{
    margin-left: 10px;
    color: #FFFAFA;
    font-weight: bold;
    font-size: 16px;
    float: right;
    margin-right: 20px;
  }
  .menu_ground .icon{
    transform-origin: center;
    transform: rotate(-90deg);
    display: inline-block;
    margin-top: 22px;
    width: 11px;
    height: 8px;
    background: url("../assets/imgicon/icon.png") no-repeat -65px -520px;
  }
  .content{
    background: #f4f4f4;
  }
  .content_right{
    position: relative;
    width: 100%;
  }
</style>
