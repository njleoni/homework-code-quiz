var startButton = document.querySelector("#start-button");
var answerButton = document.querySelector("#answer-button");
var newtime = document.getElementById('countDown');
var scoreIndex = document.querySelector("#score");
var questionIndex = document.querySelector("#question-text");
var choice0Index = document.getElementById('button-0');
var choice1Index = document.getElementById('button-1');
var choice2Index = document.getElementById('button-2');
var choice3Index = document.getElementById('button-3');
var clickIndex = document.querySelector(".clickHere");
var answerIndex = document.querySelector("#answer-text");


// Declared variables
var timeReset = 15;
var countDown = 15;
var userScore = 0;


//original code 
startButton.addEventListener("click", startTimer);

// var questionIndex = "";
// var choice0Index = "";
// var choice1Index = "";
// var choice2Index = "";
// var choice3Index = "";
// var answerIndex = "";

function startTimer() {
  var timer = setInterval(function() {
    console.log(countDown);
    newtime.textContent = countDown;
    countDown--;
    if(countDown > -1) {
      //this is where it hangs due to the above if statement.
      question1(); 
    } else if (countDown === -1) {
      stopInterval();
    }
  
  }, 1000);
  
  function question0() {
    // var userScore = [];
    questionIndex.textContent = questionObject[0].question;
    choice0Index.textContent = questionObject[0].choices[0];
    choice1Index.textContent = questionObject[0].choices[1];
    choice2Index.textContent = questionObject[0].choices[2];
    choice3Index.textContent = questionObject[0].choices[3];
    answerIndex.textContent = questionObject[0].answers;
    
    $(".clickHere").on("click", function() {
      // console.log("You clicked a button!!");
      
      var userChoice = $(this).text()
      console.log(userChoice)
    
      if ((userChoice) === (questionObject[0].choices[0])) {
        userScore += 1;
        scoreIndex.textContent = userScore;
        question1();
      } 
    }); 
  
    
  }
    function question1() {
      questionIndex.textContent = questionObject[1].question;
      choice0Index.textContent = questionObject[1].choices[0];
      choice1Index.textContent = questionObject[1].choices[1];
      choice2Index.textContent = questionObject[1].choices[2];
      choice3Index.textContent = questionObject[1].choices[3];
      answerIndex.textContent = questionObject[1].answers;
    
      $(".clickHere").on("click", function() {
      // console.log("You clicked a button!!");
      
      var userChoice = $(this).text()
      console.log(userChoice)
    
      if ((userChoice) === (questionObject[1].choices[3])) {
        userScore += 1;
        scoreIndex.textContent = userScore;
        question1();
      } 
      });
    }

  var stopInterval = function() {
    console.log('time is up!');
    clearInterval(timer);
    countDown = timeReset;
  }
}

  

  // function question2() {
  // questionIndex.textContent = questionObject[2].question;
  // choice0Index.textContent = questionObject[2].choices[0];
  // choice1Index.textContent = questionObject[2].choices[1];
  // choice2Index.textContent = questionObject[2].choices[2];
  // choice3Index.textContent = questionObject[2].choices[3];
  // answerIndex.textContent = questionObject[2].answers;

  //     click2Index.addEventListener("click", function() {
  //     if (questionObject[2].choices[1] === questionObject[2].answers) {
  //       userScore++;
  //       scoreIndex.textContent = userScore;
  //       // question1();
  //     } 

  //   });
// }
//   function question3() {
//   questionIndex.textContent = questionObject[3].question;
//   choice0Index.textContent = questionObject[3].choices[0];
//   choice1Index.textContent = questionObject[3].choices[1];
//   choice2Index.textContent = questionObject[3].choices[2];
//   choice3Index.textContent = questionObject[3].choices[3];
//   answerIndex.textContent = questionObject[3].answers;
// }
//   function question4() {
//   questionIndex.textContent = questionObject[4].question;
//   choice0Index.textContent = questionObject[4].choices[0];
//   choice1Index.textContent = questionObject[4].choices[1];
//   choice2Index.textContent = questionObject[4].choices[2];
//   choice3Index.textContent = questionObject[4].choices[3];
//   answerIndex.textContent = questionObject[4].answers;
// }
// }

var questionObject = [
{
question: "What do you use to check conditions?",
choices: ["if else statement", "variable", "sign language", "puppies"],
answers: "if else statement"},
{
question: "What is used to check code in console?",
choices: ["alert", "calculator", "finger puppets", "console log"],
answers: "console log"
},
{
question: "What are loops used for?",
choices: ["make me dizzy", "used to repeat actions", "fruit", "perform similar action in different places of the script"],
answers: "used to repeat actions"
},
{
question: "What term do you use to declare a variable?",
choices: ["var", "trumpet", "param", "notary public"],
answers: "var"
},
{
question: "What is a function used for?",
choices: ["perform similar action in different places of the script", "creat an alert message", "conjuntion junction whats your", "carrots"],
answers: "perform similar action in different places of the script"
},
]

// // questionIndex.textContent = questionObject[0].question;
// // choice0Index.textContent = questionObject[0].choices[0];
// // choice1Index.textContent = questionObject[0].choices[1];
// // choice2Index.textContent = questionObject[0].choices[2];
// // choice3Index.textContent = questionObject[0].choices[3];
// // answerIndex.textContent = questionObject[0].answers;
// // answerIndex.textContent = "text";








// // if (clickevent === answer) {
// //   alert("you are correct");
// //   score++;
// // } else {
// //   score--;
// //   // time subtract 10;
// // }
