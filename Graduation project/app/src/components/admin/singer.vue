<template>
  <div class="message">
    <p>添加歌手信息</p>
    <form action="">
      <div class="input">
        <div class="input_1">
          <label for="input_1">歌手名字:</label>
          <input type="text" id="input_1" placeholder="请输入歌手名字" v-model="name">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label>歌手性别:</label>
          <input type="radio" name="radio" value="男" v-model="sex" checked><span>男</span>
          <input type="radio" name="radio" value="女" v-model="sex"><span>女</span>
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_4">歌手国籍:</label>
          <select name="select" id="input_4" v-model="country">
            <option value="--请选择--" selected>--请选择--</option>
            <option v-for="value in option" :value="value">{{value}}</option>
          </select>
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_8">是否是组合乐队(是请点击):
          <input type="radio" id="input_8" v-model="boolen">
          </label>
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_7">歌手照片:</label>
          <input type="text" id="input_7" v-model="singerPhoto">
          <span class="tip">*</span>
        </div>
        <div style="padding-left: 10px;">
          <label for="lyric" class="lyric">人物简介:</label>
          <textarea name="area" id="lyric" cols="101" rows="5" placeholder="请输入歌手的一些介绍信息" v-model="introduce"></textarea>
          <span class="tip">*</span>
        </div>
        <div style="padding-left: 10px;margin-top: 10px;">
          <label for="lyric1" class="lyric">歌手的主要成就:</label>
          <textarea name="area" id="lyric1" cols="94" rows="5" placeholder="请输入歌手的一些主要成就(没有可以不需要填)" v-model="achievement"></textarea>
        </div>
        <div style="padding-left: 10px;margin-top: 10px;">
          <label for="lyric3" class="lyric">歌手的演艺经历:</label>
          <textarea name="area" id="lyric3" cols="94" rows="5" placeholder="请输入歌手的一些演艺经历(没有可以不需要填)" v-model="performance"></textarea>
        </div>
        <div style="padding-left: 10px;margin-top: 10px;">
          <label for="lyric4" class="lyric">歌手的公益活动:</label>
          <textarea name="area" id="lyric4" cols="94" rows="5" placeholder="请输入歌手的一些公益活动(没有可以不需要填)" v-model="welfare"></textarea>
        </div>
        <div style="padding-left: 10px;margin-top: 10px;">
          <label for="lyric5" class="lyric">歌手的获奖记录:</label>
          <textarea name="area" id="lyric5" cols="94" rows="5" placeholder="请输入歌手的一些获奖记录(没有可以不需要填)" v-model="won"></textarea>
        </div>
        <div style="padding-left: 10px;margin-top: 10px;">
          <label for="lyric6" class="lyric">歌手个人演唱会:</label>
          <textarea name="area" id="lyric6" cols="94" rows="5" placeholder="请输入歌手的一些个人演唱会(没有可以不需要填)" v-model="concert"></textarea>
        </div>
        <div style="padding-left: 10px;margin-top: 10px;">
          <label for="lyric7" class="lyric">歌手的早年经历:</label>
          <textarea name="area" id="lyric7" cols="94" rows="5" placeholder="请输入歌手的一些早年经历(没有可以不需要填)" v-model="longExperience"></textarea>
        </div>
        <div style="margin: 10px auto 20px auto;padding-left: 10px;">
          <label for="lyric" class="lyric">歌手其他信息:</label>
          <textarea name="area" id="lyricing" cols="96" rows="5" placeholder="歌手其他信息(没有可以不需要填)" v-model="otherMessage"></textarea>
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
        name: '',
        sex: '男',
        country: '--请选择--',
        boolen: false,
        singerPhoto: '../../../static/singerPhoto/',
        introduce: '',
        achievement: '',
        performance: '',
        welfare: '',
        won: '',
        concert: '',
        longExperience: '',
        otherMessage: ''
      }
    },
    methods: {
      insert: function () {
        if (this.boolen == null){
          this.boolen = true
        }
        let _this = this;
        this.$axios.post('/api/admin/singer',{
          name: _this.name,
          sex: _this.sex,
          country: _this.country,
          boolen: _this.boolen,
          singerPhoto: _this.singerPhoto,
          introduce: _this.introduce,
          achievement: _this.achievement,
          performance: _this.performance,
          welfare: _this.welfare,
          won: _this.won,
          concert: _this.concert,
          longExperience: _this.longExperience,
          otherMessage: _this.otherMessage
        },{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json', // default
        })
          .then(function (res) {
            if (res){
              alert('添加成功');
              _this.name = '';
              _this.sex ='男';
              _this.country = '--请选择--';
              _this.boolen = false;
              _this.singerPhoto = '../../../static/singerPhoto/';
              _this.introduce = '';
              _this.achievement = '';
              _this.performance = '';
              _this.welfare = '';
              _this.won = '';
              _this.concert = '';
              _this.longExperience = '';
              _this.otherMessage = '';

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

