import React from 'react';

 function Cow(props){



  return (<div onClick={()=>{props.setCow(props.cow)}}>{props.cow.name}</div>)

}

export default Cow;