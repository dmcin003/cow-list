import React from 'react';
import Cow from './Cow.js';
import CowForm from './CowForm.js';
const axios = require('axios');


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={cows:props.cowlist,
    currentCow: ''
    }
  }

  componentDidMount(){
    console.log('Im app and Im here');
    var cowsList;
    axios.get('/api/cows')
      .then(({data})=>{
        console.log(data);
        cowsList = data;
        this.setState({cows:cowsList});
      })
      .catch((err)=>{
        console.log(err);
      })
  }


  render(){
    return (<div>
      <div><CowForm /></div>
      {this.state.cows.map((cow)=>{
        return <Cow cow={cow}/>
      })}
    </div>)
  }

}

export default App;


