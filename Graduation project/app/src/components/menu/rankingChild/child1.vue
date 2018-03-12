<template>
  <div class="container">
    <div class="header">
      <div class="img">
        <img :src="url" alt="">
        <span></span>
      </div>
      <div class="title">
        <p>{{message}}</p>
        <p><em></em>最近更新：{{date}}</p>
        <p class="thred">
          <span><i>播放</i></span>
          <span></span>
          <span><i>(496190)</i></span>
          <span><i>(2023)</i></span>
          <span><i>下载</i></span>
          <span><i>(72073)</i></span>
        </p>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="content">
      <p class="head">
        <span>歌曲列表</span>
        <span>{{songs}}首歌</span>
        <span>播放：<em style="color: #c20c0c;">10000000</em>次</span>
      </p>
      <div class="singNum">
        <table style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 77px;"></th>
              <th>标题</th>
              <th>时长</th>
              <th>歌手</th>
            </tr>
          </thead>
          <tbody style="width: 100%;">
            <tr v-for="(value,index) in resMessage">
              <td>{{index+1}}</td>
             <td><a href="" :title="value.title"><em></em>{{value.title}}</a></td>
              <td><span class="playtime">{{value.playTime}}</span><div class="menu">
                <span title="添加到播放列表"></span>
                <em title="收藏"></em>
                <i title="分享"></i>
                <strong title="下载"></strong>
              </div></td>
              <td :title="value.name">{{value.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      mounted: function () {
        this.getVal();
        this.getDate()
      },
   props: ['message','url'],
      data: function () {
        return{
          resMessage: '',
          date: '',
          songs: ''
        }
      },
    watch: {
          message: function (val,oldVal) {
            this.getVal();
          },
          url: function (val, oldval) {

          }
    },
    methods: {
       getVal: function () {
         let _this = this;
         _this.$axios.post('/api/rank',{type: _this.message},{
             headers: {'X-Requested-With': 'XMLHttpRequest'},
           responseType: 'json'
         })
           .then(function (res) {
               _this.songs = res.data.length;
             _this.resMessage = res.data
           })
           .catch(function (err) {
             console.log(err)
           })
       },
      getDate: function () {
        let month = new Date().getMonth()+1;
        month = month.toString();
        if (month.length== 1){
            month = '0'+month;
        }
        let day = new Date().getDate().toString();
        if (day.length == 1){
            day = '0'+day;
        }
        this.date = month+'月'+day+'日'
      }
    }
  }
</script>

<style scoped>
  .header{
    padding: 50px 40px;
  }
  .header .img{
    position: relative;
    float: left;
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    padding: 3px;
  }
  .img span{
    position: absolute;
    width: 150px;
    display: inline-block;
    height: 150px;
    top: 4px;
    left: 3px;
    z-index: 10;
    background: url("../../../assets/imgicon/coverall.png") no-repeat 0 0;
    background-size: 408px 1510px;
  }
  .header .title{
    margin-left: 10px;
    float: left;
  }
  .title em{
    width: 13px;
    display: inline-block;
    margin-right: 5px;
    height: 13px;
    background: url("../../../assets/imgicon/icon.png") no-repeat -70px -140px;
  }
  .title p:nth-child(1){
    margin: 30px auto 15px 20px;
    color: #000;
    font-size: 20px;
  }
  .title p:nth-child(2){
    font-size: 12px;
    margin-left: 20px;
    color: #666;
  }
  .title .thred{
    margin-left: 20px;
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .title .thred span{
    cursor: pointer;
    display: block;
  }
  .title .thred span:nth-child(1){
    width: 66px;
    line-height: 31px;
    height: 31px;
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -633px;
  }
  .title .thred span:nth-child(1):hover{
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -719px;
  }
  .title .thred span:nth-child(1) i{
    font-size: 14px;
    color: #fff;
    margin-left: 33px;
  }
  .title .thred span:nth-child(2){
    width: 32px;
    height: 31px;
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -1588px;
  }
  .title .thred span:nth-child(2):hover{
    background: url("../../../assets/imgicon/button2.png") no-repeat -40px -1588px;
  }
  .title .thred span:nth-child(3){
    position: relative;
    line-height: 31px;
    border-right: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 10px;
    width: 88px;
    height: 31px;
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -977px;
  }
  .title .thred span:nth-child(3):hover{
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -1063px;

  }
  .title .thred span:nth-child(3) i{
    margin-left: 30px;
    font-size: 11px;
    color: #333;
  }
  .title .thred span:nth-child(4){
    position: relative;
    line-height: 31px;
    border-right: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 10px;
    width: 73px;
    height: 31px;
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -1225px;
  }
  .title .thred span:nth-child(4):hover{
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -1268px;

  }
  .title .thred span:nth-child(4) i{
    margin-left: 30px;
    font-size: 11px;
    color: #333;
  }
  .title .thred span:nth-child(5){
    position: relative;
    line-height: 31px;
    border-right: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 10px;
    width: 73px;
    height: 31px;
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -2761px;
  }
  .title .thred span:nth-child(5):hover{
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -2805px;

  }
  .title .thred span:nth-child(5) i{
    margin-left: 30px;
    font-size: 12px;
    color: #333;
  }
  .title .thred span:nth-child(6){
    position: relative;
    line-height: 31px;
    border-right: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 10px;
    width: 78px;
    height: 31px;
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -1465px;
  }
  .title .thred span:nth-child(6):hover{
    background: url("../../../assets/imgicon/button2.png") no-repeat 0 -1508px;

  }
  .title .thred span:nth-child(6) i{
    margin-left: 30px;
    font-size: 12px;
    color: #333;
  }
  .content{
   padding: 0 40px;
    padding-bottom: 20px;
  }
  .content .head span:nth-child(3){
    color: #666;
    font-size: 12px;
    float: right;
  }
  .content .head span:nth-child(1){
    font-size: 20px;
    color: #000;
  }
  .content .head span:nth-child(2){
    color: #666;
    margin-left: 10px;
    font-size: 12px;
  }
  .singNum{
    margin-top: 10px;
    border-top: 2px solid #c20c0c;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .singNum thead{
    background: #f6f6f6;
    color: #999;
    height: 38px;
    font-size: 13px;
    line-height: 38px;
  }
  thead{
    border-bottom: 2px solid #f0f0f0;
  }
  thead th:nth-child(2){
    border-left: 1px solid #ccc;
    padding-left: 5px;
    text-align: left;
  }
  thead th:nth-child(4){
    border-left: 1px solid #ccc;
    padding-left: 5px;
    text-align: left;
    width: 93px;
  }
  thead th:nth-child(3){
    border-left: 1px solid #ccc;
    padding-left: 5px;
    text-align: left;
    width: 91px;
  }
  tbody td:nth-child(2) em{
    margin-top: 5px;
    display: block;
    float: left;
    width: 17px;
    height: 17px;
    background: url("../../../assets/imgicon/table.png") no-repeat 0 -103px;
  }
  tbody td:nth-child(2) em:hover{
    background: url("../../../assets/imgicon/table.png") no-repeat 0 -128px;

  }
  tbody tr td{
    color: #555;
    font-size: 12px;
  }
  tbody tr td a{
    margin-left: 10px;
    color: #555;
  }
  tbody tr td a:hover{
    text-decoration: underline;
  }
  tbody tr{
    height: 30px;
    line-height: 30px;
  }
  tbody tr td:nth-child(1){
    text-align: center;
  }
  tbody tr td:nth-child(2){
    width: 368px;
    overflow: hidden;
    padding-left: 5px;
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  tbody tr td:nth-child(3){
    position: relative;
    padding-left: 5px;
  }
  tbody tr td:nth-child(4){
    width: 99px;
    position: absolute;
    padding-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  tbody tr:nth-child(odd){
    background: #f6f6f6;
  }
  tbody tr:hover .menu{
    display: flex;
  }
  tbody tr:hover .playtime{
    opacity: 0;
  }
  .menu{
    margin-top: -22px;
    position: absolute;
    display: none;
  }
  .menu span{
    display: block;
    width: 13px;
    height: 13px;
    background: url("../../../assets/imgicon/icon.png") no-repeat 0 -700px;
  }
  .menu span:hover{
    background: url("../../../assets/imgicon/icon.png") no-repeat -22px -700px;
  }
  .menu em{
    margin-left: 8px;
    display: block;
    width: 17px;
    height: 14px;
    background: url("../../../assets/imgicon/table.png") no-repeat 0 -174px;
  }
  .menu em:hover{
    background: url("../../../assets/imgicon/table.png") no-repeat -21px -174px;
  }
  .menu i{
    margin-left: 8px;
    display: block;
    width: 14px;
    height: 14px;
    background: url("../../../assets/imgicon/table.png") no-repeat -2px -195px;
  }
  .menu i:hover{
    background: url("../../../assets/imgicon/table.png") no-repeat -22px -195px;
  }
  .menu strong{
    margin-left: 8px;
    display: block;
    width: 14px;
    height: 14px;
    background: url("../../../assets/imgicon/table.png") no-repeat -83px -174px;
  }
  .menu strong:hover{
    background: url("../../../assets/imgicon/table.png") no-repeat -106px -174px;
  }
</style>
