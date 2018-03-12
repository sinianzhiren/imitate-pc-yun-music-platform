//排行榜
let mongoose = require('./db');
let schema = mongoose.Schema;
let rankSchema = new schema({
  //排行榜
 title: {type: String},//歌曲名字
  name: {type: String},//歌手名字
  album: {type: String},//所属专辑
  playTime: {type: String},//播放时长
  type: {type: String},//什么排行榜
  singUrl: {type: String},//歌曲URL
  composer: {type: String},//作曲家名字
  lyricist: {type: String},//作词家名字
  arranger: {type: String},//编曲家名字
  zanNum: {type: Number},//点赞次数
  playNum: {type: Number},//播放次数
  singPhoto: {type: String},//歌曲图片URL
  createTime: {type: String},//创作的时间
  lyric: {type: String},//歌词
  updateTime: {type: Date, default: new Date()}//添加事件时间

});
module.exports = mongoose.model('ranking_list',rankSchema);

