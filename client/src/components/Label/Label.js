import React from "react";

export const Label = props => (
  <div>
    <input id="phone" type="text" className="validate" autofocus {...props} />
    <label for="phone" >{props.name}</label>
  </div>
);
export default Label;

// NB: this works, but seems to lose all materialize styling.