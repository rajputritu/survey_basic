function Response(props) {


    return (
      <>
        <input type={props.data.type} name={props.data.value} id={props.data.id}></input>
        <label for={props.data.id} >
          <li>{props.data.label}</li></label>
      </>
    )
  }
  
  
  export default Response;
  
  
  
  