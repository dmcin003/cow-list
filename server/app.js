const express = require('express');
const db = require('./db/index.js');
const morgan = require('morgan');
const path = require('path');
const cows = require('./db/models/cows.js');


const app = express();

const port = 1644;

//middleware
app.use(express.json());
app.use(morgan('dev'));

//need to serve client files here
app.use(express.static(path.join(__dirname,'../public')));

//get request to /api/cows
app.get('/api/cows',(req,res)=>{
  // res.json('We gonna get all the cows');
  cows.getAll((err,data)=>{
    if(err){
      throw new Error(err);
    }else{
      res.json(data);
    }
  })

});
//post request to /api/cows
app.post('/api/cows',(req,res) =>{
  let cow = req.body;
  cows.create(cow,(err,data)=>{
    if(err){
      throw new Error(err);
      res.writeHead(400).end();
    }else{
      res.json(data);

    }
  })
});

//put request to /api/cows
app.put('/api/cows',(req,res)=>{
  console.log('sent cows:>>>', req.body);

  let {oldCow,newCow} = req.body;
  cows.update(newCow,oldCow,(err,data)=>{
    if(err){
      throw new Error(err);
    }else{

      res.json(data);
    }
  })

})



app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{

    console.log(`Server listening on localhost: ${port}`);
  }
});