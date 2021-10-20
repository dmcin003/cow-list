import React from 'react';
const axios = require('axios');


class UpdateForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {newName:'',newDescription:''};


    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleUpdate(event){

    event.preventDefault();

    let cows = {oldCow:this.props.oldCow,newCow:this.state};

    axios.put('/api/cows',cows)
      .then((response)=>{
        console.log(response);
        this.props.renderCows();
      })
      .catch((err)=>{
        console.log(err);
      });
      this.setState({newName:'',newDescription:''})
  }



  handleChange(event){


    this.setState({[event.target.name]:event.target.value})

  }



  render(){
    return(<form onSubmit={this.handleUpdate}>
      <input type="text" name='newName' value={this.state.newName} placeholder="Enter New cow name" onChange={this.handleChange}></input>
      <input type="text" name='newDescription' value={this.state.newDescription} placeholder="Enter New description" onChange={this.handleChange}></input>
      <input type="submit" value="Update"></input>
    </form>)
  }
}

export default UpdateForm;