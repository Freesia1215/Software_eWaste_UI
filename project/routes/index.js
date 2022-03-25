var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/owndevice',function(req,res,next){
  res.render('owndevice',{title:'owndevice'})
})

router.get('/upload',function(req, res){
  res.render('upload.ejs')
})

module.exports = router;
