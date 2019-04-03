import React, { Component } from 'react';


{/* onSubmit={this.postMessage} */}

class  FriendFormTwo extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
    }
  }

  postMessage = e =>{
    e.preventDefault();
    console.log('postMessage function from FriendFormTwo invoked');
    let friend = {
      age: this.props.age,
      email: this.props.email,
      id: this.props.id,
      name: this.props.name,
    }
    this.props.updateList(friend)
  }

  

render(){
  return(
      <form > 
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
      <button onClick={this.postMessage}>Update FriendList</button>
      {/*<button type="submit">Post Contact</button> */}
    </form>

  )
}
  
    
  

}
export default FriendFormTwo;
