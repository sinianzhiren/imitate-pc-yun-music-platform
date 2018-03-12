var express = require('express');
var router = express.Router();
require('mongoose');
require('../models/db');
let ranking = require('../models/ranking_list');
let singList = require('../models/sing_list');
let station = require('../models/radio_station');
let singers = require('../models/singer');
let mvs = require('../models/mv');
let album = require('../models/album');
let register = require('../models/register');
/*首页请求*/
router.get('/music', function(req, res) {
      ranking.find({'type': '云音乐新歌榜'},null,{limit: 10},function (err,response) {
         res.json(response);
      });
});
router.get('/music1', function(req, res) {
  ranking.find({'type': '云音乐飙升榜'},null,{limit: 10},function (err,response) {
    res.json(response);
  });
});
router.get('/music2', function(req, res) {
  ranking.find({'type': '网易原创歌曲榜'},null,{limit: 10},function (err,response) {
    res.json(response);
  });
});
//后台管理页面
router.post('/admin',function (req,res) {
  console.log(req.body);
  let num = new ranking({
    title: req.body.title,
    name: req.body.name,
    album: req.body.album,
    playTime: req.body.playTime,
    type: req.body.type,
    singUrl: req.body.singUrl,
    composer: req.body.composer,
    lyricist: req.body.lyricist,
    arranger: req.body.arranger,
    zanNum: req.body.zanNum,
    playNum: req.body.playNum,
    singPhoto: req.body.singPhoto,
    createTime: req.body.createTime,
    lyric: req.body.lyric,
    updateTime: new Date()
  });
  num.save(function (err,res) {
    if (res){
      console.log('success'+ res)
    }else {
      console.log('Error'+ res)
    }
  });
  res.json('ok');
});
router.post('/admin/list',function (req,res) {
  let list = ({
    name: req.body.name,
    creator: req.body.creator,
    createTime: req.body.createTime,
    coverUrl: req.body.coverUrl,
    creatorPhoto: req.body.creatorPhoto,
    collectNum: req.body.collectNum,
    listenNum: req.body.listenNum,
    forwarding: req.body.forwarding,
    type: [req.body.language , req.body.styles , req.body.place , req.body.emotion , req.body.theme],
    introduce: req.body.introduce,
    singNames: req.body.singNames.split('，')
  });
  singList.create(list,function (err,res) {
    if (err){
      console.log('Error'+ err)
    }else {
      console.log('Success'+ res)
    }
  });
  res.json('ok');
});
router.post('/admin/station',function (req,res) {
  let list = ({
    title: req.body.title,
    name: req.body.name,
    creatorPhoto: req.body.creatorPhoto,
    type: req.body.type,
    coverIntroduce: req.body.coverIntroduce,
    coverUrl: req.body.coverUrl,
    detail: req.body.detail,
    programNames: req.body.programNames.split('，')
  });
  station.create(list,function (err,res) {
    if (err){
      console.log('Error'+ err)
    }else {
      console.log('Success'+ res)
    }
  });
  res.json('ok')
});
router.post('/admin/singer',function (req,res) {
  let list = new singers({
    name: req.body.name,
    sex: req.body.sex,
    country: req.body.country,
    boolen: req.body.boolen,
    singerPhoto: req.body.singerPhoto,
    introduce: req.body.introduce,
    achievement: req.body.achievement,
    performance: req.body.performance,
    welfare: req.body.welfare,
    won: req.body.won,
    concert: req.body.concert,
    longExperience: req.body.longExperience,
    otherMessage: req.body.otherMessage
  });
  list.save(function (err,res) {
    if (err){
      console.log('Error'+ err)
    }else {
      console.log('Success'+ res)
    }
  });
  res.json('ok');
});
router.post('/admin/mv',function (req,res) {
  let list = ({
      title: req.body.title,
      name: req.body.name,
      photoAddress: req.body.photoAddress,
      playAddress: req.body.playAddress,
      releaseTime: req.body.releaseTime || new Date(),
      playNum: req.body.playNum,
      mvIntroduce: req.body.mvIntroduce
    }
  );
  mvs.create(list,function (err,res) {
    if (err){
      console.log('Error'+ err)
    }else {
      console.log('Success'+ res)
    }
  });
  res.json('ok');
});
router.post('/admin/album',function (req,res) {
  let list = new album({
    albumTitle: req.body.albumTitle,
    singerName: req.body.singerName,
    albumCountry: req.body.albumCountry,
    albumUrl: req.body.albumUrl,
    releaseTime: req.body.releaseTime || new Date(),
    releaseCompany: req.body.releaseCompany,
    albumIntroduce: req.body.albumIntroduce,
    includeSong: req.body.includeSong
  });
  list.save(function (err,res) {
    if (err){
      console.log('Error'+ err)
    }else {
      console.log('Success'+ res)
    }
  });
  res.json('ok');
});
router.post('/find',function (req,res) {
  console.log(req.body);
  ranking.find({'type': req.body.type},function (err,response) {
    res.json(response)
  })
});
router.post('/rank',function (req,res) {
  let val = null;
    if (req.body.type){
      val = req.body.type;
    }
  ranking.find({'type': val},function (err,response) {
    res.json(response)
  })
});
router.get('/songList',function (req,res) {
  singList.find({},null,{limit: 35},function (err,response) {
    res.json(response)
  })
});
router.get('/all',function (req,res) {
  singList.find({},null,function (err,response) {
    res.json(response)
  })
});
router.post('/getList',function (req,res) {
  singList.find({type: req.body.type},null,{limit: 35},function (err,response) {
    res.json(response)
  })
});
router.get('/getSingers',function (req,res) {
  singList.find({},null,{limit: 10},function (err,response) {
    res.json(response)
  })
});
router.get('/getStation',function (req,res) {
  station.find({},null,{limit: 10},function (err,response) {
    res.json(response)
  })
});
router.get('/getNews',function (req,res) {
  station.find({})
          .skip(10)
          .limit(10)
          .exec(function (err,response) {
            if (err){
              console.log(err)
            }else {
              res.json(response)
            }
          })
});
router.get('/musicStory',function (req,res) {
  station.find({type: '音乐故事'},null,{limit: 4},function (err,response) {
    res.json(response)
  })
});
router.get('/beautiful',function (req,res) {
  station.find({type: '美文读物'},null,{limit: 4},function (err,response) {
    res.json(response)
  })
});
router.get('/tuokouxiu',function (req,res) {
  station.find({type: '脱口秀'},null,{limit: 4},function (err,response) {
    res.json(response)
  })
});
router.get('/getemotion',function (req,res) {
  station.find({type: '情感调频'},null,{limit: 4},function (err,response) {
    res.json(response)
  })
});
router.get('/createSing',function (req,res) {
  station.find({type: '创作|翻唱'},null,{limit: 4},function (err,response) {
    res.json(response)
  })
});
router.get('/gethistory',function (req,res) {
  station.find({type: '人文历史'},null,{limit: 4},function (err,response) {
    res.json(response)
  })
});
router.get('/singerNews',function (req,res) {
  singers.find({},null,{limit: 10},function (err,response) {
    res.json(response)
  })
});
router.get('/hot',function (req,res) {
  singers.find({})
    .skip(10)
    .limit(10)
    .exec(function (err,response) {
      if (err){
        console.log(err)
      }else {
        res.json(response)
      }
    })
});
router.get('/singerName',function (req,res) {
  singers.find({},
    {
      'name': 1
    },{},function (err,response) {
    res.json(response)
  })
});
router.get('/getCd',function (req,res) {
  album.find({},null,{limit: 10},function (err,response) {
    res.json(response)
  })
});
router.get('/getOtherCd',function (req,res) {
  album.find({})
        .skip(10)
        .limit(35)
        .exec(function (err,response) {
          if (err){
            console.log(err)
          }else {
            res.json(response)
          }
        })
});
router.get('/getUrl',function (req,res) {
  album.find({},null,{limit: 15},function (err,response) {
    res.json(response)
  })
});






router.post('/findStation',function (req,res) {
  station.find({type: req.body.type},null, {limit: 10}, function (err,response) {
    res.json(response)
  })
});
//用户注册的请求
router.post('/register',function (req,res) {
  let user = new register (
    {
      username: req.body.username,
      password: req.body.password
    }
  );
  user.save(function (err,response) {
    if (err){
      console.log(err)
    }else {
      res.json('ok')
    }
  })
});
//用户登录
router.post('/login',function (req,res) {
  let password = req.body.password;
  let name = req.body.username;
  register.find({
    username: req.body.username
  },null,{},function (err,response) {
    if (err){
      console.log(err)
    }else if (response == ''){
      res.json('wu')
    }else {
      let resPassword = response[0].password;
      let username = response[0].username;
       if (username != 'admin' && resPassword === password){
        res.json('success')
      }else if (name != username || password != resPassword){
        res.json('errUsername || errPassword')
      }else if (name == username && password != resPassword){
        res.json('errPassword')
      } else if (username = 'admin' && resPassword == 'abc123'){
        res.json('http://localhost:8080/admin')
      }
    }
  })
});
//删除歌曲信息
router.post('/remove',function (req,res) {
  let id = {
    _id: req.body.id
  };
  ranking.remove(id,function (err,response) {
    if (err){
      console.log("Error"+ err)
    }else {
      res.json('ok')
    }
  })
});
//获取需要修改的信息
router.post('/getUpdate',function (req,res) {
  ranking.find({_id: req.body.id},null,function (err,response) {
    if (err){
      console.log(err)
    }else {
      res.json(response)
    }
  })
});
//更新歌曲信息
router.post('/updated',function (req,res) {
  let id = req.body.id;
  let needUpdate = {
    title: req.body.title,
    name: req.body.name,
    album: req.body.album,
    playTime: req.body.playTime,
    type: req.body.type,
    singUrl: req.body.singUrl,
    composer: req.body.composer,
    lyricist: req.body.lyricist,
    arranger: req.body.arranger,
    zanNum: req.body.zanNum,
    playNum: req.body.playNum,
    singPhoto: req.body.singPhoto,
    createTime: req.body.createTime,
    lyric: req.body.lyric
  };
  ranking.findByIdAndUpdate(id,needUpdate,function (err,response) {
    if (err){
      console.log(err)
    }else {
      res.json('ok')
    }
  })
});


module.exports = router;

