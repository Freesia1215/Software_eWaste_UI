const fetch = require("node-fetch");
var re={}
re.post=function (u,d,s)
{
    fetch(u,{
        method:'post',
        body:JSON.stringify(d),
        headers:{'Content-Type':'application/json'},

    }).then(
        res=>console.log(res))
        .then(json =>
            re.render('index',{title:s}))
        .catch(err =>
            re.render('index',{title:err}))


;
};

module.exports=re;