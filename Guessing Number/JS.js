let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
let countNumber = 0;
function guesscheck(){
  let guessedNumber = parseInt(userInput.value);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
    countNumber += 1;
  }
  else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
    countNumber += 1;
  }
  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right in "+countNumber+" steps.";
    gameResult.style.backgroundColor = "green";
    countNumber += 1;
  }
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
    countNumber += 1;
  }
}