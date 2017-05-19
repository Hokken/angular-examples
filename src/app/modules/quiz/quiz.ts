/**
 * Created by Calwen on 15/05/2017.
 */
export const quiz = {
  config:{
    name:"Quiz example"
  },
  questions: [
    {
      id: 0,
      questionText: "This a question with an input",
      controls: {
        type: "input",
        correct: "hello"
      }
    },
    {
      id: 1,
      questionText: "This is a question with radio buttons",
      controls: {
        type: "radio",
        options:[
          {text:"choice 1"},
          {text:"choice 2"},
          {text:"choice 3"}
        ]
      }
    },
    {
      id: 2,
      questionText: "This is a question with checkboxes",
      controls: {
        type: "checkbox",
        options:[
          {text:"choice 1"},
          {text:"choice 2"},
          {text:"choice 3"}
        ]
      }
    },
  ]
}
