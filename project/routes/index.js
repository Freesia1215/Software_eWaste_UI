var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
  res.render('login',{title:'login'})
})

router.get('/signup',function(req,res){
  res.render('signup',{title:'signup'})
})


router.get('/owndevice',function(req,res,next){
  res.render('owndevice',{title:'owndevice'})
})

router.get('/signel-item',function(req,res){
  res.render('signel-item',{title:'signel-item'})
})

router.get('/upload',function(req, res){
  res.render('upload.ejs')
})

router.get('/download',function(req,res,next){
  res.render('download',{title:'download'})
})

router.get('/connect-wallet',function(req,res){
  res.render('connect-wallet',{title:'connect-wallet'})
})


module.exports = router;
