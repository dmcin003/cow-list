const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host:'localhost',
    user:'root',
    password:'',
    database:'dairyfarm'
  }

);

connection.connect((err)=>{
  if(err){
    console.log(err.stack);
  }else{
    console.log(`Connected as id ${connection.threadId}`)
  }
});

module.exports = connection;