import Response from './response'

function Question({data}) {


  return (
    <>

      <h3 id={data.question.id}>{data.question.value}</h3>
      {
        data.responses.map(function (item) {
            return <Response data={item}></Response>
        })
      }
    </>
  )
}

export default Question;