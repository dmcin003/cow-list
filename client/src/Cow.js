import React from 'react';
import UpdateForm from './UpdateForm.js';

 function Cow(props){



  return (<div onClick={()=>{props.setCow(props.cow)}}>{props.cow.name}
  <div></div>
  <UpdateForm oldCow={props.cow} renderCows={props.renderCows}/>
  </div>)

}

export default Cow;