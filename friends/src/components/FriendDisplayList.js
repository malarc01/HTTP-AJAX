import React, { Component } from 'react';


import FriendForm from './FriendForm'


{/* */}
class FriendDisplayList extends Component {

  constructor(props) {
    super(props);
    this.state = {
       friendData: '[]', 
       
    };
    
  }


  render() {
    console.log(this.props);
    console.log(this.state.friendData)
    return (
      <div className="friend-list">
        <header className="friend-display-list">
        <h1>Friend ID #: {this.props.data.id}</h1>
        <h2>Friend is {this.props.data.age} years old. </h2>
        <h3>Email: {this.props.data.email} </h3>
        <h4>ID is {this.props.data.id} </h4>
        <h5>Goes by {this.props.data.name} </h5>
        <h6>From Component FriendDisplayList</h6>
        </header>
        
        {/* 
        <FriendForm
        age={this.state.friendData.age}
        email={this.state.friendData.email}
        id={this.state.friendData.id}
        name={this.state.friendData.name}
        
        />*/}
        


      </div>
    );
  }
}

export default FriendDisplayList;
