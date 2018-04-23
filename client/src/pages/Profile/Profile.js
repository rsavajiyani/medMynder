import React, { Component } from "react";

import SubmitButton from '../../components/SubmitButton';
// import Col from "../../components/Col";
import Card from "../../components/Card";
// import Row from "../../components/Row";
import "./Profile.css";
import DataCard from "../../components/DataCard";
import Nav from '../../components/Nav';
import EditButton from "../../components/EditButton";
import API from "../../utils/API";
import swal from "sweetalert";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("props", props); //is empty string
    this.state = {

      userName: "",
      medicines: [],
      medicine: "",
      indication: "",
      dosage: "",
      frequency: "",
      instructions: "",
      notes: ""
    };


  this.radioButtons = React.createRef();

  }

  componentDidMount() {
    this.loadUserMeds();
  }

  loadUserMeds = () => {
    API.getUser(this.props.patientID)
      .then(res => {
        // console.log("res.data.medicines", res.data.medicines);
        this.setState({

          userName: res.data.first +" " + res.data.last,

          medicines: res.data.medicines,
          medicine: "",
          indication: "",
          dosage: "",
          frequency: "",
          instructions: "",
          notes: ""
        });
      })
      .catch(err => console.log(err));
  };

  // getUserName= ()=>{
  //   API.getUser(this.props.patientID)
  //   .then(res => {
  //     console.log("res.data.first", res.data.first);
  //        })
    
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // alert("Form submitted.");
    console.log("handleFormSubmit function called");
    console.log("patient id", this.props.patientID); 
    API.saveMed({
      medicine: this.state.medicine,
      indication: this.state.indication,
      dosage: this.state.dosage,
      frequency: this.state.frequency,
      instructions: this.state.instructions,
      notes: this.state.notes,
      patient: this.props.patientID
    })
      .then(res => {
        // console.log("handleFormsubmit->API.saveMed->then", res);
        swal("Success!", "Added Medication", "success"); //if the AJAX request was error-free and the medication was added to the db successfully, display success sweet-alert
        this.radioButtons.current.resetOptions();
        this.loadUserMeds();
        // this.getMed({patient: this.props.patientID});
      })
      .catch(err =>swal("Medication Not Added", "Please Select Frequency", "error")); //if errors come back(either from axios or the db), display error sweet-alert; almost always going to be a problem where the user forgets to select frequency
  };

  
// 
  render() {
    return (
      <div>
        <Nav />
      <div>
      
     
        <br />
        <div className="container">
          <div className="row">
            

            <Card handleInputChange={this.handleInputChange} {...this.state} radio={this.radioButtons} first={this.state.userName} />
            

            <DataCard medicines={this.state.medicines} loadUserMeds={this.loadUserMeds}/>

            </div>
          <div className="container">
          {/* <div className="col m6"> */}
            <SubmitButton onClick={this.handleFormSubmit} />
            <br /> <br /> <br />
            
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Profile;