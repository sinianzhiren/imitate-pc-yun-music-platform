//用户注册
let mongoose = require('./db');
let registers = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});
let regist = module.exports = mongoose.model('register',registers);

