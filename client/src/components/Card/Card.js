// import React from "react";
// import Label from "../Label";
import Input from "../../components/Input";

import RadioButtons from "../../components/RadioButtons";
import React, { Component } from "react";
import "./Card.css"

export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   this.state = {
  //     medicine: "",
  //     indication: "",
  //     dosage: "",
  //     frequency: "",
  //     instructions: "",
  //     notes: ""
  //   };
  // }

  render() {
    return (
  <div>
    <h3>Welcome, {this.props.userName} </h3>
    <div className="col m6">
      <div className="card">
        <div className="card-content">
        <h4>Add a new medication</h4>
        

            <Input
              value={this.props.medicine}
              onChange={this.props.handleInputChange}
              name="medicine"
              label="Medication Name"
            />
            <Input
              value={this.props.indication}
              onChange={this.props.handleInputChange}
              name="indication"
              label="What It's For"
            />
            <Input
              value={this.props.dosage}
              onChange={this.props.handleInputChange}
              name="dosage"
              label="Dosage"
            />
            <RadioButtons 
              onChange = {this.props.handleInputChange}
              ref = {this.props.radio}
              />
            <Input
              value={this.props.instructions}
              onChange={this.props.handleInputChange}
              name="instructions"
              label="Special Instructions You Want To Be Reminded About" />
            <Input
              value={this.props.notes}
              onChange={this.props.handleInputChange}
              name="notes"
              label="Additional Notes" />
        </div>
        {/* <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a href="#test4">Test 1</a></li>
            <li className="tab"><a className="active" href="#test5">Test 2</a></li>
            <li className="tab"><a href="#test6">Test 3</a></li>
          </ul>
        </div> */}
        {/* <div className="card-content grey lighten-4">
          <div id="test4">Test 1</div>
          <div id="test5">Test 2</div>
          <div id="test6">Test 3</div>
        </div> */}
      </div>
      </div>
      </div>
    );
}
}
  

// export default Card;
