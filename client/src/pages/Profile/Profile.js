import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from '../../components/Nav';
import Jumbotron from '../../components/Jumbotron';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Col from "../../components/Col";
import Card from "../../components/Card";
import Row from "../../components/Row";
import "./Profile.css";
import DataCard from "../../components/DataCard";
import Table from "../../components/Table";
import RadioButtons from "../../components/RadioButtons";

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      medicine: "",
      for: "",
      dosage: "",
      frequency: "",
      notes: ""
        
    };
  }
  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  

  // When the component mounts, load all meds 
  // componentDidMount() {
  //   this.loadMeds();
  // }

  // // Loads all meds and sets them to this.state.meds
  // loadMeds = () => {
  //   API.getMeds()
  //     .then(res =>
  //       this.setState({ 
  //   medicine: res.data, 
  //   for: "", 
  //   dosage: "", 
  //   frequency: "",
        // notes: ""
  //  })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a med from the database with a given id, then reloads books from the db
  // deleteMed = id => {
  //   API.deleteMed(id)
  //     .then(res => this.loadMeds())
  //     .catch(err => console.log(err));
  // };

  

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   
  //     API.saveMed({
  //       medicine: this.state.medicine,
  //       for: this.state.for,
  //       dosage: this.state.synopsis,
  //      frequency: this.state.frequency,
  //      notes: this.state.notes
  //     })
  //       .then(res => this.loadMeds())
  //       .catch(err => console.log(err));
  //   }
  // };
  // Replace the code below the code above once backend up
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      medicine: "",
      indication: "",
      dosage: "",
      frequency: "",
      notes: ""
    });
    alert("Form submitted.")
  };

  render() {
    return (
      
      <div>
       
        <br />
      <div className="container">
      
      <div className="row">
      {/* <div className="col m12"> */}
        <Card />
        {/* <DataCard /> */}
        <DataCard />
            
            <SubmitButton />
            
            
        </div>
        </div>
        </div>
        // </div>
        
      
    );
  }
}

export default Profile;
