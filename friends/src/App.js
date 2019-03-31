import React, { Component } from 'react';

import FriendDisplayList from './components/FriendDisplayList'
import './App.css';
import axios from 'axios'
import FriendFormTwo from './components/FriendFormTwo'
{/* */}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       friendData: [],
       age:"",
       email:"",
       id:"",
       name:"",
    };
    
  }

componentDidMount(){
  console.log('CDM');
  axios.get('http://localhost:5000/friends')
  
  .then(objectArrays=>this.setState({friendData:objectArrays.data}))
  .catch(err=>console.log('err'));
}


handleChanges = typingEvent=>{
  console.log('keyboardinputevent', typingEvent.target);
  this.setState({[typingEvent.target.name]:typingEvent.target.value});
}

updateList = submitEvent => {
  console.log('update invoked')
  submitEvent.preventDefault();
  const newFriend ={
    age: this.state.age,
    email: this.state.email,
    id: this.state.id,
    name: this.state.name
  };
  this.setState({
    friendData:[...this.state.friendData, newFriend]
  });
}

postMessage = submit =>{
  submit.preventDefault();
  axios.post('http://localhost:5000/friends/', submit)
  .then((res)=>{console.log(res)})
  .catch(err=>{console.log(err)})
}
  render() {
    console.log(this.props);
    console.log(this.state.friendData)
    return (
      <div className="App">
        <header className="App-header">
          
          <h2>{this.state.friendData.map(file=><FriendDisplayList data={file} />)}</h2>
          <h1>from app.js</h1>
          <FriendFormTwo
          age={this.state.age}
          email={this.state.email}
          id={this.state.id}
          name={this.state.name}
          handleChanges={this.handleChanges}
          postMessage={this.postMessage}
          updateList={this.updateList}
          />
          
          
      
          
        </header>
      </div>
    );
  }
}

export default App;
