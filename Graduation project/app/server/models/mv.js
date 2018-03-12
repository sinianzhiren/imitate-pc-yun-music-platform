//新碟上架
let mongoose = require('./db');
let XindieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  name: {type: String, required: true},
  photoAddress: {type: String, required: true},
  playAddress: {type: String, required: true},
  releaseTime: {type: String, required: true},
  playNum: {type: Number, required: true},
  mvIntroduce: {type: String, required: true}

});
let mvs = module.exports = mongoose.model('mv', XindieSchema);
