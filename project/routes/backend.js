var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */

router.get('/', function(req, res, next) {
    require("m").post("url",data,succ,err)





    fetch('http://localhost:8080/user/1 ',{
        method:'post',
        body:JSON.stringify({}),
        headers:{'Content-Type':'application/json'},

    }).then(
        res=>console.log(res)
    )




});
module.exports = router;
