import React from "react";
// import Label from "../Label";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import RadioButtons from "../../components/RadioButtons";
import "./Card.css"

export const Card = props => (
  
<div className="col m6">
  <div className="card">
    <div className="card-content">
    <h4>Add a new medication</h4>
      <Input label="Medication"/>
      <Input label="For" />
      <Input label="Dosage" />
      
      
      <RadioButtons />
        <Input label="Notes:make a bigger input" />
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
  
  
);
export default Card;
