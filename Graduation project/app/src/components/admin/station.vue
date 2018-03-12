<template>
  <div class="message">
    <p>添加电台主播信息</p>
    <form action="">
      <div class="input">
        <div class="input_1">
          <label for="input_1">电台名字:</label>
          <input type="text" id="input_1" placeholder="请输入电台名字" v-model="title">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_2">电台创作人名字:</label>
          <input type="text" id="input_2" placeholder="请输入电台创作人名字" v-model="name" style="width: 60%;">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_8">创作人图片地址:</label>
          <input type="text" id="input_8" value="../../../../static/img/" style="width: 60%;" v-model="creatorPhoto">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_4">电台类型:</label>
          <select name="select" id="input_4" v-model="type">
            <option value="--请选择--" selected>--请选择--</option>
            <option v-for="value in option" :value="value">{{value}}</option>
          </select>
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_7">封面简介:</label>
          <input type="text" id="input_7" placeholder="请输入一句话对电台简介" v-model="coverIntroduce">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_9">封面图片的URL地址:</label>
          <input type="text" id="input_9" value="../../../../static/img/" v-model="coverUrl" style="width: 55%;">
        </div>
        <div style="padding-left: 10px;">
          <label for="lyric" class="lyric">电台详细介绍:</label>
          <textarea name="area" id="lyric" cols="97" rows="5" placeholder="请输入电台详细介绍" v-model="detail"></textarea>
        </div>
        <div style="margin: 10px auto 20px auto;padding-left: 10px;">
          <label for="lyric" class="lyric">电台包含的节目名字:</label>
          <textarea name="area" id="lyricing" cols="90" rows="5" placeholder="请输入电台包括的节目名字,节目名字之间以逗号‘,’分割" v-model="programNames"></textarea>
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
          '有声书','知识技能','商业财经','人文历史','外语世界','亲子宝贝','创作|翻唱','音乐故事','3D|电子','相声曲艺','情感调频',
          '美文读物','脱口秀','广播剧','二次元','明星做主播','娱乐|影视','科技科学','校园|教育','旅途|城市'
        ],

        title: '',
        name: '',
        creatorPhoto: '../../../../static/img/',
        type: '--请选择--',
        coverIntroduce: '',
        coverUrl: '../../../../static/img/',
        detail: '',
        programNames: ''
      }
    },
    methods: {
      insert: function () {
        let _this = this;
        this.$axios.post('/api/admin/station',{
          title: _this.title,
          name: _this.name,
          creatorPhoto: _this.creatorPhoto,
          type: _this.type,
          coverIntroduce: _this.coverIntroduce,
          coverUrl: _this.coverUrl,
          detail: _this.detail,
          programNames: _this.programNames,
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
              _this.creatorPhoto = '../../../../static/img/';
              _this.type = '--请选择--';
              _this.coverIntroduce = '';
              _this.coverUrl = '../../../../static/img/';
              _this.detail = '';
              _this.programNames = '';
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

