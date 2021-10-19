import React from 'react';
import Cow from './Cow.js';
import CowForm from './CowForm.js';
const axios = require('axios');


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={cows:props.cowlist,
    currentCow: {}
    }

    this.setCurrentCow = this.setCurrentCow.bind(this);
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

  setCurrentCow(cow){
    console.log(cow);


    this.setState({currentCow: cow})
  }


  render(){
    return (<div>
      <h1>Cow's List</h1>
      <div><h3>{this.state.currentCow.name}</h3>
      <h3>{this.state.currentCow.description}</h3></div>
      <div><CowForm /></div>
      {this.state.cows.map((cow)=>{
        return <Cow setCow ={this.setCurrentCow} cow={cow}/>
      })}
    </div>)
  }

}

export default App;


