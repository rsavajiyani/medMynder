import React from "react";
import "./Signup.css";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import InlineInput from "../../components/InlineInput";

// import API from "../..utils/API";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      email: "",
      password: ""
      
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.saveUser({
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       phone: this.state.phone,
//       dateOfBirth: this.state.dateOfBirth,
//       email: this.state.email,
//       password: this.state. password
//     })
//     //what do we want to do here? prob redirect
//     // user to the profile page? how to write
//     // res redirect in es6 also need to clear page
// here
//     .then(res=> this.loadUser())
//     .catch(err => console.log(err));
//   }
// };
    
  render() {
    return (
      <form>
        <br /> <br />
        <div className="row">
          <div className="col s3" />

          <div className="col s9">
            <div className="input-field col s4">
              <input id="first_name" type="text" className="validate" autofocus/>
              <label for="first_name">First name</label>
            </div>

            <div className="input-field col s4">
              <input id="first_name" type="text" className="validate" autofocus />
              <label for="first_name">Last name</label>
            </div>
{/* <InlineInput />
<InlineInput />
<InlineInput /> */}
            <div className="input-field col l8">
              <input id="phone" type="text" className="validate" autofocus/>
              <label for="phone">Phone</label>
            </div>
            {/* <Input 
              value={this.state.phone}
              onChange={this.handleInputChange}
              name="phone"
               /> */}
{/* ?? where do i put the name property and also: question how do I get the label to change for each one */}
            {/* <Input
              value={this.state.dateOfBirth}
              onChange={this.handleInputChange}
              name="dateOfBirth"
            /> */}

                <div className="input-field col l8">
                  <input id="dateOfBirth" type="text" className="validate" />
                  <label for="dateOfBirth">Date of birth</label>
                </div>

                <div className="row">
                  <div className="col s12">
                    <div className="input-field inline col s4">
                      <input
                        id="email_inline"
                        type="email"
                        className="validate"
                      />
                      <label for="email_inline">Email</label>
                      <span
                        className="helper-text"
                        data-error="Please enter a valid email."
                        data-success="valid"
                      >
                        Use your email to login next time
                      </span>
                    </div>
                    <div className="input-field inline col s4">
                      <input
                        id="password_inline"
                        type="text"
                        className="validate"
                      />
                      <label for="password_inline">Choose a password</label>
                      <span
                        className="helper-text"
                        data-error="wrong"
                        data-success="valid"
                      >
                        Pick an easy password!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SubmitButton />
            {/* <a className="waves-effect waves-light btn submit">Submit</a> */}
          </form>
        
      
    );
  }
}
export default Signup;
