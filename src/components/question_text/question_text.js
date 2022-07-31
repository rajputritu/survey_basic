
import ResponseText from './response_text'

function QuestionText({data}) {


  return (
    <>

      <h3 id={data.question.id}>{data.question.value}</h3>
      {
        data.responses.map(function (item) {
            return <ResponseText data={item}></ResponseText>
        })
      }
      
       
           
        
      
    </>
  )
}

export default QuestionText;