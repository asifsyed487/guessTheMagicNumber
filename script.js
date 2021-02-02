
var arr =[];
let correctNumber = getRandomNumber();
console.log(correctNumber);

function displayResult(number) {
  if(number<correctNumber) {
    showNumberBelow();
  } else if(number >correctNumber) {
    showNumberAbove();
  } else if(number === correctNumber) {
    showYouWon();
  }
}

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    getRandomNumber();
}

function playGame(){
  // *CODE GOES BELOW HERE *
  let number = document.getElementById("number-guess").value;
  number = parseInt(number);
  displayResult(number);
  var guess = number;
  saveGuessHistory(guess);

  // console.log(typeof(number));
  // console.log(number);
}

function initGame(){
  // *CODE GOES BELOW HERE *
  resetResultContent();
  correctNumber = getRandomNumber();
  console.log(correctNumber);
  arr = [];
  document.getElementById("history").innerHTML = "";

}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  let randomNumber= Math.floor(Math.random()*100) + 1;
  return randomNumber;
}

function saveGuessHistory(guess) {
  arr.push(guess);
  displayHistory();
}

function displayHistory() {
  let index;
  let list = "<ul class='list-group'>";
  arr.forEach(function(number) {
    console.log(number);
    list = list +  "<li class='list-group-item'>You guessed " + number + " </li>";
    list += '</ul>';
  })
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  var dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  var dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  var dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
