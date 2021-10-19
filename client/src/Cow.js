import React from 'react';

 function Cow(props){
  console.log(props);


  return (<div onClick={()=>{props.setCow(props.cow)}}>{props.cow.name}</div>)

}

export default Cow;