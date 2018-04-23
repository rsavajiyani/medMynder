





import React, { Component } from "react";
 import "./ImgCard.css"
 



export default class ImgCard extends Component {

	render() {
    return (

    	<div class="row" id="imgcardrow">


	    	<h1 id="features"> - Features - </h1>
				    
				    <div class="col s4">
				      <div class="card" id="imgcard">
				        
				        <div class="card-image">
				         <img src={require("../../images/laptop2.svg")} alt={""} class="image"/>
	          				
						</div>

						<div class="card-content">
				          <p>Desktop-Based Medication Reminder Application with a simple, easy-to-use design.</p>
				        </div>
				       
				       </div>
				     </div>

			       


			        <div class="col s4">
			      		<div class="card" id="imgcard">
			        
			        		<div class="card-image">
			        		 <img src={require("../../images/sms.svg")} alt={""} class="image"/>
          				
						</div>

						<div class="card-content">
				          <p>Users can create, view, update, delete, and schedule SMS reminders for their 
				          prescriptions.</p>
			        	</div>
			        
				       </div>
				    </div>



			        <div class="col s4">
			      <div class="card" id="imgcard">
			        
			        <div class="card-image">
			         <img src={require("../../images/notes.svg")} alt={""} class="image"/>
          				
					</div>

					<div class="card-content">
			          <p>Log helpful notes or reminders about your medications.
			           Keep track of side-effects and save questions you have about your medications.
			   		 </p>
			        </div>
			        </div>
			      </div>




			     




		</div>








   );
}
}