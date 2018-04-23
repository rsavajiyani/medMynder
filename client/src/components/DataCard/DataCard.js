import React, { Component } from "react";
import Table from "../../components/Table";
import "./DataCard.css";
import TableData from "../../components/TableData";
import DeleteButton from "../../components/DeleteButton";

 class DataCard extends Component {
  constructor(props) {
    super(props);
    console.log("props", props); //is empty string
    this.state = {
      medicines: this.props.medicines,
     
      
    };

  }


render() {
  return (



     <Table /> 

      


        );
  
            
}
}
export default Table;