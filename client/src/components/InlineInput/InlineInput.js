import React from "react";

export const InlineInput = props => (
  <div className="input-field col s4">
    <input
      id="first_name"
      type="text"
      className="validate"
      autofocus
      {...props}
    />
    
  </div>
);
export default InlineInput;
