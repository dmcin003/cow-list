import React from 'react';
const axios = require('axios');


let Delete = (props)=>{

  let handleClick = (event)=>{
    console.log('Hi I am a cow and I am going to be deleted');
    // axios.delete('/api/cows',{data: props.cow})
    //   .then((respone)=>{
    //     console.log(data)

    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
  }

  return(<button onClick={()=>{handleClick()}}>Delete</button>)
}

export default Delete;