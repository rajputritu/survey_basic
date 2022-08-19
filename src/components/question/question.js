import React from 'react';
import { Container } from 'react-bootstrap';
import Response from './response'

function Question({data}) {


  return (
  <>

    <h3 id={data.question.id}>{data.question.value}</h3>
<p>
{ data.responses.map(function (item) {
  return <Response data={item}></Response>
})
}
</p>  
  
</>

)
}

export default Question;