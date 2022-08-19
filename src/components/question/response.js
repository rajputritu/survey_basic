import React from "react";
function Response(props) {


    return (
      <>
        <div class = "form-radio">
        <input class= "form-radio-input" type={props.data.type} name={props.data.value} id={props.data.id}></input>
        <label class= "form-radio-input" for={props.data.id} >
          {props.data.label}</label>
        </div>
      </>
    )
  }
  
  
  export default Response;
  
  
  
  