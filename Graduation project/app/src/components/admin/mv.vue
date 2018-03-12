<template>
  <div class="message">
    <p>添加MV信息</p>
    <form action="">
      <div class="input">
        <div class="input_1">
          <label for="input_1">MV标题:</label>
          <input type="text" id="input_1" placeholder="请输入MV标题" v-model="title">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_2">歌手名字:</label>
          <input type="text" id="input_2" placeholder="请输入歌手名字" v-model="name">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_8">MV图片地址:</label>
          <input type="text" id="input_8" placeholder="请输入MV图片地址" style="width: 62%;" v-model="photoAddress">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_7">MV播放地址:</label>
          <input type="text" id="input_7" placeholder="请输入MV播放地址" v-model="playAddress" style="width: 62%;">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_9">发布时间:</label>
          <input type="date" id="input_9" placeholder="请选择发布时间" v-model="releaseTime" style="width: 63%;">
        </div>
        <div class="input_1">
          <label for="input_10">播放次数:</label>
          <input type="number" id="input_10" placeholder="请输入播放次数" v-model="playNum">
        </div>
        <div class="input_1">
          <label for="lyric" class="lyric">MV简介:</label>
          <textarea name="area" id="lyric" cols="86" rows="5" placeholder="请输入MV简介" v-model="mvIntroduce"></textarea>
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
        title: '',
        name: '',
        photoAddress: '',
        playAddress: '',
        releaseTime: '',
        playNum: '',
        mvIntroduce: ''
      }
    },
    methods: {
      insert: function () {
        let _this = this;
        this.$axios.post('/api/admin/mv',{
          title: _this.title,
          name: _this.name,
          photoAddress: _this.photoAddress,
          playAddress: _this.playAddress,
          releaseTime: _this.releaseTime,
          playNum: _this.playNum,
          mvIntroduce: _this.mvIntroduce
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
              _this.photoAddress = '';
              _this.playAddress = '';
              _this.releaseTime = '';
              _this.playNum = '';
              _this.mvIntroduce = ''
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
    width: 63%;
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

