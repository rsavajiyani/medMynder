import React from "react";
// import Label from "../Label";

export const Input = props => (
  <div className="input-field col m12">
    <input 
      // id="phone" pass in as prop
      type="text" 
      className="validate" autoFocus {...props} />
    <label htmlFor="phone">{props.label}</label>
    
  </div>
);
export default Input;
