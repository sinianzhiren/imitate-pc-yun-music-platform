//主播电台
let mongoose = require('./db');
let radio = new mongoose.Schema({
  title: {type: String, required: true},//电台名字
  name: {type: String, required: true},//创建人的名字
  creatorPhoto: {type: String, required: true},//创建人图片地址
  type: String,//电台类型
  coverIntroduce: String,//封面简介，一句话
  coverUrl: String,//封面图片的地址
  detail: String,//点太详细介绍
  programNames: Array//包括的节目
  //Lists: [
  // { singName(歌曲标题): '',playNum(播放次数): '', fabulous(赞的次数): '', updateDate(更新时间): '', playTime(时长): ‘’ , singUrl: '' }
  // ]

});
let station = module.exports = mongoose.model('radio_station',radio);
