let mysql=require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'hong',
    password : 'lys020611',
    database : 'scott'
});

let app = express();

connection.connect();

connection.query(' query 명령 ',function(error, results, fileds){
    if(error){
        console.log(error);
    }
    console.log(results);
});
connection.end();