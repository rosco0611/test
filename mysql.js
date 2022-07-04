var express = require("express");
const{clearCookie} = require("express/lib/response");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'hong',
    password : 'lys020611',
    database : 'scott'
});
var app = express();
connection.connect(function(err){
    if(!err){
        console.log("서버가 DB와 잘 연동되었습니다. \n\n");
    } else{
        console.log("서버 DB 연동 오류! \n\n");
    }
});
app.get("/",function(request,response){
    connection.query('SELECT id, 이름, 시급, 근무시간 from scott.hakjum',function(err, rows, fields){
        connection.end();
        if(!err){
            response.send(rows);
            console.log('hakjum table 데이터:', rows);
        }
        else{
            console.log('Hakjum Table Query Error!.');
        }
    });
});
app.listen(52273, ()=>{
    console.log("Server is running at http://127.0.0.1:52273");
});