//新碟上架
let mongoose = require('./db');
let albumNum = new mongoose.Schema({
  albumTitle: {type: String, required: true},
  singerName: {type: String, required: true},
  albumCountry: {type: String, required: true},
  albumUrl: {type: String, required: true},
  releaseTime: {type: String, required: true},
  releaseCompany: {type: String, required: true},
  albumIntroduce: {type: String, required: true},
  includeSong: {type: String, required: true}
});
let albums = module.exports = mongoose.model('album', albumNum);

