//歌单
let mongoose = require('./db');
let listSchema = new mongoose.Schema({
  name: {type: String, required: true},//歌单名字
  creator: {type: String, required: true},//创建人的名字
  createTime: {type: String, required: true},//歌单创建时间
  coverUrl: {type: String, required: true},//歌单图片地址
  creatorPhoto: {type: String, required: true},//创建人图片地址
  collectNum: Number,//收藏次数
  listenNum: Number,//收听次数
  forwarding: Number,//转发次数
  type: Array,
  introduce: String, //歌单简介
  singNames: Array//歌单包括的歌名
  //list: [
  // {singName(歌曲标题): '', playTime(时长): ‘’， singer(歌手): '', album(专辑): '' }
  // ]
});
let singList = module.exports = mongoose.model('sing_list',listSchema);

