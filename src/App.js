import './App.css';

import Question from './components/question/question';
import QuestionText from './components/question_text/question_text';
import QuestionCheck from './components/question_checkbox/question_chk';
function App() {

  const data = [
    {
      "survey_id": "test1",
      "rank": 1,
      "question_type" : "multiple_choice_radio",
      "question":{
        "id":"test1-1",
        "type": "radio",
        "value": "This is my question MCQ"
      },
      "responses" :[
        {
          "id":"test1-1-1",
          "type":"radio",
          "value": "option 1",
          "name":"test1-1",
          "label": "option 1"
        },
        {
          "id":"test1-1-2",
          "type":"radio",
          "value": "option 2",
          "name":"test1-1",
          "label": "option 2"
        }
      ]
    },
    {
      "survey_id": "test1",
      "rank": 1,
      "question_type" : "text",
      "question":{
        "id":"test1-1",
        "type": "text",
        "value": "This is my question TEXT",
        "placeHolder": "Jon Snow"
      },
      "responses" :[
        {
          "id":"test1-1-1",
          "type":"text",
          "value": "option 1",
          "name":"test1-1",
          
          "placeHolder": "Jon Snow",
          "isRequired": true,
          "autoComplete": "name"
        },
        
      ]
    },
    {
      "survey_id": "test1",
      "rank": 1,
      "question_type" : "checkbox",
      "question":{
        "id":"test1-1",
        "type": "checkbox",
        "value": "This is my question CHKBOX"
      },
      "responses" :[
        {
          "id":"test1-1-1",
          "type":"checkbox",
          "value": "option 1",
          "name":"test1-1",
          "label": "chk 1"
        },
        
      ]
    },
    // {
    //   "survey_id": "test1",
    //   "rank": 1,
    //   "question_type" : "multiple_choice_radio",
    //   "question":{
    //     "id":"test1-1",
    //     "type": "radio",
    //     "value": "This is my questions 1"
    //   },
    //   "responses" :[
    //     {
    //       "id":"test1-1-1",
    //       "type":"radio",
    //       "value": "option 1",
    //       "name":"test1-1",
    //       "label": "option 1"
    //     },
    //     {
    //       "id":"test1-1-2",
    //       "type":"radio",
    //       "value": "option 2",
    //       "name":"test1-1",
    //       "label": "option 2"
    //     }
    //   ]
    // }
  ]


  

  return (
    <>


      {
        data.map(function (item) {
          if (item.question_type == "text") {
            return <QuestionText data={item}></QuestionText> 
           }else if (item.question_type == "multiple_choice_radio"){
            return <Question data={item}></Question>
           }else if (item.question_type == "checkbox"){
            return <QuestionCheck data={item}></QuestionCheck>
          }

          

          
        })
      }
     
       
    </>
  );
}

export default App;
