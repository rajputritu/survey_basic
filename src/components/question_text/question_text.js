import React from 'react';
import ResponseText from './response_text';
import './question_text.css';

function QuestionText({data}) {


  return (
    <>

<div class="container">
<h3 id={data.question.id}>{data.question.value}</h3>
</div>
      <div class="form">
      {
        data.responses.map(function (item) {
            return <ResponseText data={item}></ResponseText>
        })
      }
      </div>
     
      
       
           
        
      
    </>
  )
}

export default QuestionText;