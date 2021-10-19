import React from 'react';

 function Cow(props){
  console.log(props);

  return (<div>{props.cow.name}</div>)

}

export default Cow;