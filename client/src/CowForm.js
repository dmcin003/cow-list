import React from 'react';
const axios = require('axios')


class CowForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {name:'', description: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){

    event.preventDefault();

    axios.post('/api/cows', this.state)
      .then((response)=>{
        // console.log(this.state);
        this.props.renderCows();
      })
      .catch((err)=>{
        console.log(err);
      });

   this.setState({name:'',description:''});

  }



  handleChange(e) {

    this.setState({
      [e.target.name]:e.target.value
    })

  }





  render(){
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Name
      <input type="text" name='name' value={this.state.name} placeholder="Enter Cow name" onChange={this.handleChange}></input>
      </label>
      <label>
        Description
      <input type="text" name='description' value={this.state.description} placeholder="Enter description"onChange={this.handleChange}></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>)
  }
}

export default CowForm;