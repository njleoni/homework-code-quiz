var startButton = document.querySelector("#start");
var timeLeft = document.querySelector(".time");

var secondsLeft = 60;

//declare this function in global memory and stores its value is the function
function startTimer() {
  var timerInterval = setInterval(function () {
    // decrement by one
    secondsLeft--;
    timeLeft = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("this is working")
      //calls the sendMessage funciton to memory
    //   sendMessage();
    }
  }, 1000);
}



//original code 
startButton.addEventListener("click", startTimer); 

