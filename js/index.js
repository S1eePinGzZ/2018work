var mysql  = require('mysql');
var http=require("http");
var express=require("express");
var Find = require("./find");
var Have = require("./have");
var Login = require("./login");
var Insert = require("./insert");
var Order = require('./order');
var cookieParase = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database: 'webwork',
});
var app=express();
app.use(cookieParase());
connection.connect();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors({
      origin: '*',
　　credentials: true
}));
app.use(session({
     secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
     cookie: { maxAge: 60 * 1000 }
   }));
console.log("66666");
var x =1;
app.post('/process_login',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
  res.setHeader("Access-Control-Allow-Credentials", true);
          Login.login(req.body,function(result){
            if(result.status){
            res.cookie('id', result.id);
          }
					res.send(JSON.stringify(result));
				});
});

app.post('/process_have',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
  res.setHeader("Access-Control-Allow-Credentials", true);
          Have.have(req.body,function(result){
            console.log(result);
            req.session.randomlog = 'captcha.text';
            console.log('log'   + req.session.randomlog);
            console.log('code'   + req.session.randomcode);
					res.send(JSON.stringify(result));
				});
});

app.post('/process_find',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
  res.setHeader("Access-Control-Allow-Credentials", true);
          Find.find(req.body,function(result){
            console.log(result);
					res.send(JSON.stringify(result));
				});
});
app.post('/process_order',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
  res.setHeader("Access-Control-Allow-Credentials", true);
          Order.order(req.body,function(result){
            console.log(result);
            //console.log(req.cookies.id);
            req.session.randomcode = 'good.text';
             console.log('xxxxx:' + req.session.randomlog);
             console.log('yyyyy:' + req.session.randomcode);
					res.send(JSON.stringify(result));
				});
});
app.post('/process_clear',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
  res.setHeader("Access-Control-Allow-Credentials", true);
          console.log('取得的cookie:'+req.cookies.id);
          res.clearCookie('id');
					res.send(JSON.stringify("ok"));

});

app.post('/process_insert',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
  res.setHeader("Access-Control-Allow-Credentials", true);
  console.log(req.headers.cookie);
          Insert.insert(req.body,function(result){
            if(result == 1){
              res.cookie('id', req.body.id);
            }
            console.log(result);
            var end = {
              status : result
            };
					  res.send(JSON.stringify(end));
				});
});

app.listen(8080);
