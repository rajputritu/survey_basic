import React from 'react';
import './survey.css';


import Question from '../../components/question/question';
import QuestionText from '../../components/question_text/question_text';
import QuestionCheck from '../../components/question_checkbox/question_chk';
import NavBar from '../../components/navbar/navbar';




function Survey() {

  const data = [
    {
      "survey_id": "test1",
      "rank": 1,
      "question_type": "multiple_choice_radio",
      "question": {
        "id": "test1-1",
        "type": "radio",
        "value": "This is my question MCQ"
      },
      "responses": [
        {
          "id": "test1-1-1",
          "type": "radio",
          "value": "option 1",
          "name": "test1-1",
          "label": "option 1"
        },
        {
          "id": "test1-1-2",
          "type": "radio",
          "value": "option 2",
          "name": "test1-1",
          "label": "option 2"
        },
        {
          "id": "test1-1-3",
          "type": "radio",
          "value": "option 3",
          "name": "test1-1",
          "label": "option 3"
        },
        {
          "id": "test1-1-4",
          "type": "radio",
          "value": "option 4",
          "name": "test1-1",
          "label": "option 4"
        }
      ]
    },
    {
      "survey_id": "test1",
      "rank": 1,
      "question_type": "text",
      "question": {
        "id": "test1-1",
        "type": "text",
        "value": "This is my question TEXT",
        "placeHolder": "Jon Snow"
      },
      "responses": [
        {
          "id": "test1-1-1",
          "type": "text",
          "value": "option 1",
          "name": "test1-1",

          "placeHolder": "Jon Snow",
          "isRequired": true,
          "autoComplete": "name"
        },

      ]
    },
    {
      "survey_id": "test1",
      "rank": 1,
      "question_type": "checkbox",
      "question": {
        "id": "test1-1",
        "type": "checkbox",
        "value": "This is my question CHKBOX"
      },
      "responses": [
        {
          "id": "test1-1-1",
          "type": "checkbox",
          "value": "option 1",
          "name": "test1-1",
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
    <NavBar></NavBar>
   <form>
     <div class="container1">
     
   {

data.map(function (item) {
if (item.question_type == "text") {
  return <QuestionText data={item}></QuestionText>
} else if (item.question_type == "multiple_choice_radio") {
  return <Question data={item}></Question>
} else if (item.question_type == "checkbox") {
  return <QuestionCheck data={item}></QuestionCheck>
}

})

}
</div>
   </form>
      
    
       
         
       
       
    </>
  );
}

export default Survey;
