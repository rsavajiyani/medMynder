import React from "react";


export const TableData = props => (
  
    <td
    //ok to use spread operator?
    //do we need type=text?
      type="text"
      
      {...props}
    />
    
  
);
export default TableData;
