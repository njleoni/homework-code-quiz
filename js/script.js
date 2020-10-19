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
var timeReset = 20;
var countDown = 20;
var score = 0;
var finalScore = 0;
var firstName = "";
var delayInMilliseconds = 1000;
var offset = 0;
var incorrect = "That ain't right."
var correct = "You are correct!"


//original code kicks off timer
startButton.addEventListener("click", startTimer);

// tiemr function
function startTimer() {
  var timer = setInterval(function() {
    console.log(countDown);
    newtime.textContent = countDown;
    countDown -=1;
    if(countDown === -1 || countDown < 0) {
      stopInterval();
      complete();
    } 
  }, 1000);
  question0(0);
  
  //stops when time runs out
  var stopInterval = function() {
    console.log('time is up!');
    clearInterval(timer);
    countDown = timeReset;
  }
}


//function runs first question and looking for an answer to move on to the next question
var question0 = function() {
  questionIndex.textContent = questionObject[0].question;
  choice0Index.textContent = questionObject[0].choices[0];
  choice1Index.textContent = questionObject[0].choices[1];
  choice2Index.textContent = questionObject[0].choices[2];
  choice3Index.textContent = questionObject[0].choices[3];
  // questionIndex.textContent = questionObject[0].answers
    
    $(".clickHere").on("click", function() { 
    var userChoice = $(this).text()
      if ((userChoice) === (questionObject[0].choices[0])) {
          score +=5;
          scoreIndex.textContent = score;
          answerIndex.textContent = correct;
          console.log("correct")
      } else if (((userChoice) !== (questionObject[0].choices[0]))) {
        answerIndex.textContent = incorrect;
        countDown -=2;
        console.log("incorrect")
      }
      question1();  
    });
  }
  
  //function runs first question and looking for an answer to move on to the next question
  var question1 = function() {
    questionIndex.textContent = questionObject[1].question;
    choice0Index.textContent = questionObject[1].choices[0];
    choice1Index.textContent = questionObject[1].choices[1];
    choice2Index.textContent = questionObject[1].choices[2];
    choice3Index.textContent = questionObject[1].choices[3];

    $(".clickHere").on("click", function() {
    var userChoice = $(this).text()
      if ((userChoice) === (questionObject[1].choices[3])) {
          score +=5;
          scoreIndex.textContent = score;
          answerIndex.textContent = correct;
          console.log("correct")
      } else if (((userChoice) !== (questionObject[1].choices[3]))) {
        answerIndex.textContent = incorrect;
        countDown -=2;
        console.log("incorrect")
      }
    question2();
    });
    }

  var question2 = function() {
  questionIndex.textContent = questionObject[2].question;
  choice0Index.textContent = questionObject[2].choices[0];
  choice1Index.textContent = questionObject[2].choices[1];
  choice2Index.textContent = questionObject[2].choices[2];
  choice3Index.textContent = questionObject[2].choices[3];
    
    $(".clickHere").on("click", function() {
    var userChoice = $(this).text()
      if ((userChoice) === (questionObject[2].choices[1])) {
          score +=5;
          scoreIndex.textContent = score;
          answerIndex.textContent = correct;
          console.log("correct")
      } else if (((userChoice) !== (questionObject[2].choices[1]))) {
        answerIndex.textContent = incorrect;
        countDown -=2;
        console.log("incorrect")
      }
    question3();  
    });
  }

  //function runs first question and looking for an answer to move on to the next question
  var question3 = function() {
  questionIndex.textContent = questionObject[3].question;
  choice0Index.textContent = questionObject[3].choices[0];
  choice1Index.textContent = questionObject[3].choices[1];
  choice2Index.textContent = questionObject[3].choices[2];
  choice3Index.textContent = questionObject[3].choices[3];
    
    $(".clickHere").on("click", function() {
    var userChoice = $(this).text()
      if ((userChoice) === (questionObject[3].choices[0])) {
          score +=5;
          scoreIndex.textContent = score;
          answerIndex.textContent = correct;
          console.log("correct")
      } else if (((userChoice) !== (questionObject[3].choices[0]))) {
        answerIndex.textContent = incorrect;
        countDown -=2;
        console.log("incorrect")
      }
      question4(); 
    });
  }

  //function runs first question and looking for an answer to move on to the next question
  var question4 = function() {
  questionIndex.textContent = questionObject[4].question;
  choice0Index.textContent = questionObject[4].choices[0];
  choice1Index.textContent = questionObject[4].choices[1];
  choice2Index.textContent = questionObject[4].choices[2];
  choice3Index.textContent = questionObject[4].choices[3];
    
  $(".clickHere").on("click", function() {
    var userChoice = $(this).text()
      if ((userChoice) === (questionObject[4].choices[0])) {
          score +=5;
          scoreIndex.textContent = score;
          answerIndex.textContent = correct;
          // console.log("correct")
          alert("That is all!")
            
      } else if (((userChoice) !== (questionObject[4].choices[0]))) {
        answerIndex.textContent = incorrect;
        countDown === 0;
        console.log("incorrect")
        alert("That is all!")
      }
    complete();
    });
    
  }
// function to complete questiosn and save name in memory
  var offset = 0;
  function complete() {
    firstName = prompt("Nice job, enter your initials.")
    finalScore = score;
    var scores = {
      name: firstName,
      score: finalScore,
    }
    // localStorage.setItem("firstName" + key,finalScore);
    localStorage.setItem("score",JSON.stringify(scores));
  }

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
