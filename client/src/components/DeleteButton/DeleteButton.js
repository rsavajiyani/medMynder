import React from "react";
import "./DeleteButton.css";


const DeleteButton = props => (

    <a
        className="waves-effect waves-red btn-flat"
        id="delete"
        onClick={() => this.deleteMedicine(this.props.medicine._id)} 
        // onClick=

         {...props}
    >
        ✗
  </a>

);

export default DeleteButton;