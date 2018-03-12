<template>
  <div class="message">
    <p>添加专辑信息</p>
    <form action="">
      <div class="input">
        <div class="input_1">
          <label for="input_1">专辑名字:</label>
          <input type="text" id="input_1" placeholder="请输入专辑名字" v-model="albumTitle">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_2">歌手名字:</label>
          <input type="text" id="input_2" placeholder="请输入歌手名字" v-model="singerName">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_4">专辑国籍:</label>
          <select name="select" id="input_4" v-model="albumCountry">
            <option value="--请选择--" selected>--请选择--</option>
            <option v-for="value in option" :value="value">{{value}}</option>
          </select>
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_7">专辑照片:</label>
          <input type="text" id="input_7" v-model="albumUrl">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_8">发行时间:</label>
          <input type="date" id="input_8" placeholder="请选择发行时间" v-model="releaseTime">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_9">发行公司:</label>
          <input type="text" id="input_9" placeholder="请选择发行公司" v-model="releaseCompany">
          <span class="tip">*</span>
        </div>
        <div style="margin: 10px auto 10px auto;padding-left: 20px;">
          <label for="lyricing" class="lyric">专辑介绍:</label>
          <textarea name="area" id="lyricing" cols="100" rows="5" placeholder="请输入一些专辑的介绍信息" v-model="albumIntroduce"></textarea>
        </div>
        <div style="margin: 10px auto 20px auto;padding-left: 20px;">
          <label for="lyric" class="lyric">专辑包含的歌曲:</label>
          <textarea name="area" id="lyric" cols="93" rows="5" placeholder="请输入专辑包含的歌曲名字,歌曲名字之间以逗号‘,’分割" v-model="includeSong"></textarea>
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
    data: function () {
      return{
        option: [
          '华语','欧美','日本','韩国','其他'
        ],
        albumTitle: '',
        singerName: '',
        albumCountry: '--请选择--',
        albumUrl: '../../../static/singerPhoto/',
        releaseTime: '',
        releaseCompany: '',
        albumIntroduce: '',
        includeSong: ''

      }
    },
    methods: {
      insert: function () {
        let _this = this;
        this.$axios.post('/api/admin/album',{
            albumTitle: _this.albumTitle,
            singerName: _this.singerName,
            albumCountry: _this.albumCountry,
            albumUrl: _this.albumUrl,
            releaseTime: _this.releaseTime,
            releaseCompany: _this.releaseCompany,
            albumIntroduce: _this.albumIntroduce,
            includeSong: _this.includeSong
        },{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json', // default
        })
          .then(function (res) {
            if (res){
              alert('添加成功');
                _this.albumTitle= '';
                _this.singerName= '';
                _this.albumCountry= '--请选择--';
                _this.albumUrl= '../../../static/singerPhoto/';
                _this.releaseTime= '';
                _this.releaseCompany= '';
                _this.albumIntroduce= '';
                _this.includeSong= ''
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
    width: 68%;
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

