var mysql  = require('mysql');
var express=require("express");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database: 'webwork',
});
var back = 0;

function have(set,callback){
console.log(set.sit);
var add_data = [set.sit,set.name];
var innterdata = [set.user,set.name,set.price,set.thisord];
var  addSql = 'update sitmore set siting = ? where moviename = ?';
var innter = 'INSERT INTO orde(user,movname,price,sit) VALUES(?,?,?,?)';
connection.query(addSql,add_data,function (err, result) {
              if(err){
               console.log('[INSERT ERROR] - ',err.message);
               return;
              }

             console.log('--------------------------xxxxxx----------------------------');
             //console.log('INSERT ID:',result.insertId);
             console.log('xxxxxx ID:',result);
             console.log('-----------------------------------------------------------------\n\n');
             back = 1;
             //callback(result);
             callback(back);
             return;
      });

      connection.query(innter,innterdata,function (err, result) {
                    if(err){
                     console.log('[INSERT ERROR] - ',err.message);
                     return;
                    }

                   console.log('--------------------------xxxxxx----------------------------');
                   //console.log('INSERT ID:',result.insertId);
                   console.log('xxxxxx ID:',result);
                   console.log('-----------------------------------------------------------------\n\n');
                   back = 1;
                   //callback(result);
                   return;
            });
};

exports.have=have;
