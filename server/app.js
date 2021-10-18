const express = require('express');
const db = require('./db/index.js');

const app = express();

const port = 1644;


app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{

    console.log(`Server listening on localhost: ${port}`);
  }
})