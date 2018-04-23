import React, { Component } from "react";
import API from "../../utils/API";
import ImageBanner from "../../components/ImageBanner";
import ImgCard from "../../components/ImgCard";
import { Redirect } from "react-router-dom";

import { FormBtn } from "../Form";
import Input from "../../components/Input";
import Footer from "../../components/Footer";

import swal from "sweetalert";
import Nav from "../../components/Nav"; //importing navbar

import "./SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedin: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      })
        .then(patientID => {
          console.log("this is the patient ID:", patientID);
          // console.log("first name?", this.state.fircstName)
          this.props.setUser(patientID);
          this.setState({ loggedin: "true" });
        })
        .catch(err =>
          swal("Error", "Username or Password Entered Incorrectly", "error")
        );
    }
  };

  render() {
    if (this.state.loggedin == "true") {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <div>
          <ImageBanner />

          <div className="container">
            <div
              className="card "
              id="signincard"
              className="text-align center"
            >
              <div className="card-content" className="text-align center">
                <div className="col m6 s6">
                  <form className="responsive-table">
                    <div className="row">
                      <div className="col s1" />
                      <div className="col s10">
                        {" "}
                        <br /><br />
                      
                        <h5 className="header-center" id="login">
                          {" "}
                          - Log In -{" "}
                        </h5>
                        <Input
                          value={this.state.username}
                          onChange={this.handleInputChange.bind(this)}
                          name="username"
                          label="Username"
                        />
                        <Input
                          value={this.state.password}
                          onChange={this.handleInputChange.bind(this)}
                          name="password"
                          label="Password"
                          type="password"
                        />
                        <FormBtn onClick={this.handleFormSubmit}>
                          Sign In
                        </FormBtn>
                        <br />
                        <h5 className="header-center" id="login2">
                          {" "}
                          New User? Register Here{" "}
                        </h5>
                        <FormBtn>Register</FormBtn>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <ImgCard />
        <Footer />
      </div>
    );
  }
}

export default SignIn;
