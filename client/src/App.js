import React from 'react';
import Cow from './Cow.js';
import CowForm from './CowForm.js';
const axios = require('axios');


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      cows:[],
      currentCow: {}
    }

    this.setCurrentCow = this.setCurrentCow.bind(this);
    this.getCows = this.getCows.bind(this);

  }

  componentDidMount(){
    this.getCows();
  }

  getCows(){

    axios.get('/api/cows')
      .then(({data})=>{
        // console.log(data);

        this.setState({cows:data});
      })
      .catch((err)=>{
        console.log(err);
      })

  }

  setCurrentCow(cow){
    this.setState({currentCow: cow})
  }




  render(){
    return (<div>
      <h1>Cow's List</h1>
      <div>
        <h3>{this.state.currentCow.name}</h3>
        <h3>{this.state.currentCow.description}</h3>
      </div>
      <h4>Enter new Cow here</h4>
      <div><CowForm renderCows={this.getCows}/></div>
      <h4>Update cows here</h4>
      {this.state.cows.map((cow, i)=>{
        return <Cow key={i} setCow ={this.setCurrentCow} cow={cow} renderCows={this.getCows}/>
      })}
    </div>)
  }

}

export default App;


