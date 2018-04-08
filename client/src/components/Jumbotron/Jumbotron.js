
import React, { Component } from 'react';


const jumbotronStyle = {
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
  
}

class Jumbotron extends Component {
  render() {
    return (
      <div className="card-panel grey lighten-3" style={jumbotronStyle}>
        
       <div className ="container">
        <div className="col l2">
          <h1>What do you need to take today?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>
      </div>
      </div>
      
      
    );
  }
}

export default Jumbotron;





// import React from "react";

// const Jumbotron = ({ children }) => (
//   <div style={{ height: 300, clear: "both" }} className="jumbotron">
//     {children}
//   </div>
// );

// export default Jumbotron;
