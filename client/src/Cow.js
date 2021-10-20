import React from 'react';
import UpdateForm from './UpdateForm.js';
import DeleteButton from './DeleteButton.js';

 function Cow(props){
  return (
  <div>
    <div onClick={()=>{props.setCow(props.cow)}}>{props.cow.name}</div>
  <UpdateForm oldCow={props.cow} renderCows={props.renderCows}/>
  <DeleteButton cow={props.cow}/>
  </div>)

}

export default Cow;