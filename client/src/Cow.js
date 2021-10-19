import React from 'react';

 function Cow(props){
  console.log(props);
  function handleClick(event){
    console.log('I was clicked');
  }

  return (<div onClick={handleClick}>{props.cow.name}</div>)

}

export default Cow;