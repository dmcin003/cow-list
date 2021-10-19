import React from 'react';


class CowForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {name:'', description: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('Sumbitted');
  }

  render(){
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.name} placeholder="Enter Cow name"></input>
      <input type="text" value={this.state.description} placeholder="Enter description"></input>
      <input type="submit" value="Submit"></input>
    </form>)
  }
}

export default CowForm;