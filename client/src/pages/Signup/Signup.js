import React from "react";
import { Redirect } from "react-router-dom";
import "./Signup.css";
// import { browserHistory } from "react-router";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";

// import InlineInput from "../../components/InlineInput";
// import Jumbotron from "../../components/Jumbotron";
// import Profile from "../../pages/Profile";
import API from "../../utils/API"
import Nav2 from '../../components/Nav2';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      gender:"",
      email: "",
      password: "",
      signedup: ""
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ //assigning form input to state variables
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
       event.preventDefault();
      //  document.getElementById("form").reset();
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      gender:"",
      username: "",
      password: ""
    });
;
      // alert("Form submitted.")
      API.saveUser({
        first: this.state.firstName,
        last: this.state.lastName,
        phone: this.state.phone,
        dob: this.state.dateOfBirth,
        gender: this.state.gender,
        username: this.state.username,
        password: this.state.password
      })
      //what do we want to do here? prob redirect
      // user to the profile page? how to write
      // res redirect in es6 also need to clear page
      .then(patientID=> {
        console.log("this is the patient ID:", patientID)
        console.log("first name?", this.state.firstName)
        this.props.setUser(patientID)
        this.setState({signedup:"true"})})
      .catch(err => console.log(err));
  //   
   };

  render() {
    if (this.state.signedup == "true") {
      return <Redirect to="/profile"/>
    }
    return <div>

        <Nav2 />
        <div className="container">
          <h3 className="text-align center"> - Register - </h3>

          <form id="registerform">
            <br />
            <div className="row">
              <div className="col s3" />

              <div className="col s9">
                <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" label="First name" />
                <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" label="Last name" />
                <Input value={this.state.phone} onChange={this.handleInputChange} name="phone" label="Phone (ex: 2938202938)" type="tel" />
                <Input value={this.state.dateOfBirth} onChange={this.handleInputChange} name="dateOfBirth" label="Date of birth" />
                <Input value={this.state.gender} onChange={this.handleInputChange} name="gender" label="Gender" />
                <Input value={this.state.username} onChange={this.handleInputChange} name="username" label="Username" />
                <Input value={this.state.password} onChange={this.handleInputChange} name="password" label="Password" type="password" />
                <SubmitButton onClick={this.handleFormSubmit} message="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>;
  }
}
export default Signup;
