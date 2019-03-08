var mysql  = require('mysql');
var express=require("express");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database: 'webwork',
});

function find(set,callback){
var  addSql = 'select * from sitmore where moviename = ? ';
var  addSqlParams = [set.name];
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('find ERROR - ',err.message);
         return;
        }

       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);
       console.log('find ID:',result[0]);
       console.log('-----------------------------------------------------------------\n\n');

       callback(result[0]);
       return;
});
};

exports.find=find;
