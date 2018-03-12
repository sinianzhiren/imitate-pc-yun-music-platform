// Model创造Entity实体，对数据库操作
let ranking_list = require('../sing_list');
//创建一个插入数据库的函数
function insert() {
  //用module创建一个entity实体，
  let num = ({
      name: '小苹果',
      creator: '李白',
      createTime: '2017-10-11',
      coverUrl: '../../../static/music/小苹果.png',
      creatorPhoto: '../../../static/music/李白.png',
      collectNum: 20,
      listenNum: 200,
      forwarding: 100,
      language: '英语',
      style: '',
      place: '工作',
      emotion: '',
      theme: '影视原声',
      introduce: '小苹果黑好听',
      singNames: ['李白','杜甫','白居易']
  });
  //调用save()方法
  ranking_list.create(num,function (res,err) {
    if (res){
      console.log('success'+ res)
    }else {
      console.log('Error '+ err)
    }
  })
}
insert();
