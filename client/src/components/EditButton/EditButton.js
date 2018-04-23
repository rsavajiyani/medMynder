import React from "react";
import { Link } from "react-router-dom";

export const EditButton = props => (
  <div>
    <Link to="/edit">
      <button
        {...props}
        className="waves-effect waves-light btn-large"
        type="submit"
        name="action"
        style={{ fontFamily: "IBM Plex Sans" }}
      >
        Edit<i className="material-icons right">edit</i>
        {props.children}
      </button>
    </Link>
  </div>
);

export default EditButton;
