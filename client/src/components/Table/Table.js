import React, { Component } from "react";
import "./Table.css";
import DeleteButton from "../../components/DeleteButton";
import TableData from "../../components/TableData";
import API from "../../utils/API";

//question: this is both in profile page and here, so there is unnecessary duplication
//does that mean that it should only be in profile page, but how can the child(table)
// access the state from the user inputs.

 class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("props", props); //is empty string
  //   this.state = {
  //     medicines: this.props.medicines,

  //   };
  // }

  





deleteMed = id => {
    API.deleteMed(id)
    .then(res => this.props.loadUserMeds())
    .catch(err => console.log(err))
  };


  render() {
    // if (this.meds.frequency == 1) {
    //   var freq = "Once A Day"
    // }
    // else if (this.meds.frequency == 2) {
    //   var freq = "Twice A Day"
    // }
    // else if {this.meds.frequency == 3} {
    //   var freq = "Three Times A Day"
    // }
    return (


<div className= "col m6">
      <div className="card" id="dataCard">
          <div className= "card-content">

                <div className = "col m6 s6">

                <table className="responsive-table">

          <thead>
            <tr>
             

              <th>Medicine</th>
              <th>Indication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Notes</th>
              <th>Delete</th>
            </tr>
          </thead>



  {this.props.medicines.map(meds => (
          <tbody>
            <tr>

            
              <td>
                <strong>
                  {meds.medicine} 
                </strong>
              </td>

              <td>
                <strong>
                  {meds.indication} 
                </strong>
              </td>

              <td>
                <strong>
                  {meds.dosage} 
                </strong>
              </td>

              <td>
                <strong>
                  {meds.frequency} time(s) a day
                </strong>
              </td>

              <td>
                <strong>
                  {meds.notes} 
                </strong>
              </td>

              <DeleteButton onClick={() => this.deleteMed(meds._id)} />

            </tr>
            
          </tbody>

          ))} 
    
  </table>
           
          
                     
           
                </div>

          </div>

      </div>
  </div>
      

      );
}
}


export default Table;
