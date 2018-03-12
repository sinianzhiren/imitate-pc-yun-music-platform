<template>
  <div class="message">
    <p>歌单添加信息</p>
    <form action="">
      <div class="input">
        <div class="input_1">
        <label for="input_1">歌单名字:</label>
        <input type="text" id="input_1" placeholder="请输入歌单名字" v-model="name">
        <span class="tip">*</span>
        </div>
          <div class="input_1">
            <label for="input_2">歌单创作者名字:</label>
            <input type="text" style="width: 60%;" id="input_2" placeholder="请输入歌单创作者名字" v-model="creator">
            <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_3">歌单创建时间:</label>
          <input type="date" style="width: 61.5%;" id="input_3" placeholder="请输入歌单创建时间" v-model="createTime">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_4">歌单图片地址:</label>
          <input type="text" style="width: 61.5%;" id="input_4" v-model="coverUrl">
          <span class="tip">*</span>
        </div>
        <div class="input_1">
          <label for="input_5">创建人图片地址:</label>
          <input type="text" style="width: 58.5%;" id="input_5" v-model="creatorPhoto">
        </div>
        <div class="input_1">
          <label for="input_6">收藏次数:</label>
          <input type="number" style="width: 63.5%;" id="input_6" placeholder="请输入收藏次数" v-model="collectNum">
        </div>
        <div class="input_1">
          <label for="input_7">收听次数:</label>
          <input type="number" style="width: 63.5%;" id="input_7" placeholder="请输入收听次数" v-model="listenNum">
        </div>
        <div class="input_1">
          <label for="input_8">转发次数:</label>
          <input type="number" style="width: 63.5%;" id="input_8" placeholder="请输入转发次数" v-model="forwarding">
        </div>
        <div class="input_1">
          <label>歌单类型:</label>
            <span class="checkbox">
          <input type="checkbox" value="语种" v-model="language" @click="getlanguage">
          语种</span>
            <span class="checkbox">
          <input type="checkbox" value="风格" v-model="styles" @click="getstyle">
          风格</span>
          <span class="checkbox">
          <input type="checkbox" value="场景" v-model="place" @click="getplace">
          场景</span>
          <span class="checkbox">
          <input type="checkbox" value="情感" v-model="emotion" @click="getemotion">
          情感</span>
          <span class="checkbox">
          <input type="checkbox" value="主题" v-model="theme" @click="gettheme">
          主题</span>
          <div class="radio2" v-if="radio1">
            <span class="checkbox" v-for="(val,index) in lastArr[0]">
              <input type="radio" :value="val" name="radio1" v-model="pick1">
              {{val}}
            </span>
          </div>
          <div class="radio1" v-if="radio2">
            <span class="checkbox" v-for="(val,index) in lastArr[1]">
              <input type="radio" :value="val" name="radio2" v-model="pick2">
              {{val}}
            </span>
          </div>
          <div class="radio2" v-if="radio3">
            <span class="checkbox" v-for="(val,index) in lastArr[2]">
              <input type="radio" :value="val" name="radio3" v-model="pick3">
              {{val}}
            </span>
          </div>
          <div class="radio2" v-if="radio4">
            <span class="checkbox" v-for="(val,index) in lastArr[3]">
              <input type="radio" :value="val" name="radio4" v-model="pick4">
              {{val}}
            </span>
          </div>
          <div class="radio2" v-if="radio5">
            <span class="checkbox" v-for="(val,index) in lastArr[4]">
              <input type="radio" :value="val" name="radio5" v-model="pick5">
              {{val}}
            </span>
          </div>
        </div>
        <div class="input_1">
          <label for="lyric" class="lyric">歌单介绍:</label>
          <textarea name="area" id="lyric" cols="85.5" rows="5" placeholder="请输入歌单的一些基本介绍信息" v-model="introduce"></textarea>
        </div>
        <div class="input_1">
          <label for="lyricing" class="lyric1">歌单包含的歌曲名字:</label>
          <textarea name="area" id="lyricing" cols="74" rows="7" placeholder="请输入歌单包括的歌曲名字,歌曲名字之间以逗号‘,’分割" v-model="singNames"></textarea>
        </div>
      </div>
      <p class="type">
        <input type="button" value="提交" @click="insert">
        <input type="reset" value="重置">
      </p>
    </form>
  </div>
</template>

<script>
  export default{
      data: function () {
        return{
          pick1: '',
          pick2: '',
          pick3: '',
          pick4: '',
          pick5: '',

          language: '',
          styles: '',
          place: '',
          emotion: '',
          theme: '',

          radio1: false,
          radio2: false,
          radio3: false,
          radio4: false,
          radio5: false,

          num: null,
          firstArr: [
             '语种','风格','场景','情感','主题'
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
          name: '',
          creator: '',
          createTime: '',
          coverUrl: '../static/img/',
          creatorPhoto: '../static/img/',
          collectNum: '',
          listenNum: '',
          forwarding: '',
          selected: '--请选择--',
          type: '--请选择--',
          introduce: '',
          singNames: ''
        }
      },
    methods: {
          getlanguage: function () {
            if (this.language){
              this.radio1 = true;
            }else {
              this.radio1 = false;
              this.pick1 = ''
            }
          },
      getstyle: function () {
        if (this.styles){
          this.radio2 = true;
        }else {
          this.radio2 = false;
          this.pick2 = ''
        }
      },
      getplace: function () {
        if (this.place){
          this.radio3 = true;
        }else {
          this.radio3 = false;
          this.pick3 = ''
        }
      },
      getemotion: function () {
        if (this.emotion){
          this.radio4 = true;
        }else {
          this.radio4 = false;
          this.pick4 = ''
        }
      },
      gettheme: function () {
        if (this.theme){
          this.radio5 = true;
        }else {
          this.radio5 = false;
          this.pick5 = ''
        }
      },
      insert: function () {
        let _this = this;
        let obj = {
          name: _this.name,
          creator: _this.creator,
          createTime: _this.createTime,
          coverUrl: _this.coverUrl,
          creatorPhoto: _this.creatorPhoto,
          collectNum: _this.collectNum,
          listenNum: _this.listenNum,
          forwarding: _this.forwarding,
          language: _this.pick1,
          styles: _this.pick2,
          place: _this.pick3,
          emotion: _this.pick4,
          theme: _this.pick5,
          introduce: _this.introduce,
          singNames: _this.singNames
        };
        _this.$axios.post('/api/admin/list',obj,{
          // 请求头信息
          headers: {'X-Requested-With': 'XMLHttpRequest'},
          //返回数据类型
          responseType: 'json' // default
        })
          .then(function (res) {
            if (res){
                alert('添加成功');
              _this.name= '';
                _this.creator= '';
                _this.createTime= '';
                _this.coverUrl= '../static/img/';
                _this.creatorPhoto= '../static/img/';
                _this.collectNum= '';
                _this.listenNum= '';
                _this.forwarding= '';
                _this.language = '';
                _this.styles = '';
                _this.place = '';
                _this.emotion = '';
                _this.theme = '';
                _this.pick1 = '';
                _this.pick2 = '';
                _this.pick3 = '';
                _this.pick4 = '';
                _this.pick5 = '';
                _this.introduce= '';
                _this.singNames= '';
                _this.radio1= false;
                _this.radio2= false;
                _this.radio3= false;
                _this.radio4= false;
                _this.radio5= false;
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
  .radio1{
    padding: 3px 14px;
    text-align: left;
  }
  .radio2{
    padding: 3px 10px;
    text-align: left;
  }
  .checkbox{
    font-size: 13px;
    color: #999;
  }
  .lyric{
    position: relative;
    top: -38px;
  }
  .lyric1{
    position: relative;
    top: -58px;
  }
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
  input[type='date']{
    width: 65%;
    height: 25px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
