import React from 'react';
const axios = require('axios');


class UpdateForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {newName:'',newDescription:''};

    this.handleNewNameChange = this.handleNewNameChange.bind(this);
    this.handleNewDescriptionChange = this.handleNewDescriptionChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }


  handleUpdate(event){

    event.preventDefault();
    console.log('Sumbitted');

    console.log('Old cow:',this.props.oldCow);
    console.log('New cow:',this.state);
    let cows = {oldCow:this.props.oldCow,newCow:this.state};
    console.log(cows);
    axios.put('/api/cows',cows)
      .then((response)=>{
        console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  handleNewNameChange(event){
    event.preventDefault();
    let newName = event.target.value;
    this.setState({newName:newName});
  }

  handleNewDescriptionChange(event){
    event.preventDefault();
    let newDesc = event.target.value;
    this.setState({newDescription:newDesc});
  }



  render(){
    return(<form onSubmit={this.handleUpdate}>
      <input type="text" value={this.state.newName} placeholder="Enter New cow name" onChange={this.handleNewNameChange}></input>
      <input type="text" value={this.state.newDescription} placeholder="Enter New description" onChange={this.handleNewDescriptionChange}></input>
      <input type="submit" value="Update"></input>
    </form>)
  }
}

export default UpdateForm;