const express = require('express');
const db = require('./db/index.js');
const morgan = require('morgan');


const app = express();

const port = 1644;

//middleware
app.use(express.json());
app.use(morgan('dev'));

//need to serve client files here

//get request to /api/cows
app.get('/api/cows',(req,res)=>{
  // res.json('We gonna get all the cows');
  db.query('SELECT * FROM cows',(err, data)=>{
    res.json(data);
  })

});
//post request to /api/cows
app.post('/api/cows',(req,res) =>{
  let cow = req.body;
  db.query(`INSERT INTO cows (name,description) VALUES('${cow.name}','${cow.description}')`,(err,data)=>{
    if(err){
      console.log(err);
      res.writeHead(400).end();

    }else{

      res.json(cow);
    }
  })
});



app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{

    console.log(`Server listening on localhost: ${port}`);
  }
});