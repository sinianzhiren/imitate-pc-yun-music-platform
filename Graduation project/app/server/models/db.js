var mongoose = require('mongoose');
//设置mongoose存储路径
var URL = 'mongodb://localhost:27017/singerMusic';
//连接数据库
mongoose.connect(URL);
//连接成功输出语句
mongoose.connection.on('connected',function () {
  console.log('mongoose connect' + URL + 'success');
});
//连接异常抛出的错误
mongoose.connection.on('error',function (err) {
  console.log('mongoose connect error'+err);
});
//断开连接输出的语句
mongoose.connection.on('disconnected',function () {
  console.log('mongoose disconnected');
});
//导出mongoose对象
module.exports = mongoose;
