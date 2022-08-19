import React from "react";
function ResponseText(props) {
     return (
      <>
      <div class="container">
        <form>
          
          <div class="input-group mb-3 input-group-sm">
            <span class="input-group-text">Type</span>
            <input class= "form-control" type={props.data.type} name={props.data.value} id={props.data.id} placeholder="Typehere"></input>
          </div>
          
        </form>
      </div>
       
        
      </>
    )
  }
  
  
  export default ResponseText;