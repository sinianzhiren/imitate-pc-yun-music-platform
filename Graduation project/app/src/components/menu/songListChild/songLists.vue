<template>
    <div class="text">
      <div class="line"></div>
      <div class="list">
        <ul class="lists">
          <li v-for="item in message">
            <a href="">
              <div class="bground">
                <img :src="item.coverUrl">
                <a href="" class="bground_on" :title="item.name"></a>
              </div>
              <div class="bottom">
                <p><em></em><span>{{item.listenNum}}</span></p>
                <p title="播放"></p>
              </div>
            </a>
            <p class="title" :title="item.name"><a href="">{{item.name}}</a></p>
            <p class="create">by<a href="">{{item.creator}}</a></p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default{
    mounted: function () {
        this.getVal();
      },
    props: ['mdate'],
      data: function () {
        return{
          message: ''
        }
      },
    watch: {
      mdate: function (val, oldVal) {
          if (val == '全部'){
              this.getAll();
          }
            this.getData();
         }
    },
    methods: {
          getVal: function () {
            let _this = this;
            _this.$axios.get('./api/songList')
              .then(function (res) {
                _this.message = res.data
              })
              .catch(function (err) {
                console.log(err)
              })
          },
      getAll: function () {
        let _this = this;
        _this.$axios.get('./api/all')
          .then(function (res) {
            _this.message = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getData: function () {
        let _this = this;
        _this.$axios.post('./api/getList',{
            type: _this.mdate
        },{
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          responseType: 'json'
        })
          .then(function (res) {
              console.log(res.data);
            _this.message = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      }

    }
  }
</script>

<style scoped>
  .text{
    padding: 0 40px;
  }
  .text .line{
    width: 100%;
    height: 2px;
    background: #c20c0c;
  }
  .text .list ul{
    width: 100%;
  }
  .text .list ul{
    padding-top: 10px;
  }
  .lists li{
    display: inline-block;
    width: 140px;
    overflow: hidden;
    margin: 20px 0 5px 52px;
  }
  .lists li:nth-child(5n-4){
    margin-left: 0;
  }
  .lists .bground{
    width: 140px;
    height: 140px;
  }
  .lists .bground .bground_on{
    display: inline-block;
    position: relative;
    top: -140px;
    width: 140px;
    height: 140px;
    background: url("../../../assets/imgicon/coverall.png") no-repeat 0 0;
  }
  .bottom{
    margin-bottom: 5px;
    margin-top: -27px;
    position: relative;
    width: 140px;
    height: 27px;
    background: url("../../../assets/imgicon/coverall.png") no-repeat 0 -537px;
  }
  .bottom p:nth-child(1){
    padding-left: 10px;
    float: left;
    margin-top: 5px;
  }
  .bottom p:nth-child(1) span{
    color: #ccc;
    font-size: 12px;
    margin-left: 5px;
  }
  .bottom p:nth-child(1) em{
    display: inline-block;
    width: 15px;
    height: 11px;
    background: url("../../../assets/imgicon/iconall.png") no-repeat 0px -24px;
  }
  .bottom p:nth-child(2){
    margin-top: 5px;
    margin-right: 10px;
    float: right;
    width: 16px;
    height: 16px;
    background: url("../../../assets/imgicon/iconall.png") no-repeat 0 0;
  }
  .bottom p:nth-child(2):hover{
    background: url("../../../assets/imgicon/iconall.png") no-repeat 0 -60px;
  }
  .title{
    width: 140px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #000;
    font-weight: normal;
  }
  .title a{
    color: #000;
  }
  .title a:hover{
    text-decoration: underline;
  }
  .create{
    color: #666;
    font-size: 12px;
  }
  .create a{
    margin-left: 5px;
    color: #666;
    font-size: 12px;
    text-decoration: none;
  }
  .create a:hover{
    text-decoration: underline;
  }
</style>
