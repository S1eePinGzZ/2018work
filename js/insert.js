var mysql  = require('mysql');
var express=require("express");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database: 'webwork',
});
var back = 0;
function insert(set,callback){
var  addSql = 'INSERT INTO user(id,pass,name) VALUES(?,?,?)';
var  findSql = 'select * from user where id = ? ';
var find_data = [set.id];
console.log(set.id, set.pass,set.name);
var  addSqlParams = [set.id, set.pass, set.name];
connection.query(findSql,find_data,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }
        else if(result.length != 0)
        {
          console.log("账号已存在");
          back = 2;
          callback(back);
        }
      else
      {
      connection.query(addSql,addSqlParams,function (err, result) {
              if(err){
               console.log('[INSERT ERROR] - ',err.message);
               return;
              }

             console.log('--------------------------INSERT----------------------------');
             //console.log('INSERT ID:',result.insertId);
             console.log('INSERT ID:',result);
             console.log('-----------------------------------------------------------------\n\n');
             back = 1;
             //callback(result);
             callback(back);
             return;
      });
    }
});

};

exports.insert=insert;
