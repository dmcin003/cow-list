import React from 'react';
import Cow from './Cow.js';
import CowForm from './CowForm.js';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={cows:props.cowlist,
    currentCow: ''
    }
  }


  render(){
    return (<div>
      <div><CowForm /></div>
      {this.props.cowlist.map((cow)=>{
        return <Cow cow={cow}/>
      })}
    </div>)
  }

}

export default App;


