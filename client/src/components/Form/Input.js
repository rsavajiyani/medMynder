import React from "react";

export const Input = props => (
  <div className="input-field col m12">
    <input 
    	id="username"
    	type="text"
		className="validate" autofocus {...props} />
  </div>
);
