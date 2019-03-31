import React, { Component } from 'react';



class  FriendFormTwo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      friendObject:{
        age:'',
        name:'',
        email:'',
        id:''
      }
    }
  }

  postMessage = e =>{
    e.preventDefault();
    this.props.postMessage(this.state.friendObject);
  }

render(){
  return(
      <form onSubmit={this.postMessage}>
      <input 
      type="text"
      value={this.props.age}
      name="age"
      placeholder="age goes here"
      onChange={this.props.handleChanges} //onChange takes in a function 
      />
      <input 
        type="text"
        value={this.props.email}
        placeholder="email goes here"
        name="email"
        onChange={this.props.handleChanges}
      />
      <input 
      type="text"
        value={this.props.id}
        placeholder="id goes here"
        name="id"
        onChange={this.props.handleChanges}
      />
      <input 
      type="text"
        value={this.props.name}
        placeholder="name goes here"
        name="name"
        onChange={this.props.handleChanges}
      />
      <button onClick={this.props.updatelist}>Update FriendList</button>
      <button type="submit">Post Contact</button>
    </form>

  )
}
  
    
  

}
export default FriendFormTwo;
