const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
      question: "Inside wchich HTML element do we put the JS??",
      choice1: "<script>",
      choice2: "<javascript>",
      choice3: "<js>",
      choice4: "<scripting>",
      answer: 1
  },
  {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'??",
      choice1: "<script href='xxx.js'>",
      choice2: "<script name='xxx.js'>",
      choice3: "<script src='xxx.js'>",
      choice4: "<script file='xxx.js'>",
      answer: 3

  },
  {
      question: "How do you write 'Hello World' in an alert box??",
      choice1: "msgBos('Hello World')",
      choice2: "alertBox",
      choice3: "msg()",
      choice4: "alert()",
      answer: 4
  },

]

//constants

