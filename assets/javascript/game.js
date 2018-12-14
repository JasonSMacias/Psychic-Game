// setting up variables to be used and alphabet array
var guess;
var guessed = [];
var wins = 0;
var losses = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// setting initial guessesLeft and generating random GuessTarget number
var guessesLeft = 9;
var guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("guessTarget " + guessTarget);

// ============================================== Note: the next two commented sections are not working, I am adding them in order to have someone look at the page and give feedback.  rest of page works if they are cut out.========================================

// setting up variables for html ids
var winCountHTM = document.getElementById("#winCount");
var lossCountHTM = document.getElementById("#lossCount");
var guessesLeftHTM = document.getElementById("#guessesLeft");
var guessedHTM = document.getElementById("#guessed");


// adding initial textcontent
winCountHTM.textContent = "Wins: ";
lossCountHTM.textContent = "Losses: ";
guessesLeftHTM = "Guesses Left: ";
guessedHTM = "Your Guesses So Far:";


// setting up function to occur when button pressed. recording keystroke in var "guess"
document.onkeyup = function (event) {
  var guess = event.key;
  console.log("user guessed " + guess);

  // checking whether user typed a letter.
  var isLetter = alphabet.includes(guess);
  console.log("is letter: " + isLetter);

  // adding to win if guessed, then resetting guessesLeft to nine, emptying guessed array, establishing new guessTarget
  if (isLetter) {
    if (guess === guessTarget) {
      alert("You got it!");
      wins++;
      console.log("wins: " + wins);
      guessesLeft = 9;
      guessed = [];
      guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("Guess target: " + guessTarget)
    }

    // subtracting from guessesLeft is not guessed, pushing guessed letter to guessed array, then if guessesLeft=0 adding to losses, resetting guessesLeft to 9, resetting guessed arrary; establishing new guessTarget
    else {
      guessesLeft--;
      console.log("guesses left " + guessesLeft);
      guessed.push(guess);
      console.log("letters guessed: " + guessed);
      if (guessesLeft === 0) {
        losses++;
        console.log("losses: " + losses);
        guessesLeft = 9;
        guessed = [];
        guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("guess target: " + guessTarget);
      }
    }

  }

  // else in case button pressed is not letter.
  else (
    alert("you must press a letter key.")
  )
}
