import React from 'react';
import ResponseCheck from './response_chk'

function QuestionCheck({data}) {


  return (
    <>
    

      <h3 id={data.question.id}>{data.question.value}</h3>
      {
        data.responses.map(function (item) {
            return <ResponseCheck data={item}></ResponseCheck>
        })
      }
    </>
  )
}

export default QuestionCheck;