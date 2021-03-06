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
      res.writeHead(500).send(err);
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
      res.writeHead(500).send(err);
    }else{
      res.json(data);

    }
  })
});

//put request to /api/cows
app.put('/api/cows',(req,res)=>{


  let {oldCow,newCow} = req.body;
  cows.update(newCow,oldCow,(err,data)=>{
    if(err){
      res.writeHead(500).send(err);
    }else{

      res.json(data);
    }
  })

});


app.delete('/api/cows',(req,res)=>{
  console.log('MY REQUEST:',req.cow);
  console.log('MY REQUEST:',req.body);
  let cow = req.body;
  cows.delete(cow,(err, data)=>{
    if(err){
      console.log('I am here');
      res.writeHead(500).send(err);
    } else {
      console.log('Am I here');
      res.json(data);
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