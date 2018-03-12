<template>
  <div class="feature">
    <p>{{mes}}管理数据</p>
    <div class="show">
        <dl>
          <dt>歌曲名字</dt>
          <dd v-for="item in message" class="title" :title="item.title">
            {{item.title}}
          </dd>
        </dl>
      <dl>
        <dt>歌手名字</dt>
        <dd v-for="item in message" class="singName" :title="item.name">{{item.name}}</dd>
      </dl>
      <dl>
        <dt>所属专辑</dt>
        <dd v-for="item in message" class="album" :title="item.album">{{item.album}}</dd>
      </dl>
      <dl>
        <dt>播放时长</dt>
        <dd v-for="item in message">{{item.playTime}}</dd>
      </dl>
      <dl>
        <dt>排行榜</dt>
        <dd v-for="item in message">{{item.type}}</dd>
      </dl>
      <dl>
        <dt>歌曲URL</dt>
        <dd v-for="item in message" class="singUrl" :title="item.singUrl">{{item.singUrl}}</dd>
      </dl>
      <dl>
        <dt>作曲家</dt>
        <dd v-for="item in message" class="composer" :title="item.composer">{{item.composer}}</dd>
      </dl>
      <dl>
        <dt>作词家</dt>
        <dd v-for="item in message" class="lyricist" :title="item.lyricist">{{item.lyricist}}</dd>
      </dl>
      <dl>
        <dt>编曲家</dt>
        <dd v-for="item in message" class="arranger" :title="item.arranger">{{item.arranger}}</dd>
      </dl>
      <dl>
        <dt>点赞次数</dt>
        <dd v-for="item in message">{{item.zanNum}}</dd>
      </dl>
      <dl>
        <dt>播放次数</dt>
        <dd v-for="item in message">{{item.playNum}}</dd>
      </dl>
      <dl>
        <dt>歌曲图片URL</dt>
        <dd v-for="item in message" class="photoUrl" :title="item.singPhoto">{{item.singPhoto}}</dd>
      </dl>
      <dl>
        <dt>创作时间</dt>
        <dd v-for="item in message">{{item.createTime}}</dd>
      </dl>
      <dl>
        <dt>歌词</dt>
        <dd v-for="item in message" class="lyric" :title="item.lyric">{{item.lyric}}</dd>
      </dl>
      <dl style="width: 75px;" v-if="dataing">
        <dt>操作</dt>
        <dd v-for="item in message">
          <p class="change">
            <span @click="update( item._id )">修改</span>
            <span @click="remove( item._id )">删除</span>
          </p>
        </dd>
      </dl>
      <dl style="float:none; clear:left;margin: 0"></dl>
    </div>
    <div class="bground" v-show="isDisplay">
    </div>
    <div class="isDelete" v-show="isDisplay">
      <p>确认删除这条信息吗？</p>
      <p><span @click="determine">确认</span><span @click="cancel">取消</span></p>
    </div>
    <song-update :_id="id" :app="date" @getMessage="getNews"></song-update>
  </div>
</template>

<script>
  import Vm from 'vue'
  import songUpdate from './update/songUpdate.vue'
  export default{
      components: {
          songUpdate: songUpdate
      },
      props: ['mes','dataing'],
      mounted: function () {

      },
      data: function () {
          return{
            message: '',
            isDisplay: false,
            removeNum: '',
            ChangeNum: '',
            id: '',
            date: ''
          }
      },
    watch: {
      mes: function (val , old) {
        this.getValue();
      },
      dataing: function (val , oldVal) {

      }
    },
    methods: {
      getNews: function (data) {
          let _this = this;
        if (data){
          let href = window.location.search;
          let decode = decodeURI(href);
          let arr = decode.split('=');
          _this.changeNum = arr[1];
          _this.getChangedValue();
        }
      },
        getValue: function () {
            let _this = this;
          this.$axios.post('/api/find',{type: _this.mes},{
            // 请求头信息
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            //返回数据类型
            responseType: 'json', // default
          })
            .then(function (res) {
              _this.message = res.data
            })
            .catch(function (err) {
              console.log(err)
            })
        },
      getChangedValue: function () {
        let _this = this;
        this.$axios.post('/api/find',{type: _this.changeNum},{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json', // default
        })
          .then(function (res) {
            _this.message = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      update: function (id) {
            this.id = id;
            this.date = new Date()

      },
      remove: function (id) {
        this.removeNum = id;
        this.isDisplay = true;
      },
      determine: function (id) {
        let _this = this;
        _this.$axios.post('/api/remove',{
            id: _this.removeNum
        },{
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            responseType: 'json'
        })
          .then(function (res) {
            if (res){
                _this.isDisplay = false;
              let href = window.location.search;
              let decode = decodeURI(href);
              let arr = decode.split('=');
              _this.changeNum = arr[1];
              _this.getChangedValue();
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      cancel: function () {
          this.isDisplay = false
      }
    }
  }
</script>

<style scoped>
  .bground{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #333;
    opacity: 0.5;
  }
  .isDelete{
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    z-index: 10;
    width: 200px;
    height: 120px;
    background: #fff;
    box-shadow: -2px 0 5px #f4f4f4,0 -2px 5px #f4f4f4,0 2px 5px #f4f4f4,2px 0 5px #f4f4f4;
    border: 1px solid #ccc;
  }
  .isDelete p:nth-child(1){
    margin-top: 20%;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #b80b0b;
  }
  .isDelete p:nth-child(2){
    text-align: center;
    margin-top: 20px;
  }
  .isDelete p:nth-child(2) span{
    color: #FFFAFA;
    cursor: pointer;
    font-size: 12px;
    padding: 3px 7px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .isDelete p:nth-child(2) span:nth-child(2){
     background: #204d7e;
    margin-left: 20px;
  }
  .isDelete p:nth-child(2) span:nth-child(1){
    background: #f0ad4e;
    margin-right: 20px;
  }
  .change{
    position: absolute;
    z-index: 2;
  }
  .change span{
    cursor: pointer;
    font-size: 12px;
    color: #666;
    padding: 1px 5px;
    border: 1px solid #ccc;
  }
  .feature>p{
    margin: 15px auto;
    text-align: center;
    font-size: 16px;
    color: #555;
  }
  .show dl{
    float: left;
    margin-left: 10px;
  }
  .show dt{
    font-size: 16px;
    color: #555;
    font-weight: bold;
  }
  .show dd{
    position: relative;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .show .singUrl{
    width: 80px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .title{
    width: 65px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .show .singName{
    width: 65px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .photoUrl{
    width: 90px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .lyric{
    width: 80px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .lyricist{
    width: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .composer{
    width: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .arranger{
    width: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show .album{
    width: 64px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
