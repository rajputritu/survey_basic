function ResponseCheck(props) {


    return (
      <>
      <div>
        <input type={props.data.type} name={props.data.value} id={props.data.id}></input>
        <label for={props.data.id}>chkbox1</label>
        </div>
        <div>
         <input type={props.data.type} name={props.data.value} id={props.data.id}></input>
        <label for={props.data.id}>chkbox2</label>
        </div>
        <div>
         <input type={props.data.type} name={props.data.value} id={props.data.id}></input>
        <label for={props.data.id}>chkbox3</label>
        </div>

         
    
    </>
    )
  }
  
  
  export default ResponseCheck;