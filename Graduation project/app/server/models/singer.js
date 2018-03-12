//歌手
const mongoose = require('./db');
const musicSchema = new mongoose.Schema({
  //歌手
  name: {type: String, required: true},//歌手名字（或者乐队名字）
  sex: {type: String, required: true},//歌手性别
  country: {type: String, required: true},//歌手国籍
  boolen: Boolean,//是否是组合乐队
  singerPhoto: String,//歌手照片地址
  introduce: String,
  achievement: String,
  performance: String,
  welfare: String,
  won: String,
  concert: String,
  longExperience: String,
  otherMessage: String
});
const music = module.exports = mongoose.model('singer',musicSchema);
