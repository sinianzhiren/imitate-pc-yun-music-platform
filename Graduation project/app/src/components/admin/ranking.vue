<template>
  <div class="message">
    <p>添加歌曲信息</p>
    <form action="">
    <div class="input">
      <div class="input_1">
      <label for="input_1">歌曲名字:</label>
      <input type="text" id="input_1" placeholder="请输入歌曲名字" v-model="title">
        <span class="tip">*</span>
      </div>
      <div class="input_1">
        <label for="input_2">歌手名字:</label>
        <input type="text" id="input_2" placeholder="请输入歌手名字" v-model="name">
        <span class="tip">*</span>
      </div>
      <div class="input_1">
        <label for="input_8">所属专辑名称:</label>
        <input type="text" id="input_8" placeholder="所属专辑名称" style="width: 62%;" v-model="album">
        <span class="tip">*</span>
      </div>
      <div class="input_1">
        <label for="input_3">播放时长:</label>
        <select name="select" id="input_3" v-model="playTime">
          <option value="--请选择--" selected>--请选择(分)--</option>
          <option v-for="val in arr" :value="val">{{val}}</option>
        </select>
        <span>:</span>
        <select name="select" id="input_4" v-model="playTime1">
          <option value="--请选择--" selected>--请选择(秒)--</option>
          <option v-for="val in arr" :value="val">{{val}}</option>
        </select>
        <span class="tip">*</span>
      </div>
      <div class="input_1">
        <label for="input_4">排行榜:</label>
        <select name="select" id="input_5" style="width: 34%;" v-model="selected" @click="choose">
          <option value="--请选择--" selected>--请选择--</option>
          <option value="云音乐特色榜">云音乐特色榜</option>
          <option value="全球媒体榜">全球媒体榜</option>
        </select>
        <select name="select" id="input_6" style="width: 36%;" v-model="type">
          <option value="--请选择--" selected>--请选择--</option>
          <option v-for="value in option[number]" :value="value">{{value}}</option>
        </select>
        <span class="tip">*</span>
      </div>
      <div class="input_1">
        <label for="input_7">歌曲URL:</label>
        <input type="text" id="input_7" v-model="singUrl">
        <span class="tip">*</span>
      </div>
      <div class="input_1">
        <label for="input_9">作曲家:</label>
        <input type="text" id="input_9" placeholder="作曲家名字" v-model="composer">
      </div>
      <div class="input_1">
        <label for="input_10">作词家:</label>
        <input type="text" id="input_10" placeholder="作词家名字" v-model="lyricist">
      </div>
      <div class="input_1">
        <label for="input_11">编曲家:</label>
        <input type="text" id="input_11" placeholder="编曲家名字" v-model="arranger">
      </div>
        <div class="input_1">
        <label for="input_12">点赞次数:</label>
        <input type="number" id="input_12" placeholder="点赞次数" v-model="zanNum" style="width: 63%;">
      </div>
      <div class="input_1">
        <label for="input_13">播放次数:</label>
        <input type="number" id="input_13" placeholder="播放次数" v-model="playNum" style="width: 63%;">
      </div>
      <div class="input_1">
        <label for="input_15">歌曲图片URL:</label>
        <input type="text" id="input_15" v-model="singPhoto" style="width: 59.5%;">
      </div>
      <div class="input_1">
        <label for="input_14">创作时间:</label>
        <input type="date" id="input_14" placeholder="创作时间,例如: 2017/01/01" v-model="createTime" style="width: 63%;">
      </div>
      <div class="input_1">
        <label for="lyric" class="lyric">歌词:</label>
        <textarea name="area" id="lyric" cols="91" rows="5" placeholder="请输入歌词" v-model="lyric"></textarea>
      </div>
      <p class="type">
        <input type="button" value="提交" @click="insert">
        <input type="reset" value="重置">
      </p>
    </div>
    </form>
  </div>
</template>

<script>
  export default{
      created: function () {
        this.getOption();
      },
      data: function () {
        return{
          number: 0,
          option: [
            ['云音乐飙升榜','云音乐新歌榜','网易原创歌曲榜','云音乐热歌榜'],
            ['云音乐ACG音乐榜','云音乐古典音乐榜','云音乐电音榜','UK排行榜周榜',
              '美国Billboard周榜','Beatport全球电子舞曲榜','法国 NRJ Vos Hits 周榜',
              'KTV唛榜','iTunes榜','日本Oricon周榜','Hit FM Top榜','台湾Hito排行榜','中国TOP排行榜（港台榜）','中国TOP排行榜（内地榜）',
              '香港电台中文歌曲龙虎榜','中国嘻哈榜']
          ],
          num: 59,
          arr: [],
          selected: '--请选择--',

          title: '',
          name: '',
          album: '',
          playTime: '--请选择--',
          playTime1: '--请选择--',
          type: '--请选择--',
          singUrl: '../../../static/music/',
          composer: '',
          lyricist: '',
          arranger: '',
          zanNum: '',
          playNum: '',
          singPhoto: '../../../static/img/',
          createTime: '',
          lyric: '',
        }
      },
    methods: {
          getOption: function () {
              let str = null;
            for (let a = 0;a<=this.num;a++){
                str = a.toString();
                if (str.length == 1){
                    str = '0'+str;
                }
                this.arr.push(str);
            }
          },
      choose: function () {
        if (this.selected == '云音乐特色榜'){
            this.number = 0;
        }else if(this.selected =='全球媒体榜') {
          this.number = 1;
        }
      },
      insert: function () {
        let _this = this;
        this.$axios.post('/api/admin',{
          title: _this.title,
          name: _this.name,
          album: _this.album,
          playTime: _this.playTime+':'+_this.playTime1,
          type: _this.type,
          singUrl: _this.singUrl,
          composer: _this.composer,
          lyricist: _this.lyricist,
          arranger: _this.arranger,
          zanNum: _this.zanNum,
          playNum: _this.playNum,
          singPhoto: _this.singPhoto,
          createTime: _this.createTime,
          lyric: _this.lyric,
        },{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json', // default
        })
          .then(function (res) {
              if (res){
                  alert('添加成功');
                _this.title ='';
                  _this.name = '';
                  _this.album = '';
                  _this.playTime = '--请选择--';
                  _this.playTime1 = '--请选择--';
                  _this.type = '--请选择--';
                  _this.singUrl = '../../../static/music/';
                  _this.composer = '';
                  _this.lyricist = '';
                  _this.arranger = '';
                  _this.zanNum = '';
                  _this.playNum = '';
                  _this.singPhoto = '../../../static/img/';
                  _this.createTime = '';
                  _this.lyric = '';
              }
          })
          .catch(function (err) {
          console.log('Error'+ err)
        })
      }
    }
  }
</script>

<style scoped>
  .message{
    padding-top: 20px;
    border: 1px solid #e8e8e8;
    border-top-width: 0;
    margin: 0 auto;
    width: 80%;
    box-shadow: -2px 0 5px #eee,0 0 0 #eee,0 2px 6px #eee,2px 0 5px #eee;
    border-radius: 8px;
    background: #FFFAFA;
  }
  .message>p{
    color: #666;
    font-size: 18px;
    letter-spacing: 1px;
    text-align: center;
  }
  .input_1{
    margin: 20px auto;
    text-align: center;
  }
  .tip{
    color: #ff0000;
  }
  input[type='text']{
    width: 65%;
    height: 25px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input[type='number']{
    width: 65%;
    height: 25px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input[type='date']{
    width: 65%;
    height: 25px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  select{
    text-align: center;
    width: 33.6%;
    height: 30px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  label{
    color: #999;
    font-size: 15px;
  }
  input:focus{
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(102,175,233,0.3);
    box-shadow: 0 0 2px rgba(102,175,233,0.2), 0 0 2px rgba(102,175,233,0.2),0 0 2px rgba(102,175,233,0.2),0 0 2px rgba(102,175,233,0.2);
  }
  select:focus{
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(102,175,233,0.3);
    box-shadow: 0 0 2px rgba(102,175,233,0.2), 0 0 2px rgba(102,175,233,0.2),0 0 2px rgba(102,175,233,0.2),0 0 2px rgba(102,175,233,0.2);
  }
  .lyric{
    position: relative;
    top: -38px;
  }
  textarea{
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  textarea:focus{
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(102,175,233,0.3);
    box-shadow: 0 0 2px rgba(102,175,233,0.2), 0 0 2px rgba(102,175,233,0.2),0 0 2px rgba(102,175,233,0.2),0 0 2px rgba(102,175,233,0.2);
  }
  .type{
    width: 100%;
    text-align: center;
    padding-bottom: 40px;
  }
  input[type='button']{
    color: #e8e8e8;
    margin-right: 10px;
    padding: 5px 20px;
    background: #5cb85c;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  input[type='button']:hover{
    background: #3c763d;
  }
  input[type='reset']{
    margin-left: 10px;
    color: #e8e8e8;
    padding: 5px 20px;
    background: #337ab7;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  input[type='reset']:hover{
    background: #286090;
  }
</style>

