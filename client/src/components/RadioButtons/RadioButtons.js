import React, { Component } from "react";

export default class RadioButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };
    this.handleOptionChange= this.handleOptionChange.bind(this)
  }
  //does this need to indicate selectedOption
  //or just name:value is ok? 
  // handleOptionChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
handleOptionChange (event){
  console.log(event.target.value); 
  this.setState({
    selectedOption: event.target.value
  });
  this.props.onChange(event);
}
resetOptions =()=>{
  this.setState ( {
    selectedOption: ""
  });
}

resetOptions = () => {
  this.setState ( {
    selectedOption: ""
  });
}

  render() {
    return (
  <form action="#">
    {/* <div className="container"> */}
    <div className="row">
      <span>
      <label>
        <input 
          name="frequency" 
          value="1" 
          type="radio" 
          checked={this.state.selectedOption==='1'}
          onChange={this.handleOptionChange} 
          />
        <span>Once a day</span>
      </label>
    
    
      <label>
          <input 
            name="frequency" 
            value="2" 
            type="radio" 
            checked={this.state.selectedOption==='2'}
            onChange={this.handleOptionChange} 
            />
        <span>Twice a day</span>
      </label>
    
    
      <label>
          <input 
            className="group1" 
            value="3" 
            name="frequency" 
            type="radio" 
            checked={this.state.selectedOption==='3'}
            onChange={this.handleOptionChange} 
            />
        <span>Three times</span>
      </label>
      </span>
    </div>
    {/* </div> */}
  </form>





);
  }
}

// export default RadioButtons;


