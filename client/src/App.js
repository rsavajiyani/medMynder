import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Profile from './pages/Profile';
// import Landing from './pages/Landing';
import Edit from './pages/Edit';
import SignIn from './components/SignIn';
// import { createHashHistory } from "history";
// import API from './utils/API.js';


class App extends Component {
  constructor(props){
    super(props)
    // const history = createHashHistory()
    this.state = { patientID: ""}
  }

  

  setUser = id => {
    this.setState({
      patientID: id
    });
    console.log("patientID passed in from Signup", this.state.patientID); //Signup component is sending userID here, but it is not being sent to the Profile component as a prop
    
  }

  render() {
    return (
      <Router>
      <div className="App">

          <Route exact path="/signup" render={(props) => <Signup {...this.props} setUser={this.setUser}/>} />  
          <Route exact path="/" render={(props) => <SignIn {...this.props} setUser={this.setUser}/>} />  
          {/* sending this patientID prop to the profile component is not working */}
          <Route exact path="/profile" render={(props) => <Profile {...this.props} patientID={this.state.patientID}/>} />
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/edit" component={Edit} />
      </div>
       </Router>
    );
  }
}

export default App;
