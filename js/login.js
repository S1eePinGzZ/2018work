var mysql  = require('mysql');
var express=require("express");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database: 'webwork',
});
function login(set,callback){
var  addSql = 'select * from user where id = ? AND pass = ? ';
var  addSqlParams = [set.id, set.pass];
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }
        else if( result.length != 0 )
        {
          console.log("登陆成功");
          var back = {
            status : 1 ,
            name : result[0].name,
            id : result[0].id
          }
          callback(back);
        }
       else{
         var back = {
           status : 2 ,
           name : ""
         }
         console.log("登录失败");
         callback(back);
       }
});
};

exports.login=login;
