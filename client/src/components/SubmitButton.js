import React from "react";

export const SubmitButton = props => (
  <button
    {...props}
    className="waves-effect waves-light btn-large"
    type="submit"
    name="action"
    style={{ fontFamily: "IBM Plex Sans" }}
    message="message"
    
  >
    Submit<i className="material-icons right">send</i>
    {props.children}
  </button>
);

export default SubmitButton;
