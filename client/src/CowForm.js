import React from 'react';
const axios = require('axios')


class CowForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {name:'', description: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(event){

    event.preventDefault();
    console.log('Sumbitted');
    console.log(this.state.name);
    console.log(this.state.description);
    axios.post('/api/cows', this.state)
      .then((response)=>{
        // console.log(this.state);
      })
      .catch((err)=>{
        console.log(err);
      });

    this.props.renderCows();
  }

  handleNameChange(event){
    event.preventDefault();
    let cowName = event.target.value;
    this.setState({name:cowName});
  }

  handleDescriptionChange(event){
    event.preventDefault();
    let cowDesc = event.target.value;
    this.setState({description:cowDesc})
  }





  render(){
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.name} placeholder="Enter Cow name" onChange={this.handleNameChange}></input>
      <input type="text" value={this.state.description} placeholder="Enter description"onChange={this.handleDescriptionChange}></input>
      <input type="submit" value="Submit"></input>
    </form>)
  }
}

export default CowForm;